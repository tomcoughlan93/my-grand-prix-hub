// src/data/travelAndTickets.ts

export interface TicketTier {
  category: 'General Admission' | 'Grandstand' | 'Premium' | 'Hospitality';
  name: string;
  priceFromEUR: number;
  priceFromGBP: number; 
  priceFromUSD: number; 
  description: string;
}

export interface Airport {
  name: string;
  code: string;
  distanceToCircuit: string;
  transitSummary: string;
  bookingUrl?: string; 
}

export interface GrandPrixLogistics {
  slug: string;
  round: number;
  raceName: string;
  circuitName: string;
  location: string;
  dates: string;
  
  // NEW: Coordinates for the Journey Planner integration
  coordinates?: {
    lat: number;
    lon: number;
  };
  
  // Ticketing Data
  ticketStatus: 'On Sale' | 'Selling Fast' | 'Sold Out' | 'Presale' | 'Waitlist';
  officialBoxOfficeUrl: string;
  vendors: {
    name: string;
    type: 'Official Promoter' | 'Authorised Reseller' | 'VIP Travel';
    url: string;
  }[];
  ticketTiers: TicketTier[];

  // Travel Data
  airports: Airport[];
  accommodation: {
    recommendedAreas: string[];
    tips: string;
    bookingUrl?: string; 
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
  
  // Know Before You Go
  knowBeforeYouGo: {
    prohibitedItems: string[];
    bagPolicy: string;
    foodAndDrinkPolicy: string;
    packingTips: string;
    paymentMethods: string;
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

// Example Data Array
export const raceLogisticsData: GrandPrixLogistics[] = [
  {
    slug: 'dutch-grand-prix',
    round: 12,
    raceName: 'Dutch Grand Prix',
    circuitName: 'Circuit Park Zandvoort',
    location: 'Zandvoort, Netherlands',
    dates: 'Aug 21 - 23, 2026',
    
    // Exact circuit coordinates added here
    coordinates: {
      lat: 52.3888,
      lon: 4.54092
    },
    
    ticketStatus: 'Selling Fast',
    officialBoxOfficeUrl: 'https://dutchgp.com/en/tickets/',
    vendors: [
      { name: 'F1 Experiences', type: 'VIP Travel', url: 'https://f1experiences.com/2026-dutch-grand-prix' },
      { name: 'P1 Travel', type: 'Authorised Reseller', url: 'https://www.p1travel.com/en/organizer/grand-prix-the-netherlands' },
      { name: 'GooTickets', type: 'Authorised Reseller', url: 'https://www.gootickets.com/en/7-formula-1/42247-netherlands/' }
    ],
    ticketTiers: [
      {
        category: 'General Admission',
        name: 'GA Dune Access',
        priceFromEUR: 175,
        priceFromGBP: 150,
        priceFromUSD: 190,
        description: 'Access to the rolling dunes around the track. Bring comfortable walking shoes and arrive early to claim a good spot.'
      },
      {
        category: 'Grandstand',
        name: 'Arena Grandstand',
        priceFromEUR: 450,
        priceFromGBP: 385,
        priceFromUSD: 490,
        description: 'Numbered seating in the stadium section (Turns 11-12) featuring a DJ, immense atmosphere, and big screen views.'
      },
      {
        category: 'Premium',
        name: 'Tarzan Incline (T1)',
        priceFromEUR: 620,
        priceFromGBP: 530,
        priceFromUSD: 675,
        description: 'Premium covered seating overlooking the main overtaking zone at the end of the start/finish straight.'
      }
    ],

    airports: [
      {
        name: 'Amsterdam Airport Schiphol',
        code: 'AMS',
        distanceToCircuit: '35 km',
        transitSummary: 'Direct train to Amsterdam Centraal or Sloterdijk, then connect to Zandvoort aan Zee (approx. 45-60 mins total).',
        bookingUrl: 'https://www.skyscanner.net/flights-to/ams/cheap-flights-to-amsterdam-schiphol-airport.html'
      }
    ],
    accommodation: {
      recommendedAreas: ['Amsterdam City Center', 'Haarlem', 'Zandvoort (if booked well in advance)'],
      tips: 'Haarlem is the perfect middle ground—cheaper than Amsterdam, highly walkable, and only a 10-minute direct train ride to the circuit gates.',
      bookingUrl: 'https://www.booking.com/city/nl/haarlem.html'
    },
    circuitTransit: {
      trainStation: 'Zandvoort aan Zee',
      trainBookingUrl: 'https://www.ns.nl/en',
      shuttleInfo: 'Extensive regional bus network operates dedicated F1 express lines from surrounding towns during the weekend.',
      shuttleBookingUrl: 'https://dutchgp.com/en/transport/',
      parkingAdvice: 'Zandvoort is closed to non-resident cars during the GP weekend. Use Park & Ride (P+R) facilities in Amsterdam or cycle (Park & Bike).',
      parkingBookingUrl: 'https://dutchgp.com/en/park-and-ride/',
      gateEntryTips: 'The circuit is entirely digital; the official Dutch GP app is strictly required to display your entry barcodes.'
    },
    knowBeforeYouGo: {
      prohibitedItems: ['Flares & Smoke Bombs', 'Umbrellas', 'Glass Bottles', 'Professional Camera Lenses (>30cm)', 'Chairs/Stools (except GA)'],
      bagPolicy: 'Maximum A4 size (approx. 15L capacity). Bags will be thoroughly searched at the gates.',
      foodAndDrinkPolicy: 'You may bring a maximum of 1 original sealed plastic water bottle (max 0.5L) per person. Small snacks are permitted. Alcohol is strictly forbidden at entry.',
      packingTips: 'The circuit is built on sand dunes with steep inclines—wear proper walking shoes. Weather on the coast changes rapidly; pack a rain poncho, sunscreen, and ear protection.',
      paymentMethods: '100% Cashless. All food and beverage vendors only accept PIN/Credit Card (Maestro, V Pay, Mastercard, Visa). A recycle token system is used for cups and cans.',
      accessibility: {
        wheelchairAccess: 'Dedicated viewing platforms are located at the Tarzan Grandstand and Arena. Companions require a separate ticket.',
        parkingShuttles: 'Special PRM (Persons with Reduced Mobility) parking and shuttle passes must be requested in advance via the official Dutch GP portal.'
      },
      weekendExtras: {
        supportSeries: ['F1 Academy', 'Porsche Supercup'],
        entertainment: 'Famous for its party atmosphere, expect a massive Fanzone with a Ferris wheel, daily live DJs, and driver appearances on the main stage.'
      }
    }
  }
];