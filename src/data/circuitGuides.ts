// src/data/circuitGuides.ts

export interface Sector { id: number; name: string; color: string; desc: string; }
export interface Tyre { compound: string; type: string; borderColor: string; }
export interface Grandstand { name: string; view: string; }
export interface ScheduleItem { session: string; time: string; }
export interface Winner { year: string; driver: string; team: string; }

export interface CircuitGuide {
  slug: string;
  citySlug: string;
  raceSlug: string;
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

const defaultTyres: Tyre[] = [
  { compound: 'C3', type: 'Hard', borderColor: '#f8fafc' },
  { compound: 'C4', type: 'Medium', borderColor: '#facc15' },
  { compound: 'C5', type: 'Soft', borderColor: '#ef4444' }
];

export const circuitGuidesData: CircuitGuide[] = [
  {
    slug: 'australian-grand-prix',
    citySlug: 'melbourne',
    raceSlug: 'australian-gp',
    round: 1,
    raceName: 'Australian Grand Prix',
    circuitName: 'Albert Park Grand Prix Circuit',
    location: 'Melbourne, Australia',
    lat: -37.8497, lon: 144.968,
    flagCode: 'au',
    firstSessionDate: '2026-03-06T01:30:00Z',
    stats: { firstGP: 1996, laps: 58, length: '5.278 km', distance: '306.124 km', corners: 14, drsZones: 4 },
    record: { time: '1:19.813', driver: 'Charles Leclerc', year: '2024' },
    description: 'Set around a picturesque lake just south of Melbourne’s CBD, Albert Park is a fast, flowing street circuit that heavily rewards late braking and bravery. Recent track modifications have removed slower chicanes, turning it into one of the highest-speed temporary circuits on the calendar.',
    trackPracticalities: {
      radioFreq: 'Senna Radio 106.3 FM',
      terrain: 'Flat parkland paths and temporary walkways. Easy to navigate but sprawling.',
      shade: 'Good natural shade under the park trees in General Admission, but grandstands are mostly unroofed.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Heavy braking into Turn 1, sweeping through Turn 2 and down the first DRS straight.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Flat-out blast along the lake edge, through the ultra-fast chicane complex.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'Technical braking zones through Turns 13 and 14 leading onto the main straight.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Brabham', view: 'Perfect views of the dramatic Turn 1 and 2 sequence, a primary overtaking spot.' },
      { name: 'Waite', view: 'Fantastic views of the incredibly fast chicane where the cars push the limits.' },
      { name: 'Jones', view: 'Positioned at the end of the back straight for heavy braking and passing.' }
    ],
    schedule: [ { session: 'Practice 1', time: '12:30 Local' }, { session: 'Practice 2', time: '16:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2024', driver: 'Carlos Sainz', team: 'Ferrari' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Albert Park SVG Placeholder</text></svg>`
  },
  {
    slug: 'chinese-grand-prix',
    citySlug: 'shanghai',
    raceSlug: 'chinese-gp',
    round: 2,
    raceName: 'Chinese Grand Prix',
    circuitName: 'Shanghai International Circuit',
    location: 'Shanghai, China',
    lat: 31.3389, lon: 121.22,
    flagCode: 'cn',
    firstSessionDate: '2026-03-13T03:30:00Z',
    stats: { firstGP: 2004, laps: 56, length: '5.451 km', distance: '305.066 km', corners: 16, drsZones: 2 },
    record: { time: '1:32.238', driver: 'Michael Schumacher', year: '2004' },
    description: 'Designed in the shape of the Chinese character "shang" (upwards), this circuit is famous for its unique layout. The endless, tightening spiral of Turns 1 and 2 demands patience and precise car placement, leading into one of the longest back straights in F1.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Massive concrete concourses. Extensive walking distances between grandstands and fanzones.',
      shade: 'The gigantic Main Grandstand provides immense cover, but outer grandstands are fully exposed.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The infamous never-ending, tightening right-hander of Turns 1 through 4.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'High-speed sweeping corners requiring massive aerodynamic grip.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The monumental 1.2km back straight and heavy braking hairpin.' }
    ],
    tyres: [ { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C3', type: 'Medium', borderColor: '#facc15' }, { compound: 'C4', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Main Grandstand', view: 'Cavernous seating with perfect views of the pits and the starting grid.' },
      { name: 'Grandstand H', view: 'Overlooks the end of the immense back straight—the primary overtaking zone.' },
      { name: 'Grandstand K', view: 'Great sightlines of the cars navigating the hairpin and accelerating.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '15:30 Local' }, { session: 'Sprint Race', time: '11:00 Local' }, { session: 'Qualifying', time: '15:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Oscar Piastri', team: 'McLaren' }, { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2019', driver: 'Lewis Hamilton', team: 'Mercedes' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Shanghai SVG Placeholder</text></svg>`
  },
  {
    slug: 'japanese-grand-prix',
    citySlug: 'suzuka',
    raceSlug: 'japanese-gp',
    round: 3,
    raceName: 'Japanese Grand Prix',
    circuitName: 'Suzuka Circuit',
    location: 'Suzuka, Japan',
    lat: 34.8431, lon: 136.541,
    flagCode: 'jp',
    firstSessionDate: '2026-03-27T02:30:00Z',
    stats: { firstGP: 1987, laps: 53, length: '5.807 km', distance: '307.471 km', corners: 18, drsZones: 1 },
    record: { time: '1:30.983', driver: 'Lewis Hamilton', year: '2019' },
    description: 'A masterpiece of circuit design. As the only figure-of-eight track on the calendar, Suzuka is universally loved by drivers. The legendary "S" Curves demand flawless rhythm, while the terrifyingly fast 130R requires absolute commitment.',
    trackPracticalities: {
      radioFreq: 'Pit-FM 86.0 FM',
      terrain: 'Hilly and paved. Suzuka is an amusement park, making navigation fun but tiring.',
      shade: 'Very little shade outside of hospitality and the main grandstand. Bring a hat and suncream.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The iconic, undulating S-Curves where rhythm is everything.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'The sweeping Degner corners, the hairpin, and Spoon curve.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The flat-out blast through 130R and the final tricky chicane.' }
    ],
    tyres: [ { compound: 'C1', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C2', type: 'Medium', borderColor: '#facc15' }, { compound: 'C3', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'V1/V2', view: 'Covered seating on the main straight opposite the garages.' },
      { name: 'B2/C', view: 'Perfect vantage point for the challenging Turn 1 and S-Curves.' },
      { name: 'Q2', view: 'Views of the tricky chicane and cars blasting out of 130R.' }
    ],
    schedule: [ { session: 'Practice 1', time: '11:30 Local' }, { session: 'Practice 2', time: '15:00 Local' }, { session: 'Qualifying', time: '15:00 Local' }, { session: 'Race', time: '14:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Suzuka SVG Placeholder</text></svg>`
  },
  {
    slug: 'miami-grand-prix',
    citySlug: 'miami',
    raceSlug: 'miami-gp',
    round: 4,
    raceName: 'Miami Grand Prix',
    circuitName: 'Miami International Autodrome',
    location: 'Miami, USA',
    lat: 25.9581, lon: -80.2389,
    flagCode: 'us',
    firstSessionDate: '2026-05-01T16:30:00Z',
    stats: { firstGP: 2022, laps: 57, length: '5.412 km', distance: '308.326 km', corners: 19, drsZones: 3 },
    record: { time: '1:29.708', driver: 'Max Verstappen', year: '2023' },
    description: 'Built around the Hard Rock Stadium, this temporary circuit is characterized by three long straights and a notoriously tight, technical, and slow chicane section under the highway overpasses. Heat and humidity play a massive role in car reliability here.',
    trackPracticalities: {
      radioFreq: 'Local FM TBA',
      terrain: 'Flat, paved stadium campus. Very accessible but distances are deceptively long.',
      shade: 'Sun intensity is extreme. Seek out the various shaded campus zones or book covered grandstands.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Fast, sweeping right-handers mimicking the Suzuka esses.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Long back straight plunging into the incredibly tight, slow Turn 14/15 chicane.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The longest straight on the track, leading into the heavy braking zone at Turn 17.' }
    ],
    tyres: [ { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C3', type: 'Medium', borderColor: '#facc15' }, { compound: 'C4', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Turn 1 Grandstand', view: 'Watch the pack funnel down into the first major braking zone off the start.' },
      { name: 'Marina Grandstands', view: 'Action-packed views of the tricky Turns 6, 7, and 8.' },
      { name: 'Turn 18 Grandstand', view: 'The absolute best spot for overtaking at the end of the massive back straight.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '16:30 Local' }, { session: 'Sprint Race', time: '12:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '16:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Lando Norris', team: 'McLaren' }, { year: '2024', driver: 'Lando Norris', team: 'McLaren' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Miami SVG Placeholder</text></svg>`
  },
  {
    slug: 'canadian-grand-prix',
    citySlug: 'montreal',
    raceSlug: 'canadian-gp',
    round: 5,
    raceName: 'Canadian Grand Prix',
    circuitName: 'Circuit Gilles Villeneuve',
    location: 'Montreal, Canada',
    lat: 45.5, lon: -73.5228,
    flagCode: 'ca',
    firstSessionDate: '2026-05-22T17:30:00Z',
    stats: { firstGP: 1978, laps: 70, length: '4.361 km', distance: '305.270 km', corners: 14, drsZones: 2 },
    record: { time: '1:13.078', driver: 'Valtteri Bottas', year: '2019' },
    description: 'Located on a man-made island in the St. Lawrence River, this fast, low-downforce track consists of long straights broken up by heavy braking chicanes. Drivers must kiss the concrete barriers to be fast, culminating at the infamous Wall of Champions.',
    trackPracticalities: {
      radioFreq: '99.1 FM / 104.3 FM',
      terrain: 'Parkland with paved paths. Accessible via a brilliant underground metro system.',
      shade: 'Plentiful natural shade from the trees, but the grandstands are entirely exposed to the elements.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Heavy braking into the tight Senna ' + 'S' + ', followed by a fast chicane.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'A sequence of high-speed straights and tricky, curb-riding chicanes.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The long Casino straight down into the final chicane by the Wall of Champions.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Grandstand 11/12', view: 'Looks straight down the barrel of the Senna S for legendary race-start action.' },
      { name: 'Lance Stroll Grandstand', view: 'Fantastic view of the hairpin, where cars violently decelerate before accelerating away.' },
      { name: 'Grandstand 15', view: 'Sat right at the final chicane. Watch drivers dodge the Wall of Champions.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '14:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Montreal SVG Placeholder</text></svg>`
  },
  {
    slug: 'monaco-grand-prix',
    citySlug: 'monte-carlo',
    raceSlug: 'monaco-gp',
    round: 6,
    raceName: 'Monaco Grand Prix',
    circuitName: 'Circuit de Monaco',
    location: 'Monte-Carlo, Monaco',
    lat: 43.7347, lon: 7.42056,
    flagCode: 'mc',
    firstSessionDate: '2026-06-05T11:30:00Z',
    stats: { firstGP: 1950, laps: 78, length: '3.337 km', distance: '260.286 km', corners: 19, drsZones: 1 },
    record: { time: '1:12.909', driver: 'Lewis Hamilton', year: '2021' },
    description: 'The ultimate test of precision and concentration. Monaco is impossibly narrow, incredibly glamorous, and entirely unforgiving. Qualifying on Saturday is often the most important single session of the entire Formula 1 year.',
    trackPracticalities: {
      radioFreq: 'Riviera Radio 106.5 FM',
      terrain: 'Steep city streets, staircases, and tight alleys. Very cramped and crowded.',
      shade: 'Building shadows provide some relief, but grandstands are mostly in direct Mediterranean sun.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Up the steep hill of Sainte Devote through the iconic Casino Square.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Down through the ultra-slow Fairmont Hairpin and into the tunnel.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The lightning-fast Swimming Pool section and the tight Rascasse corner.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Grandstand K', view: 'The absolute best grandstand. Views of the harbor, Tabac corner, and the yachts.' },
      { name: 'Casino Square', view: 'Watch the cars navigate the incredibly tight, glamorous Casino section.' },
      { name: 'Rocher (General Admission)', view: 'A steep, unreserved grassy hill viewing area. Arrive at 6 AM.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2024', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Monaco SVG Placeholder</text></svg>`
  },
  {
    slug: 'spanish-grand-prix',
    citySlug: 'barcelona',
    raceSlug: 'spanish-gp',
    round: 7,
    raceName: 'Spanish Grand Prix',
    circuitName: 'Circuit de Barcelona-Catalunya',
    location: 'Montmeló, Spain',
    lat: 41.57, lon: 2.26111,
    flagCode: 'es',
    firstSessionDate: '2026-06-12T11:30:00Z',
    stats: { firstGP: 1991, laps: 66, length: '4.657 km', distance: '307.236 km', corners: 14, drsZones: 2 },
    record: { time: '1:16.330', driver: 'Max Verstappen', year: '2023' },
    description: 'An excellent all-rounder circuit that tests every aspect of a Formula 1 car’s aerodynamic efficiency. Following the removal of the clumsy final chicane, the track has returned to its roots, featuring two blazing-fast final sweeping corners.',
    trackPracticalities: {
      radioFreq: 'Local FM 102.3',
      terrain: 'Dusty, hilly paths surrounding the perimeter. Wear comfortable trainers.',
      shade: 'Almost zero shade available. The Spanish sun in June is blistering.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Heavy braking into Turn 1, followed by the long, sweeping right of Turn 3.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Technical elevation changes and the fast, uphill Campsa corner.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'Flowing right-handers leading back onto the long main straight.' }
    ],
    tyres: [ { compound: 'C1', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C2', type: 'Medium', borderColor: '#facc15' }, { compound: 'C3', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Grandstand L', view: 'Perched on the hill offering brilliant views of the Turn 1/2 overtaking zone.' },
      { name: 'Grandstand G', view: 'Excellent views of the technical stadium section.' },
      { name: 'Main Grandstand', view: 'Covered seating (essential in Spain) right across from the pit boxes.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Lando Norris', team: 'McLaren' }, { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Barcelona SVG Placeholder</text></svg>`
  },
  {
    slug: 'austrian-grand-prix',
    citySlug: 'vienna',
    raceSlug: 'austrian-gp',
    round: 8,
    raceName: 'Austrian Grand Prix',
    circuitName: 'Red Bull Ring',
    location: 'Spielberg, Austria',
    lat: 47.2197, lon: 14.7647,
    flagCode: 'at',
    firstSessionDate: '2026-06-26T11:30:00Z',
    stats: { firstGP: 1970, laps: 71, length: '4.318 km', distance: '306.452 km', corners: 10, drsZones: 3 },
    record: { time: '1:05.619', driver: 'Carlos Sainz', year: '2020' },
    description: 'A beautifully fast, short, and undulating track set in the Styrian mountains. With only 10 distinct corners and three DRS zones, it frequently produces some of the most frantic, wheel-to-wheel racing of the entire season.',
    trackPracticalities: {
      radioFreq: 'Trackside Radio 92.3 FM',
      terrain: 'Extremely hilly and grassy. It is literally built into the side of a mountain.',
      shade: 'Completely exposed. The weather can swing wildly from blistering heat to torrential rain.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Steep uphill drag from Turn 1 into the heavy braking point of Turn 3.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Downhill sweeping corners with massive gravel traps waiting for mistakes.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'Blazing fast right-handers plunging back toward the main straight.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Red Bull Grandstand', view: 'Follows the cars uphill out of Turn 1. The primary sea of orange fans.' },
      { name: 'T3 Grandstand', view: 'Overlooks the best overtaking spot on the circuit at the top of the hill.' },
      { name: 'Schönberg (GA)', view: 'A massive grassy hill offering views of nearly 70% of the entire track.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '16:30 Local' }, { session: 'Sprint Race', time: '12:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'George Russell', team: 'Mercedes' }, { year: '2024', driver: 'George Russell', team: 'Mercedes' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Red Bull Ring SVG Placeholder</text></svg>`
  },
  {
    slug: 'british-grand-prix',
    citySlug: 'london',
    raceSlug: 'british-gp',
    round: 9,
    raceName: 'British Grand Prix',
    circuitName: 'Silverstone Circuit',
    location: 'Silverstone, UK',
    lat: 52.0786, lon: -1.0169,
    flagCode: 'gb',
    firstSessionDate: '2026-07-03T11:30:00Z',
    stats: { firstGP: 1950, laps: 52, length: '5.891 km', distance: '306.198 km', corners: 18, drsZones: 2 },
    record: { time: '1:27.097', driver: 'Max Verstappen', year: '2020' },
    description: 'Silverstone is the historic home of British motorsport and the site of the very first Formula 1 World Championship race in 1950. Renowned for its sequence of ultra-fast sweeping corners like Maggotts, Becketts, and Chapel.',
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
    tyres: [ { compound: 'C1', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C2', type: 'Medium', borderColor: '#facc15' }, { compound: 'C3', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Becketts', view: 'Arguably the best seats in F1. Watch the cars change direction at mind-bending speeds.' },
      { name: 'Club Corner', view: 'Situated on the final corner with views of the pit entry, podium ceremony, and start/finish line.' },
      { name: 'Luffield', view: 'An extended view of the cars battling through the long right-hand sweeper.' }
    ],
    schedule: [ { session: 'Practice 1', time: '12:30 Local' }, { session: 'Practice 2', time: '16:00 Local' }, { session: 'Qualifying', time: '15:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Lewis Hamilton', team: 'Ferrari' }, { year: '2024', driver: 'Lewis Hamilton', team: 'Mercedes' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Silverstone SVG Placeholder</text></svg>`
  },
  {
    slug: 'belgian-grand-prix',
    citySlug: 'brussels',
    raceSlug: 'belgian-gp',
    round: 10,
    raceName: 'Belgian Grand Prix',
    circuitName: 'Circuit de Spa-Francorchamps',
    location: 'Spa, Belgium',
    lat: 50.4372, lon: 5.97139,
    flagCode: 'be',
    firstSessionDate: '2026-07-17T11:30:00Z',
    stats: { firstGP: 1950, laps: 44, length: '7.004 km', distance: '308.052 km', corners: 19, drsZones: 2 },
    record: { time: '1:46.286', driver: 'Valtteri Bottas', year: '2018' },
    description: 'The longest track on the calendar, Spa winds through the Ardennes forest. Weather is notoriously unpredictable—it can be raining on one half of the track and bone dry on the other. Eau Rouge and Raidillon form the most famous corner sequence in the world.',
    trackPracticalities: {
      radioFreq: '106.5 FM',
      terrain: 'Forest trails, extreme elevation changes, and mud. Wear sturdy hiking boots.',
      shade: 'Plentiful forest cover, but when it rains, it pours. Bring ponchos.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The La Source hairpin into the terrifyingly fast uphill sweep of Eau Rouge/Raidillon.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'A long, technical, undulating middle section through the trees via Pouhon and Fagnes.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'Flat out through Blanchimont, ending with the clunky Bus Stop chicane.' }
    ],
    tyres: [ { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C3', type: 'Medium', borderColor: '#facc15' }, { compound: 'C4', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Gold 3 (Eau Rouge)', view: 'Peers straight up the throat of the most famous corner in motorsport.' },
      { name: 'Gold 1 (Pit)', view: 'Covered seating overlooking the grid, pits, and La Source hairpin.' },
      { name: 'Kemmel Straight (GA)', view: 'A steep forest bank offering views of cars hitting maximum velocity.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Lewis Hamilton', team: 'Ferrari' }, { year: '2024', driver: 'Lewis Hamilton', team: 'Mercedes' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Spa SVG Placeholder</text></svg>`
  },
  {
    slug: 'hungarian-grand-prix',
    citySlug: 'budapest',
    raceSlug: 'hungarian-gp',
    round: 11,
    raceName: 'Hungarian Grand Prix',
    circuitName: 'Hungaroring',
    location: 'Budapest, Hungary',
    lat: 47.5789, lon: 19.2486,
    flagCode: 'hu',
    firstSessionDate: '2026-07-24T11:30:00Z',
    stats: { firstGP: 1986, laps: 70, length: '4.381 km', distance: '306.630 km', corners: 14, drsZones: 2 },
    record: { time: '1:16.627', driver: 'Lewis Hamilton', year: '2020' },
    description: 'Often described as "Monaco without the walls", the Hungaroring is a tight, twisting ribbon of tarmac in a natural bowl. Overtaking is notoriously difficult, making qualifying absolutely paramount.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Set in a natural valley, meaning lots of uphill walking to enter and leave the track.',
      shade: 'Brutally hot in the peak of summer with virtually zero shade. Water and hats are mandatory.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Heavy braking into Turn 1, the best and essentially only true overtaking spot.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'A relentless sequence of medium-speed corners demanding total concentration.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'A technical double-hairpin finish leading back to the pit straight.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Super Gold', view: 'The only covered grandstand, sitting directly opposite the pit garages.' },
      { name: 'Silver 4', view: 'Excellent views over the final sector and the tight penultimate corners.' },
      { name: 'General Admission', view: 'The valley setting allows GA fans sitting on the grass banks to see large portions of the track.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Oscar Piastri', team: 'McLaren' }, { year: '2024', driver: 'Oscar Piastri', team: 'McLaren' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Hungaroring SVG Placeholder</text></svg>`
  },
  {
    slug: 'dutch-grand-prix',
    citySlug: 'amsterdam',
    raceSlug: 'dutch-gp',
    round: 12,
    raceName: 'Dutch Grand Prix',
    circuitName: 'Circuit Park Zandvoort',
    location: 'Zandvoort, Netherlands',
    lat: 52.3888, lon: 4.54092,
    flagCode: 'nl',
    firstSessionDate: '2026-08-21T12:30:00+02:00',
    stats: { firstGP: 1952, laps: 72, length: '4.259 km', distance: '306.587 km', corners: 14, drsZones: 2 },
    record: { time: '1:11.097', driver: 'Lewis Hamilton', year: '2021' },
    description: 'Circuit Zandvoort is a historic, old-school track set in the rolling sand dunes next to the North Sea. The seaside circuit is renowned for its unique challenge, combining tight, sweeping low-speed corners with two massive, steeply banked turns.',
    trackPracticalities: {
      radioFreq: '107.5 FM (Grand Prix Radio)',
      terrain: 'Sandy, hilly dunes. Wear closed-toe, comfortable walking shoes as sand gets everywhere.',
      shade: 'Completely exposed to the sun and coastal winds. No natural shade available.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Starts from the main straight, through Tarzan (T1) and the complex twisting section.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'The sweeping high-speed curves through the dunes from Turn 6 down through the hairpin.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The technical sequence through the final banked Arie Luyendykbocht onto the straight.' }
    ],
    tyres: [ { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C3', type: 'Medium', borderColor: '#facc15' }, { compound: 'C4', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Tarzan Incline', view: 'Prime viewing of heavy braking zones into Turn 1 and overtaking action.' },
      { name: 'Arena Grandstand', view: 'Overlooks the twisting stadium section with incredible atmosphere.' },
      { name: 'Arie Luyendyk', view: 'Seats right on the massive 18-degree banking as cars accelerate onto the straight.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '16:00 Local' }, { session: 'Sprint Race', time: '11:30 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Lando Norris', team: 'McLaren' }, { year: '2024', driver: 'Lando Norris', team: 'McLaren' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Zandvoort SVG Placeholder</text></svg>`
  },
  {
    slug: 'italian-grand-prix',
    citySlug: 'milan',
    raceSlug: 'italian-gp',
    round: 13,
    raceName: 'Italian Grand Prix',
    circuitName: 'Autodromo Nazionale Monza',
    location: 'Monza, Italy',
    lat: 45.6156, lon: 9.28111,
    flagCode: 'it',
    firstSessionDate: '2026-09-04T13:30:00+02:00',
    stats: { firstGP: 1950, laps: 53, length: '5.793 km', distance: '306.720 km', corners: 11, drsZones: 2 },
    record: { time: '1:21.046', driver: 'Rubens Barrichello', year: '2004' },
    description: 'Known as the "Temple of Speed", Monza is the quickest circuit on the calendar. Cars operate in the lowest downforce configuration, spending nearly 80% of the lap at full throttle.',
    trackPracticalities: {
      radioFreq: 'TBA (Often 87.5 FM locally)',
      terrain: 'Set in a massive royal park. Heavy walking on flat dirt and tarmac paths.',
      shade: 'General Admission has excellent natural shade under the dense park trees, though grandstands are exposed.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The long pit straight into the incredibly tight Turn 1/2 chicane and the high-speed run through Curva Grande.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Heavy braking for the Della Roggia chicane, through the Lesmos, and down the sweeping straight to Ascari.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The high-speed Ascari chicane complex and the legendary sweeping Parabolica onto the main straight.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Prima Variante (T1)', view: 'Incredible heavy braking action, overtaking, and guaranteed lap 1 chaos.' },
      { name: 'Ascari', view: 'Watch the cars violently change direction at high speed through the complex.' },
      { name: 'Laterale Parabolica', view: 'A legendary atmosphere with great views of cars accelerating onto the main straight.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2024', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Monza SVG Placeholder</text></svg>`
  },
  {
    slug: 'madrid-grand-prix',
    citySlug: 'madrid',
    raceSlug: 'madrid-gp',
    round: 14,
    raceName: 'Madrid Grand Prix',
    circuitName: 'IFEMA Madrid Circuit',
    location: 'Madrid, Spain',
    lat: 40.4667, lon: -3.6167,
    flagCode: 'es',
    firstSessionDate: '2026-09-11T13:30:00+02:00',
    stats: { firstGP: 2026, laps: 56, length: '5.474 km', distance: '306.500 km', corners: 20, drsZones: 2 },
    record: { time: '-', driver: 'Inaugural Race', year: '2026' },
    description: 'The brand new hybrid street circuit for the 2026 season. Incorporating both the IFEMA exhibition center and public roads, it is designed to feature steep banking and a mix of high-speed urban blasts.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Paved exhibition grounds and urban streets. Highly accessible via Madrid Metro.',
      shade: 'Includes massive indoor exhibition halls offering perfect climate control and shade.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The complex starting layout winding around the main IFEMA pavilions.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'A tunnel section followed by an intensely banked, high-speed corner.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'Tight urban 90-degree corners leading back into the exhibition center complex.' }
    ],
    tyres: [ { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C3', type: 'Medium', borderColor: '#facc15' }, { compound: 'C4', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Indoor Main Grandstand', view: 'A unique covered grandstand experience viewing the start/finish line.' },
      { name: 'The Banking', view: 'Views of the spectacular steeply banked Valdebebas curve.' },
      { name: 'Tunnel Exit', view: 'Watch cars burst from the underground section into heavy braking zones.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2026', driver: 'TBD', team: 'TBD' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Madrid SVG Placeholder</text></svg>`
  },
  {
    slug: 'azerbaijan-grand-prix',
    citySlug: 'baku',
    raceSlug: 'azerbaijan-gp',
    round: 15,
    raceName: 'Azerbaijan Grand Prix',
    circuitName: 'Baku City Circuit',
    location: 'Baku, Azerbaijan',
    lat: 40.3725, lon: 49.8533,
    flagCode: 'az',
    firstSessionDate: '2026-09-24T13:30:00+04:00',
    stats: { firstGP: 2016, laps: 51, length: '6.003 km', distance: '306.049 km', corners: 20, drsZones: 2 },
    record: { time: '1:43.009', driver: 'Charles Leclerc', year: '2019' },
    description: 'An insane mix of extreme high speed and impossibly tight ancient streets. The colossal 2.2km main straight contrasts wildly with the 7-meter-wide castle section, almost always resulting in chaos and safety cars.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'City streets with some cobblestones. Excellent urban access.',
      shade: 'Good shading around the old city, but the grandstands on the boulevard are exposed to the sun and heavy winds.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Multiple 90-degree city block corners punishing the rear tyres.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'The staggeringly narrow ascent around the historic stone castle.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The seemingly endless flat-out blast along the Caspian Sea coastline.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Absheron', view: 'The main straight. Watch cars hit 350+ km/h before diving into Turn 1.' },
      { name: 'Icheri Sheher', view: 'Positioned right at the famously tight, treacherous Castle section.' },
      { name: 'Azneft', view: 'Located at Turn 16 where cars drop down the hill onto the fast sections.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '16:00 Local' }, { session: 'Race', time: '15:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Oscar Piastri', team: 'McLaren' }, { year: '2024', driver: 'Oscar Piastri', team: 'McLaren' }, { year: '2023', driver: 'Sergio Pérez', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Baku SVG Placeholder</text></svg>`
  },
  {
    slug: 'bahrain-grand-prix',
    citySlug: 'sakhir',
    raceSlug: 'bahrain-gp',
    round: 16,
    raceName: 'Bahrain Grand Prix',
    circuitName: 'Bahrain International Circuit',
    location: 'Sakhir, Bahrain',
    lat: 26.0325, lon: 50.5106,
    flagCode: 'bh',
    firstSessionDate: '2026-10-02T11:30:00Z',
    stats: { firstGP: 2004, laps: 57, length: '5.412 km', distance: '308.238 km', corners: 15, drsZones: 3 },
    record: { time: '1:31.447', driver: 'Pedro de la Rosa', year: '2005' },
    description: 'A spectacular floodlit race deep in the desert. The abrasive track surface shreds tyres, leading to strategic multi-stop races. The heavy braking zones at the end of long straights provide massive overtaking opportunities.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Paved, isolated desert facility. Shuttles or cars are required.',
      shade: 'The race happens at night under floodlights, avoiding the brutal daytime heat entirely.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Heavy braking into the tight T1/T2 sequence and down the second straight.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'The highly technical, winding middle sector demanding huge mechanical grip.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'A final straight leading to the tight Turn 14, setting up the drag to the finish.' }
    ],
    tyres: [ { compound: 'C1', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C2', type: 'Medium', borderColor: '#facc15' }, { compound: 'C3', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Main Grandstand', view: 'Covered seating directly opposite the illuminated pit lane.' },
      { name: 'Batelco', view: 'Perfect views of the tricky inner loop and sweeping back straights.' },
      { name: 'Turn 1', view: 'The absolute best grandstand for overtakes and lap 1 drama.' }
    ],
    schedule: [ { session: 'Practice 1', time: '14:30 Local' }, { session: 'Practice 2', time: '18:00 Local' }, { session: 'Qualifying', time: '19:00 Local' }, { session: 'Race', time: '18:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Bahrain SVG Placeholder</text></svg>`
  },
  {
    slug: 'singapore-grand-prix',
    citySlug: 'marina-bay',
    raceSlug: 'singapore-gp',
    round: 17,
    raceName: 'Singapore Grand Prix',
    circuitName: 'Marina Bay Street Circuit',
    location: 'Marina Bay, Singapore',
    lat: 1.2914, lon: 103.864,
    flagCode: 'sg',
    firstSessionDate: '2026-10-09T17:30:00+08:00',
    stats: { firstGP: 2008, laps: 62, length: '4.940 km', distance: '306.143 km', corners: 19, drsZones: 4 },
    record: { time: '1:35.867', driver: 'Lewis Hamilton', year: '2023' },
    description: 'The original F1 night race. Marina Bay is a bumpy, physically draining, sauna of a circuit. Even after recent layout changes to speed up the track, the humidity and relentless corners make this the toughest race of the year for drivers.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Downtown city streets. Brilliant MRT public transport integration.',
      shade: 'Night race avoids sun, but the 90%+ humidity is inescapable. Dress extremely light.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Fast run down Raffles Boulevard into a series of tight 90-degree corners.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Across the Anderson Bridge and through the tight, bumpy civic district.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The new high-speed blast replacing the old grandstand, ending at the tight Turn 16.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Padang', view: 'Situated in the heart of the action with views of cars navigating St Andrew’s Road.' },
      { name: 'Pit Grandstand', view: 'Direct views of the glowing pitlane and spectacular firework finish.' },
      { name: 'Bay Grandstand', view: 'Iconic views as the cars pass beneath the spectator seating.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '17:30 Local' }, { session: 'Sprint Race', time: '17:30 Local' }, { session: 'Qualifying', time: '21:00 Local' }, { session: 'Race', time: '20:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Lando Norris', team: 'McLaren' }, { year: '2024', driver: 'Lando Norris', team: 'McLaren' }, { year: '2023', driver: 'Carlos Sainz', team: 'Ferrari' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Singapore SVG Placeholder</text></svg>`
  },
  {
    slug: 'united-states-grand-prix',
    citySlug: 'austin',
    raceSlug: 'united-states-gp',
    round: 18,
    raceName: 'United States Grand Prix',
    circuitName: 'Circuit of the Americas',
    location: 'Austin, USA',
    lat: 30.1328, lon: -97.6411,
    flagCode: 'us',
    firstSessionDate: '2026-10-23T12:30:00-05:00',
    stats: { firstGP: 2012, laps: 56, length: '5.513 km', distance: '308.405 km', corners: 20, drsZones: 2 },
    record: { time: '1:36.169', driver: 'Charles Leclerc', year: '2019' },
    description: 'COTA borrows the best elements from classic tracks worldwide—the Maggotts-style S-curves, a Hockenheim-esque stadium section, and a massive uphill plunge into Turn 1. It offers phenomenal racing and legendary atmosphere.',
    trackPracticalities: {
      radioFreq: 'Speed City 104.9 FM',
      terrain: 'Vast, hilly, and grassy. Wear comfortable boots; you will walk miles.',
      shade: 'Almost no natural shade outside of specific hospitality zones. Texas sun can be brutal.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The iconic steep climb to Turn 1 followed by the blisteringly fast S-curves.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'The tight hairpin of Turn 11 leading onto the massive 1km back straight.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The slow, multi-apex stadium section demanding perfect mechanical grip.' }
    ],
    tyres: [ { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C3', type: 'Medium', borderColor: '#facc15' }, { compound: 'C4', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Turn 1', view: 'Sat atop a 130ft hill, offering incredible panoramic views and passing action.' },
      { name: 'Turn 15', view: 'Perfect spot to catch the heavy braking overtakes at the end of the long straight.' },
      { name: 'General Admission', view: 'COTA has some of the best grassy viewing mounds in the world.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '12:30 Local' }, { session: 'Sprint Race', time: '13:00 Local' }, { session: 'Qualifying', time: '17:00 Local' }, { session: 'Race', time: '14:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2024', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">COTA SVG Placeholder</text></svg>`
  },
  {
    slug: 'mexico-city-grand-prix',
    citySlug: 'mexico-city',
    raceSlug: 'mexico-city-gp',
    round: 19,
    raceName: 'Mexico City Grand Prix',
    circuitName: 'Autódromo Hermanos Rodríguez',
    location: 'Mexico City, Mexico',
    lat: 19.4042, lon: -99.0907,
    flagCode: 'mx',
    firstSessionDate: '2026-10-30T12:30:00-06:00',
    stats: { firstGP: 1963, laps: 71, length: '4.304 km', distance: '305.354 km', corners: 17, drsZones: 3 },
    record: { time: '1:17.774', driver: 'Valtteri Bottas', year: '2021' },
    description: 'Situated over 2,200 meters above sea level, the thin air forces teams to run Monaco-levels of downforce just to generate Monza-levels of grip. The cars slide wildly, engines gasp for air, and the stadium section is a riot of noise.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Flat parkland. Excellent metro access makes it easy to commute to.',
      shade: 'The stadium section provides decent coverage, but the main straights are exposed.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'A massive drag down to Turn 1, providing the best slipstream overtaking.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'A sequence of high-speed esses that mimic Silverstone, but with less grip.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The famously slow, stadium-style Foro Sol section packed with fans.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'Foro Sol (Stadium)', view: 'Incredible atmosphere. The cars literally drive through an old baseball stadium.' },
      { name: 'Grada 1/2', view: 'Watch the pack battle down the immense main straight into the first corner.' },
      { name: 'Grada 6A', view: 'A great view of the technical esses where drivers fight for grip in the thin air.' }
    ],
    schedule: [ { session: 'Practice 1', time: '12:30 Local' }, { session: 'Practice 2', time: '16:00 Local' }, { session: 'Qualifying', time: '15:00 Local' }, { session: 'Race', time: '14:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Carlos Sainz', team: 'Ferrari' }, { year: '2024', driver: 'Carlos Sainz', team: 'Ferrari' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Mexico City SVG Placeholder</text></svg>`
  },
  {
    slug: 'sao-paulo-grand-prix',
    citySlug: 'sao-paulo',
    raceSlug: 'sao-paulo-gp',
    round: 20,
    raceName: 'São Paulo Grand Prix',
    circuitName: 'Autódromo José Carlos Pace',
    location: 'São Paulo, Brazil',
    lat: -23.7036, lon: -46.6997,
    flagCode: 'br',
    firstSessionDate: '2026-11-06T11:30:00-03:00',
    stats: { firstGP: 1973, laps: 71, length: '4.309 km', distance: '305.879 km', corners: 15, drsZones: 2 },
    record: { time: '1:10.540', driver: 'Valtteri Bottas', year: '2018' },
    description: 'Interlagos is an old-school, anti-clockwise thrill ride. Built into a natural bowl, it features plunging elevation changes, sweeping curves, and totally unpredictable weather that routinely creates the best races of the year.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Hilly and incredibly cramped. The circuit infrastructure is notoriously aged.',
      shade: 'Almost entirely exposed. Pack for torrential rain and intense sun within the same hour.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'The legendary Senna S diving downhill, followed by the Reta Oposta straight.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'A twisting, tight, and technical infield section resembling a kart track.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The steep, flat-out uphill drag through Junção back to the start line.' }
    ],
    tyres: [ { compound: 'C2', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C3', type: 'Medium', borderColor: '#facc15' }, { compound: 'C4', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Grandstand M', view: 'Situated directly at the Senna S for the best overtaking views.' },
      { name: 'Sector G', view: 'The loudest, most passionate local fans at the end of the back straight.' },
      { name: 'Grandstand A', view: 'Overlooks the final sweeping climb to the finish line.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '11:30 Local' }, { session: 'Sprint Race', time: '11:00 Local' }, { session: 'Qualifying', time: '15:00 Local' }, { session: 'Race', time: '14:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Interlagos SVG Placeholder</text></svg>`
  },
  {
    slug: 'las-vegas-grand-prix',
    citySlug: 'las-vegas',
    raceSlug: 'las-vegas-gp',
    round: 21,
    raceName: 'Las Vegas Grand Prix',
    circuitName: 'Las Vegas Strip Circuit',
    location: 'Las Vegas, USA',
    lat: 36.1147, lon: -115.173,
    flagCode: 'us',
    firstSessionDate: '2026-11-19T18:30:00-08:00',
    stats: { firstGP: 2023, laps: 50, length: '6.201 km', distance: '310.050 km', corners: 17, drsZones: 2 },
    record: { time: '1:35.490', driver: 'Oscar Piastri', year: '2023' },
    description: 'A blisteringly fast street circuit racing right down the iconic Las Vegas Strip under neon lights. The 1.9km straight is one of the longest in F1, meaning cars are trimmed to Monza-levels of downforce in the freezing desert night.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Flat city streets. Extensive walking over temporary pedestrian bridges is required.',
      shade: 'Night race in the desert. The main issue is the freezing cold, not the sun.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Tight opening corners leading past the colossal MSG Sphere.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'A twisting section navigating through the heart of the resort properties.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The mind-boggling 1.9km flat-out blast straight down Las Vegas Boulevard.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'East Harmon Zone', view: 'The main straight and pit building, perfect for the start/finish.' },
      { name: 'Sphere Zone', view: 'Incredible visuals as the cars navigate the corners around the massive LED sphere.' },
      { name: 'Mirage Zone', view: 'Fantastic overtaking spot at the end of the Strip straight.' }
    ],
    schedule: [ { session: 'Practice 1', time: '18:30 Local' }, { session: 'Practice 2', time: '22:00 Local' }, { session: 'Qualifying', time: '22:00 Local' }, { session: 'Race', time: '22:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2024', driver: 'George Russell', team: 'Mercedes' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Las Vegas SVG Placeholder</text></svg>`
  },
  {
    slug: 'qatar-grand-prix',
    citySlug: 'doha',
    raceSlug: 'qatar-gp',
    round: 22,
    raceName: 'Qatar Grand Prix',
    circuitName: 'Lusail International Circuit',
    location: 'Al Daayen, Qatar',
    lat: 25.49, lon: 51.4542,
    flagCode: 'qa',
    firstSessionDate: '2026-11-27T16:30:00+03:00',
    stats: { firstGP: 2021, laps: 57, length: '5.419 km', distance: '308.611 km', corners: 16, drsZones: 1 },
    record: { time: '1:24.319', driver: 'Max Verstappen', year: '2023' },
    description: 'Designed primarily for MotoGP, Lusail is an incredibly fast, flowing ribbon of tarmac with virtually no heavy braking zones. The relentless medium and high-speed corners put immense physical strain on drivers and tyres alike.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Ultra-modern, flat paved complex. Taxis/shuttles required from Doha.',
      shade: 'Raced at night, mitigating the intense desert heat.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'A long straight leading into a sequence of fast, sweeping right-handers.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'The most physical section, an endless string of high-speed sweeping curves.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'A slightly tighter final sector before accelerating back onto the main straight.' }
    ],
    tyres: [ { compound: 'C1', type: 'Hard', borderColor: '#f8fafc' }, { compound: 'C2', type: 'Medium', borderColor: '#facc15' }, { compound: 'C3', type: 'Soft', borderColor: '#ef4444' } ],
    grandstands: [
      { name: 'Main Grandstand', view: 'Perfect for the start/finish and viewing the sprawling pit complex.' },
      { name: 'Turn 1', view: 'The only realistic heavy-braking overtaking point on the entire circuit.' },
      { name: 'North Grandstand', view: 'Views of the cars carrying massive speed through the first sector.' }
    ],
    schedule: [ { session: 'Sprint Quali', time: '16:30 Local' }, { session: 'Sprint Race', time: '16:00 Local' }, { session: 'Qualifying', time: '20:00 Local' }, { session: 'Race', time: '20:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Lusail SVG Placeholder</text></svg>`
  },
  {
    slug: 'abu-dhabi-grand-prix',
    citySlug: 'abu-dhabi',
    raceSlug: 'abu-dhabi-gp',
    round: 23,
    raceName: 'Abu Dhabi Grand Prix',
    circuitName: 'Yas Marina Circuit',
    location: 'Abu Dhabi, UAE',
    lat: 24.4672, lon: 54.6031,
    flagCode: 'ae',
    firstSessionDate: '2026-12-04T13:30:00+04:00',
    stats: { firstGP: 2009, laps: 58, length: '5.281 km', distance: '306.183 km', corners: 16, drsZones: 2 },
    record: { time: '1:26.103', driver: 'Max Verstappen', year: '2021' },
    description: 'The traditional twilight season finale. After recent layout tweaks to remove clumsy chicanes, Yas Marina flows much better. It is a track of two halves: massive back straights followed by a tight, hotel-dodging marina sector.',
    trackPracticalities: {
      radioFreq: 'TBA',
      terrain: 'Luxury paved resort island. Beautifully manicured and easy to navigate.',
      shade: 'Raced at twilight, transitioning to night under floodlights. Very comfortable.'
    },
    sectors: [
      { id: 1, name: 'Sector 1', color: '#db2777', desc: 'Fast, flowing opening corners before the hairpin leading to the first straight.' },
      { id: 2, name: 'Sector 2', color: '#fbbf24', desc: 'Two colossal straights broken up by a heavy braking chicane.' },
      { id: 3, name: 'Sector 3', color: '#38bdf8', desc: 'The tight, 90-degree cornered hotel section wrapping around the marina.' }
    ],
    tyres: defaultTyres,
    grandstands: [
      { name: 'West Grandstand', view: 'Excellent views of the heavy braking zone at the end of the longest straight.' },
      { name: 'Marina Grandstand', view: 'Watch the cars fly past the yachts and under the illuminated hotel.' },
      { name: 'Main Grandstand', view: 'Perfect spot to watch the championship trophy celebrations and fireworks.' }
    ],
    schedule: [ { session: 'Practice 1', time: '13:30 Local' }, { session: 'Practice 2', time: '17:00 Local' }, { session: 'Qualifying', time: '18:00 Local' }, { session: 'Race', time: '17:00 Local' } ],
    pastWinners: [ { year: '2025', driver: 'Charles Leclerc', team: 'Ferrari' }, { year: '2024', driver: 'Lando Norris', team: 'McLaren' }, { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing' } ],
    trackSvg: `<svg width="100%" height="100%" viewBox="0 0 800 600" fill="none"><text x="50%" y="50%" fill="#94a3b8" text-anchor="middle">Yas Marina SVG Placeholder</text></svg>`
  }
];