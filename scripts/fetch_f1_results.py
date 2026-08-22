import fastf1
import json
import os

fastf1.Cache.enable_cache('cache') 

def get_top_3(year, location, session_code):
    try:
        # FastF1 requires exact codes: FP1, FP2, FP3, SQ (Sprint Quali), S (Sprint), Q, R
        session = fastf1.get_session(year, location, session_code)
        session.load(telemetry=False, weather=False, messages=False)
        
        results = session.results.head(3)['Abbreviation'].tolist()
        
        if len(results) == 3:
            return {"first": results[0], "second": results[1], "third": results[2]}
    except Exception:
        # Fails silently if the session hasn't happened yet or doesn't exist
        pass
    
    return None

def update_results():
    year = 2024 # Target 2024 for testing - update to 2026 later!
    location = 'Zandvoort'
    
    live_results = {}
    
    # We check ALL possible sessions. If they exist, they get added!
    sessions_to_check = ['FP1', 'FP2', 'FP3', 'SQ', 'S', 'Q', 'R']
    
    for sess in sessions_to_check:
        podium = get_top_3(year, location, sess)
        if podium:
            live_results[sess] = podium
            print(f"✅ Added {sess}: {podium}")

    output_path = 'src/data/liveResults.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w') as f:
        json.dump(live_results, f, indent=2)

if __name__ == '__main__':
    update_results()