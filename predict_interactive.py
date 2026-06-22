import pandas as pd
import numpy as np
import scipy.stats as stats
import os
import sys
import time

import sqlite3

# Load 2026 rankings from SQLite database
conn = sqlite3.connect("data_copy/world_cup_data.db")
ranking_2026 = pd.read_sql_query("SELECT * FROM fifa_ranking_2026", conn)
conn.close()

# Model weights trained on 1994-2022 data
# Intercept, points_diff, rank_diff, is_host, is_opponent_host
weights = np.array([0.19725695, -0.01973158, 0.13852692, 0.32079897, -0.25424291])

name_map = {
    'United States': 'USA',
    'Bosnia-Herzegovina': 'Bosnia and Herzegovina',
    'Cape Verde': 'Cabo Verde',
}

def get_team_stats(team):
    mapped = name_map.get(team, team)
    row = ranking_2026[ranking_2026['team'].str.lower() == mapped.lower()]
    if row.empty:
        # Try substring match
        row = ranking_2026[ranking_2026['team'].str.lower().str.contains(mapped.lower())]
    if row.empty:
        return None
    return {
        'name': row['team'].values[0],
        'points': float(row['points'].values[0]),
        'rank': float(row['rank'].values[0])
    }

def print_grid(t1_name, t2_name, counts, current_sim, total_sims):
    # Clear screen
    os.system('cls' if os.name == 'nt' else 'clear')
    
    total = np.sum(counts)
    if total == 0:
        return
        
    percentages = (counts / total) * 100.0
    
    # Wins, Draws, Losses
    w1 = 0
    draw = 0
    w2 = 0
    for r in range(5):
        for c in range(5):
            if r > c:
                w1 += counts[r, c]
            elif r == c:
                draw += counts[r, c]
            else:
                w2 += counts[r, c]
                
    pct_w1 = (w1 / total) * 100.0
    pct_draw = (draw / total) * 100.0
    pct_w2 = (w2 / total) * 100.0
    
    # Progress bar
    bar_length = 30
    filled = int(round(bar_length * current_sim / total_sims))
    bar = "=" * filled + ">" + " " * (bar_length - filled - 1)
    if filled == bar_length:
        bar = "=" * bar_length
    
    print("==================================================")
    print("      SIMULATION DE MONTE-CARLO EN DIRECT         ")
    print("==================================================")
    print(f"Match : {t1_name} vs {t2_name}")
    print(f"Simulation : [{bar}] {current_sim}/{total_sims} ({current_sim/total_sims:.0%})")
    print("--------------------------------------------------")
    print(f"Probabilités cumulées :")
    print(f" - Victoire de {t1_name} : {pct_w1:.1f}%")
    print(f" - Match Nul : {pct_draw:.1f}%")
    print(f" - Victoire de {t2_name} : {pct_w2:.1f}%")
    print("--------------------------------------------------")
    print(f"Matrice des scores (lignes={t1_name}, col={t2_name}) :")
    print("      0       1       2       3      4+")
    
    max_idx = np.unravel_index(np.argmax(percentages), percentages.shape)
    
    for r in range(5):
        row_str = f"{r} "
        for c in range(5):
            val = percentages[r, c]
            if (r, c) == max_idx and val > 0:
                row_str += f" *{val:4.1f}%*"
            else:
                row_str += f"  {val:4.1f}% "
        print(row_str)
    print("==================================================")
    print("(* indique le score le plus probable actuellement)")

def run_monte_carlo(t1_name, t2_name, lambda_1, lambda_2, n_sims=1000):
    counts = np.zeros((5, 5))
    
    # Run simulation
    for i in range(1, n_sims + 1):
        g1 = np.random.poisson(lambda_1)
        g2 = np.random.poisson(lambda_2)
        
        # Clip to 4+ for the 5x5 grid
        g1_clipped = min(g1, 4)
        g2_clipped = min(g2, 4)
        
        counts[g1_clipped, g2_clipped] += 1
        
        # Refresh print every 10 sims or at the end
        if i % 15 == 0 or i == n_sims:
            print_grid(t1_name, t2_name, counts, i, n_sims)
            time.sleep(0.015) # Throttle for animation effect
            
    print("\nSimulation de Monte-Carlo terminée ! Appuyez sur Entrée pour continuer...")
    input()

