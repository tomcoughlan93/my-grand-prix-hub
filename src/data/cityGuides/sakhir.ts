import type { CityGuide } from '../types';

export const sakhir: CityGuide = {
  slug: 'sakhir',
  city: 'Manama / Sakhir',
  raceSlug: 'bahrain-gp',
  race: 'Bahrain Grand Prix',
  circuitName: 'Bahrain International Circuit',
  country: 'Bahrain',
  heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
  intro: 'The desert night race. Fans stay in the bustling capital of Manama, enjoying souks, waterfront dining, and nightlife before taking circuit shuttles south into the desert.',
  quickFacts: { currency: 'Bahraini Dinar (BHD)', language: 'Arabic & English', transitCard: 'Go Card / Rideshare', airport: 'Bahrain Int. (BAH)' },
  trackCommuteSummary: {
    title: 'Manama Hotels ➔ Sakhir Circuit',
    time: '35-45 mins (Free Shuttle/Taxi)',
    frequency: 'Scheduled intervals',
    details: 'Free official shuttle buses run from major hotel clusters in Manama directly to the BIC gates.'
  },
  morningSupplies: { location: 'Lulu Hypermarket / Carrefour', tip: 'Buy water and snacks in Manama before boarding the desert shuttles.' },
  cityTransport: { rideshare: 'Uber is widely used and affordable.', nightTransit: 'Taxis/rideshares operate 24/7.' },
  practicalities: { tapWater: 'Desalinated tap water is safe for brushing, but bottled water is preferred for drinking.', tipping: '10% standard.', powerPlugs: 'Type G (230V) - Standard UK plug.' },
  weatherAndVibe: { climate: 'Warm desert days (28-32°C), pleasant night temperatures under floodlights.', dressCode: 'Smart-casual. Modest clothing appreciated in city cultural areas.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Bab Al Bahrain Souk', activity: 'Explore vibrant spice and handicraft markets in historic Manama.' },
    { day: 'Friday', timing: 'Evening', title: 'Block 338 Dining', activity: 'Dine in the pedestrian dining and arts district of Adliya.' },
    { day: 'Saturday', timing: 'Evening', title: 'Trackside Concerts', activity: 'Enjoy major international concerts inside the circuit fanzone.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Night Race Celebrations', activity: 'Watch the spectacular fireworks display over the Sakhir desert.' },
    { day: 'Monday', timing: 'Morning', title: 'Bahrain National Museum', activity: 'Learn about ancient Dilmun civilization before heading to the airport.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Discover Bahrain’s history.',
    culture: [{ name: 'Qal\'at al-Bahrain (Bahrain Fort)', desc: 'UNESCO World Heritage Portuguese coastal fort.' }],
    motorsport: [{ name: 'Bahrain International Karting Circuit', desc: 'World championship-level outdoor kart track right next to the F1 circuit.' }]
  },
  neighborhoods: [
    { name: 'Adliya / Seef', vibe: 'Dining, Nightlife & Shuttles', commuteTime: '35m (Shuttle)', transitRoute: 'Official Hotel Shuttle', desc: 'Top restaurant and nightlife district with direct shuttle routes.', bookingUrl: 'https://www.booking.com/city/bh/manama.html' }
  ],
  foodAndDrink: [{ name: 'Haji Gahwa', type: 'Traditional Cafe', desc: 'Authentic Bahraini breakfast in the heart of Manama Souk.' }],
  watchParties: [{ name: 'JJ\'s Irish Restaurant (Adliya)', type: 'Sports Pub', desc: 'Lively atmosphere with expat fans and big screens.' }],
  sightseeing: [{ name: 'Bahrain International Karting', timeSlot: 'Afternoon', desc: 'One of the best floodlit outdoor karting facilities in the world.' }]
};