import type { CityGuide } from '../types';

export const london: CityGuide = {
    slug: 'london',
    city: 'London',
    raceSlug: 'british-gp',
    race: 'British Grand Prix',
    circuitName: 'Silverstone Circuit',
    country: 'United Kingdom',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59693e0cd156?q=80&w=1200&auto=format&fit=crop',
    intro: 'While Silverstone is nestled in the Northamptonshire countryside, London serves as the ultimate logistical base. Fans can combine the unparalleled pub culture, West End entertainment, and historic sights of the capital with the high-speed rail links that shoot you up to the circuit in under an hour.',
    quickFacts: {
      currency: 'Pound Sterling (£)',
      language: 'English',
      transitCard: 'Contactless Bank Card / Oyster Card',
      airport: 'Heathrow (LHR) / Gatwick (LGW) / Stansted (STN)'
    },
    trackCommuteSummary: {
      title: 'London Euston ➔ Silverstone',
      time: '60 mins total (Train + Shuttle)',
      frequency: 'Every 15-20 mins',
      details: 'Catch the fast Avanti West Coast train from London Euston to Milton Keynes Central (35 mins). Outside the station, jump straight onto the dedicated Stagecoach F1 shuttle buses that drop you at the Silverstone gates.'
    },
    morningSupplies: {
      location: 'M&S Simply Food / Sainsbury\'s Local (Euston Station)',
      tip: 'Grab "meal deals" (sandwich, snack, drink) and extra water before boarding the train. Trackside food queues are notoriously long.'
    },
    cityTransport: {
      rideshare: 'Uber, Bolt, and Addison Lee are everywhere. Black Cabs can be hailed on the street.',
      nightTransit: 'The Night Tube runs on Friday and Saturday nights on the Victoria, Jubilee, Central, Northern, and Piccadilly lines.'
    },
    practicalities: {
      tapWater: '100% safe to drink. Carry a reusable bottle.',
      tipping: 'A 12.5% discretionary service charge is automatically added to almost all restaurant bills. No need to tip extra in pubs.',
      powerPlugs: 'Type G (230V) - The standard UK 3-pin plug.'
    },
    weatherAndVibe: {
      climate: 'Classic British summer: expect blistering sunshine and torrential rain in the same afternoon. Pack sunglasses and a packable waterproof.',
      dressCode: 'Smart-casual. Pubs and most restaurants are very relaxed, but upmarket Soho or Mayfair clubs will require collared shirts and no trainers.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Afternoon & Evening',
        title: 'Borough Market & Shoreditch',
        activity: 'Settle in and head to Borough Market for incredible street food. In the evening, cross the river to Shoreditch for craft pints and bustling nightlife.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Post-FP2)',
        title: 'West End & Soho',
        activity: 'Take the fast train back to Euston. Head into Soho for a fantastic dinner—try Dishoom or Flat Iron—before grabbing drinks at a traditional British pub.'
      },
      {
        day: 'Saturday',
        timing: 'Evening (Post-Qualifying)',
        title: 'Sports Bars & Fan Atmosphere',
        activity: 'Post-Qualifying, head to a massive sports bar like the Greenwood in Victoria. The atmosphere is electric as fans debate the starting grid.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race Celebration',
        title: 'The Trackside Stage',
        activity: 'Stay at Silverstone! The post-race concert on the main stage is legendary. Head back to London late and grab a celebratory kebab or late-night pizza.'
      },
      {
        day: 'Monday',
        timing: 'Morning Recovery',
        title: 'Hyde Park & Coffee',
        activity: 'Grab a flat white and recover with a walk through Hyde Park before heading to the airport or continuing your UK holiday.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "London has endless possibilities, but here is how to round out a motorsport-heavy weekend.",
      culture: [
        { name: "The British Museum", desc: "Spend a few hours getting lost in one of the most comprehensive historical collections on earth." }
      ],
      motorsport: [
        { name: "F1 Arcade London", desc: "The official Formula 1 exhibition featuring historic cars, artifacts, and motion simulators." },
        { name: "Mercedes-Benz World (Brooklands)", desc: "A short train ride away in Surrey, featuring massive displays of F1 heritage and track driving experiences." }
      ]
    },
    neighborhoods: [
      {
        name: 'Camden / King\'s Cross',
        vibe: 'Buzzing, Connected & Alternative',
        commuteTime: '15m to Euston',
        transitRoute: 'Northern Line to Euston ➔ Fast Train',
        desc: 'Incredibly well connected for transport. You get the fantastic pubs and markets of Camden, with Euston station just minutes away.',
        bookingUrl: 'https://www.booking.com/district/gb/london/camden.html'
      },
      {
        name: 'Victoria / Westminster',
        vibe: 'Classic London & Convenient',
        commuteTime: '20m to Euston',
        transitRoute: 'Victoria Line to Euston ➔ Fast Train',
        desc: 'A great base if you want to do traditional sightseeing (Big Ben, Buckingham Palace) while maintaining a direct, single-tube commute to your Silverstone train.',
        bookingUrl: 'https://www.booking.com/district/gb/london/westminster-borough.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'Dishoom (Various Locations)',
        type: 'Bombay-style Indian',
        desc: 'Legendary Indian food in a bustling atmosphere. Perfect for a group dinner, but expect to queue if you haven\'t booked.',
        mapUrl: 'http://googleusercontent.com/maps.google.com/london1'
      }
    ],
    watchParties: [
      {
        name: 'The Greenwood (Victoria)',
        type: 'Premium Sports Pub',
        desc: 'Massive screens, great food, and packed with F1 fans. The ideal spot if you don\'t have a track ticket for Friday practice.'
      }
    ],
    sightseeing: [
      {
        name: 'F1 Arcade',
        timeSlot: 'Best on Thursday Night',
        desc: 'Race your friends on official F1 simulators while drinking cocktails in St Pauls.',
        ticketUrl: 'https://f1arcade.com/'
      }
    ]
  }