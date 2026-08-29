import type { CityGuide } from '../types';

export const austin: CityGuide = {
    slug: 'austin',
    city: 'Austin',
    raceSlug: 'united-states-gp',
    race: 'United States Grand Prix',
    circuitName: 'Circuit of the Americas (COTA)',
    country: 'United States',
    heroImage: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1200&auto=format&fit=crop',
    intro: 'Austin is the live music capital of the world and arguably the most fun host city on the F1 calendar. Fans flock to downtown Austin for incredible BBQ, rooftop bars on 6th Street, and massive post-race concerts at the circuit.',
    quickFacts: {
      currency: 'US Dollar (USD)',
      language: 'English',
      transitCard: 'CapMetro App / Contactless',
      airport: 'Austin-Bergstrom Int. (AUS)'
    },
    trackCommuteSummary: {
      title: 'Downtown Austin ➔ COTA',
      time: '45-60 mins (Official Shuttle)',
      frequency: 'Continuous looping',
      details: 'Do not attempt to take Uber to the track—the traffic is a nightmare. Buy the official COTA downtown shuttle pass which uses dedicated lanes to bypass the gridlock.'
    },
    morningSupplies: {
      location: 'H-E-B or Royal Blue Grocery',
      tip: 'COTA allows one sealed water bottle per person. Buy it downtown to survive the Texas heat.'
    },
    cityTransport: {
      rideshare: 'Uber and Lyft are heavily used. Great for moving around downtown, terrible for getting to the track.',
      nightTransit: 'CapMetro Night Owl buses run late on weekends, but rideshares are the primary late-night transport.'
    },
    practicalities: {
      tapWater: 'Safe to drink.',
      tipping: 'Standard US tipping culture applies (18-22% at restaurants/bars).',
      powerPlugs: 'Type A / B (120V)'
    },
    weatherAndVibe: {
      climate: 'Texas in late October is usually warm and sunny, but sudden thunderstorms or cold snaps can happen. Pack layers.',
      dressCode: 'Extremely casual. Cowboy boots, F1 merch, and shorts are the uniform of the weekend.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Afternoon & Evening',
        title: 'Texas BBQ & South Congress',
        activity: 'Join the queue for world-class BBQ (Terry Black\'s or Franklin) then spend the evening exploring the live music venues on South Congress Avenue.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Post-FP2)',
        title: 'Rainey Street Nightlife',
        activity: 'Take the shuttle back downtown and head to Rainey Street—a row of historic houses converted into bustling indoor/outdoor bars.'
      },
      {
        day: 'Saturday',
        timing: 'Evening (Post-Qualifying)',
        title: 'COTA Superstage Concert',
        activity: 'Stay at the track! COTA is famous for its Saturday night headline concerts (e.g., Queen, Ed Sheeran, Taylor Swift) right on the circuit infield.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race Celebration',
        title: '6th Street (Dirty 6th)',
        activity: 'After the race, downtown 6th Street is closed to cars and turns into a massive, loud, sprawling street party for F1 fans.'
      },
      {
        day: 'Monday',
        timing: 'Morning Recovery',
        title: 'Breakfast Tacos & Lady Bird Lake',
        activity: 'Grab proper Austin breakfast tacos (Veracruz All Natural) and walk the trails around Lady Bird Lake before flying out.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "Austin is surrounded by incredible nature and culture.",
      culture: [
        { name: "Texas State Capitol", desc: "Tour the massive, historic state capitol building in the centre of downtown." }
      ],
      motorsport: [
        { name: "K1 Speed Austin", desc: "Race your group at the premier indoor karting track just north of the city." }
      ]
    },
    neighborhoods: [
      {
        name: 'Downtown / 6th Street',
        vibe: 'Nightlife & Shuttle Access',
        commuteTime: '45m (Shuttle)',
        transitRoute: 'Walk to Waterloo Park ➔ Official COTA Shuttle',
        desc: 'The undisputed best place to stay. You are walking distance to the official track shuttles, the best food, and all the nightlife.',
        bookingUrl: 'https://www.booking.com/district/us/austin/downtown-austin.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'Franklin Barbecue',
        type: 'Legendary Texas BBQ',
        desc: 'Widely considered the best BBQ in the world. You must arrive by 8 AM and queue for hours—treat it as a tailgate party.',
        mapUrl: 'http://googleusercontent.com/maps.google.com/aus1'
      }
    ],
    watchParties: [
      {
        name: 'Banger\'s Sausage House',
        type: 'Beer Garden',
        desc: 'Massive outdoor beer garden on Rainey Street with big screens. Brilliant atmosphere if you are skipping the track.'
      }
    ],
    sightseeing: [
      {
        name: 'Congress Avenue Bats',
        timeSlot: 'Sunset',
        desc: 'Stand on the Congress bridge at dusk to watch over a million bats fly out from underneath. A classic Austin experience.',
        ticketUrl: ''
      }
    ]
  }