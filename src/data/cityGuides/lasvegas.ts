import type { CityGuide } from '../types';

export const lasvegas: CityGuide = {
    slug: 'las-vegas',
    city: 'Las Vegas',
    raceSlug: 'las-vegas-gp',
    race: 'Las Vegas Grand Prix',
    circuitName: 'Las Vegas Strip Circuit',
    country: 'United States',
    heroImage: 'https://images.unsplash.com/photo-1605810730434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop',
    intro: 'F1’s newest spectacle is a neon-soaked, high-speed blast down the most famous boulevard in the world. The Las Vegas Grand Prix is less of a traditional race and more of a massive, multi-day entertainment event integrated directly into the city\'s mega-resorts.',
    quickFacts: {
      currency: 'US Dollar (USD)',
      language: 'English',
      transitCard: 'RTC App / Monorail Tickets',
      airport: 'Harry Reid Int. Airport (LAS)'
    },
    trackCommuteSummary: {
      title: 'The Strip ➔ Grandstands',
      time: '15-45 mins (Walk)',
      frequency: 'Anytime',
      details: 'Most fans walk to their zones using the casino interiors and newly constructed temporary pedestrian bridges. The Las Vegas Monorail is highly recommended to bypass street closures.'
    },
    morningSupplies: {
      location: 'CVS or Walgreens (On the Strip)',
      tip: 'Buy drinks and snacks at the pharmacies. Buying water inside the casinos or at the track will cost you a fortune.'
    },
    cityTransport: {
      rideshare: 'Uber/Lyft are available at designated casino pickups, but traffic during race weekend makes them very slow. Walk or use the Monorail.',
      nightTransit: 'Vegas is a 24-hour city. Taxis and walking are the primary late-night options.'
    },
    practicalities: {
      tapWater: 'Safe, but tastes heavily chlorinated. Bottled water is preferred.',
      tipping: 'Tipping is mandatory and aggressive in Vegas. 20% minimum at bars and restaurants. Tip casino staff $1-2 per drink.',
      powerPlugs: 'Type A / B (120V)'
    },
    weatherAndVibe: {
      climate: 'It is a desert in November at night. It will be freezing. Do not let the palm trees fool you—bring a heavy coat, beanie, and layers for the grandstands.',
      dressCode: 'Glamorous but warm. High-end restaurants enforce dress codes, but trackside is all about staying warm.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Evening (Practice 1 & 2)',
        title: 'The Neon Debut',
        activity: 'Practice sessions run late into the night. Find your grandstand early, navigate the bridges, and watch the cars hit 215mph down the Strip for the first time.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Qualifying)',
        title: 'High-Stakes Grid',
        activity: 'Qualifying starts at midnight. Spend your evening grabbing a premium dinner at a casino resort before heading to the track to watch the shootout.'
      },
      {
        day: 'Saturday',
        timing: 'Night (The Grand Prix)',
        title: 'Saturday Night Lights',
        activity: 'The race takes place on Saturday night at 10 PM. Enjoy the pre-race driver introductions and the spectacular drone shows at the MSG Sphere.'
      },
      {
        day: 'Sunday',
        timing: 'All Day',
        title: 'Recovery & Entertainment',
        activity: 'Since the race was Saturday, Sunday is your day to sleep in, hit a casino buffet, or catch a world-class Cirque du Soleil show.'
      },
      {
        day: 'Monday',
        timing: 'Morning',
        title: 'Departures',
        activity: 'Grab a coffee and hit the airport early. LAS gets incredibly congested on the Monday morning after a major event.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "Vegas has infinite entertainment options outside of racing.",
      culture: [
        { name: "The MSG Sphere", desc: "Book tickets to experience the mind-bending internal display of the Sphere." }
      ],
      motorsport: [
        { name: "Exotics Racing", desc: "High-speed indoor karting located just off the strip to settle bets with your friends." }
      ]
    },
    neighborhoods: [
      {
        name: 'Center Strip (Flamingo to Bellagio)',
        vibe: 'Heart of the Action',
        commuteTime: '20m (Walk)',
        transitRoute: 'Pedestrian Bridges to Track',
        desc: 'The best place to stay to minimize walking and avoid relying on transport. You are in the centre of the track layout.',
        bookingUrl: 'https://www.booking.com/district/us/las-vegas/las-vegas-strip.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'Gordon Ramsay Burger',
        type: 'Premium Burgers',
        desc: 'Located in Planet Hollywood. Exceptional food right in the middle of the Strip.',
        mapUrl: 'http://googleusercontent.com/maps.google.com/lv1'
      }
    ],
    watchParties: [
      {
        name: 'Casino Sportsbooks',
        type: 'Betting & Viewing',
        desc: 'Massive venues like the Circa Sportsbook or Caesars Palace will show the race on colossal screens with full audio.'
      }
    ],
    sightseeing: [
      {
        name: 'High Roller Observation Wheel',
        timeSlot: 'Sunset',
        desc: 'Ride the massive wheel at the LINQ for panoramic views of the entire circuit layout.',
        ticketUrl: 'https://www.caesars.com/linq/things-to-do/attractions/high-roller'
      }
    ]
  }