// src/data/cityGuides.ts

export interface CityGuide {
  slug: string;
  city: string;
  raceSlug: string;
  race: string;
  circuitName: string;
  country: string;
  heroImage: string;
  intro: string;
  quickFacts: {
    currency: string;
    language: string;
    transitCard: string;
    airport: string;
  };
  trackCommuteSummary: {
    title: string;
    time: string;
    frequency: string;
    details: string;
  };
  morningSupplies: {
    location: string;
    tip: string;
  };
  cityTransport: {
    rideshare: string;
    nightTransit: string;
  };
  practicalities: {
    tapWater: string;
    tipping: string;
    powerPlugs: string;
  };
  weatherAndVibe: {
    climate: string;
    dressCode: string;
  };
  itinerary: {
    day: string;
    timing: string;
    title: string;
    activity: string;
  }[];
  extendedStay: {
    title: string;
    desc: string;
    culture: { name: string; desc: string }[];
    motorsport: { name: string; desc: string }[];
  };
  neighborhoods: {
    name: string;
    vibe: string;
    commuteTime: string;
    transitRoute: string;
    desc: string;
    bookingUrl: string;
  }[];
  foodAndDrink: {
    name: string;
    type: string;
    desc: string;
    mapUrl?: string;
  }[];
  watchParties: {
    name: string;
    type: string;
    desc: string;
  }[];
  sightseeing: {
    name: string;
    timeSlot: string;
    desc: string;
    ticketUrl?: string;
  }[];
}

