import type { CityGuide } from '../types';

export const singapore: CityGuide = {
    slug: 'marina-bay',
    city: 'Singapore',
    raceSlug: 'singapore-gp',
    race: 'Singapore Grand Prix',
    circuitName: 'Marina Bay Street Circuit',
    country: 'Singapore',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop',
    intro: 'The original night race. Singapore shuts down its downtown core to host an incredibly glamorous, high-humidity festival. Because the track is integrated into the city, you can dine in Michelin-star restaurants or incredible hawker centres right outside your grandstand.',
    quickFacts: {
      currency: 'Singapore Dollar (SGD)',
      language: 'English, Mandarin, Malay, Tamil',
      transitCard: 'EZ-Link / Contactless Bank Card',
      airport: 'Changi Airport (SIN)'
    },
    trackCommuteSummary: {
      title: 'City Hotels ➔ Circuit Gates',
      time: '10-20 mins (Walk or MRT)',
      frequency: 'Constant',
      details: 'Most fans stay downtown and simply walk to their gate. Alternatively, the MRT (subway) drops you directly at Promenade, City Hall, or Bayfront stations right at the track perimeter.'
    },
    morningSupplies: {
      location: '7-Eleven / Cheers',
      tip: 'Hydration is critical. Buy massive bottles of water and isotonic drinks before heading to the track. You will sweat more than you ever have.'
    },
    cityTransport: {
      rideshare: 'Grab and Gojek are the dominant apps. Taxis are reliable but avoid them near the circuit closures.',
      nightTransit: 'MRT hours are typically extended until 1:00 AM or later during race weekend.'
    },
    practicalities: {
      tapWater: 'Safe to drink straight from the tap.',
      tipping: 'Not expected. A 10% service charge is already included in most restaurants.',
      powerPlugs: 'Type G (230V) - Same as the UK.'
    },
    weatherAndVibe: {
      climate: 'Intensely hot and exceptionally humid. Expect 30°C+ with 90% humidity even at night.',
      dressCode: 'Light, breathable fabrics. Shorts and t-shirts are mandatory. Bring a poncho as sudden tropical downpours are common.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Afternoon & Evening',
        title: 'Hawker Centres & Light Shows',
        activity: 'Grab incredible cheap eats at Lau Pa Sat hawker centre, then walk to Gardens by the Bay for the evening Supertree light show.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Post-FP2)',
        title: 'Clarke Quay Drinks',
        activity: 'After Friday practice wraps up near midnight, head to the bustling riverside bars of Clarke Quay which stay open late.'
      },
      {
        day: 'Saturday',
        timing: 'Evening (Post-Qualifying)',
        title: 'Trackside Concerts',
        activity: 'Singapore is famous for its massive Padang Stage concerts. Stay trackside after Qualifying to catch the global headline acts.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race Celebration',
        title: 'Marina Bay Sands Afterparty',
        activity: 'The official podium celebrations are stunning. Afterward, those with access head to the legendary Amber Lounge or CE LA VI rooftop parties.'
      },
      {
        day: 'Monday',
        timing: 'Morning Recovery',
        title: 'Sentosa Island Beach',
        activity: 'Escape the city grid and take the cable car to Sentosa Island to recover on the beach with a cold drink.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "Singapore blends hyper-modern attractions with deep cultural roots.",
      culture: [
        { name: "Chinatown & Little India", desc: "Spend a day exploring the incredible temples and street food of these historic districts." }
      ],
      motorsport: [
        { name: "Marina Bay Walk", desc: "On Wednesday, you can walk the actual track limits around the Esplanade and pit straight." }
      ]
    },
    neighborhoods: [
      {
        name: 'Marina Bay / City Hall',
        vibe: 'Luxury & Zero Commute',
        commuteTime: '5m (Walk)',
        transitRoute: 'Walk to Gates',
        desc: 'The ultimate F1 experience. You are literally inside or bordering the track. Expect premium hotel pricing.',
        bookingUrl: 'https://www.booking.com/district/sg/singapore/marina-bay.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'Newton Food Centre',
        type: 'Hawker Street Food',
        desc: 'Famous open-air hawker centre for incredible chili crab and satay. A must-do experience.',
        mapUrl: 'http://googleusercontent.com/maps.google.com/sing1'
      }
    ],
    watchParties: [
      {
        name: 'Harry\'s Boat Quay',
        type: 'Riverside Pub',
        desc: 'A fantastic outdoor pub with big screens showing the race if you missed out on tickets.'
      }
    ],
    sightseeing: [
      {
        name: 'Gardens by the Bay',
        timeSlot: 'Late Afternoon / Evening',
        desc: 'The iconic futuristic park. The Supertree Grove is spectacular at night.',
        ticketUrl: 'https://www.gardensbythebay.com.sg/'
      }
    ]
  }