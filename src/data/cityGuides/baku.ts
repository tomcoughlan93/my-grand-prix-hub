import type { CityGuide } from '../types';

export const baku: CityGuide = {
    slug: 'baku',
    city: 'Baku',
    raceSlug: 'azerbaijan-gp',
    race: 'Azerbaijan Grand Prix',
    circuitName: 'Baku City Circuit',
    country: 'Azerbaijan',
    heroImage: 'https://images.unsplash.com/photo-1581008688321-41712a201c1c?q=80&w=1200&auto=format&fit=crop',
    intro: 'Baku is one of the most distinctive stops on the calendar. This street track weaves through a UNESCO-listed Old City and modern boulevards. Because the circuit is in the city center, hotels, pubs, and grandstands are all within walking distance.',
    quickFacts: {
      currency: 'Azerbaijani Manat (AZN)',
      language: 'Azerbaijani (English in tourist spots)',
      transitCard: 'BakuCard (BakiKart)',
      airport: 'Heydar Aliyev Int. Airport (GYD)'
    },
    trackCommuteSummary: {
      title: 'Central Baku ➔ Circuit Gates',
      time: '10 - 20 mins Walk',
      frequency: 'Anytime',
      details: 'The track is integrated directly into the city centre. Depending on your hotel, you simply walk out of your lobby straight to your designated gate.'
    },
    morningSupplies: {
      location: 'Bravo or Bazarstore',
      tip: 'Water and snacks are incredibly cheap in the city supermarkets. Buy them before passing through the track security cordons.'
    },
    cityTransport: {
      rideshare: 'Uber and Bolt are extremely cheap and widely used for longer trips.',
      nightTransit: 'Metro usually runs until midnight, but hours are often extended during the F1 weekend.'
    },
    practicalities: {
      tapWater: 'NOT safe to drink. Always use bottled water.',
      tipping: 'A 5-10% service charge is often included, but an extra 10% in cash for good service is appreciated.',
      powerPlugs: 'Type C / F (220V)'
    },
    weatherAndVibe: {
      climate: 'Known as the "City of Winds." Days are pleasant, but evenings on the Caspian coast get very breezy. A light jacket is essential.',
      dressCode: 'Casual during the day. Smart-casual (no shorts) is generally preferred for nicer restaurants or upscale clubs in the evening.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Afternoon',
        title: 'Old City & Pit Lane Walk',
        activity: 'Spend the afternoon exploring the walled Old City (Icherisheher). If you have a 3-day ticket, head to the track for the Thursday Pit Lane Walk.'
      },
      {
        day: 'Friday',
        timing: 'Evening',
        title: 'Baku Boulevard Fan Zone',
        activity: 'The fan zone on the Caspian Sea promenade is massive. Enjoy sunset views, live entertainment, and dinner at waterfront spots.'
      },
      {
        day: 'Saturday',
        timing: 'Evening',
        title: 'Fountain Square Pubs',
        activity: 'Head to Fountain Square in the city centre. This pedestrianized zone is packed with international pubs and sports bars.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race',
        title: 'Crystal Hall Concerts',
        activity: 'Baku is famous for its post-race concerts at the Crystal Hall featuring global headline acts.'
      },
      {
        day: 'Monday',
        timing: 'Morning',
        title: 'Flame Towers Viewpoint',
        activity: 'Take the funicular up to the Flame Towers for a relaxed morning coffee and panoramic views.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "If you are extending your trip, here are the best fan-favorite activities.",
      culture: [
        { name: "Flame Towers & Highland Park", desc: "Ride the funicular up the hill to see the iconic Flame Towers up close." }
      ],
      motorsport: [
        { name: "Walk the Track Limits", desc: "On Wednesday, you can walk large sections of the street circuit pavements." }
      ]
    },
    neighborhoods: [
      {
        name: 'Fountain Square / Sabayil',
        vibe: 'Pubs, Food & Action',
        commuteTime: '10m Walk',
        transitRoute: 'Walk to Gates',
        desc: 'The best area to stay. Surrounded by the city\'s top sports bars and restaurants, and you can walk to almost any grandstand in minutes.',
        bookingUrl: 'https://www.booking.com/district/az/baku/sabayil.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'Finnegan\'s Irish Pub',
        type: 'Dedicated Sports Bar',
        desc: 'A massive hub for motorsport fans and expats with big screens, pub classics, and a lively atmosphere all weekend.',
        mapUrl: 'https://maps.google.com/?q=Finnegans+Baku'
      }
    ],
    watchParties: [
      {
        name: 'Baku Boulevard Fan Zone',
        type: 'Official Trackside Zone',
        desc: 'The main entertainment zone runs along the waterfront. While ticketed during the sessions, the vibe immediately outside is electric.'
      }
    ],
    sightseeing: [
      {
        name: 'Baku Karting Event Center',
        timeSlot: 'Best on Thursday Afternoon',
        desc: 'Hit the largest indoor karting track in the region with your group before the F1 weekend kicks off.',
        ticketUrl: 'https://bakukarting.az/'}]
      };