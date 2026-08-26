// src/data/circuitGuides.ts

export interface Sector { id: number; name: string; color: string; desc: string; }
export interface Tyre { compound: string; type: string; borderColor: string; }
export interface Grandstand { name: string; view: string; }
export interface ScheduleItem { session: string; time: string; }
export interface Winner { year: string; driver: string; team: string; }

export interface CircuitGuide {
  slug: string; // The URL slug for this circuit page
  citySlug: string; // Links back to your city guide
  raceSlug: string; // Links back to your tickets page
  round: number;
  raceName: string;
  circuitName: string;
  location: string;
  lat: number;
  lon: number;
  flagCode: string;
  firstSessionDate: string;
  stats: { firstGP: number; laps: number; length: string; distance: string; corners: number; drsZones: number; };
  record: { time: string; driver: string; year: string; };
  description: string;
  trackPracticalities: {
    radioFreq: string;
    terrain: string;
    shade: string;
  };
  sectors: Sector[];
  tyres: Tyre[];
  grandstands: Grandstand[];
  schedule: ScheduleItem[];
  pastWinners: Winner[];
  trackSvg: string;
}

export const circuitGuidesData: CircuitGuide[] = [
  {
    slug: 'british-grand-prix',
    citySlug: 'london', // Example fallback if staying in London/Milton Keynes
    raceSlug: 'british-gp',
    round: 9,
    raceName: 'British Grand Prix',
    circuitName: 'Silverstone Circuit',
    location: 'Silverstone, UK',
    lat: 52.0786,
    lon: -1.0169, 
    flagCode: 'gb',
    firstSessionDate: '2026-07-03T11:30:00Z', 
    stats: { firstGP: 1950, laps: 52, length: '5.891 km', distance: '306.198 km', corners: 18, drsZones: 2 },
    record: { time: '1:27.097', driver: 'Max Verstappen', year: '2020' },
    description: 'Silverstone is the historic home of British motorsport and the site of the very first Formula 1 World Championship race in 1950. Renowned for its sequence of ultra-fast sweeping corners like Maggotts, Becketts, and Chapel, the track pushes both the aerodynamic limits of the cars and the physical endurance of the drivers.',
    trackPracticalities: {
      radioFreq: '87.7 FM (Silverstone Radio)',
      terrain: 'Mostly flat, paved paths and grassy fields. Very vast site requiring heavy walking.',
      shade: 'Almost zero natural shade. Bring heavy sun protection or waterproofs depending on the British weather.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The start-finish straight down to Abbey, through the Village curve, and accelerating down the Wellington Straight.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Heavy braking into Brooklands, sweeping through Luffield and Woodcote, before the flat-out blast through Copse.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The iconic high-speed Maggotts/Becketts complex leading onto the Hangar Straight, finishing through Stowe and Club.' }
    ],
    tyres: [
      { compound: 'C1', type: 'Hard', borderColor: '#f8fafc' },
      { compound: 'C2', type: 'Medium', borderColor: '#facc15' },
      { compound: 'C3', type: 'Soft', borderColor: '#ef4444' }
    ],
    grandstands: [
      { name: 'Becketts', view: 'Arguably the best seats in F1. Watch the cars change direction at mind-bending speeds through the iconic complex.' },
      { name: 'Club Corner', view: 'Situated on the final corner with views of the pit entry, podium ceremony, and start/finish line.' },
      { name: 'Luffield', view: 'An extended view of the cars battling through the long right-hand sweeper before accelerating down the straight.' }
    ],
    schedule: [
      { session: 'Practice 1', time: '12:30 Local' },
      { session: 'Practice 2', time: '16:00 Local' },
      { session: 'Qualifying', time: '15:00 Local' },
      { session: 'Grand Prix', time: '15:00 Local' }
    ],
    pastWinners: [
      { year: '2025', driver: 'Lewis Hamilton', team: 'Ferrari' },
      { year: '2024', driver: 'Lewis Hamilton', team: 'Mercedes' },
      { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' }
    ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle" font-family="sans-serif" font-size="20">Silverstone SVG Placeholder</text></svg>`
  },
  {
    slug: 'dutch-grand-prix',
    citySlug: 'amsterdam',
    raceSlug: 'dutch-gp',
    round: 12,
    raceName: 'Dutch Grand Prix',
    circuitName: 'Circuit Park Zandvoort',
    location: 'Zandvoort, Netherlands',
    lat: 52.3888,
    lon: 4.5446, 
    flagCode: 'nl',
    firstSessionDate: '2026-08-21T10:30:00Z', 
    stats: { firstGP: 1952, laps: 72, length: '4.259 km', distance: '306.587 km', corners: 14, drsZones: 2 },
    record: { time: '1:11.097', driver: 'Lewis Hamilton', year: '2021' },
    description: 'Opened in 1948, Circuit Zandvoort is a historic, old-school track set in the rolling sand dunes next to the North Sea. The seaside circuit is renowned for its unique challenge, combining tight, sweeping low-speed corners with two massive, steeply banked turns.',
    trackPracticalities: {
      radioFreq: '107.5 FM (Grand Prix Radio)',
      terrain: 'Sandy, hilly dunes. Wear closed-toe, comfortable walking shoes as sand gets everywhere.',
      shade: 'Completely exposed to the sun and coastal winds. No natural shade available.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Starts from the main straight, through Tarzan (T1) and the complex twisting section up to Turn 6.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'The sweeping high-speed curves through the dunes from Turn 6 down through the hairpin at Turn 10.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The technical sequence from Turn 11 through the final banked Arie Luyendykbocht onto the start-finish straight.' }
    ],
    tyres: [
      { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' },
      { compound: 'C3', type: 'Medium', borderColor: '#facc15' },
      { compound: 'C4', type: 'Soft', borderColor: '#ef4444' }
    ],
    grandstands: [
      { name: 'Tarzan Incline', view: 'Prime viewing of heavy braking zones into Turn 1 and overtaking action.' },
      { name: 'Arena Grandstand', view: 'Overlooks the twisting stadium section with incredible atmosphere.' },
      { name: 'Arie Luyendyk Banking', view: 'Seats right on the massive 18-degree banking as cars accelerate onto the straight.' }
    ],
    schedule: [
      { session: 'Practice 1', time: '12:30 Local' },
      { session: 'Practice 2', time: '16:00 Local' },
      { session: 'Qualifying', time: '15:00 Local' },
      { session: 'Grand Prix', time: '15:00 Local' }
    ],
    pastWinners: [
      { year: '2025', driver: 'Max Verstappen', team: 'Red Bull Racing' },
      { year: '2024', driver: 'Lando Norris', team: 'McLaren' },
      { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' }
    ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle" font-family="sans-serif" font-size="20">Zandvoort SVG Placeholder</text></svg>`
  },
  {
    slug: 'italian-grand-prix',
    citySlug: 'milan',
    raceSlug: 'italian-gp',
    round: 13,
    raceName: 'Italian Grand Prix',
    circuitName: 'Autodromo Nazionale Monza',
    location: 'Monza, Italy',
    lat: 45.6156,
    lon: 9.2811, 
    flagCode: 'it',
    firstSessionDate: '2026-09-04T11:30:00Z', 
    stats: { firstGP: 1950, laps: 53, length: '5.793 km', distance: '306.720 km', corners: 11, drsZones: 2 },
    record: { time: '1:21.046', driver: 'Rubens Barrichello', year: '2004' },
    description: 'Known as the "Temple of Speed", Monza is the quickest circuit on the calendar. Cars operate in the lowest downforce configuration, spending nearly 80% of the lap at full throttle.',
    trackPracticalities: {
      radioFreq: 'TBA (Often 87.5 FM locally)',
      terrain: 'Set in a massive royal park. Heavy walking on flat dirt and tarmac paths to reach outer grandstands.',
      shade: 'General Admission has excellent natural shade under the dense park trees, though grandstands are exposed.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The long pit straight into the incredibly tight Turn 1/2 chicane and the high-speed run through Curva Grande.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Heavy braking for the Della Roggia chicane, through the Lesmos, and down the sweeping straight to Ascari.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The high-speed Ascari chicane complex and the legendary sweeping Parabolica onto the main straight.' }
    ],
    tyres: [
      { compound: 'C3', type: 'Hard', borderColor: '#f8fafc' },
      { compound: 'C4', type: 'Medium', borderColor: '#facc15' },
      { compound: 'C5', type: 'Soft', borderColor: '#ef4444' }
    ],
    grandstands: [
      { name: 'Prima Variante (T1)', view: 'Incredible heavy braking action, overtaking, and guaranteed lap 1 chaos.' },
      { name: 'Ascari', view: 'Watch the cars violently change direction at high speed through the complex.' },
      { name: 'Laterale Parabolica', view: 'A legendary atmosphere with great views of cars accelerating onto the main straight.' }
    ],
    schedule: [
      { session: 'Practice 1', time: '13:30 Local' },
      { session: 'Practice 2', time: '17:00 Local' },
      { session: 'Qualifying', time: '16:00 Local' },
      { session: 'Grand Prix', time: '15:00 Local' }
    ],
    pastWinners: [
      { year: '2025', driver: 'Charles Leclerc', team: 'Ferrari' },
      { year: '2024', driver: 'Charles Leclerc', team: 'Ferrari' },
      { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' }
    ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle" font-family="sans-serif" font-size="20">Monza SVG Placeholder</text></svg>`
  }
];