def predict_match(t1_name, t2_name, t1_host=False, t2_host=False, mode='1'):
    t1 = get_team_stats(t1_name)
    t2 = get_team_stats(t2_name)
    
    if not t1:
        print(f"Erreur : Équipe '{t1_name}' introuvable.")
        return
    if not t2:
        print(f"Erreur : Équipe '{t2_name}' introuvable.")
        return
        
    # Scale features
    pts_diff_1 = (t1['points'] - t2['points']) / 100.0
    rnk_diff_1 = (t2['rank'] - t1['rank']) / 10.0
    
    # Predict expected goals (lambdas)
    X_1 = np.array([1.0, pts_diff_1, rnk_diff_1, int(t1_host), int(t2_host)])
    X_2 = np.array([1.0, -pts_diff_1, -rnk_diff_1, int(t2_host), int(t1_host)])
    
    lambda_1 = np.exp(np.dot(X_1, weights))
    lambda_2 = np.exp(np.dot(X_2, weights))
    
    if mode == '2':
        run_monte_carlo(t1['name'], t2['name'], lambda_1, lambda_2, n_sims=1000)
    else:
        # Analytique
        max_goals = 8
        p_1 = stats.poisson.pmf(np.arange(max_goals), lambda_1)
        p_2 = stats.poisson.pmf(np.arange(max_goals), lambda_2)
        prob_grid = np.outer(p_1, p_2)
        
        prob_win1 = np.sum(np.tril(prob_grid, -1))
        prob_draw = np.sum(np.diag(prob_grid))
        prob_win2 = np.sum(np.triu(prob_grid, 1))
        
        goals_1, goals_2 = np.unravel_index(np.argmax(prob_grid), prob_grid.shape)
        
        print("\n--- RÉSULTATS DE LA PRÉDICTION ANALYTIQUE ---")
        print(f"Buts attendus (lambdas) : {t1['name']} = {lambda_1:.2f} | {t2['name']} = {lambda_2:.2f}")
        print(f"Score le plus probable : {t1['name']} {goals_1} - {goals_2} {t2['name']} (Probabilité : {prob_grid[goals_1, goals_2]:.1%})")
        print(f"Probabilités de l'issue du match :")
        print(f" - Victoire de {t1['name']} : {prob_win1:.1%}")
        print(f" - Match Nul : {prob_draw:.1%}")
        print(f" - Victoire de {t2['name']} : {prob_win2:.1%}")
        print("---------------------------------------------\n")
        print("Appuyez sur Entrée pour continuer...")
        input()

if __name__ == "__main__":
    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        print("==================================================")
        print("   PRÉDICTEUR INTERACTIF COUPE DU MONDE 2026      ")
        print("==================================================")
        print("Quelques équipes disponibles (top 15) :")
        top_teams = ranking_2026.sort_values('rank').head(15)['team'].tolist()
        print(" - " + ", ".join(top_teams))
        print("==================================================")
        
        try:
            team1 = input("Entrez l'équipe 1 (ou 'exit' pour quitter) : ").strip()
            if team1.lower() == 'exit':
                break
            if not team1:
                continue
                
            t1 = get_team_stats(team1)
            if not t1:
                print(f"Équipe '{team1}' introuvable. Appuyez sur Entrée pour réessayer.")
                input()
                continue
                
            team2 = input("Entrez l'équipe 2 : ").strip()
            if not team2:
                continue
                
            t2 = get_team_stats(team2)
            if not t2:
                print(f"Équipe '{team2}' introuvable. Appuyez sur Entrée pour réessayer.")
                input()
                continue
                
            print("\nLieu du match :")
            print("[1] Terrain neutre")
            print(f"[2] Chez {t1['name']}")
            print(f"[3] Chez {t2['name']}")
            lieu = input("Votre choix (1, 2, 3) : ").strip()
            
            t1_host = False
            t2_host = False
            if lieu == '2':
                t1_host = True
            elif lieu == '3':
                t2_host = True
                
            print("\nType de prédiction :")
            print("[1] Calcul analytique direct (formule exacte)")
            print("[2] Simulation de Monte-Carlo animée (1000 matchs)")
            mode = input("Votre choix (1, 2) : ").strip()
            
            predict_match(t1['name'], t2['name'], t1_host, t2_host, mode)
            
        except KeyboardInterrupt:
            break
        except Exception as e:
            print("Une erreur est survenue :", e)
            print("Veuillez appuyer sur Entrée pour réessayer.")
            input()
