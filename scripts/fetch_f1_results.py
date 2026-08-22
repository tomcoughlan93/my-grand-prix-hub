import fastf1
import json
import os

# Enable caching so we don't spam the F1 servers
fastf1.Cache.enable_cache('cache') 

def get_top_3(year, location, session_name):
    try:
        # Load the session data directly from F1 Live Timing
        session = fastf1.get_session(year, location, session_name)
        session.load(telemetry=False, weather=False, messages=False) # Keep it fast
        
        # Get the top 3 finishers' driver abbreviations (e.g., 'NOR', 'VER', 'HAM')
        results = session.results.head(3)['Abbreviation'].tolist()
        
        if len(results) == 3:
            return {"first": results[0], "second": results[1], "third": results[2]}
    except Exception as e:
        print(f"Session {session_name} not available yet.")
    
    return None

def update_results():
    # Target the 2026 Dutch Grand Prix
    year = 2026
    location = 'Zandvoort'
    
    # We will build a dictionary to save as JSON
    live_results = {}
    
    # Check all sessions
    sessions_to_check = {
        "fp1": "FP1",
        "fp2": "Sprint Qualifying",
        "fp3": "Sprint",
        "quali": "Q",
        "race": "R"
    }
    
    for key, f1_name in sessions_to_check.items():
        podium = get_top_3(year, location, f1_name)
        if podium:
            live_results[f1_name] = podium
            print(f"Added {f1_name}: {podium}")

    # Write to a JSON file that Astro can read
    output_path = 'src/data/liveResults.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w') as f:
        json.dump(live_results, f, indent=2)

if __name__ == '__main__':
    update_results()