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
        name: 'Prato',
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
      tips: 'Monza town sells out a year in advance. Staying near Milano Centrale or Porta Garibaldi stations provides the best balance of nightlife and a quick, 15-minute direct train to the track.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Max capacity 15 litres. Backpacks are searched thoroughly. No hard-sided coolers.',
      foodAndDrinkPolicy: 'You may bring your own food and plastic water bottles (max 500ml, caps removed at entry). No glass or alcohol.',
      prohibitedItems: ['Flares / Smoke Bombs', 'Power banks over 300g', 'Umbrellas with metal points', 'Bicycles / Scooters'],
      paymentMethods: 'Tokens are no longer required! Contactless cards (Visa/Mastercard) and Apple/Google Pay are widely accepted at all fan zones.',
      packingTips: 'Late summer in Italy is incredibly hot. Pack sunscreen, a cap, and comfortable walking shoes—the walk through the royal park from the gates to the grandstands is long.',
      accessibility: {
        wheelchairAccess: 'Dedicated platforms at the First Chicane and Parabolica. Tickets must be requested directly through the circuit.',
        parkingShuttles: 'Special PRM parking is available near Gate A, with accessible golf carts assisting transit inside the park.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2', 'Formula 3', 'Porsche Supercup'],
        entertainment: 'The F1 Fanzone features nightly DJs, driver interviews, and the legendary track invasion after Sunday’s checkered flag.'
      }
    }
  },
  {
    slug: 'madrid-gp',
    round: 14,
    raceName: 'Spanish Grand Prix',
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
      shuttleInfo: 'As an integrated street circuit, the metro stops directly at the IFEMA entrance gates. No shuttle required.',
      parkingAdvice: 'No public parking is available at the circuit. Ticket holders must use public transit or designated rideshare drop-offs.',
      gateEntryTips: 'Download your digital tickets to your wallet before arriving. The metro station drops you directly at Gate 1.'
    },
    airports: [
      {
        code: 'MAD',
        name: 'Adolfo Suárez Madrid–Barajas Airport',
        distanceToCircuit: '5 km',
        transitSummary: 'Incredibly close. Only 2 stops away from the circuit on Metro Line 8, or a 10-minute taxi ride.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Salamanca', 'Malasaña', 'Chueca', 'Centro (Sol)'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Since the track is on the Metro Line 8, staying anywhere in central Madrid (like Salamanca or Centro) gives you a seamless 25-minute commute to the track alongside world-class tapas and nightlife.'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Small bags only (max 20L). All bags will be scanned at the IFEMA security checkpoints.',
      foodAndDrinkPolicy: 'Sealed water bottles permitted. Extensive food halls operate inside the IFEMA pavilions.',
      prohibitedItems: ['Alcohol', 'Glass containers', 'Professional camera tripods', 'Drones'],
      paymentMethods: '100% Cashless circuit. All bars, merchandise stalls, and food vendors only accept card or mobile payments.',
      packingTips: 'Madrid in September is still very warm (often 30°C+). Bring sunglasses, but also a light layer as the indoor IFEMA pavilions are heavily air-conditioned.',
      accessibility: {
        wheelchairAccess: 'Excellent accessibility due to the modern IFEMA convention center infrastructure. All grandstands feature elevator access.',
        parkingShuttles: 'Dedicated blue badge parking is available in IFEMA Car Park Yellow.'
      },
      weekendExtras: {
        supportSeries: ['F1 Academy', 'Porsche Carrera Cup'],
        entertainment: 'The circuit features an indoor/outdoor design, with the main fan zone hosting massive indoor concerts and sim-racing arenas.'
      }
    }
  },
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
        description: 'Affordable grounds pass allowing you to roam the fan zones and catch glimpses of the street circuit.'
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
      gateEntryTips: 'Gates are spread throughout the city. If your ticket is in the Old City (Icherisheher), use the dedicated northern gates.'
    },
    airports: [
      {
        code: 'GYD',
        name: 'Heydar Aliyev International Airport',
        distanceToCircuit: '25 km',
        transitSummary: 'The Aero Express bus runs directly to 28 May Metro station, or it is a cheap 30-minute Uber/Bolt ride into the city.',
        bookingUrl: 'https://www.skyscanner.net/'
      }
    ],
    accommodation: {
      recommendedAreas: ['Baku Boulevard', 'Old City (Icherisheher)', 'Fountain Square'],
      bookingUrl: 'https://www.booking.com/',
      tips: 'Book a hotel inside the track perimeter (like the Hilton or JW Marriott) for ultimate convenience, but ensure you arrive before the road closures take effect on Thursday morning!'
    },
    knowBeforeYouGo: {
      bagPolicy: 'Standard bag policy applies. Bags will be x-rayed at all city-centre security cordons.',
      foodAndDrinkPolicy: 'Local food is exceptional and cheap inside the fan zones. Strictly no alcohol permitted through the gates.',
      prohibitedItems: ['Laser pointers', 'Large flags with poles', 'Glass bottles', 'Stepladders'],
      paymentMethods: 'Both cash (Azerbaijani Manat - AZN) and international cards are accepted. It is wise to carry some AZN for smaller stalls.',
      packingTips: 'September in Baku is pleasant and breezy ("The City of Winds"). Pack comfortable walking shoes as the street circuit footprint is massive.',
      accessibility: {
        wheelchairAccess: 'Accessible platforms are available at the Absheron and Azneft grandstands.',
        parkingShuttles: 'Taxis can drop PRM guests at specific vehicle checkpoints near the Boulevard.'
      },
      weekendExtras: {
        supportSeries: ['Formula 2'],
        entertainment: 'Baku always hosts massive international music acts at the Crystal Hall on Friday, Saturday, and Sunday nights.'
      }
    }
  }
];