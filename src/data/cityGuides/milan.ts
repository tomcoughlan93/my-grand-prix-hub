import type { CityGuide } from '../types';

export const milan: CityGuide = {
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
      airport: 'Milan Linate (LIN) / Malpensa (MXP)'
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
      tipping: 'A "Coperto" (cover charge) is often added to the bill. Leaving €1-2 extra is appreciated.',
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
        activity: 'Enjoy a relaxed morning with Italian coffee and pastries, followed by a tour of the iconic San Siro football stadium.'
      }
    ],
    extendedStay: {
      title: "Staying an Extra Day?",
      desc: "If you are extending your trip into Tuesday or arriving early on Wednesday, here are the best fan-favorite activities.",
      culture: [
        { name: "San Siro Stadium Tour", desc: "Walk the tunnels and pitch of one of the most famous football stadiums in the world." }
      ],
      motorsport: [
        { name: "Museo Storico Alfa Romeo", desc: "Located just outside Milan, housing legendary F1 cars and historic Italian race machines." }
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
      }
    ],
    watchParties: [
      {
        name: 'Milan F1 Festival (Piazza Duomo/Darsena)',
        type: 'Official City Fan Zone',
        desc: 'Often hosted in the city centre. Features show car runs, driver appearances, and big screens all weekend.'
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
  }