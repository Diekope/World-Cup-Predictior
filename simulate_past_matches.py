import json
import os
import sqlite3
import numpy as np
import scipy.stats as stats

# Groups definition
TOURNAMENT_GROUPS = {
    "A": ["Algeria", "Argentina", "Austria", "Jordan"],
    "B": ["Australia", "Paraguay", "Türkiye", "United States"],
    "C": ["Belgium", "Egypt", "IR Iran", "New Zealand"],
    "D": ["Bosnia-Herzegovina", "Canada", "Qatar", "Switzerland"],
    "E": ["Brazil", "Haiti", "Morocco", "Scotland"],
    "F": ["Cape Verde", "Saudi Arabia", "Spain", "Uruguay"],
    "G": ["Colombia", "Congo DR", "Portugal", "Uzbekistan"],
    "H": ["Croatia", "England", "Ghana", "Panama"],
    "I": ["Curaçao", "Côte d'Ivoire", "Ecuador", "Germany"],
    "J": ["Czechia", "Korea Republic", "Mexico", "South Africa"],
    "K": ["France", "Iraq", "Norway", "Senegal"],
    "L": ["Japan", "Netherlands", "Sweden", "Tunisia"]
}

def get_match_date(group_name, round_num):
    if round_num == 1:
        if group_name in ["A", "B"]: return "2026-06-11"
        if group_name in ["C", "D"]: return "2026-06-12"
        if group_name in ["E", "F"]: return "2026-06-13"
        if group_name in ["G", "H"]: return "2026-06-14"
        return "2026-06-15"
    if round_num == 2:
        if group_name in ["A", "B"]: return "2026-06-16"
        if group_name in ["C", "D"]: return "2026-06-17"
        if group_name in ["E", "F"]: return "2026-06-18"
        if group_name in ["G", "H"]: return "2026-06-19"
        return "2026-06-20"
    return "2026-06-21"

def load_parameters():
    params_path = "data_copy/final_model_parameters.json"
    if not os.path.exists(params_path):
        print(f"Error: {params_path} not found. Please run train_final_models.py first.")
        return None
    with open(params_path, "r", encoding="utf-8") as f:
        return json.load(f)

def load_team_ranks():
    conn = sqlite3.connect("data_copy/world_cup_data.db")
    df = sqlite3.read_sql_query("SELECT team, rank, points FROM fifa_ranking_2026", conn) if hasattr(sqlite3, 'read_sql_query') else None
    # Use pandas if read_sql_query is not directly on sqlite3
    import pandas as pd
    df = pd.read_sql_query("SELECT team, rank, points FROM fifa_ranking_2026", conn)
    conn.close()
    ranks = {}
    for idx, row in df.iterrows():
        ranks[row['team']] = {
            'rank': int(row['rank']),
            'points': float(row['points'])
        }
    return ranks

def get_2026_venue(t1, t2):
    if t1 == "United States": return 2
    if t2 == "United States": return 3
    if t1 == "Canada": return 2
    if t2 == "Canada": return 3
    if t1 == "Mexico": return 2
    if t2 == "Mexico": return 3
    return 1

def predict_match_stats(t1_name, t2_name, venue, params, ranks):
    t1_rank_info = ranks.get(t1_name, {'rank': 100, 'points': 1000})
    t2_rank_info = ranks.get(t2_name, {'rank': 100, 'points': 1000})
    
    # 1. Dixon-Coles parameters
    dc = params['dixon_coles_teams']
    team_params = dc.get('teams', {})
    t1_dc = team_params.get(t1_name, {'att': 1.0, 'def': 1.0})
    t2_dc = team_params.get(t2_name, {'att': 1.0, 'def': 1.0})
    
    alpha_1 = t1_dc.get('att', 1.0)
    beta_1 = t1_dc.get('def', 1.0)
    alpha_2 = t2_dc.get('att', 1.0)
    beta_2 = t2_dc.get('def', 1.0)
    gamma = dc.get('gamma_host', 1.129)
    
    # Base lambdas
    l1 = alpha_1 * beta_2
    l2 = alpha_2 * beta_1
    
    # Host modifiers
    if venue == 2:
        l1 *= gamma
    elif venue == 3:
        l2 *= gamma
        
    # High altitude / travel fatigue modifiers (USA/MEX/CAN hosts vs others)
    # If hosts are playing at home, travel fatigue is higher for visitors
    hosts = ["United States", "Canada", "Mexico"]
    if venue == 2 and t2_name not in hosts:
        l2 *= 0.90 # Fatigue penalty for visitor
    elif venue == 3 and t1_name not in hosts:
        l1 *= 0.90
        
    # 2. Rolling form H2H parameters
    h2h_db = params['h2h_database_2026']
    pair_key = "_".join(sorted([t1_name, t2_name]))
    
    import math
    
    def is_nan(val):
        return val is None or math.isnan(float(val))
        
    h2h = h2h_db.get(pair_key)
    has_valid_h2h = False
    
    if h2h:
        if pair_key.split('_')[0] == t1_name:
            h2h_l1 = h2h.get('goals_1', 1.2)
            h2h_l2 = h2h.get('goals_2', 1.2)
        else:
            h2h_l1 = h2h.get('goals_2', 1.2)
            h2h_l2 = h2h.get('goals_1', 1.2)
            
        if not is_nan(h2h_l1) and not is_nan(h2h_l2):
            has_valid_h2h = True
            h2h_l1 = float(h2h_l1)
            h2h_l2 = float(h2h_l2)
            
    if not has_valid_h2h:
        # Fallback to general recent form
        rf = params['recent_form_2026']
        rf1 = rf.get(t1_name, {'goals_scored': 1.2, 'goals_conceded': 1.2})
        rf2 = rf.get(t2_name, {'goals_scored': 1.2, 'goals_conceded': 1.2})
        
        rf1_gs = rf1.get('goals_scored', 1.2)
        rf1_gc = rf1.get('goals_conceded', 1.2)
        rf2_gs = rf2.get('goals_scored', 1.2)
        rf2_gc = rf2.get('goals_conceded', 1.2)
        
        g1_s = 1.2 if is_nan(rf1_gs) else float(rf1_gs)
        g2_c = 1.2 if is_nan(rf2_gc) else float(rf2_gc)
        g2_s = 1.2 if is_nan(rf2_gs) else float(rf2_gs)
        g1_c = 1.2 if is_nan(rf1_gc) else float(rf1_gc)
        
        h2h_l1 = (g1_s + g2_c) / 2.0
        h2h_l2 = (g2_s + g1_c) / 2.0
        
    # 3. Blending (Ensemble weights)
    w_dc = params['ensemble_weights']['dixon_coles']
    w_rf = params['ensemble_weights']['rolling_form']
    
    lambda_1 = (l1 * w_dc) + (h2h_l1 * w_rf)
    lambda_2 = (l2 * w_dc) + (h2h_l2 * w_rf)
    
    # Final guard against NaN
    if is_nan(lambda_1): lambda_1 = 1.2
    if is_nan(lambda_2): lambda_2 = 1.2
    
    return float(lambda_1), float(lambda_2), float(dc.get('rho', 0.06))

