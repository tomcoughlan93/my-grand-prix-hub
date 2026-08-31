export interface TicketTier {
  category: string;
  name: string;
  priceFromGBP: number | string;
  priceFromEUR: number | string;
  priceFromUSD: number | string;
  description: string;
}

export interface Airport {
  code: string;
  name: string;
  distanceToCircuit: string;
  transitSummary: string;
  bookingUrl: string;
}

export interface GrandPrixLogistics {
  slug: string;
  round: number;
  raceName: string;
  dates: string;
  circuitName: string;
  location: string;
  ticketStatus: string; 
  officialBoxOfficeUrl: string;
  ticketTiers: TicketTier[];
  vendors: {
    name: string;
    type: string;
    url: string;
  }[];
  coordinates: {
    lat: number;
    lon: number;
  };
  circuitTransit: {
    trainStation?: string;
    trainBookingUrl?: string;
    shuttleInfo: string;
    shuttleBookingUrl?: string;
    parkingAdvice: string;
    parkingBookingUrl?: string;
    gateEntryTips: string;
  };
  airports: Airport[];
  accommodation: {
    recommendedAreas: string[];
    bookingUrl?: string;
    tips: string;
  };
  knowBeforeYouGo: {
    bagPolicy: string;
    foodAndDrinkPolicy: string;
    prohibitedItems: string[];
    paymentMethods: string;
    packingTips: string;
    accessibility: {
      wheelchairAccess: string;
      parkingShuttles: string;
    };
    weekendExtras: {
      supportSeries: string[];
      entertainment: string;
    };
  };
}

