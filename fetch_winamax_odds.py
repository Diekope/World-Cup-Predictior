import urllib.request
import json
import os

def fetch_winamax_odds():
    url = "https://www.winamax.fr/paris-sportifs"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "fr,fr-FR;q=0.9,en;q=0.8"
    }
    
    req = urllib.request.Request(url, headers=headers)
    try:
        print("[Winamax scraper] Fetching Winamax soccer odds...")
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode('utf-8')
            
        # Locate the JSON block
        idx = html.find("PRELOADED_STATE =")
        if idx == -1:
            idx = html.find("window.__PRELOADED_STATE__ =")
            
        if idx != -1:
            start_idx = html.find("{", idx)
            if start_idx != -1:
                # Count braces to find the exact end of JSON object
                count = 0
                end_idx = start_idx
                for i in range(start_idx, len(html)):
                    if html[i] == '{':
                        count += 1
                    elif html[i] == '}':
                        count -= 1
                    if count == 0:
                        end_idx = i
                        break
                
                json_str = html[start_idx:end_idx+1]
                state = json.loads(json_str)
                
                # Extract matches, bets, outcomes, and odds
                matches = state.get("matches", {})
                bets = state.get("bets", {})
                outcomes = state.get("outcomes", {})
                odds = state.get("odds", {})
                
                # Map matches to their main 1N2 odds
                odds_map = {}
                for match_id, match_info in matches.items():
                    title = match_info.get("title", "")
                    main_bet_id = str(match_info.get("mainBetId", ""))
                    
                    bet_info = bets.get(main_bet_id, {})
                    outcomes_ids = bet_info.get("outcomes", [])
                    
                    if len(outcomes_ids) >= 3:
                        try:
                            o1_id = str(outcomes_ids[0])
                            oN_id = str(outcomes_ids[1])
                            o2_id = str(outcomes_ids[2])
                            
                            odd1 = float(odds.get(o1_id, 0))
                            oddN = float(odds.get(oN_id, 0))
                            odd2 = float(odds.get(o2_id, 0))
                            
                            if odd1 > 0 and oddN > 0 and odd2 > 0:
                                odds_map[title] = [odd1, oddN, odd2]
                        except Exception as e:
                            pass
                            
                print(f"[Winamax scraper] Successfully parsed {len(odds_map)} match odds.")
                
                # Save to data_copy/winamax_odds.json
                os.makedirs("data_copy", exist_ok=True)
                with open("data_copy/winamax_odds.json", "w", encoding="utf-8") as f:
                    json.dump(odds_map, f, ensure_ascii=False, indent=2)
                print("[Winamax scraper] Saved odds to data_copy/winamax_odds.json")
                return True
        print("[Winamax scraper] PRELOADED_STATE not found in HTML.")
        write_empty_odds()
        return False
            
    except Exception as e:
        print(f"[Winamax scraper] Error scraping Winamax: {e}")
        write_empty_odds()
        return False

def write_empty_odds():
    os.makedirs("data_copy", exist_ok=True)
    with open("data_copy/winamax_odds.json", "w", encoding="utf-8") as f:
        json.dump({}, f)

if __name__ == "__main__":
    fetch_winamax_odds()