def solve_tau(x, y, lambda_1, lambda_2, rho):
    if x == 0 and y == 0:
        return 1.0 - (lambda_1 * lambda_2 * rho)
    elif x == 1 and y == 0:
        return 1.0 + (lambda_2 * rho)
    elif x == 0 and y == 1:
        return 1.0 + (lambda_1 * rho)
    elif x == 1 and y == 1:
        return 1.0 - rho
    return 1.0

def simulate_match_monte_carlo(l1, l2, rho, sims=1000):
    wins1 = 0
    draws = 0
    wins2 = 0
    
    counts = np.zeros((6, 6))
    
    for _ in range(sims):
        # Sample base Poisson
        g1 = np.random.poisson(l1)
        g2 = np.random.poisson(l2)
        
        # Apply Dixon-Coles tau adjustment for low scores
        if g1 <= 1 and g2 <= 1:
            tau = solve_tau(g1, g2, l1, l2, rho)
            # Rejection sampling or adjustments
            if np.random.random() > tau:
                # Re-sample
                g1 = np.random.poisson(l1)
                g2 = np.random.poisson(l2)
                
        if g1 > g2: wins1 += 1
        elif g1 == g2: draws += 1
        else: wins2 += 1
        
        counts[min(g1, 5), min(g2, 5)] += 1
        
    # Most probable score
    max_idx = np.unravel_index(np.argmax(counts), counts.shape)
    
    return {
        'score': f"{max_idx[0]} - {max_idx[1]}",
        'p1': (wins1 / sims) * 100,
        'pN': (draws / sims) * 100,
        'p2': (wins2 / sims) * 100
    }

def run_past_matches_simulations():
    params = load_parameters()
    if not params: return
    
    ranks = load_team_ranks()
    
    # Generate past fixtures (Journée 1 and 2)
    past_fixtures = []
    for gname, teams in TOURNAMENT_GROUPS.items():
        # J1
        past_fixtures.append({
            'date': get_match_date(gname, 1),
            'group': gname,
            'round': 'Journée 1',
            'home': teams[0],
            'away': teams[1]
        })
        past_fixtures.append({
            'date': get_match_date(gname, 1),
            'group': gname,
            'round': 'Journée 1',
            'home': teams[2],
            'away': teams[3]
        })
        # J2
        past_fixtures.append({
            'date': get_match_date(gname, 2),
            'group': gname,
            'round': 'Journée 2',
            'home': teams[0],
            'away': teams[2]
        })
        past_fixtures.append({
            'date': get_match_date(gname, 2),
            'group': gname,
            'round': 'Journée 2',
            'home': teams[1],
            'away': teams[3]
        })
        
    # Sort chronologically and by group
    past_fixtures.sort(key=lambda x: (x['date'], x['group']))
    
    print("\n" + "="*85)
    print(f" SIMULATION DE TOUS LES MATCHS PASSÉS DE POULE (J1 & J2) ".center(85, "="))
    print("="*85)
    print(f"{'DATE':<12} | {'GROUPE':<8} | {'MATCH':<35} | {'SIM SCORE':<9} | {'1 / N / 2 %':<16}")
    print("-"*85)
    
    for m in past_fixtures:
        l1, l2, rho = predict_match_stats(m['home'], m['away'], get_2026_venue(m['home'], m['away']), params, ranks)
        res = simulate_match_monte_carlo(l1, l2, rho)
        
        match_str = f"{m['home']} vs {m['away']}"
        prob_str = f"{res['p1']:.0f}% / {res['pN']:.0f}% / {res['p2']:.0f}%"
        print(f"{m['date']:<12} | Groupe {m['group']:<2} | {match_str:<35} | {res['score']:^9} | {prob_str:<16}")
        
    print("="*85)
    print("Simulation terminée. Tous les scores ci-dessus ont été calculés via Monte Carlo (1000 simulations).")

if __name__ == "__main__":
    run_past_matches_simulations()