export const raceLogisticsData: GrandPrixLogistics[] = [
  // --- ROUND 1: AUSTRALIA ---
  {
    slug: 'australian-gp',
    round: 1,
    raceName: 'Australian Grand Prix',
    dates: 'Mar 6 - 8, 2026',
    circuitName: 'Albert Park Circuit',
    location: 'Melbourne, Australia',
    ticketStatus: 'Sold Out',
    officialBoxOfficeUrl: 'https://www.grandprix.com.au/tickets',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Park Pass',
        priceFromGBP: 145,
        priceFromEUR: 170,
        priceFromUSD: 185,
        description: 'Access to the park perimeter, golf course viewing hills, and live music stages.'
      },
      {
        category: 'Grandstand',
        name: 'Brabham Grandstand',
        priceFromGBP: 360,
        priceFromEUR: 420,
        priceFromUSD: 460,
        description: 'Prime views of Turns 1 and 2 where drivers brake heavily off the start.'
      },
      {
        category: 'Hospitality',
        name: 'The Lounge at Turn 1',
        priceFromGBP: 1350,
        priceFromEUR: 1580,
        priceFromUSD: 1720,
        description: 'Gourmet grazing menu, local Victorian wines, and elevated balcony views.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Motorsport Tickets', type: 'Authorised Reseller', url: 'https://www.motorsporttickets.com/' }
    ],
    coordinates: { lat: -37.8497, lon: 144.9680 },
    circuitTransit: {
      trainStation: 'Flinders Street / Southern Cross',
      trainBookingUrl: 'https://www.ptv.vic.gov.au/',
      shuttleInfo: 'Free dedicated GP express trams run continuously from Flinders St Station and Southern Cross Station directly to the gates.',
      shuttleBookingUrl: 'https://www.yarratrams.com.au/',
      parkingAdvice: 'Strictly zero public parking around Albert Park. Public trams are free for ticket holders and run every 2 minutes.',
      gateEntryTips: 'Gate 1 and Gate 2 have the highest traffic. Enter through Gate 8 or 10 if seated on the back straight.'
    },
    airports: [
      {
        code: 'MEL',
        name: 'Melbourne Airport (Tullamarine)',
        distanceToCircuit: '28 km',
        transitSummary: 'Take the SkyBus express into Southern Cross Station (25 mins), then catch the free GP tram.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Melbourne CBD', 'Southbank', 'St Kilda', 'South Yarra'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in the CBD or Southbank to take advantage of the Free Tram Zone and the direct tram lines down St Kilda Road.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks permitted (max 20L). All bags searched at turnstiles.',
      foodAndDrinkPolicy: 'Sealed plastic water bottles and personal food allowed. No glass, cans, or alcohol.',
      prohibitedItems: ['Flares', 'Drones', 'Glass containers', 'Ladders / Milk crates'],
      paymentMethods: '100% Cashless venue. All food, beverage, and merchandise stands require card or contactless pay.',
      packingTips: 'Melbourne weather changes hourly. Bring sunscreen, a hat, and a lightweight waterproof jacket.',
      accessibility: {
        wheelchairAccess: 'Accessible viewing platforms located at Brabham, Fangio, and Waite grandstands.',
        parkingShuttles: 'Dedicated accessible buggy services operate between Gates 1, 5, and grandstand zones.'
      },
      weekendExtras: {
        supportSeries: ['Supercars Championship', 'Porsche Carrera Cup Australia', 'Formula 3'],
        entertainment: 'AusGP Sessions music festival operates daily on the infield stage featuring headline Australian and global acts.'
      }
    }
  },

  // --- ROUND 2: CHINA ---
  {
    slug: 'chinese-gp',
    round: 2,
    raceName: 'Chinese Grand Prix',
    dates: 'Mar 13 - 15, 2026',
    circuitName: 'Shanghai International Circuit',
    location: 'Shanghai, China',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.jusstickets.com/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Grass Zone C/F',
        priceFromGBP: 60,
        priceFromEUR: 70,
        priceFromUSD: 78,
        description: 'Grassy bank access viewing the long back straight and infield complexes.'
      },
      {
        category: 'Grandstand',
        name: 'Main Grandstand (Grandstand A)',
        priceFromGBP: 260,
        priceFromEUR: 305,
        priceFromUSD: 335,
        description: 'Massive covered grandstand facing the pit building, start line, and podium.'
      },
      {
        category: 'Grandstand',
        name: 'Grandstand H / K (Hairpin)',
        priceFromGBP: 180,
        priceFromEUR: 210,
        priceFromUSD: 230,
        description: 'Overlooking the heavy braking zone at the end of the 1.2km back straight.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'VIP Packages', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: 31.3389, lon: 121.2200 },
    circuitTransit: {
      trainStation: 'Shanghai Circuit Station (Metro Line 11)',
      trainBookingUrl: 'https://service.shmetro.com/en/',
      shuttleInfo: 'Metro Line 11 drops passengers immediately outside the Main Grandstand. No shuttle buses needed.',
      parkingAdvice: 'Private vehicle access is restricted to permit holders. Metro Line 11 is the fastest and most reliable route.',
      gateEntryTips: 'Foreign passport holders must queue at dedicated identity verification lanes before the bag scan.'
    },
    airports: [
      {
        code: 'SHA',
        name: 'Shanghai Hongqiao International Airport',
        distanceToCircuit: '25 km',
        transitSummary: 'Closest airport. Take Metro Line 10 or 2, transfer to Line 11 directly to the track.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'PVG',
        name: 'Shanghai Pudong International Airport',
        distanceToCircuit: '75 km',
        transitSummary: 'Take the Maglev train to Longyang Road, then Metro Line 2 and Line 11 across the city.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['People\'s Square', 'Jing\'an', 'The Bund', 'Jiading District'],
      bookingUrl: 'https://www.trip.com/',
      tips: 'Stay in central Shanghai (Jing\'an or People\'s Square) along Metro Line 2/11 to enjoy the city\'s nightlife and dining.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard bags allowed. Expect airport-style security and x-ray scanners at metro and circuit gates.',
      foodAndDrinkPolicy: 'Sealed water and snacks permitted. Local food stalls inside serve dumplings, noodles, and beer.',
      prohibitedItems: ['Lighters (strictly confiscated)', 'Power banks without visible mAh ratings', 'Aerosol cans', 'Drones'],
      paymentMethods: 'Alipay and WeChat Pay linked to international Visa/Mastercard are essential. Cash and physical foreign cards are rarely accepted.',
      packingTips: 'Spring in Shanghai can be cool and damp. Pack a light waterproof coat and comfortable walking shoes.',
      accessibility: {
        wheelchairAccess: 'Elevator access available in the Main Grandstand building with dedicated viewing boxes.',
        parkingShuttles: 'Accessible drop-off bays are located at Gate 1 near the metro exit.'
      },
      weekendExtras: {
        supportSeries: ['Porsche Carrera Cup Asia', 'F4 Chinese Championship'],
        entertainment: 'Interactive fanzone with driver appearances and racing simulators behind Main Grandstand A.'
      }
    }
  },

  // --- ROUND 3: JAPAN ---
  {
    slug: 'japanese-gp',
    round: 3,
    raceName: 'Japanese Grand Prix',
    dates: 'Mar 27 - 29, 2026',
    circuitName: 'Suzuka Circuit',
    location: 'Suzuka, Japan',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://www.suzukacircuit.jp/en/f1/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'West Area (GA)',
        priceFromGBP: 80,
        priceFromEUR: 95,
        priceFromUSD: 105,
        description: 'Access to the Spoon Curve, Hairpin, and 200R grass viewing banks.'
      },
      {
        category: 'Grandstand',
        name: 'B2 Grandstand (First Curve)',
        priceFromGBP: 310,
        priceFromEUR: 360,
        priceFromUSD: 395,
        description: 'Spectacular view of Turn 1, Turn 2, and the entry into the legendary S-Curves.'
      },
      {
        category: 'Grandstand',
        name: 'Q2 Grandstand (Chicane)',
        priceFromGBP: 340,
        priceFromEUR: 395,
        priceFromUSD: 435,
        description: 'Direct view of the Casio Triangle chicane and pit entry.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Mobilityland Direct', type: 'Official Box Office', url: 'https://online.mobilityland.co.jp/' }
    ],
    coordinates: { lat: 34.8431, lon: 136.5410 },
    circuitTransit: {
      trainStation: 'Shiroko Station (Kintetsu Line) / Suzuka Circuit Ino (Ise Railway)',
      trainBookingUrl: 'https://www.kintetsu.co.jp/foreign/english/',
      shuttleInfo: 'Direct shuttle buses run constantly between Shiroko Station and the circuit (20-30 mins).',
      shuttleBookingUrl: 'https://www.mie-kotsu.co.jp/',
      parkingAdvice: 'Circuit parking passes sell out in minutes during the initial ticket release. Train travel via Nagoya is highly recommended.',
      gateEntryTips: 'Main gate queues move fast, but walking to Spoon Curve takes 40+ minutes inside the park. Wear comfortable footwear.'
    },
    airports: [
      {
        code: 'NGO',
        name: 'Chubu Centrair International Airport',
        distanceToCircuit: '65 km',
        transitSummary: 'Take the Meitetsu train to Nagoya Station (28 mins), then transfer to the Kintetsu Line to Shiroko.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'KIX',
        name: 'Kansai International Airport (Osaka)',
        distanceToCircuit: '140 km',
        transitSummary: 'Take the Haruka Express to Shin-Osaka, Shinkansen to Nagoya, and Kintetsu line to Shiroko.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Nagoya Station (Meieki)', 'Sakae (Nagoya)', 'Yokkaichi', 'Tsu'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Nagoya has the largest hotel capacity and direct express trains to Shiroko. Book hotels near Kintetsu-Nagoya Station.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'No bag size restrictions, but must fit comfortably at your feet in grandstand seats.',
      foodAndDrinkPolicy: 'Personal food, canned/bottled drinks, and bento boxes permitted. Extensive Japanese street food stalls available.',
      prohibitedItems: ['Drones', 'Large stepladders', 'Flares', 'Large umbrellas during on-track sessions'],
      paymentMethods: 'Suica/Pasmo IC cards, PayPay, and credit cards are widely accepted. Carry some cash (JPY) for smaller food stalls.',
      packingTips: 'Spring cherry blossom season can be windy and brisk. Bring warm layers and rain ponchos.',
      accessibility: {
        wheelchairAccess: 'Dedicated platforms located in the V1, V2, and B2 Grandstands.',
        parkingShuttles: 'Wheelchair-accessible shuttle vans run between Shiroko Station and the paddock gates upon request.'
      },
      weekendExtras: {
        supportSeries: ['Ferrari Challenge Japan', 'Porsche Carrera Cup Japan'],
        entertainment: 'Legendary Thursday and Friday night fan forums on the main straight featuring F1 team principals and drivers.'
      }
    }
  },

  // --- ROUND 4: MIAMI ---
  {
    slug: 'miami-gp',
    round: 4,
    raceName: 'Miami Grand Prix',
    dates: 'May 1 - 3, 2026',
    circuitName: 'Miami International Autodrome',
    location: 'Miami, USA',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://f1miamigp.com/tickets/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Campus Pass',
        priceFromGBP: 220,
        priceFromEUR: 255,
        priceFromUSD: 280,
        description: 'Access to the Hard Rock Stadium campus, trackside viewing mounds, and 300-level stadium viewing.'
      },
      {
        category: 'Grandstand',
        name: 'Marina Grandstand',
        priceFromGBP: 480,
        priceFromEUR: 560,
        priceFromUSD: 610,
        description: 'Views of Turns 6, 7, and 8 surrounding the iconic artificial yacht marina.'
      },
      {
        category: 'Grandstand',
        name: 'Start/Finish Grandstand',
        priceFromGBP: 650,
        priceFromEUR: 760,
        priceFromUSD: 830,
        description: 'Overlooking the pit garages, starting grid, and podium celebration.'
      }
    ],
    vendors: [
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' },
      { name: 'Ticketmaster', type: 'Official Ticketing', url: 'https://www.ticketmaster.com/' }
    ],
    coordinates: { lat: 25.9581, lon: -80.2389 },
    circuitTransit: {
      trainStation: 'Brightline Aventura Station',
      trainBookingUrl: 'https://www.gobrightline.com/',
      shuttleInfo: 'Complimentary Brightline shuttles connect Aventura Station directly to the Hard Rock Stadium gates.',
      parkingAdvice: 'Parking on stadium grounds requires pre-purchased multi-day parking passes. Park & Ride lots operate from Calder Casino.',
      gateEntryTips: 'Pedestrian bridges over roads can bottleneck before sessions. Arrive 90 minutes before FP1/Qualifying.'
    },
    airports: [
      {
        code: 'MIA',
        name: 'Miami International Airport',
        distanceToCircuit: '27 km',
        transitSummary: 'Take rideshare (Uber/Lyft) directly to designated Hard Rock Stadium lots or hotel.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'FLL',
        name: 'Fort Lauderdale-Hollywood International Airport',
        distanceToCircuit: '22 km',
        transitSummary: 'Closest major airport. Quick rideshare or Brightline train to Aventura.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Fort Lauderdale Beach', 'Aventura', 'Downtown Miami / Brickell', 'Hollywood'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Staying in Fort Lauderdale or Aventura offers a shorter commute than staying in South Beach, avoiding I-95 city gridlock.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'NFL Clear Bag Policy strictly enforced. Clear plastic bags up to 12x6x12 inches only. Small clutches allowed.',
      foodAndDrinkPolicy: 'One factory-sealed bottle of water (up to 20oz) permitted. Free refill stations across the campus.',
      prohibitedItems: ['Non-clear backpacks', 'Firearms / Weapons', 'Coolers', 'Drones', 'Umbrellas'],
      paymentMethods: '100% Cashless campus. Apple Pay, Google Pay, and major credit cards accepted.',
      packingTips: 'South Florida heat and humidity are intense. Pack cooling towels, sunscreen, sunglasses, and hydration packs.',
      accessibility: {
        wheelchairAccess: 'Elevated ADA platforms available in all major grandstand zones with companion seating.',
        parkingShuttles: 'Dedicated ADA golf cart shuttles operate from designated ADA parking lots.'
      },
      weekendExtras: {
        supportSeries: ['F1 Sprint Race', 'Porsche Carrera Cup North America'],
        entertainment: 'Hard Rock Beach Club concert stage inside Turns 11-13 featuring global headline DJs.'
      }
    }
  },

  // --- ROUND 5: CANADA ---
  {
    slug: 'canadian-gp',
    round: 5,
    raceName: 'Canadian Grand Prix',
    dates: 'May 22 - 24, 2026',
    circuitName: 'Circuit Gilles Villeneuve',
    location: 'Montreal, Canada',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://gpcanada.ca/en/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'General Admission',
        priceFromGBP: 120,
        priceFromEUR: 140,
        priceFromUSD: 155,
        description: 'Access to the island parkways and standing areas between the hairpin and back straight.'
      },
      {
        category: 'Grandstand',
        name: 'Grandstand 15 (Hairpin)',
        priceFromGBP: 310,
        priceFromEUR: 360,
        priceFromUSD: 395,
        description: 'Prime view of the hairpin curve, providing top overtaking and braking action.'
      },
      {
        category: 'Grandstand',
        name: 'Grandstand 1 (Main Straight)',
        priceFromGBP: 450,
        priceFromEUR: 525,
        priceFromUSD: 575,
        description: 'Facing the pit boxes, start line, and podium ceremonies.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Motorsport Tickets', type: 'Authorised Reseller', url: 'https://www.motorsporttickets.com/' }
    ],
    coordinates: { lat: 45.5000, lon: -73.5228 },
    circuitTransit: {
      trainStation: 'Jean-Drapeau Metro Station (Yellow Line)',
      trainBookingUrl: 'https://www.stm.info/en',
      shuttleInfo: 'Take the Yellow Line Metro directly to Jean-Drapeau. Walk across the footbridge onto the island.',
      parkingAdvice: 'No public vehicle parking on Île Notre-Dame. Public transit via the STM Metro is mandatory.',
      gateEntryTips: 'Cosmos Bridge and Concorde Bridge get congested post-race. Consider taking the river shuttle (navette fluviale) to Old Montreal.'
    },
    airports: [
      {
        code: 'YUL',
        name: 'Montréal-Trudeau International Airport',
        distanceToCircuit: '22 km',
        transitSummary: 'Take the 747 Express Bus directly to downtown Montreal (30-45 mins), then connect to the Metro.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Downtown Montreal', 'Old Montreal', 'Plateau-Mont-Royal', 'Longueuil'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Hotels in downtown near Peel and Crescent Streets put you right in the heart of the race-week festival atmosphere.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Backpacks permitted and searched at bridge checkpoints. Foldable camping chairs allowed in GA areas.',
      foodAndDrinkPolicy: 'Personal food and drinks allowed in soft coolers (no glass, no hard coolers). Beer in cans permitted.',
      prohibitedItems: ['Glass bottles', 'Hard-sided coolers', 'Animals / Pets', 'Drones'],
      paymentMethods: 'Credit and debit cards accepted everywhere. Cashless preferred.',
      packingTips: 'Spring weather in Montreal varies from sunny and 25°C to windy and 12°C. Dress in layers with a rain shell.',
      accessibility: {
        wheelchairAccess: 'Accessible grandstands available at Grandstand 1 and the Hairpin with accessible ramps.',
        parkingShuttles: 'Adapted transport shuttles run from Jean-Drapeau station directly to grandstand access paths.'
      },
      weekendExtras: {
        supportSeries: ['Ferrari Challenge North America', 'F1 Academy'],
        entertainment: 'Crescent Street and Peel Street downtown festivals with live concerts, driver appearances, and supercars.'
      }
    }
  },

  // --- ROUND 6: MONACO ---
  {
    slug: 'monaco-gp',
    round: 6,
    raceName: 'Monaco Grand Prix',
    dates: 'Jun 5 - 7, 2026',
    circuitName: 'Circuit de Monaco',
    location: 'Monte-Carlo, Monaco',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://monaco-grandprix.com/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Le Rocher',
        priceFromGBP: 110,
        priceFromEUR: 130,
        priceFromUSD: 140,
        description: 'Steep hillside viewing overlooking the harbor, pit lane, and swimming pool section.'
      },
      {
        category: 'Grandstand',
        name: 'Grandstand K (Quai Albert 1er)',
        priceFromGBP: 550,
        priceFromEUR: 640,
        priceFromUSD: 700,
        description: 'The premier grandstand in F1, viewing the Tabac corner into the Swimming Pool chicane.'
      },
      {
        category: 'VIP',
        name: 'Yacht Hospitality / Terrace',
        priceFromGBP: 1950,
        priceFromEUR: 2280,
        priceFromUSD: 2500,
        description: 'Luxury terrace viewing overlooking the harbor with champagne, catering, and driver visits.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: 43.7347, lon: 7.4206 },
    circuitTransit: {
      trainStation: 'Gare de Monaco-Monte-Carlo',
      trainBookingUrl: 'https://www.sncf-connect.com/',
      shuttleInfo: 'TER trains run every 10-15 minutes from Nice-Ville and Menton directly into the underground Monaco station.',
      parkingAdvice: 'All public parking in Monaco is closed or reserved. Do not attempt to drive into the Principality.',
      gateEntryTips: 'Use the station Sainte-Dévote exit for Grandstands A, B, and Rocher; use the Port exit for Grandstands K, T, and Paddock.'
    },
    airports: [
      {
        code: 'NCE',
        name: 'Nice Côte d\'Azur Airport',
        distanceToCircuit: '30 km',
        transitSummary: 'Take the Tramway to Nice Saint-Augustin station, then a 25-minute train to Monaco, or book a 7-minute helicopter transfer with Monacair.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Nice (City Centre / Port)', 'Menton', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in Nice near Nice-Ville station for affordable accommodation and an easy 20-minute train ride along the Riviera.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Small bags only. Security checkpoints operate at all town entry portals.',
      foodAndDrinkPolicy: 'Personal sandwiches and plastic bottles allowed. No glass or alcoholic beverages brought from outside.',
      prohibitedItems: ['Glass bottles', 'Flares', 'Large umbrellas', 'Luggage / Suitcases'],
      paymentMethods: 'Euros (€), credit cards, and Apple Pay accepted in all shops, cafes, and track stands.',
      packingTips: 'Smart-casual dress is respected across the Principality. Wear supportive walking shoes for steep stairs and hills.',
      accessibility: {
        wheelchairAccess: 'Accessible platform located on Grandstand K with elevator access from the harbor concourse.',
        parkingShuttles: 'Dedicated PRM transport coordinated through the Automobile Club de Monaco (ACM).'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'Amber Lounge, Jimmy\'z, and trackside harbor yacht parties run late into Sunday night.'
      }
    }
  },

  // --- ROUND 7: SPAIN (BARCELONA) ---
  {
    slug: 'spanish-gp',
    round: 7,
    raceName: 'Spanish Grand Prix',
    dates: 'Jun 12 - 14, 2026',
    circuitName: 'Circuit de Barcelona-Catalunya',
    location: 'Montmeló (Barcelona), Spain',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.circuitcat.com/en/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Pelouse (GA)',
        priceFromGBP: 110,
        priceFromEUR: 130,
        priceFromUSD: 140,
        description: 'Green grassy viewing hills around the stadium section and the Campsa curve.'
      },
      {
        category: 'Grandstand',
        name: 'Grandstand L',
        priceFromGBP: 310,
        priceFromEUR: 360,
        priceFromUSD: 395,
        description: 'Elevated view overlooking Turn 1, Turn 2, and the long run into Turn 3.'
      },
      {
        category: 'Grandstand',
        name: 'Main Grandstand',
        priceFromGBP: 420,
        priceFromEUR: 490,
        priceFromUSD: 540,
        description: 'Covered grandstand facing the pit boxes and starting grid.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Motorsport Tickets', type: 'Authorised Reseller', url: 'https://www.motorsporttickets.com/' }
    ],
    coordinates: { lat: 41.5700, lon: 2.2611 },
    circuitTransit: {
      trainStation: 'Montmeló Station (Rodalies R2 / R2 Nord)',
      trainBookingUrl: 'https://rodalies.gencat.cat/en/',
      shuttleInfo: 'Direct Sagalés buses run from Barcelona Estació del Nord directly to the circuit perimeter gates.',
      shuttleBookingUrl: 'https://www.sagales.com/',
      parkingAdvice: 'Parking lots sell out early. Public rail (R2 train from Passeig de Gràcia to Montmeló) plus a 25-minute walk is standard.',
      gateEntryTips: 'Gate 3 is closest to the train shuttle drop-off; Gate 7 serves the Pelouse hill.'
    },
    airports: [
      {
        code: 'BCN',
        name: 'Josep Tarradellas Barcelona-El Prat Airport',
        distanceToCircuit: '45 km',
        transitSummary: 'Take the R2 Nord train directly from Airport T2 to Montmeló station without changing trains.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Barcelona (Eixample)', 'Passeig de Gràcia', 'Sagrada Família', 'Granollers'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in central Barcelona near Passeig de Gràcia or Sants Station for direct train access to Montmeló and vibrant tapas dining.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks permitted. All bags searched at turnstiles.',
      foodAndDrinkPolicy: 'Non-alcoholic beverages in plastic bottles up to 1.5L allowed. Cans, glass, and alcohol prohibited by Spanish law.',
      prohibitedItems: ['Alcohol', 'Glass bottles', 'Cans over 330ml', 'Drones', 'Laser pointers'],
      paymentMethods: 'Contactless cards and mobile payments accepted across all food and merchandise zones.',
      packingTips: 'June in Montmeló is very hot with minimal natural shade. Bring a wide-brimmed hat, SPF50 sunscreen, and cooling towels.',
      accessibility: {
        wheelchairAccess: 'Accessible viewing areas available on the Main Grandstand and Grandstand G.',
        parkingShuttles: 'Designated accessible parking in Car Park A with shuttle buggy assistance.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'F1 Fanzone with pit stop challenges, live music, and driver Q&A sessions on the main stage.'
      }
    }
  },

  // --- ROUND 8: AUSTRIA ---
  {
    slug: 'austrian-gp',
    round: 8,
    raceName: 'Austrian Grand Prix',
    dates: 'Jun 26 - 28, 2026',
    circuitName: 'Red Bull Ring',
    location: 'Spielberg, Austria',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://www.redbullring.com/en/events-tickets/formula-1/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Stehplatz (GA)',
        priceFromGBP: 95,
        priceFromEUR: 110,
        priceFromUSD: 120,
        description: 'Access to the elevated natural hillsides between Turns 2 and 3 with panoramic circuit views.'
      },
      {
        category: 'Grandstand',
        name: 'Red Bull Grandstand (Sections A-C)',
        priceFromGBP: 290,
        priceFromEUR: 340,
        priceFromUSD: 370,
        description: 'Follows the cars along the uphill drag out of Turn 1 towards Turn 3.'
      },
      {
        category: 'Grandstand',
        name: 'Steiermark Grandstand',
        priceFromGBP: 360,
        priceFromEUR: 420,
        priceFromUSD: 460,
        description: 'Prime view of Turn 1 braking, starting grid, and pit exit.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Global Tickets', type: 'Authorised Reseller', url: 'https://www.global-tickets.com/' }
    ],
    coordinates: { lat: 47.2197, lon: 14.7647 },
    circuitTransit: {
      trainStation: 'Knittelfeld Railway Station',
      trainBookingUrl: 'https://www.oebb.at/en/',
      shuttleInfo: 'Free regional shuttle buses run continuously from Knittelfeld station directly to the Spielberg circuit gates.',
      shuttleBookingUrl: 'https://www.redbullring.com/',
      parkingAdvice: 'Free parking is provided adjacent to the S36 expressway. Follow the electronic traffic routing signs.',
      gateEntryTips: 'General admission gates open at 7:00 AM on race day. Arrive early to secure the best vantage point on the hill.'
    },
    airports: [
      {
        code: 'GRZ',
        name: 'Graz Airport',
        distanceToCircuit: '85 km',
        transitSummary: 'Take the train from Graz Hauptbahnhof to Knittelfeld (1 hour 15 mins), then the free shuttle.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'VIE',
        name: 'Vienna International Airport',
        distanceToCircuit: '200 km',
        transitSummary: 'Take the direct Railjet train from Vienna Central Station to Knittelfeld (2 hours 15 mins).',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Graz City Centre', 'Leoben', 'Judenburg', 'Trackside Campsites'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Trackside camping is the authentic Spielberg experience. If staying in hotels, base yourself in Graz and take the daily race train.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks permitted. Glass bottles and hard crates strictly forbidden.',
      foodAndDrinkPolicy: 'Non-alcoholic drinks in plastic bottles permitted. Traditional Austrian food and Stiegl beer stalls on site.',
      prohibitedItems: ['Pyrotechnics / Smoke flares', 'Glass bottles', 'Laser pointers', 'Generators in grandstands'],
      paymentMethods: 'Cashless payment card system and standard contactless credit cards accepted.',
      packingTips: 'Alpine weather can change quickly from intense sunshine to heavy mountain rain. Pack waterproof gear and sturdy boots.',
      accessibility: {
        wheelchairAccess: 'Disabled platforms on Start-Ziel and Steiermark grandstands with companion seats.',
        parkingShuttles: 'Dedicated handicap parking near the Welcome Center with accessible golf buggies.'
      },
      weekendExtras: {
        supportSeries: ['F1 Sprint Race', 'Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'Red Bull Legends Parade featuring historic F1 machinery and drivers on Sunday morning.'
      }
    }
  },

  // --- ROUND 9: GREAT BRITAIN ---
  {
    slug: 'british-gp',
    round: 9,
    raceName: 'British Grand Prix',
    dates: 'Jul 3 - 5, 2026',
    circuitName: 'Silverstone Circuit',
    location: 'Silverstone, UK',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://www.silverstone.co.uk/events/formula-1-british-grand-prix',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'General Admission Plus',
        priceFromGBP: 220,
        priceFromEUR: 255,
        priceFromUSD: 280,
        description: 'Access to perimeter viewing banks, Luffield complex, and the music festival main stage.'
      },
      {
        category: 'Grandstand',
        name: 'Becketts Grandstand',
        priceFromGBP: 475,
        priceFromEUR: 555,
        priceFromUSD: 610,
        description: 'View the cars changing direction at 290 km/h through Maggotts, Becketts, and Chapel.'
      },
      {
        category: 'Grandstand',
        name: 'Club Corner',
        priceFromGBP: 520,
        priceFromEUR: 610,
        priceFromUSD: 665,
        description: 'Direct views of the final corner, pit straight, and podium ceremony.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Motorsport Tickets', type: 'Authorised Reseller', url: 'https://www.motorsporttickets.com/' }
    ],
    coordinates: { lat: 52.0786, lon: -1.0169 },
    circuitTransit: {
      trainStation: 'Milton Keynes Central / Northampton',
      trainBookingUrl: 'https://www.nationalrail.co.uk/',
      shuttleInfo: 'Megabus / Stagecoach F1 express buses run from Milton Keynes Central and Northampton stations directly to the circuit gates.',
      shuttleBookingUrl: 'https://www.megabus.com/',
      parkingAdvice: 'Official circuit parking must be pre-booked in advance. Park & Ride from Towcester or M1 J15A operates smoothly.',
      gateEntryTips: 'Gates open at 6:30 AM on Sunday. Use Gate 19 for Becketts/Copse or Gate 1 for Club/Hamilton Straight.'
    },
    airports: [
      {
        code: 'LTN',
        name: 'London Luton Airport',
        distanceToCircuit: '68 km',
        transitSummary: 'Take train to Milton Keynes Central, then the Stagecoach F1 shuttle bus.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'LHR',
        name: 'London Heathrow Airport',
        distanceToCircuit: '105 km',
        transitSummary: 'Take Elizabeth Line to London, train from Euston to Milton Keynes Central, then the F1 shuttle.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'BHX',
        name: 'Birmingham Airport',
        distanceToCircuit: '75 km',
        transitSummary: 'Take direct train from Birmingham International to Northampton, then the F1 shuttle.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Milton Keynes', 'Northampton', 'Oxford', 'Trackside Glamping / Camping'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Book accommodation in Milton Keynes or Northampton to access the frequent shuttle bus services.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Max bag size 20 litres. Folding camping chairs and umbrellas permitted in GA zones.',
      foodAndDrinkPolicy: 'Personal food and drinks allowed (soft drinks, water). No glass bottles or alcohol brought into public enclosures.',
      prohibitedItems: ['Glass containers', 'Barbecues / Stoves', 'Drones', 'Flares / Pyrotechnics'],
      paymentMethods: '100% Cashless. All food stalls, bars, and official stores accept contactless cards and Apple/Google Pay.',
      packingTips: 'Classic British summer: pack both high-SPF sunscreen and a fully waterproof jacket with comfortable walking trainers.',
      accessibility: {
        wheelchairAccess: 'Accessible raised platforms located at Luffield, Becketts, Abbey, and Hamilton Straight.',
        parkingShuttles: 'Dedicated accessible parking behind Grandstand enclosures with mobility buggy transport.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'Major music festival concerts each evening on the infield stage featuring top international headliners.'
      }
    }
  },

  // --- ROUND 10: BELGIUM ---
  {
    slug: 'belgian-gp',
    round: 10,
    raceName: 'Belgian Grand Prix',
    dates: 'Jul 17 - 19, 2026',
    circuitName: 'Circuit de Spa-Francorchamps',
    location: 'Stavelot / Spa, Belgium',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.spagrandprix.com/en/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Bronze (GA)',
        priceFromGBP: 140,
        priceFromEUR: 165,
        priceFromUSD: 180,
        description: 'Access to the Ardennes hillsides along the Kemmel Straight, Pouhon, and Blanchimont.'
      },
      {
        category: 'Grandstand',
        name: 'Gold 3 (Eau Rouge)',
        priceFromGBP: 480,
        priceFromEUR: 560,
        priceFromUSD: 610,
        description: 'Iconic view looking down into the compression of Eau Rouge and up the Raidillon crest.'
      },
      {
        category: 'Grandstand',
        name: 'Silver 2 (Spa Hairpin / La Source)',
        priceFromGBP: 360,
        priceFromEUR: 420,
        priceFromUSD: 460,
        description: 'Overlooking the tight first-corner hairpin and pit entry.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Motorsport Tickets', type: 'Authorised Reseller', url: 'https://www.motorsporttickets.com/' }
    ],
    coordinates: { lat: 50.4372, lon: 5.9714 },
    circuitTransit: {
      trainStation: 'Verviers-Central',
      trainBookingUrl: 'https://www.belgiantrain.be/en',
      shuttleInfo: 'TEC Express shuttles run directly from Verviers-Central train station to the Francorchamps gates.',
      shuttleBookingUrl: 'https://www.letec.be/',
      parkingAdvice: 'Parking passes (Yellow/Green zones) must be pre-booked online. Roads are narrow Ardennes passes—expect delays.',
      gateEntryTips: 'La Source gate serves Gold grandstands; Combes gate serves Kemmel Straight and Pouhon areas.'
    },
    airports: [
      {
        code: 'BRU',
        name: 'Brussels Airport',
        distanceToCircuit: '140 km',
        transitSummary: 'Take train from Brussels Airport to Verviers-Central (1 hour 30 mins), then the TEC shuttle.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'CRL',
        name: 'Brussels South Charleroi Airport',
        distanceToCircuit: '145 km',
        transitSummary: 'Take shuttle bus to Liège-Guillemins station, then train to Verviers.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Liège', 'Aachen (Germany)', 'Maastricht (Netherlands)', 'Malmedy / Stavelot'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in Liège, Aachen, or Maastricht for reliable train connections into Verviers.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks permitted. Camping folding chairs are allowed in Bronze GA zones.',
      foodAndDrinkPolicy: 'Personal food and non-alcoholic drinks in plastic bottles permitted. Renowned Belgian frites and waffles on site.',
      prohibitedItems: ['Glass bottles', 'Alcoholic beverages', 'Pyrotechnics / Flares', 'Barbecues'],
      paymentMethods: 'Cashless payment card (Spa Card) and contactless credit cards accepted.',
      packingTips: 'The Ardennes microclimate is famous for sudden rainstorms. Wear hiking boots and pack heavy waterproof clothing.',
      accessibility: {
        wheelchairAccess: 'Accessible grandstand platforms located at Gold 1 (Pit Straight) and Raidillon.',
        parkingShuttles: 'Dedicated PRM parking with accessible shuttle vans to track access ramps.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'DJ sets, driver Q&A sessions, and live entertainment in the Francorchamps Fanzone.'
      }
    }
  },

  // --- ROUND 11: HUNGARY ---
  {
    slug: 'hungarian-gp',
    round: 11,
    raceName: 'Hungarian Grand Prix',
    dates: 'Jul 24 - 26, 2026',
    circuitName: 'Hungaroring',
    location: 'Mogyoród (Budapest), Hungary',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://www.hungaroring.hu/en/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'General Admission',
        priceFromGBP: 90,
        priceFromEUR: 105,
        priceFromUSD: 115,
        description: 'Natural hillside amphitheater viewing overlooking the final sector and pit straight.'
      },
      {
        category: 'Grandstand',
        name: 'Super Gold (Main Straight)',
        priceFromGBP: 395,
        priceFromEUR: 460,
        priceFromUSD: 505,
        description: 'The only covered grandstand, facing the starting grid, podium, and team garages.'
      },
      {
        category: 'Grandstand',
        name: 'Gold 4 (Turn 1)',
        priceFromGBP: 310,
        priceFromEUR: 360,
        priceFromUSD: 395,
        description: 'Prime view of the primary overtaking spot at Turn 1 downhill braking.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Gootickets', type: 'Authorised Reseller', url: 'https://www.gootickets.com/' }
    ],
    coordinates: { lat: 47.5789, lon: 19.2486 },
    circuitTransit: {
      trainStation: 'Kerepes (HÉV Suburban Railway H8)',
      trainBookingUrl: 'https://www.bkk.hu/en/',
      shuttleInfo: 'Free shuttle buses run between Kerepes HÉV station and Gate 3 of the Hungaroring.',
      shuttleBookingUrl: 'https://www.hungaroring.hu/',
      parkingAdvice: 'Official parking is free for ticket holders but traffic on the M3 motorway is heavy post-race. Public rail via HÉV is faster.',
      gateEntryTips: 'Gate 3 is the central transit hub; Gate 6 is closest to the Turn 1 grandstands.'
    },
    airports: [
      {
        code: 'BUD',
        name: 'Budapest Ferenc Liszt International Airport',
        distanceToCircuit: '35 km',
        transitSummary: 'Take the 100E Airport Express Bus to central Budapest (30 mins), then metro and HÉV train to the track.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Budapest District V (Belváros)', 'District VII (Jewish Quarter)', 'District VI (Terézváros)'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in central Budapest along Metro Line M2 for direct connections to the H8 suburban train at Örs vezér tere.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks permitted. All bags searched at perimeter gates.',
      foodAndDrinkPolicy: '0.5L sealed non-alcoholic bottle of water and sandwiches permitted. Plentiful food and beer stalls inside.',
      prohibitedItems: ['Glass bottles', 'Alcohol', 'Pyrotechnics / Smoke bombs', 'Drones'],
      paymentMethods: 'Contactless bank cards and festival pay cards accepted across all concessions.',
      packingTips: 'Late July in Hungary is extremely hot (often 35°C+). Bring a wide sun hat, high-SPF sunscreen, and hand fans.',
      accessibility: {
        wheelchairAccess: 'Accessible platform located in front of the Super Gold Grandstand.',
        parkingShuttles: 'Dedicated handicap parking located next to Main Gate 2 with step-free access.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'Post-race party at thermal baths and central Budapest ruin bars.'
      }
    }
  },

  // --- ROUND 12: NETHERLANDS ---
  {
    slug: 'dutch-gp',
    round: 12,
    raceName: 'Dutch Grand Prix',
    dates: 'Aug 21 - 23, 2026',
    circuitName: 'Circuit Zandvoort',
    location: 'Zandvoort, Netherlands',
    ticketStatus: 'Sold Out',
    officialBoxOfficeUrl: 'https://dutchgp.com/en/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'General Admission',
        priceFromGBP: 135,
        priceFromEUR: 155,
        priceFromUSD: 170,
        description: 'Access to the coastal sand dune viewing areas along the middle sector.'
      },
      {
        category: 'Grandstand',
        name: 'Tarzan-Incline Grandstand',
        priceFromGBP: 375,
        priceFromEUR: 435,
        priceFromUSD: 480,
        description: 'Overlooking Turn 1 (Tarzanbocht) and the start/finish straight braking.'
      },
      {
        category: 'Grandstand',
        name: 'Arena Grandstand 1',
        priceFromGBP: 395,
        priceFromEUR: 460,
        priceFromUSD: 505,
        description: 'Located in the stadium section, surrounded by the Orange Army party atmosphere.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Dutch GP Official Resale', type: 'Official Platform', url: 'https://dutchgp.com/en/resale/' }
    ],
    coordinates: { lat: 52.3888, lon: 4.5409 },
    circuitTransit: {
      trainStation: 'Zandvoort aan Zee',
      trainBookingUrl: 'https://www.ns.nl/en',
      shuttleInfo: 'NS runs 12 direct trains per hour from Amsterdam Centraal to Zandvoort aan Zee (30 mins). Circuit is a 15-minute walk from the station.',
      parkingAdvice: 'Zandvoort is 100% closed to passenger cars during race weekend. Train or bicycle travel is mandatory.',
      gateEntryTips: 'Follow the color-coded walking routes from the train station matching your ticket zone (Red, Orange, Blue).'
    },
    airports: [
      {
        code: 'AMS',
        name: 'Amsterdam Airport Schiphol',
        distanceToCircuit: '25 km',
        transitSummary: 'Take direct train to Amsterdam Sloterdijk or Haarlem, then connect to the direct Zandvoort train.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Amsterdam Centraal', 'Haarlem', 'Amsterdam Sloterdijk', 'Leiden'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in Amsterdam or Haarlem for easy train access directly into Zandvoort station.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Max A4 size bags permitted in grandstands. Clear bags recommended.',
      foodAndDrinkPolicy: 'Personal snacks permitted. One empty reusable water bottle allowed (refill points on site).',
      prohibitedItems: ['Flares / Smoke bombs (strictly banned)', 'Glass bottles', 'Alcohol', 'Bicycles inside the gate'],
      paymentMethods: '100% Cashless venue. Debit/credit cards and contactless payments only.',
      packingTips: 'Coastal North Sea winds can be brisk. Bring layers, windbreakers, and comfortable walking shoes for sand paths.',
      accessibility: {
        wheelchairAccess: 'Accessible viewing deck located in the Arena section with companion seating.',
        parkingShuttles: 'Special accessibility permits granted for drop-off at Gate 2 with electric shuttle golf carts.'
      },
      weekendExtras: {
        supportSeries: ['F1 Sprint Race', 'Porsche Supercup', 'F1 Academy'],
        entertainment: 'World-famous DJ sets and live Dutch pop performances in the Super Friday and post-race music festival.'
      }
    }
  },

  // --- ROUND 13: ITALY (MONZA) ---
  {
    slug: 'italian-gp',
    round: 13,
    raceName: 'Italian Grand Prix',
    dates: 'Sep 4 - 6, 2026',
    circuitName: 'Autodromo Nazionale Monza',
    location: 'Monza, Italy',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://monzanet.it/en/tickets/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Prato (GA)',
        priceFromGBP: 95,
        priceFromEUR: 110,
        priceFromUSD: 120,
        description: 'Access to the park grounds with excellent roving views in the braking zones.'
      },
      {
        category: 'Grandstand',
        name: 'Parabolica (Laterale)',
        priceFromGBP: 310,
        priceFromEUR: 360,
        priceFromUSD: 395,
        description: 'Watch the cars brake from top speed into the iconic final corner before the main straight.'
      },
      {
        category: 'Hospitality',
        name: 'F1 Experiences Club',
        priceFromGBP: 1450,
        priceFromEUR: 1690,
        priceFromUSD: 1850,
        description: 'Premium trackside hospitality with gourmet food, open bar, and pit lane walks.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'SeatUnique', type: 'Hospitality', url: 'https://www.seatunique.com/' },
      { name: 'Motorsport Tickets', type: 'Authorised Reseller', url: 'https://www.motorsporttickets.com/' }
    ],
    coordinates: { lat: 45.6156, lon: 9.2811 },
    circuitTransit: {
      trainStation: 'Monza Station / Biassono-Lesmo',
      trainBookingUrl: 'https://www.trenitalia.com/',
      shuttleInfo: 'The Black Line shuttle runs continuously from Monza station to the park entrance. Buy tickets via the Trenitalia app.',
      shuttleBookingUrl: 'https://www.trenitalia.com/',
      parkingAdvice: 'Parking inside the park is extremely limited and requires advanced booking. Park & Ride from Milan is highly recommended.',
      parkingBookingUrl: 'https://monzamobilita.it/',
      gateEntryTips: 'Gates open at 8:00 AM. Enter via Gate A (Vedano) if seated on the main straight, or Gate G (Mirabello) for Parabolica.'
    },
    airports: [
      {
        code: 'LIN',
        name: 'Milan Linate Airport',
        distanceToCircuit: '25 km',
        transitSummary: 'The closest airport. Take the bus or metro to Milano Centrale, then a 15-minute train to Monza.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'MXP',
        name: 'Milan Malpensa Airport',
        distanceToCircuit: '60 km',
        transitSummary: 'Major international hub. Take the Malpensa Express train directly to Milano Centrale.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Milan City Centre', 'Porta Garibaldi', 'Monza Town', 'Lake Como (Scenic)'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Staying near Milano Centrale or Porta Garibaldi stations provides the best balance of nightlife and a quick, 15-minute direct train to the track.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Max capacity 15 litres. Backpacks are searched thoroughly. No hard-sided coolers.',
      foodAndDrinkPolicy: 'You may bring your own food and plastic water bottles (max 500ml, caps removed at entry). No glass or alcohol.',
      prohibitedItems: ['Flares / Smoke Bombs', 'Power banks over 300g', 'Umbrellas with metal points', 'Bicycles / Scooters'],
      paymentMethods: 'Contactless cards (Visa/Mastercard) and Apple/Google Pay are widely accepted at all fan zones.',
      packingTips: 'Late summer in Italy is hot. Pack sunscreen, a cap, and comfortable walking shoes for the long royal park paths.',
      accessibility: {
        wheelchairAccess: 'Dedicated platforms at the First Chicane and Parabolica. Tickets requested directly through the circuit.',
        parkingShuttles: 'Special PRM parking available near Gate A, with accessible golf carts assisting transit inside the park.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'F1 Fanzone features nightly DJs, driver interviews, and the legendary track invasion after Sunday\'s checkered flag.'
      }
    }
  },

  // --- ROUND 14: MADRID ---
  {
    slug: 'madrid-gp',
    round: 14,
    raceName: 'Spanish Grand Prix (Madrid)',
    dates: 'Sep 11 - 13, 2026',
    circuitName: 'IFEMA Madrid Circuit',
    location: 'Madrid, Spain',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.ifema.es/en/f1',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Festival Zone',
        priceFromGBP: 125,
        priceFromEUR: 145,
        priceFromUSD: 160,
        description: 'Grounds pass with access to elevated viewing mounds and the central IFEMA fan village.'
      },
      {
        category: 'Grandstand',
        name: 'Turn 1 / IFEMA Pavilion',
        priceFromGBP: 380,
        priceFromEUR: 440,
        priceFromUSD: 485,
        description: 'Prime seating overlooking the main overtaking zone at the end of the start/finish straight.'
      },
      {
        category: 'VIP',
        name: 'Real Madrid F1 Lounge',
        priceFromGBP: 1200,
        priceFromEUR: 1395,
        priceFromUSD: 1530,
        description: 'Exclusive climate-controlled hospitality featuring Spanish tapas and premium grandstand seats.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'VIP', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: 40.4661, lon: -3.6166 },
    circuitTransit: {
      trainStation: 'Feria de Madrid (Metro Line 8)',
      trainBookingUrl: 'https://www.metromadrid.es/',
      shuttleInfo: 'As an integrated street circuit, Metro Line 8 stops directly at the IFEMA entrance gates. No shuttle required.',
      parkingAdvice: 'No public parking is available at the circuit. Ticket holders must use public transit or designated rideshare drop-offs.',
      gateEntryTips: 'Download your digital tickets to your wallet before arriving. The metro station drops you directly at Gate 1.'
    },
    airports: [
      {
        code: 'MAD',
        name: 'Adolfo Suárez Madrid–Barajas Airport',
        distanceToCircuit: '5 km',
        transitSummary: 'Only 2 stops away from the circuit on Metro Line 8, or a 10-minute taxi ride.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Salamanca', 'Malasaña', 'Chueca', 'Centro (Sol)'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Staying anywhere in central Madrid gives you a seamless 25-minute metro commute directly to the track gates.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Small bags only (max 20L). All bags will be scanned at the IFEMA security checkpoints.',
      foodAndDrinkPolicy: 'Sealed water bottles permitted. Extensive food halls operate inside the IFEMA pavilions.',
      prohibitedItems: ['Alcohol', 'Glass containers', 'Professional camera tripods', 'Drones'],
      paymentMethods: '100% Cashless circuit. All bars, merchandise stalls, and food vendors only accept card or mobile payments.',
      packingTips: 'Madrid in September is warm (often 30°C+). Bring sunglasses and a light layer for air-conditioned indoor pavilions.',
      accessibility: {
        wheelchairAccess: 'Modern IFEMA convention center infrastructure with full elevator access to grandstands.',
        parkingShuttles: 'Dedicated blue badge parking available in IFEMA Car Park Yellow.'
      },
      weekendExtras: {
        supportSeries: ['F1 Academy', 'Porsche Carrera Cup'],
        entertainment: 'Massive indoor concerts, sim-racing arenas, and culinary festivals inside the IFEMA halls.'
      }
    }
  },

  // --- ROUND 15: AZERBAIJAN ---
  {
    slug: 'azerbaijan-gp',
    round: 15,
    raceName: 'Azerbaijan Grand Prix',
    dates: 'Sep 24 - 26, 2026',
    circuitName: 'Baku City Circuit',
    location: 'Baku, Azerbaijan',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.bakucitycircuit.com/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Roaming Ticket',
        priceFromGBP: 90,
        priceFromEUR: 105,
        priceFromUSD: 115,
        description: 'Affordable grounds pass allowing you to roam the fan zones and catch street circuit views.'
      },
      {
        category: 'Grandstand',
        name: 'Azneft (Turn 16)',
        priceFromGBP: 250,
        priceFromEUR: 290,
        priceFromUSD: 320,
        description: 'Brilliant views of the cars braking heavily at the bottom of the hill before the long straight.'
      },
      {
        category: 'Grandstand',
        name: 'Absheron (Main Straight)',
        priceFromGBP: 420,
        priceFromEUR: 490,
        priceFromUSD: 540,
        description: 'Covered seating facing the pit boxes, start/finish line, and podium.'
      }
    ],
    vendors: [
      { name: 'Motorsport Tickets', type: 'Authorised Reseller', url: 'https://www.motorsporttickets.com/' },
      { name: 'Global Tickets', type: 'Authorised Reseller', url: 'https://www.global-tickets.com/' }
    ],
    coordinates: { lat: 40.3725, lon: 49.8533 },
    circuitTransit: {
      trainStation: 'Sahil or Icherisheher (Baku Metro)',
      shuttleInfo: 'Being a city-centre street circuit, no shuttles are required. The track is integrated directly into the city streets.',
      parkingAdvice: 'Road closures gridlock the city centre. Do not hire a car; rely on the Metro and walking.',
      gateEntryTips: 'If your ticket is in the Old City (Icherisheher), use the dedicated northern gates.'
    },
    airports: [
      {
        code: 'GYD',
        name: 'Heydar Aliyev International Airport',
        distanceToCircuit: '25 km',
        transitSummary: 'The Aero Express bus runs directly to 28 May Metro station, or it is a 30-minute Uber/Bolt ride into the city.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Baku Boulevard', 'Old City (Icherisheher)', 'Fountain Square'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Book a hotel near Fountain Square or Baku Boulevard for walk-to-gate convenience.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard bag policy applies. Bags will be x-rayed at all city-centre security cordons.',
      foodAndDrinkPolicy: 'Local food is exceptional and cheap inside the fan zones. Strictly no alcohol permitted through the gates.',
      prohibitedItems: ['Laser pointers', 'Large flags with poles', 'Glass bottles', 'Stepladders'],
      paymentMethods: 'Both cash (Azerbaijani Manat - AZN) and international cards accepted. Carry some AZN for small stalls.',
      packingTips: 'September in Baku is breezy. Pack comfortable walking shoes as the street circuit footprint is massive.',
      accessibility: {
        wheelchairAccess: 'Accessible platforms available at Absheron and Azneft grandstands.',
        parkingShuttles: 'Taxis can drop PRM guests at specific vehicle checkpoints near the Boulevard.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2'],
        entertainment: 'Major international music acts at the Crystal Hall on Friday, Saturday, and Sunday nights.'
      }
    }
  },

  // --- ROUND 16: BAHRAIN ---
  {
    slug: 'bahrain-gp',
    round: 16,
    raceName: 'Bahrain Grand Prix',
    dates: 'Oct 2 - 4, 2026',
    circuitName: 'Bahrain International Circuit',
    location: 'Sakhir, Bahrain',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.bahraingp.com/',
    ticketTiers: [
      {
        category: 'Grandstand',
        name: 'University / Victory Grandstand',
        priceFromGBP: 120,
        priceFromEUR: 140,
        priceFromUSD: 155,
        description: 'Views of the final corners and the high-speed acceleration onto the start/finish straight.'
      },
      {
        category: 'Grandstand',
        name: 'Batelco Grandstand',
        priceFromGBP: 260,
        priceFromEUR: 305,
        priceFromUSD: 335,
        description: 'Overlooking the challenging inner loop and back straight desert overtaking zone.'
      },
      {
        category: 'Grandstand',
        name: 'Main Grandstand',
        priceFromGBP: 360,
        priceFromEUR: 420,
        priceFromUSD: 460,
        description: 'Facing the illuminated pit buildings, starting grid, and podium celebration.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: 26.0325, lon: 50.5106 },
    circuitTransit: {
      shuttleInfo: 'Free official shuttle buses run from major Manama hotel clusters (Seef, Diplomatic Area) directly to the circuit.',
      parkingAdvice: 'Extensive free parking on site for ticket holders. Taxis/Uber back to Manama post-race can have long queues.',
      gateEntryTips: 'Main entrance gate is adjacent to the F1 Village fanzone and Main Grandstand.'
    },
    airports: [
      {
        code: 'BAH',
        name: 'Bahrain International Airport',
        distanceToCircuit: '40 km',
        transitSummary: 'Take official airport taxi or Uber to your Manama hotel (20 mins), then use the free circuit shuttles.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Manama (Seef)', 'Adliya (Dining & Nightlife)', 'Juffair', 'Amwaj Islands'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in the Seef or Adliya districts of Manama to access official hotel shuttle pickups and top evening dining.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks permitted and x-rayed at security gates.',
      foodAndDrinkPolicy: 'Personal snacks and water allowed. Full international food court operating in the desert fanzone.',
      prohibitedItems: ['Alcohol', 'Glass containers', 'Drones', 'Fireworks'],
      paymentMethods: 'Bahraini Dinar (BHD), credit/debit cards, and Apple Pay accepted across all vendors.',
      packingTips: 'October nights in the desert are pleasant (25°C), but daytime sun is intense. Pack sunglasses and a light evening jacket.',
      accessibility: {
        wheelchairAccess: 'Accessible seating bays available in the Main and Batelco Grandstands.',
        parkingShuttles: 'Dedicated disabled parking next to the main entrance with accessible shuttle transport.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Carrera Cup Middle East'],
        entertainment: 'Major international headline music concerts on Friday and Saturday nights inside the circuit.'
      }
    }
  },

  // --- ROUND 17: SINGAPORE ---
  {
    slug: 'singapore-gp',
    round: 17,
    raceName: 'Singapore Grand Prix',
    dates: 'Oct 9 - 11, 2026',
    circuitName: 'Marina Bay Street Circuit',
    location: 'Marina Bay, Singapore',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://singaporegp.com.sg/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Padang / Walkabout',
        priceFromGBP: 180,
        priceFromEUR: 210,
        priceFromUSD: 230,
        description: 'Zone 4 walkabout access including the Padang concert stage and trackside viewing platforms.'
      },
      {
        category: 'Grandstand',
        name: 'Padang Grandstand',
        priceFromGBP: 420,
        priceFromEUR: 490,
        priceFromUSD: 540,
        description: 'View the cars hitting 275 km/h along St Andrew\'s Road before heavy braking at Turn 10.'
      },
      {
        category: 'Grandstand',
        name: 'Pit Grandstand',
        priceFromGBP: 750,
        priceFromEUR: 875,
        priceFromUSD: 960,
        description: 'Prime view of the illuminated start/finish straight, pit stops, and victory fireworks.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: 1.2914, lon: 103.8640 },
    circuitTransit: {
      trainStation: 'City Hall / Promenade / Bayfront MRT',
      trainBookingUrl: 'https://www.smrt.com.sg/',
      shuttleInfo: 'The ultra-efficient MRT subway system drops fans directly at the perimeter gates. MRT runs extended hours during race weekend.',
      parkingAdvice: 'Zero parking available near the street circuit. Do not use taxis near track gates due to road closures—use the MRT.',
      gateEntryTips: 'Match your designated ticket gate to the closest MRT station (e.g., Promenade MRT for Zone 1; City Hall MRT for Zone 4).'
    },
    airports: [
      {
        code: 'SIN',
        name: 'Singapore Changi Airport',
        distanceToCircuit: '18 km',
        transitSummary: 'Take the MRT directly from Changi Airport to City Hall / Expo (30 mins) or a 20-minute taxi ride.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Marina Bay', 'Clarke Quay', 'Orchard Road', 'Bugis'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay near an MRT station on the Downtown or East-West lines for a fast commute to the track gates.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Bags allowed and searched at all MRT gate exits. Clear bags speed up entry.',
      foodAndDrinkPolicy: 'No outside food or drinks permitted. Empty reusable water bottles allowed with filling stations inside.',
      prohibitedItems: ['Selfie sticks longer than 1m', 'Glass bottles', 'Laser pointers', 'Flares'],
      paymentMethods: '100% Cashless. Visa, Mastercard, NETS, GrabPay, and Apple Pay accepted.',
      packingTips: 'High tropical humidity (90%+) and heat at night. Wear light, breathable clothing and pack a poncho for sudden rain.',
      accessibility: {
        wheelchairAccess: 'Dedicated accessible viewing platforms with companion seating in Zones 1, 3, and 4.',
        parkingShuttles: 'Wheelchair-accessible route assistance provided from City Hall and Promenade MRT stations.'
      },
      weekendExtras: {
        supportSeries: ['F1 Sprint Race', 'Porsche Carrera Cup Asia', 'TSS The Super Series'],
        entertainment: 'World-renowned music festival on the Padang Stage featuring global A-list headliners.'
      }
    }
  },

  // --- ROUND 18: UNITED STATES (AUSTIN) ---
  {
    slug: 'united-states-gp',
    round: 18,
    raceName: 'United States Grand Prix',
    dates: 'Oct 23 - 25, 2026',
    circuitName: 'Circuit of the Americas (COTA)',
    location: 'Austin, Texas, USA',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.circuitoftheamericas.com/f1/tickets',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Grounds Pass',
        priceFromGBP: 240,
        priceFromEUR: 280,
        priceFromUSD: 305,
        description: 'Access to the grassy hillsides around Turn 1, Turn 9, and the Turn 19 stadium complex.'
      },
      {
        category: 'Grandstand',
        name: 'Turn 1 Grandstand',
        priceFromGBP: 550,
        priceFromEUR: 640,
        priceFromUSD: 700,
        description: 'Iconic view atop the 133-foot hill looking down into the first-corner hairpin.'
      },
      {
        category: 'Grandstand',
        name: 'Turn 15 Grandstand',
        priceFromGBP: 495,
        priceFromEUR: 580,
        priceFromUSD: 635,
        description: 'Prime view of the heavy braking zone after the 1km back straight and the technical stadium section.'
      }
    ],
    vendors: [
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' },
      { name: 'Ticketmaster', type: 'Official Ticketing', url: 'https://www.ticketmaster.com/' }
    ],
    coordinates: { lat: 30.1328, lon: -97.6411 },
    circuitTransit: {
      shuttleInfo: 'Official COTA Shuttles run continuously from Downtown Austin (Waterloo Park) and Travis County Expo Center.',
      shuttleBookingUrl: 'https://www.circuitoftheamericas.com/',
      parkingAdvice: 'On-site parking lots (Lot A, F, T) require pre-paid passes and have heavy post-race traffic. Downtown shuttles use dedicated bus lanes.',
      gateEntryTips: 'Main Grandstand and Turn 1 have the largest crowds; Grand Plaza gate is best for Turn 15.'
    },
    airports: [
      {
        code: 'AUS',
        name: 'Austin-Bergstrom International Airport',
        distanceToCircuit: '15 km',
        transitSummary: 'Closest airport. 15-minute rideshare to the track or 20 minutes to Downtown Austin.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Downtown Austin', 'South Congress (SoCo)', 'Rainey Street', 'Domain (North Austin)'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in Downtown Austin within walking distance of the Waterloo Park shuttle bus pickup and the 6th Street music scene.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Clear bags up to 12x12x6 inches recommended. Small clutches permitted. All bags searched.',
      foodAndDrinkPolicy: 'One factory-sealed plastic water bottle allowed. Famous Texas barbecue stalls on site.',
      prohibitedItems: ['Glass containers', 'Weapons of any kind', 'Drones', 'Hard coolers'],
      paymentMethods: '100% Cashless venue. Major credit cards, Apple Pay, and Google Pay accepted.',
      packingTips: 'Texas autumn weather is sunny and warm (26-30°C). Bring comfortable walking boots—COTA is massive and hilly.',
      accessibility: {
        wheelchairAccess: 'ADA viewing platforms located at Turn 1, Main Grandstand, Turn 15, and the Superstage.',
        parkingShuttles: 'Dedicated ADA tram carts operate inside the perimeter connecting grandstand hubs.'
      },
      weekendExtras: {
        supportSeries: ['F1 Sprint Race', 'Masters Historic Racing', 'Porsche Carrera Cup North America'],
        entertainment: 'Massive Superstage concerts on Friday and Saturday nights on the back straight infield.'
      }
    }
  },

  // --- ROUND 19: MEXICO ---
  {
    slug: 'mexico-city-gp',
    round: 19,
    raceName: 'Mexico City Grand Prix',
    dates: 'Oct 30 - Nov 1, 2026',
    circuitName: 'Autódromo Hermanos Rodríguez',
    location: 'Mexico City, Mexico',
    ticketStatus: 'Sold Out',
    officialBoxOfficeUrl: 'https://www.mexicogp.mx/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'General Admission (Grada 2A)',
        priceFromGBP: 140,
        priceFromEUR: 165,
        priceFromUSD: 180,
        description: 'View of the fast sweeping straight heading into Turn 4.'
      },
      {
        category: 'Grandstand',
        name: 'Foro Sol Sur / Norte (Stadium)',
        priceFromGBP: 360,
        priceFromEUR: 420,
        priceFromUSD: 460,
        description: 'The legendary stadium section with the loudest atmosphere, podium view, and post-race DJ set.'
      },
      {
        category: 'Grandstand',
        name: 'Main Grandstand (Grada 1/2)',
        priceFromGBP: 480,
        priceFromEUR: 560,
        priceFromUSD: 610,
        description: 'Covered seating facing the starting grid and team garages.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'Ticketmaster Mexico', type: 'Official Ticketing', url: 'https://www.ticketmaster.com.mx/' }
    ],
    coordinates: { lat: 19.4042, lon: -99.0907 },
    circuitTransit: {
      trainStation: 'Ciudad Deportiva / Puebla (Metro Line 9)',
      trainBookingUrl: 'https://www.metro.cdmx.gob.mx/',
      shuttleInfo: 'Metro Line 9 stops right in front of the circuit gates. Internal circuit ticket shuttles circle the perimeter.',
      parkingAdvice: 'No public parking available at the venue. Metro Line 9 or Metrobús Line 2 are the most efficient transit methods.',
      gateEntryTips: 'Check your ticket color zone (Brown, Blue, Green, Yellow) to exit at the correct metro station.'
    },
    airports: [
      {
        code: 'MEX',
        name: 'Mexico City International Airport (Benito Juárez)',
        distanceToCircuit: '5 km',
        transitSummary: 'Extremely close. 10-minute taxi ride to the circuit or 20 minutes to Roma/Condesa.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Roma Norte', 'Condesa', 'Polanco', 'Reforma'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in Roma Norte or Condesa for world-class dining, cocktail bars, and an easy 20-minute Metro ride to the track.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Small backpacks only (max 30x30cm). Bag check queues can be thorough.',
      foodAndDrinkPolicy: 'No outside food or drinks permitted. Tacos and Mexican beers served in all fan zones.',
      prohibitedItems: ['Glass bottles', 'Selfie sticks', 'Umbrellas', 'Laser pointers', 'Drones'],
      paymentMethods: 'Cashless Cashless smart card system used for food and beverages. Cards accepted for merchandise.',
      packingTips: 'High altitude (2,240m) means rapid sunburn and dry air. Pack sunscreen, sunglasses, and drink extra water.',
      accessibility: {
        wheelchairAccess: 'Accessible platforms available in Main Grandstand and Foro Sol with elevator access.',
        parkingShuttles: 'Special accessibility transport vans operate along the inner perimeter road.'
      },
      weekendExtras: {
        supportSeries: ['Super Copa GTM', 'Freightliner Legends Cup'],
        entertainment: 'Legendary post-race podium party inside the Foro Sol stadium with top international DJs.'
      }
    }
  },

  // --- ROUND 20: BRAZIL ---
  {
    slug: 'sao-paulo-gp',
    round: 20,
    raceName: 'São Paulo Grand Prix',
    dates: 'Nov 6 - 8, 2026',
    circuitName: 'Autódromo de Interlagos',
    location: 'São Paulo, Brazil',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://f1saopaulo.com.br/en/',
    ticketTiers: [
      {
        category: 'Grandstand',
        name: 'Sector G',
        priceFromGBP: 140,
        priceFromEUR: 165,
        priceFromUSD: 180,
        description: 'Located at the end of the Reta Oposta back straight with passionate local fan atmosphere.'
      },
      {
        category: 'Grandstand',
        name: 'Sector M (Senna \'S\')',
        priceFromGBP: 420,
        priceFromEUR: 490,
        priceFromUSD: 540,
        description: 'Prime view of the iconic downhill Senna \'S\' chicane and primary overtaking zone.'
      },
      {
        category: 'Grandstand',
        name: 'Sector B (Pit Straight)',
        priceFromGBP: 495,
        priceFromEUR: 580,
        priceFromUSD: 635,
        description: 'Covered grandstand facing the pit lane, starting grid, and podium.'
      }
    ],
    vendors: [
      { name: 'Eventim Brasil', type: 'Official Ticketing', url: 'https://www.eventim.com.br/' },
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: -23.7036, lon: -46.6997 },
    circuitTransit: {
      trainStation: 'Autódromo Station (CPTM Line 9 - Emerald)',
      trainBookingUrl: 'https://www.cptm.sp.gov.br/',
      shuttleInfo: 'Express GP trains run directly from Pinheiros station to Autódromo station. Circuit is a 10-minute walk from the station.',
      parkingAdvice: 'No public parking available in the Interlagos neighborhood. CPTM Line 9 train is the safest and fastest transit.',
      gateEntryTips: 'Follow color-coded pedestrian pathways from the station to your gate (Sector G/M/B).'
    },
    airports: [
      {
        code: 'GRU',
        name: 'São Paulo/Guarulhos International Airport',
        distanceToCircuit: '55 km',
        transitSummary: 'Take airport train to Luz station, connect to Line 4 and Line 9 to Interlagos, or pre-book rideshare.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'CGH',
        name: 'Congonhas Airport (Domestic)',
        distanceToCircuit: '18 km',
        transitSummary: 'Closest airport. 30-minute Uber/taxi to central São Paulo hotels.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Itaim Bibi', 'Pinheiros', 'Jardins', 'Vila Madalena'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in Pinheiros or Itaim Bibi along CPTM Line 9 for safe, direct train access to Autódromo station.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks allowed and checked at entry. Keep valuables secure on the walk to the station.',
      foodAndDrinkPolicy: 'No outside food or drinks permitted. Traditional Brazilian snacks and beers available on site.',
      prohibitedItems: ['Glass bottles', 'Helmets', 'Umbrellas with pointed tips', 'Flares / Smoke bombs'],
      paymentMethods: 'Credit and debit cards (Visa/Mastercard) and Brazilian PIX accepted.',
      packingTips: 'Interlagos is famous for sudden weather changes. Bring both strong sun protection and heavy rain ponchos.',
      accessibility: {
        wheelchairAccess: 'Accessible platforms located at Sector M and Sector B with ramp access.',
        parkingShuttles: 'Designated accessible transport shuttles operate from Autódromo station directly to accessible gates.'
      },
      weekendExtras: {
        supportSeries: ['F1 Sprint Race', 'Porsche Carrera Cup Brasil', 'F4 Brazilian Championship'],
        entertainment: 'Live samba performances and the world-famous track invasion at the Senna S after the race.'
      }
    }
  },

  // --- ROUND 21: LAS VEGAS ---
  {
    slug: 'las-vegas-gp',
    round: 21,
    raceName: 'Las Vegas Grand Prix',
    dates: 'Nov 19 - 21, 2026',
    circuitName: 'Las Vegas Strip Circuit',
    location: 'Las Vegas, Nevada, USA',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://www.f1lasvegasgp.com/tickets',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Flamingo Zone (GA)',
        priceFromGBP: 280,
        priceFromEUR: 325,
        priceFromUSD: 350,
        description: 'Access to the Flamingo interactive zone with views of the cars accelerating towards the Strip.'
      },
      {
        category: 'Grandstand',
        name: 'T-Mobile Sphere Grandstand',
        priceFromGBP: 750,
        priceFromEUR: 875,
        priceFromUSD: 950,
        description: 'Spectacular views of Turns 5 through 9 surrounding the glowing MSG Sphere.'
      },
      {
        category: 'Grandstand',
        name: 'Heineken Silver Main Grandstand',
        priceFromGBP: 1200,
        priceFromEUR: 1395,
        priceFromUSD: 1500,
        description: 'Overlooking the multi-story pit building, starting grid, and opening corner action.'
      }
    ],
    vendors: [
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' },
      { name: 'Ticketmaster', type: 'Official Ticketing', url: 'https://www.ticketmaster.com/' }
    ],
    coordinates: { lat: 36.1147, lon: -115.1730 },
    circuitTransit: {
      trainStation: 'Las Vegas Monorail',
      trainBookingUrl: 'https://www.lvmonorail.com/',
      shuttleInfo: 'The Las Vegas Monorail operates 24/7 along the east side of the Strip, connecting major resorts directly to grandstand bridges.',
      parkingAdvice: 'Strip road closures make driving impossible. Use the Monorail or walk via resort pedestrian bridges.',
      gateEntryTips: 'Check your zone-specific pedestrian bridge access to avoid unnecessary Strip detours.'
    },
    airports: [
      {
        code: 'LAS',
        name: 'Harry Reid International Airport',
        distanceToCircuit: '5 km',
        transitSummary: 'Minutes from the Strip. Take taxi or rideshare directly to your resort hotel.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Central Strip (Bellagio, Caesars, Flamingo)', 'South Strip', 'Downtown Las Vegas (Fremont)'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Book a hotel inside the track perimeter (such as Horseshoe, Paris, or Planet Hollywood) for direct walking access to your grandstand.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Clear bags only (max 12x12x6 inches). Small clutch bags (4.5x6.5 inches) permitted.',
      foodAndDrinkPolicy: 'All food and non-alcoholic beverages are all-inclusive with most grandstand tickets.',
      prohibitedItems: ['Non-clear bags', 'Weapons', 'Glass containers', 'Drones', 'Professional video cameras'],
      paymentMethods: '100% Cashless. Credit cards, Apple Pay, and Google Pay accepted throughout.',
      packingTips: 'Desert November nights are very cold (8-12°C). Pack thermal layers, a warm winter coat, beanie, and gloves for late-night sessions.',
      accessibility: {
        wheelchairAccess: 'Accessible platforms available in all ticket zones with elevator and ADA bridge access.',
        parkingShuttles: 'Dedicated ADA shuttles operate from designated resort pickup points.'
      },
      weekendExtras: {
        supportSeries: ['F1 Academy', 'Ferrari Challenge'],
        entertainment: 'Nightly opening ceremony and A-list concerts on the T-Mobile stage throughout the weekend.'
      }
    }
  },

  // --- ROUND 22: QATAR ---
  {
    slug: 'qatar-gp',
    round: 22,
    raceName: 'Qatar Grand Prix',
    dates: 'Nov 27 - 29, 2026',
    circuitName: 'Lusail International Circuit',
    location: 'Lusail (Doha), Qatar',
    ticketStatus: 'On Sale',
    officialBoxOfficeUrl: 'https://tickets.lcsc.qa/',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Lusail Hill (GA)',
        priceFromGBP: 95,
        priceFromEUR: 110,
        priceFromUSD: 120,
        description: 'Elevated green hill viewing looking over the high-speed Turn 1 and apexes of Sector 1.'
      },
      {
        category: 'Grandstand',
        name: 'North Grandstand',
        priceFromGBP: 280,
        priceFromEUR: 325,
        priceFromUSD: 355,
        description: 'Prime view of Turn 1 heavy braking, pit exit, and the opening straight.'
      },
      {
        category: 'Grandstand',
        name: 'Main Grandstand',
        priceFromGBP: 395,
        priceFromEUR: 460,
        priceFromUSD: 505,
        description: 'Facing the illuminated pit boxes, starting grid, and podium celebration.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: 25.4900, lon: 51.4542 },
    circuitTransit: {
      trainStation: 'Lusail QNB Metro Station (Red Line)',
      trainBookingUrl: 'https://www.qr.com.qa/',
      shuttleInfo: 'Free shuttle buses run continuously between Lusail QNB Metro station and the circuit gates.',
      parkingAdvice: 'Extensive free on-site parking for ticket holders. Follow directional road signs from Al Khor Coastal Road.',
      gateEntryTips: 'Main entrance is directly adjacent to the Lusail Cultural Village and F1 Fanzone.'
    },
    airports: [
      {
        code: 'DOH',
        name: 'Hamad International Airport',
        distanceToCircuit: '40 km',
        transitSummary: 'Take the Red Line Metro directly from the airport terminal to Lusail QNB station without changing lines.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Lusail Marina', 'The Pearl-Qatar', 'West Bay (Doha)', 'Souq Waqif'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay in Lusail or West Bay along the Metro Red Line for a direct transit route to the shuttle hub.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard backpacks permitted and x-rayed at security checkpoints.',
      foodAndDrinkPolicy: 'Personal water bottles and light snacks allowed. Extensive Middle Eastern and international food courts on site.',
      prohibitedItems: ['Alcohol', 'Glass bottles', 'Drones', 'Fireworks'],
      paymentMethods: 'Qatari Riyal (QAR), contactless cards, and Apple Pay accepted across all concessions.',
      packingTips: 'Late November evenings are pleasant (22-26°C under floodlights). Modest resort wear is recommended.',
      accessibility: {
        wheelchairAccess: 'Accessible platforms located in the Main and North Grandstands.',
        parkingShuttles: 'Dedicated PRM parking with accessible buggy transit to grandstand elevators.'
      },
      weekendExtras: {
        supportSeries: ['F1 Sprint Race', 'F1 Academy', 'Porsche Carrera Cup Middle East'],
        entertainment: 'Post-race concerts featuring international headliners at the Lusail Circuit concert stage.'
      }
    }
  },

  // --- ROUND 23: ABU DHABI ---
  {
    slug: 'abu-dhabi-gp',
    round: 23,
    raceName: 'Abu Dhabi Grand Prix',
    dates: 'Dec 4 - 6, 2026',
    circuitName: 'Yas Marina Circuit',
    location: 'Yas Island (Abu Dhabi), UAE',
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://www.yasmarinacircuit.com/en/f1-tickets',
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'Abu Dhabi Hill (GA)',
        priceFromGBP: 220,
        priceFromEUR: 255,
        priceFromUSD: 280,
        description: 'Open grass hill in the centre of the circuit with views of the back straight and marina turns.'
      },
      {
        category: 'Grandstand',
        name: 'North Grandstand',
        priceFromGBP: 480,
        priceFromEUR: 560,
        priceFromUSD: 610,
        description: 'Overlooking the hairpin before the long straight, with views of the Yas Marina hotel.'
      },
      {
        category: 'Grandstand',
        name: 'Main Grandstand',
        priceFromGBP: 580,
        priceFromEUR: 675,
        priceFromUSD: 740,
        description: 'Covered seating facing the starting grid, pit lane, and the championship trophy presentation.'
      }
    ],
    vendors: [
      { name: 'P1 Travel', type: 'Official Partner', url: 'https://www.p1travel.com/en-gb' },
      { name: 'F1 Experiences', type: 'Official Partner', url: 'https://f1experiences.com/' }
    ],
    coordinates: { lat: 24.4672, lon: 54.6031 },
    circuitTransit: {
      shuttleInfo: 'Free Yas Express shuttle buses connect Yas Mall, Ferrari World, and all Yas Island hotels directly to the circuit gates.',
      shuttleBookingUrl: 'https://www.yasisland.com/',
      parkingAdvice: 'Parking passes (Yas Mall or Grandstand lots) must be validated with ticket barcodes. Free shuttles run from all lots.',
      gateEntryTips: 'Gate entry includes access to Etihad Park post-race concerts. Use Gate 20 for North Grandstand or Gate 1 for Main Grandstand.'
    },
    airports: [
      {
        code: 'AUH',
        name: 'Zayed International Airport (Abu Dhabi)',
        distanceToCircuit: '10 km',
        transitSummary: '10-minute taxi ride directly to Yas Island resorts and circuit gates.',
        bookingUrl: 'https://www.skyscanner.net/'
      },
      {
        code: 'DXB',
        name: 'Dubai International Airport',
        distanceToCircuit: '120 km',
        transitSummary: 'Take a direct 75-minute taxi or scheduled airport coach from Dubai directly to Yas Island.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Yas Island Resorts', 'Saadiyat Island', 'Abu Dhabi Corniche', 'Dubai Marina (Commutable)'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Stay on Yas Island for walk-to-track luxury, or stay in Abu Dhabi city along the Corniche for budget-friendly luxury hotels.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard bags permitted and x-rayed at perimeter security gates.',
      foodAndDrinkPolicy: 'Personal snacks and sealed water bottles allowed. Full international restaurants inside Yas Mall and fanzones.',
      prohibitedItems: ['Alcohol', 'Glass bottles', 'Drones', 'Professional video recording equipment'],
      paymentMethods: 'UAE Dirhams (AED), contactless bank cards, and Apple Pay accepted everywhere.',
      packingTips: 'December weather in Abu Dhabi is sunny (26°C day, 20°C twilight). Pack smart-casual resort wear for evening superyacht parties.',
      accessibility: {
        wheelchairAccess: 'Accessible platforms with companion seating in Main, West, and North Grandstands.',
        parkingShuttles: 'Dedicated PRM parking with accessible buggy service across Yas Marina.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'F4 UAE Championship'],
        entertainment: 'World-famous Yasalam After-Race Concerts at Etihad Park featuring four nights of global superstar artists.'
      }
    }
  }
];