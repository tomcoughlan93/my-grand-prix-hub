import os
import json

teams_data = [
    {"slug": "mclaren", "teamName": "McLaren", "poles": 163, "fastestLaps": 167, "championships": "8 Constructors' / 12 Drivers'"},
    {"slug": "ferrari", "teamName": "Scuderia Ferrari", "poles": 253, "fastestLaps": 261, "championships": "16 Constructors' / 15 Drivers'"},
    {"slug": "red-bull-racing", "teamName": "Red Bull Racing", "poles": 103, "fastestLaps": 98, "championships": "6 Constructors' / 7 Drivers'"},
    {"slug": "mercedes", "teamName": "Mercedes-AMG Petronas", "poles": 139, "fastestLaps": 109, "championships": "8 Constructors' / 9 Drivers'"},
    {"slug": "aston-martin", "teamName": "Aston Martin Aramco", "poles": 0, "fastestLaps": 1, "championships": "0 Constructors' / 0 Drivers'"},
    {"slug": "rb", "teamName": "Visa Cash App RB", "poles": 0, "fastestLaps": 1, "championships": "0 Constructors' / 0 Drivers'"},
    {"slug": "williams", "teamName": "Williams Racing", "poles": 128, "fastestLaps": 133, "championships": "9 Constructors' / 7 Drivers'"},
    {"slug": "audi", "teamName": "Audi F1 Team", "poles": 0, "fastestLaps": 0, "championships": "0 Constructors' / 0 Drivers'"},
    {"slug": "alpine", "teamName": "BWT Alpine F1 Team", "poles": 51, "fastestLaps": 33, "championships": "2 Constructors' / 2 Drivers' (as Renault)"},
    {"slug": "haas", "teamName": "Haas F1 Team", "poles": 1, "fastestLaps": 2, "championships": "0 Constructors' / 0 Drivers'"},
    {"slug": "cadillac", "teamName": "Cadillac F1 Team", "poles": 0, "fastestLaps": 0, "championships": "0 Constructors' / 0 Drivers'"}
]

# Create the directory if it doesn't exist
os.makedirs('src/content/teamStats', exist_ok=True)

# Generate JSON files
for team in teams_data:
    filepath = f"src/content/teamStats/{team['slug']}.json"
    with open(filepath, 'w') as f:
        json.dump(team, f, indent=2)
    print(f"Created {filepath}")

print("All 11 team stat files have been successfully generated!")