export const cityGuidesData: CityGuide[] = [
  {
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
        { name: "Racesquare Amsterdam", desc: "An official F1 sim-racing lounge where you and your friends can race Zandvoort on motion rigs." },
        { name: "Zandvoorts Museum", desc: "If you head to the coast on Thursday, visit the local museum featuring special GP history exhibitions." }
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
      },
      {
        name: 'De Pijp',
        vibe: 'Pubs, Burgers & Vibes',
        commuteTime: '45m (Metro + Train)',
        transitRoute: 'Metro 52 to Centraal (6 mins) ➔ Direct NS Train',
        desc: 'A vibrant neighborhood packed with sports bars, burger joints, and markets. Perfect for groups looking for great evening atmosphere.',
        bookingUrl: 'https://www.booking.com/district/nl/amsterdam/oud-zuid.html'
      }
    ],
    foodAndDrink: [
      {
        name: 'Foodhallen (Oud-West)',
        type: 'Indoor Food Market & Craft Bars',
        desc: 'Located inside a restored tram depot with over 20 street-food stalls. Perfect for race groups with different tastes.',
        mapUrl: 'https://maps.google.com/?q=Foodhallen+Amsterdam'
      },
      {
        name: 'Leidseplein & Rembrandtplein',
        type: 'Pubs & F1 Fan Atmosphere',
        desc: 'The center of gravity for race-week celebrations. Packed with sports bars, live music venues, and outdoor terraces.',
        mapUrl: 'https://maps.google.com/?q=Leidseplein+Amsterdam'
      }
    ],
    watchParties: [
      {
        name: 'Belushi\'s & Coco\'s Outback',
        type: 'International Sports Bars',
        desc: 'Massive venues showing full English commentary for all sessions, F2, and F3. Arrive early to secure a table if you do not have track tickets.'
      },
      {
        name: 'Zandvoort Village Squares',
        type: 'Trackside Town Fan Zone',
        desc: 'If you want atmosphere without a ticket, head to Zandvoort town anyway. The squares set up big screens and bars mere miles from the circuit.'
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
  },
  {
    slug: 'milan',
    city: 'Milan',
    raceSlug: 'italian-gp',
    race: 'Italian Grand Prix',
    circuitName: 'Autodromo Nazionale Monza',
    country: 'Italy',
    heroImage: 'https://images.unsplash.com/photo-1513581166358-166cdd28dbbc?q=80&w=1200&auto=format&fit=crop',
    intro: 'Milan is the ultimate launchpad for the Italian Grand Prix. Fans base themselves in Milan to experience legendary Italian food, buzzing aperitivo hours, and seamless direct train links that drop you straight into the park of Monza with the Tifosi.',
    quickFacts: {
      currency: 'Euro (€)',
      language: 'Italian (English widely spoken)',
      transitCard: 'Contactless Bank Card / Apple Pay',
      airport: 'Milan Linate (LIN) or Malpensa (MXP)'
    },
    trackCommuteSummary: {
      title: 'Milan ➔ Monza Circuit',
      time: '45 mins total',
      frequency: 'Constant dedicated race trains',
      details: 'Direct trains run continuously from Milano Centrale or Porta Garibaldi to Monza Station (15 mins). From there, jump on the official Black Line shuttle bus directly to the park gates.'
    },
    morningSupplies: {
      location: 'Conad or Carrefour (Near Milano Centrale)',
      tip: 'Monza food queues are notoriously long and expensive. Stock up on focaccia, snacks, and water bottles before boarding the train.'
    },
    cityTransport: {
      rideshare: 'Uber operates (mostly UberBlack). Use the FreeNow app to hail local white taxis.',
      nightTransit: 'Metro closes around 00:30. Night buses run along the main metro lines afterward.'
    },
    practicalities: {
      tapWater: 'Safe to drink. Look for the public "vedovelle" (green fountains) around the city to fill up.',
      tipping: 'A "Coperto" (cover charge) is often added to the bill. Leaving €1-2 extra is appreciated but not required.',
      powerPlugs: 'Type C / F / L (230V)'
    },
    weatherAndVibe: {
      climate: 'Late summer is usually very hot during the day with warm, pleasant evenings.',
      dressCode: 'Smart-casual. Italians dress well; nice sneakers and collared shirts are preferred if hitting bars in Navigli or Brera.'
    },
    itinerary: [
      {
        day: 'Thursday',
        timing: 'Afternoon & Evening',
        title: 'Navigli Canals & Aperitivo',
        activity: 'Head straight to the Navigli district. Enjoy the classic Milanese Aperitivo by the canals to kick off the race weekend in style.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Post-FP2)',
        title: 'Pizza & Porta Garibaldi Bars',
        activity: 'Head back from Practice 2 and explore the Porta Garibaldi area. Grab incredible authentic pizza before hitting lively sports bars packed with fans.'
      },
      {
        day: 'Saturday',
        timing: 'Evening (Post-Qualifying)',
        title: 'Duomo & City Centre Buzz',
        activity: 'Following Qualifying, head into central Milan. The piazzas and restaurant terraces surrounding the Duomo fill with fans and vibrant atmosphere.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race Celebration',
        title: 'The Tifosi Afterparty',
        activity: 'After the famous Monza track invasion, head back to Milan. The sports bars and central piazzas become massive celebration zones on Sunday night.'
      },
      {
        day: 'Monday',
        timing: 'Morning Recovery',
        title: 'Espresso & San Siro Stadium',
        activity: 'Enjoy a relaxed morning with Italian coffee and pastries, followed by a tour of the iconic San Siro football stadium before heading to the airport.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "If you are extending your trip into Tuesday or arriving early on Wednesday, here are the best fan-favorite activities to round out your holiday.",
      culture: [
        { name: "San Siro Stadium Tour", desc: "Walk the tunnels and pitch of one of the most famous football stadiums in the world." }
      ],
      motorsport: [
        { name: "Museo Storico Alfa Romeo", desc: "Located just outside Milan, housing legendary F1 cars and historic Italian race machines." },
        { name: "Ferrari Store Milan", desc: "Located behind the Duomo, featuring F1 motion simulators to test your skills." }
      ]
    },
    neighborhoods: [
      {
        name: 'Porta Garibaldi / Isola',
        vibe: 'Modern, Pubs & Fast Commute',
        commuteTime: '40m (Train + Shuttle)',
        transitRoute: 'Direct Train from Porta Garibaldi Station',
        desc: 'The best balance. Fantastic nightlife and dining, plus direct trains to Monza right from Garibaldi station to avoid the rush at Centrale.',
        bookingUrl: 'https://www.booking.com/district/it/milan/garibaldi-station.html'
      }
    ],
    foodAndDrink: [
      {
        name: '442 Sports Pub',
        type: 'Dedicated Sports Bar',
        desc: 'One of the best sports pubs in Milan. Covered in football and racing scarves, pouring great beer with a great F1 crowd.',
        mapUrl: 'https://maps.google.com/?q=442+Sports+Pub+Milan'
      },
      {
        name: 'Navigli Canal Bars',
        type: 'Aperitivo & Drinks',
        desc: 'The entire canal district turns into an outdoor party in the evenings with waterside cocktail bars and shared platters.',
        mapUrl: 'https://maps.google.com/?q=Navigli+Milan'
      }
    ],
    watchParties: [
      {
        name: 'Milan F1 Festival (Piazza Duomo/Darsena)',
        type: 'Official City Fan Zone',
        desc: 'Often hosted in the city centre. Features show car runs, driver appearances on Wednesday/Thursday, and big screens all weekend.'
      },
      {
        name: 'Mind the Gap / The Football English Pub',
        type: 'City Pub Screenings',
        desc: 'Great backup options in the city centre with multiple screens showing Sky Sports F1 if you do not have tickets for Friday practice.'
      }
    ],
    sightseeing: [
      {
        name: 'Museo Alfa Romeo',
        timeSlot: 'Best on Thursday Afternoon',
        desc: 'Get your motorsport fix early by exploring six floors of Alfa Romeo racing heritage just outside the city.',
        ticketUrl: 'https://www.museoalfaromeo.com/'
      }
    ]
  },
  {
    slug: 'madrid',
    city: 'Madrid',
    raceSlug: 'madrid-gp',
    race: 'Spanish Grand Prix',
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
      desc: "If you are extending your trip into Tuesday or arriving early on Wednesday, here are the best fan-favorite activities to round out your holiday.",
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
      },
      {
        name: 'Calle de la Cava Baja',
        type: 'Tapas Street',
        desc: 'An entire street dedicated to lively tapas bars. Do a crawl by grabbing a drink and small plates at several venues.',
        mapUrl: 'https://maps.google.com/?q=Calle+de+la+Cava+Baja+Madrid'
      }
    ],
    watchParties: [
      {
        name: 'F1 Exhibition Fan Village (IFEMA)',
        type: 'Official Trackside Zone',
        desc: 'As the track is integrated into the convention centre, expect massive fan zones and screens that may be accessible on non-race days.'
      },
      {
        name: 'Irish Rover & Dubliners',
        type: 'City Pub Screenings',
        desc: 'If you are staying in the city for Friday practice, these massive central pubs will be showing the live feed.'
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
  },
  {
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
      tapWater: 'NOT safe to drink. Always use bottled water, even for brushing your teeth.',
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
        timing: 'Afternoon & Evening',
        title: 'Old City & Pit Lane Walk',
        activity: 'Spend the afternoon exploring the walled Old City (Icherisheher). If you have a 3-day ticket, head to the track for the Thursday Pit Lane Walk.'
      },
      {
        day: 'Friday',
        timing: 'Evening (Post-FP2)',
        title: 'Baku Boulevard Fan Zone',
        activity: 'The fan zone on the Caspian Sea promenade is massive. Enjoy sunset views, live entertainment, and dinner at waterfront spots right behind the main grandstands.'
      },
      {
        day: 'Saturday',
        timing: 'Evening (Post-Qualifying)',
        title: 'Fountain Square Pubs',
        activity: 'Head to Fountain Square in the city centre. This pedestrianized zone is packed with international pubs and sports bars where traveling fans gather.'
      },
      {
        day: 'Sunday',
        timing: 'Post-Race Celebration',
        title: 'Crystal Hall Concerts',
        activity: 'Baku is famous for its post-race concerts at the Crystal Hall (access included with most grandstand tickets) featuring global headline acts.'
      },
      {
        day: 'Monday',
        timing: 'Morning Recovery',
        title: 'Flame Towers Viewpoint',
        activity: 'Take the funicular up to the Flame Towers for a relaxed morning coffee and the best panoramic view of the circuit layout and the Caspian Sea.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "If you are extending your trip into Tuesday or arriving early on Wednesday, here are the best fan-favorite activities to round out your holiday.",
      culture: [
        { name: "Flame Towers & Highland Park", desc: "Ride the funicular up the hill to see the iconic Flame Towers up close." }
      ],
      motorsport: [
        { name: "Walk the Track Limits", desc: "On Wednesday, you can walk large sections of the street circuit pavements, including the narrow castle section at Turn 8." }
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
        desc: 'The main entertainment zone runs along the waterfront. While ticketed during the sessions, the vibe immediately outside the cordons is electric.'
      },
      {
        name: 'Fountain Square Pubs',
        type: 'City Pub Screenings',
        desc: 'Almost every pub and shisha lounge around Fountain Square will be broadcasting the race feed for fans without grandstand access.'
      }
    ],
    sightseeing: [
      {
        name: 'Baku Karting Event Center',
        timeSlot: 'Best on Thursday Afternoon',
        desc: 'Hit the largest indoor karting track in the region with your group before the F1 weekend kicks off.',
        ticketUrl: 'https://bakukarting.az/'
      }
    ]
  }
];