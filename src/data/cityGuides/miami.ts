import type { CityGuide } from '../types';

export const miami: CityGuide = {
  slug: 'miami',
  city: 'Miami',
  raceSlug: 'miami-gp',
  race: 'Miami Grand Prix',
  circuitName: 'Miami International Autodrome',
  country: 'United States',
  heroImage: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1200&auto=format&fit=crop',
  intro: 'Miami turns Formula 1 into a high-energy celebrity festival. Based around Hard Rock Stadium, fans enjoy South Beach nightlife, Cuban cuisine, and sunshine.',
  quickFacts: { currency: 'USD ($)', language: 'English & Spanish', transitCard: 'Contactless / EASY Card', airport: 'Miami Int. (MIA) / Fort Lauderdale (FLL)' },
  trackCommuteSummary: {
    title: 'Downtown / South Beach ➔ Stadium',
    time: '40-60 mins (Shuttle/Rideshare)',
    frequency: 'Continuous',
    details: 'Use park-and-ride shuttles from designated lots or the Brightline train to Aventura station with connecting shuttles.'
  },
  morningSupplies: { location: 'Publix', tip: 'Buy sealed water bottles and sunscreen before heading to the stadium.' },
  cityTransport: { rideshare: 'Uber and Lyft are standard.', nightTransit: 'Rideshare is the primary late-night transit option.' },
  practicalities: { tapWater: 'Safe to drink.', tipping: '18-22% standard.', powerPlugs: 'Type A / B (120V)' },
  weatherAndVibe: { climate: 'Hot and humid (28-32°C). High UV index.', dressCode: 'Tropical resort-wear and sunglasses.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'South Beach Ocean Drive', activity: 'Stroll past Art Deco architecture and enjoy waterside drinks.' },
    { day: 'Friday', timing: 'Evening', title: 'Wynwood Walls & Breweries', activity: 'Explore vibrant street murals and craft beer bars in Wynwood.' },
    { day: 'Saturday', timing: 'Evening', title: 'Brickell Rooftops', activity: 'Enjoy skyline views and Latin dining in the financial district.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Hard Rock Stadium Concerts', activity: 'Stay on the stadium campus for post-race DJ sets and parties.' },
    { day: 'Monday', timing: 'Morning', title: 'Little Havana Breakfast', activity: 'Grab Cuban coffee and pastelitos on Calle Ocho before flying out.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Relax in South Florida style.',
    culture: [{ name: 'Vizcaya Museum & Gardens', desc: 'Historic Italian Renaissance-style estate on Biscayne Bay.' }],
    motorsport: [{ name: 'K1 Speed Miami', desc: 'Indoor electric karting track.' }]
  },
  neighborhoods: [
    { name: 'Brickell / Downtown', vibe: 'Dining & Brightline Train', commuteTime: '40m (Train+Shuttle)', transitRoute: 'Brightline to Aventura', desc: 'Modern skyscrapers, dining, and easier transit northward.', bookingUrl: 'https://www.booking.com/district/us/miami/downtown-miami.html' }
  ],
  foodAndDrink: [{ name: 'Versailles Restaurant', type: 'Cuban Classic', desc: 'World-famous Cuban sandwiches and strong cortadito coffee.' }],
  watchParties: [{ name: 'Grails Sports Bar (Wynwood)', type: 'Sneaker Sports Bar', desc: 'Dozens of screens and great patio atmosphere.' }],
  sightseeing: [{ name: 'Wynwood Walls', timeSlot: 'Morning', desc: 'World-renowned outdoor street art museum.' }]
};