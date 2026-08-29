import type { CityGuide } from '../types';

export const amsterdam: CityGuide = {
    slug: 'amsterdam',
    city: 'Amsterdam',
    raceSlug: 'dutch-gp',
    race: 'Dutch Grand Prix',
    circuitName: 'Circuit Zandvoort',
    country: 'Netherlands',
    heroImage: 'https://images.unsplash.com/photo-1517736996303-4e64a4f87311?q=80&w=1200&auto=format&fit=crop',
    intro: 'Amsterdam serves as the primary base for the Dutch Grand Prix. While the circuit sits in coastal Zandvoort, the vast majority of fans stay in Amsterdam to enjoy world-class pubs, dining, and nightlife before making the 30-minute train commute alongside the Orange Army.',
    quickFacts: {
      currency: 'Euro (€)',
      language: 'Dutch (English universally spoken)',
      transitCard: 'OV-chipkaart / Contactless (OVpay)',
      airport: 'Schiphol Airport (AMS)'
    },
    trackCommuteSummary: {
      title: 'Amsterdam ➔ Circuit Zandvoort',
      time: '30 mins direct',
      frequency: 'Every 5 mins on race weekend',
      details: 'NS Sprinter trains run constantly from Amsterdam Centraal straight to Zandvoort aan Zee. A 15-minute signposted walk through town brings you to the circuit gates.'
    },
    morningSupplies: {
      location: 'Albert Heijn To Go (Inside Central Station)',
      tip: 'Grab large bottles of water, sunscreen, and stroopwafels before boarding the Sprinter. Zandvoort supermarket queues are massive.'
    },
    cityTransport: {
      rideshare: 'Uber & Bolt operate widely and reliably.',
      nightTransit: 'Metro stops at 00:30. Night buses (NiteLines) take over and run throughout the night.'
    },
    practicalities: {
      tapWater: '100% safe to drink and exceptional quality.',
      tipping: 'Service usually included. Round up or add 5-10% for great service.',
      powerPlugs: 'Type C / F (230V)'
    },
    weatherAndVibe: {
      climate: 'Mild days but evenings can be breezy and cool off quickly. A light rain jacket is essential.',
      dressCode: 'Incredibly casual. Jeans, sneakers, and team gear are welcome in almost all bars and restaurants.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Afternoon & Evening',
        title: 'Canal Beers & City Bearings',
        activity: 'Arrive and drop your bags. Grab some drinks on an evening canal cruise before having an easy dinner near Leidseplein to prep for the weekend.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Post-FP2)',
        title: 'De Pijp Craft Beer & Street Food',
        activity: 'Head back from Practice 2 around 17:30. Spend your evening exploring the bustling pubs around De Pijp or grab a group table at Foodhallen for easy street food.'
      },
      {
        day: 'Saturday',
        timing: 'Evening (Post-Qualifying)',
        title: 'The Heineken Experience',
        activity: 'Following Qualifying, head into central Amsterdam for the interactive brewery tour, followed by live music and fan gatherings in the city centre.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race Celebration',
        title: 'Orange Army Afterparty',
        activity: 'After the podium and track invasion, head back to Amsterdam. The bars around Rembrandtplein and Leidseplein turn into massive celebration zones.'
      },
      {
        day: 'Monday',
        timing: 'Morning Recovery',
        title: 'Brunch & A\'DAM Lookout',
        activity: 'Enjoy a relaxed pancake brunch, then take the free ferry to Amsterdam Noord to visit the A\'DAM Lookout before your flight.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "If you are extending your trip into Tuesday or arriving early on Wednesday, here are the best fan-favorite activities to round out your holiday.",
      culture: [
        { name: "The Heineken Experience", desc: "A highly interactive tour of the historic brewery in the city centre. Includes tasting rooms." },
        { name: "A'DAM Lookout", desc: "Take the free ferry behind Central Station to this observation deck. Grab a drink and ride the sky swing." }
      ],
      motorsport: [
        { name: "Racesquare Amsterdam", desc: "An official F1 sim-racing lounge where you and your friends can race Zandvoort on motion rigs." }
      ]
    },
    neighborhoods: [
      {
        name: 'Centrum (Near Central Station)',
        vibe: 'Best for Fast Commute',
        commuteTime: '30m Direct',
        transitRoute: 'Walk to Amsterdam Centraal ➔ Direct NS Train',
        desc: 'The easiest morning track exit. Roll out of bed and walk straight to the train platforms without needing connecting trams.',
        bookingUrl: 'https://www.booking.com/district/nl/amsterdam/amsterdam-city-centre.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'Foodhallen (Oud-West)',
        type: 'Indoor Food Market & Craft Bars',
        desc: 'Located inside a restored tram depot with over 20 street-food stalls. Perfect for race groups with different tastes.',
        mapUrl: 'https://maps.google.com/?q=Foodhallen+Amsterdam'
      }
    ],
    watchParties: [
      {
        name: 'Belushi\'s & Coco\'s Outback',
        type: 'International Sports Bars',
        desc: 'Massive venues showing full English commentary for all sessions, F2, and F3. Arrive early to secure a table.'
      }
    ],
    sightseeing: [
      {
        name: 'The Heineken Experience',
        timeSlot: 'Best on Thursday or Monday',
        desc: 'The ultimate fan tourist stop. Book your timeslot in advance as race week brings massive crowds to the brewery.',
        ticketUrl: 'https://www.heinekenexperience.com/'
      }
    ]
  }