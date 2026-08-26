// src/data/teams.ts
export interface TeamData {
  slug: string;
  name: string;
  shortName: string;
  key: string;
  color: string;
  d1: string;
  d1Name: string;
  d1Last: string;
  d1Slug: string;
  d1Number: number;
  d2: string;
  d2Name: string;
  d2Last: string;
  d2Slug: string;
  d2Number: number;
  chassis: string;
  pu: string;
  base: string;
  principal: string;
  aliases: string[];
  bio: string;
  history: {
    championships: string;
    firstEntry: string;
    poles: number;
    fastestLaps: number;
  };
  socials: {
    x: string;
    instagram: string;
    website: string;
  };
}

export const TEAMS: TeamData[] = [
  { 
    slug: 'mclaren', name: 'McLaren Formula 1 Team', shortName: 'McLaren', key: 'mclaren', color: '#ff8000', 
    d1: 'NOR', d1Name: 'Lando Norris', d1Last: 'Norris', d1Slug: 'lando-norris', d1Number: 1,
    d2: 'PIA', d2Name: 'Oscar Piastri', d2Last: 'Piastri', d2Slug: 'oscar-piastri', d2Number: 81,
    chassis: 'MCL38', pu: 'Mercedes-AMG', base: 'Woking, UK', principal: 'Andrea Stella',
    aliases: ['mclaren', 'woking'],
    bio: "Since Bruce McLaren founded the team in 1963, McLaren has become one of the most successful and iconic constructors in Formula 1 history. Now entering 2026 under the leadership of Andrea Stella, the Papaya squad continues to hunt for championship glory with one of the most exciting young driver pairings on the grid.",
    history: { championships: "8 Constructors' / 12 Drivers'", firstEntry: "1966 Monaco Grand Prix", poles: 163, fastestLaps: 167 },
    socials: { x: "https://x.com/McLarenF1", instagram: "https://instagram.com/mclaren", website: "https://www.mclaren.com/racing/" }
  },
  { 
    slug: 'ferrari', name: 'Scuderia Ferrari', shortName: 'Ferrari', key: 'ferrari', color: '#e8002d', 
    d1: 'LEC', d1Name: 'Charles Leclerc', d1Last: 'Leclerc', d1Slug: 'charles-leclerc', d1Number: 16,
    d2: 'HAM', d2Name: 'Lewis Hamilton', d2Last: 'Hamilton', d2Slug: 'lewis-hamilton', d2Number: 44,
    chassis: 'SF-26', pu: 'Ferrari', base: 'Maranello, Italy', principal: 'Frédéric Vasseur',
    aliases: ['ferrari', 'scuderia', 'maranello'],
    bio: "The oldest and most successful team in Formula 1. Scuderia Ferrari has competed in every single world championship season since 1950. With Lewis Hamilton now wearing the legendary red suit alongside Charles Leclerc, Maranello is fully focused on bringing the world title back to Italy.",
    history: { championships: "16 Constructors' / 15 Drivers'", firstEntry: "1950 Monaco Grand Prix", poles: 253, fastestLaps: 261 },
    socials: { x: "https://x.com/ScuderiaFerrari", instagram: "https://instagram.com/scuderiaferrari", website: "https://www.ferrari.com/en-EN/formula1" }
  },
  { 
    slug: 'red-bull-racing', name: 'Red Bull Racing', shortName: 'Red Bull', key: 'redbull', color: '#3671c6', 
    d1: 'VER', d1Name: 'Max Verstappen', d1Last: 'Verstappen', d1Slug: 'max-verstappen', d1Number: 3,
    d2: 'HAD', d2Name: 'Isack Hadjar', d2Last: 'Hadjar', d2Slug: 'isack-hadjar', d2Number: 17,
    chassis: 'RB22', pu: 'RBPT Ford', base: 'Milton Keynes, UK', principal: 'Christian Horner',
    aliases: ['red bull', 'rbpt', 'milton keynes'],
    bio: "Since arriving in 2005, Red Bull Racing has redefined what it means to be a modern F1 team. Armed with their own RBPT Ford power units for 2026, the Milton Keynes squad looks to maintain their ruthless winning efficiency and extend their championship legacy.",
    history: { championships: "6 Constructors' / 7 Drivers'", firstEntry: "2005 Australian Grand Prix", poles: 103, fastestLaps: 98 },
    socials: { x: "https://x.com/redbullracing", instagram: "https://instagram.com/redbullracing", website: "https://www.redbullracing.com/" }
  },
  { 
    slug: 'mercedes', name: 'Mercedes-AMG Petronas', shortName: 'Mercedes', key: 'mercedes', color: '#27f4d2', 
    d1: 'RUS', d1Name: 'George Russell', d1Last: 'Russell', d1Slug: 'george-russell', d1Number: 63,
    d2: 'ANT', d2Name: 'Kimi Antonelli', d2Last: 'Antonelli', d2Slug: 'kimi-antonelli', d2Number: 12,
    chassis: 'W17', pu: 'Mercedes-AMG', base: 'Brackley, UK', principal: 'Toto Wolff',
    aliases: ['mercedes', 'brackley', 'silver arrows'],
    bio: "The dominant force of the turbo-hybrid era, Mercedes-AMG Petronas combines cutting-edge engineering with operational excellence. As they fully integrate fresh talent alongside George Russell, the Silver Arrows remain a formidable powerhouse on the grid.",
    history: { championships: "8 Constructors' / 9 Drivers'", firstEntry: "1954 French Grand Prix", poles: 139, fastestLaps: 109 },
    socials: { x: "https://x.com/MercedesAMGF1", instagram: "https://instagram.com/mercedesamgf1", website: "https://www.mercedesamgf1.com/" }
  },
  { 
    slug: 'aston-martin', name: 'Aston Martin Aramco', shortName: 'Aston Martin', key: 'astonmartin', color: '#229971', 
    d1: 'ALO', d1Name: 'Fernando Alonso', d1Last: 'Alonso', d1Slug: 'fernando-alonso', d1Number: 14,
    d2: 'STR', d2Name: 'Lance Stroll', d2Last: 'Stroll', d2Slug: 'lance-stroll', d2Number: 18,
    chassis: 'AMR26', pu: 'Honda', base: 'Silverstone, UK', principal: 'Mike Krack',
    aliases: ['aston martin', 'silverstone'],
    bio: "Operating out of a state-of-the-art technology campus at Silverstone, Aston Martin is heavily invested in climbing to the absolute top of the sport. Powered by Honda for 2026, they pair veteran racecraft with ambitious development goals.",
    history: { championships: "0 Constructors' / 0 Drivers'", firstEntry: "1959 Dutch Grand Prix", poles: 0, fastestLaps: 1 },
    socials: { x: "https://x.com/AstonMartinF1", instagram: "https://instagram.com/astonmartinf1", website: "https://www.astonmartinf1.com/" }
  },
  { 
    slug: 'rb', name: 'Visa Cash App RB', shortName: 'RB', key: 'rb', color: '#6692ff', 
    d1: 'LAW', d1Name: 'Liam Lawson', d1Last: 'Lawson', d1Slug: 'liam-lawson', d1Number: 30,
    d2: 'LIN', d2Name: 'Arvid Lindblad', d2Last: 'Lindblad', d2Slug: 'arvid-lindblad', d2Number: 40,
    chassis: 'VCARB 03', pu: 'RBPT Ford', base: 'Faenza, Italy', principal: 'Laurent Mekies',
    aliases: ['racing bulls', 'vcarb', 'faenza', 'toro rosso', 'alphatauri'],
    bio: "The Faenza-based squad continues to evolve under its new identity. Operating with closer technical ties to its sister team, Visa Cash App RB acts as a fiercely competitive proving ground for the most promising talent in the Red Bull development pool.",
    history: { championships: "0 Constructors' / 0 Drivers'", firstEntry: "2024 Bahrain Grand Prix", poles: 0, fastestLaps: 1 },
    socials: { x: "https://x.com/visacashapprb", instagram: "https://instagram.com/visacashapprb", website: "https://www.visacashapprb.com/" }
  },
  { 
    slug: 'williams', name: 'Williams Racing', shortName: 'Williams', key: 'williams', color: '#64c4ff', 
    d1: 'ALB', d1Name: 'Alexander Albon', d1Last: 'Albon', d1Slug: 'alexander-albon', d1Number: 23,
    d2: 'SAI', d2Name: 'Carlos Sainz', d2Last: 'Sainz', d2Slug: 'carlos-sainz', d2Number: 55,
    chassis: 'FW48', pu: 'Mercedes-AMG', base: 'Grove, UK', principal: 'James Vowles',
    aliases: ['williams', 'grove'],
    bio: "A true heritage team of Formula 1, Williams Racing has a proud history of engineering brilliance and multiple world titles. Under the guidance of James Vowles, the Grove-based outfit is aggressively rebuilding its infrastructure to return to the sharp end of the grid.",
    history: { championships: "9 Constructors' / 7 Drivers'", firstEntry: "1977 Spanish Grand Prix", poles: 128, fastestLaps: 133 },
    socials: { x: "https://x.com/WilliamsRacing", instagram: "https://instagram.com/williamsracing", website: "https://www.williamsf1.com/" }
  },
  { 
    slug: 'audi', name: 'Audi F1 Team', shortName: 'Audi', key: 'audi', color: '#00e700', 
    d1: 'HUL', d1Name: 'Nico Hülkenberg', d1Last: 'Hulkenberg', d1Slug: 'nico-hulkenberg', d1Number: 27,
    d2: 'BOR', d2Name: 'Gabriel Bortoleto', d2Last: 'Bortoleto', d2Slug: 'gabriel-bortoleto', d2Number: 5,
    chassis: 'Audi F1-26', pu: 'Audi', base: 'Hinwil, Switzerland', principal: 'Mattia Binotto',
    aliases: ['audi', 'sauber', 'hinwil'],
    bio: "Marking a monumental new chapter in the sport, the Audi F1 Team officially takes to the grid in 2026. Taking over the historic Sauber operation in Hinwil and combining it with a bespoke German power unit, Audi arrives with massive ambition and factory backing.",
    history: { championships: "0 Constructors' / 0 Drivers'", firstEntry: "2026 Bahrain Grand Prix", poles: 0, fastestLaps: 0 },
    socials: { x: "https://x.com/audimotorsport", instagram: "https://instagram.com/audiofficial", website: "https://www.audi.com/" }
  },
  { 
    slug: 'alpine', name: 'BWT Alpine F1 Team', shortName: 'Alpine', key: 'alpine', color: '#ff87bc', 
    d1: 'GAS', d1Name: 'Pierre Gasly', d1Last: 'Gasly', d1Slug: 'pierre-gasly', d1Number: 10,
    d2: 'COL', d2Name: 'Franco Colapinto', d2Last: 'Colapinto', d2Slug: 'franco-colapinto', d2Number: 43,
    chassis: 'A526', pu: 'Mercedes-AMG', base: 'Enstone, UK', principal: 'Oliver Oakes',
    aliases: ['alpine', 'enstone', 'renault'],
    bio: "Representing the sporting pinnacle of the Renault Group, the Alpine F1 Team operates out of the historic Enstone facility. The team enters a new era in 2026, focused on maximizing efficiency and delivering consistent points-scoring performances.",
    history: { championships: "2 Constructors' / 2 Drivers' (as Renault)", firstEntry: "1977 British Grand Prix", poles: 51, fastestLaps: 33 },
    socials: { x: "https://x.com/AlpineF1Team", instagram: "https://instagram.com/alpinef1team", website: "https://www.alpine-cars.co.uk/" }
  },
  { 
    slug: 'haas', name: 'Haas F1 Team', shortName: 'Haas', key: 'haas', color: '#b6babd', 
    d1: 'OCO', d1Name: 'Esteban Ocon', d1Last: 'Ocon', d1Slug: 'esteban-ocon', d1Number: 31,
    d2: 'BEA', d2Name: 'Oliver Bearman', d2Last: 'Bearman', d2Slug: 'oliver-bearman', d2Number: 87,
    chassis: 'VF-26', pu: 'Ferrari', base: 'Kannapolis, USA', principal: 'Ayao Komatsu',
    aliases: ['haas', 'kannapolis', 'banbury'],
    bio: "The youngest team on the grid (prior to 2026 expansion), America's Haas F1 Team has forged a reputation for punching above its weight. Utilising a unique operational model and close technical partnership with Ferrari, Haas continually fights fiercely in the midfield.",
    history: { championships: "0 Constructors' / 0 Drivers'", firstEntry: "2016 Australian Grand Prix", poles: 1, fastestLaps: 2 },
    socials: { x: "https://x.com/HaasF1Team", instagram: "https://instagram.com/haasf1team", website: "https://www.haasf1team.com/" }
  },
  { 
    slug: 'cadillac', name: 'Cadillac F1 Team', shortName: 'Cadillac', key: 'cadillac', color: '#d4af37', 
    d1: 'PER', d1Name: 'Sergio Perez', d1Last: 'Perez', d1Slug: 'sergio-perez', d1Number: 11,
    d2: 'BOT', d2Name: 'Valtteri Bottas', d2Last: 'Bottas', d2Slug: 'valtteri-bottas', d2Number: 77,
    chassis: 'Cadillac V-Series.R', pu: 'Ferrari', base: 'Fishers, USA', principal: 'Marcin Budkowski',
    aliases: ['cadillac', 'andretti', 'general motors'],
    bio: "The much-anticipated eleventh team on the grid. Backed by General Motors and operated by a legendary racing dynasty, the Cadillac F1 Team joins the championship in 2026, pairing immense American automotive resources with veteran driving talent.",
    history: { championships: "0 Constructors' / 0 Drivers'", firstEntry: "2026 Bahrain Grand Prix", poles: 0, fastestLaps: 0 },
    socials: { x: "https://x.com/cadillac", instagram: "https://instagram.com/cadillac", website: "https://www.cadillac.com/" }
  }
];