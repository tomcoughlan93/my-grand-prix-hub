import fastf1
import json
import os

fastf1.Cache.enable_cache('cache') 

def get_top_3(year, location, session_num):
    try:
        # Requesting by chronological number (1-5) avoids all Sprint naming mismatches
        session = fastf1.get_session(year, location, session_num)
        session.load(telemetry=False, weather=False, messages=False)
        
        results = session.results.head(3)['Abbreviation'].tolist()
        
        if len(results) == 3:
            return {"first": results[0], "second": results[1], "third": results[2]}
    except Exception:
        # Fails silently if the session hasn't happened yet
        pass
    
    return None

def update_results():
    year = 2026
    location = 'Zandvoort'
    
    live_results = {}
    
    # 1=FP1, 2=FP2/SQ, 3=FP3/Sprint, 4=Quali, 5=Race
    for i in range(1, 6):
        podium = get_top_3(year, location, i)
        if podium:
            live_results[f"Session{i}"] = podium
            print(f"✅ Added Session {i}: {podium}")

    output_path = 'src/data/liveResults.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w') as f:
        json.dump(live_results, f, indent=2)

if __name__ == '__main__':
    update_results()