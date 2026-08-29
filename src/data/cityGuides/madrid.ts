import type { CityGuide } from '../types';

export const madrid: CityGuide = {
    slug: 'madrid',
    city: 'Madrid',
    raceSlug: 'madrid-gp',
    race: 'Madrid Grand Prix',
    circuitName: 'IFEMA Madrid Circuit',
    country: 'Spain',
    heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20f5a8161?q=80&w=1200&auto=format&fit=crop',
    intro: 'Madrid brings Formula 1 right to the doorstep of a global metropolis. With the IFEMA circuit connected directly via the Metro, fans can easily combine Spanish tapas, rooftop bars, and intense nightlife with premier racing.',
    quickFacts: {
      currency: 'Euro (€)',
      language: 'Spanish',
      transitCard: 'Multi Card (Metro)',
      airport: 'Adolfo Suárez Madrid-Barajas (MAD)'
    },
    trackCommuteSummary: {
      title: 'Central Madrid ➔ IFEMA Circuit',
      time: '25 mins direct',
      frequency: 'Every 3-5 mins',
      details: 'The circuit is built around the IFEMA convention center, directly serviced by Metro Line 8 (Feria de Madrid station). It drops you right at the entrance gates.'
    },
    morningSupplies: {
      location: 'Mercadona, Dia, or Carrefour Express',
      tip: 'Buy water and snacks near your city hotel before getting on the Metro. Shops directly outside the IFEMA circuit are very limited.'
    },
    cityTransport: {
      rideshare: 'Uber, Bolt, and Cabify all work well. FreeNow is great for regular taxis.',
      nightTransit: 'The Metro runs until 01:30 AM. After that, "Búho" (Owl) night buses operate from Plaza de Cibeles.'
    },
    practicalities: {
      tapWater: 'Madrid is famous for having some of the best tap water in Europe. Drink freely.',
      tipping: 'Not strictly expected. Leaving small change or rounding up €1-2 is common for good service.',
      powerPlugs: 'Type C / F (230V)'
    },
    weatherAndVibe: {
      climate: 'Expect intense daytime heat, but evenings cool down nicely. Pack sunglasses and a light evening shirt.',
      dressCode: 'Relaxed but stylish. Shorts are fine during the day, but pants or nice jeans are better for evening tapas and clubs.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Afternoon & Evening',
        title: 'Tapas Crawl in La Latina',
        activity: 'Head to La Latina or Mercado de San Miguel. Spend the evening bouncing between tapas bars, grabbing small plates and cold drinks with your group.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Post-FP2)',
        title: 'Rooftop Bars at Gran Vía',
        activity: 'Ride the metro back into the city centre after practice. Head to Gran Vía to catch the sunset from a rooftop terrace before a late Spanish dinner.'
      },
      {
        day: 'Saturday',
        timing: 'Evening (Post-Qualifying)',
        title: 'Sports Bars & La Liga Atmosphere',
        activity: 'Grab a table at a local sports bar (like James Joyce) to re-watch the qualifying highlights, or catch an evening football match.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race Celebration',
        title: 'Fiesta in Puerta del Sol',
        activity: 'Head to the bustling squares of Puerta del Sol and Plaza Mayor to celebrate the race weekend with fans from all over the world.'
      },
      {
        day: 'Monday',
        timing: 'Morning Recovery',
        title: 'Retiro Park Stroll',
        activity: 'Grab a coffee and take a relaxed stroll through El Retiro Park. Rent a rowboat on the lake or relax in the sun before heading to the airport.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "If you are extending your trip into Tuesday or arriving early on Wednesday, here are the best fan-favorite activities.",
      culture: [
        { name: "Santiago Bernabéu Stadium Tour", desc: "Tour the spectacular, newly renovated home of Real Madrid." }
      ],
      motorsport: [
        { name: "Carlos Sainz Karting", desc: "Challenge your friends at the top-tier indoor/outdoor karting facility owned by the legendary Spanish racing family." }
      ]
    },
    neighborhoods: [
      {
        name: 'Malasaña & Chueca',
        vibe: 'Trendy, Bars & Nightlife',
        commuteTime: '30m (Metro)',
        transitRoute: 'Metro Line 1 or 10 ➔ Connect to Line 8',
        desc: 'The best areas for groups who prioritize evening entertainment. Packed with indie pubs, burger joints, and late-night venues.',
        bookingUrl: 'https://www.booking.com/district/es/madrid/centro.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'James Joyce Irish Pub',
        type: 'Dedicated Sports Bar',
        desc: 'A massive sports hub near Plaza de Cibeles with huge screens. Guaranteed to be packed with international F1 fans.',
        mapUrl: 'https://maps.google.com/?q=James+Joyce+Irish+Pub+Madrid'
      }
    ],
    watchParties: [
      {
        name: 'F1 Exhibition Fan Village (IFEMA)',
        type: 'Official Trackside Zone',
        desc: 'As the track is integrated into the convention centre, expect massive fan zones and screens that may be accessible on non-race days.'
      }
    ],
    sightseeing: [
      {
        name: 'Carlos Sainz Karting',
        timeSlot: 'Best on Thursday Afternoon',
        desc: 'Get into the racing spirit early with a high-speed session at one of Europe’s best indoor karting tracks.',
        ticketUrl: 'https://www.kartingcarlossainz.com/'
      }
    ]
  }