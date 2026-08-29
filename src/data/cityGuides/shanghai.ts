import type { CityGuide } from '../types';

export const shanghai: CityGuide = {
  slug: 'shanghai',
  city: 'Shanghai',
  raceSlug: 'chinese-gp',
  race: 'Chinese Grand Prix',
  circuitName: 'Shanghai International Circuit',
  country: 'China',
  heroImage: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?q=80&w=1200&auto=format&fit=crop',
  intro: 'Shanghai blends hyper-futuristic skylines with historic colonial architecture. Metro Line 11 takes fans straight from the bustling Bund to the circuit gates in Jiading.',
  quickFacts: { currency: 'Chinese Yuan (CNY / ¥)', language: 'Mandarin (Alipay translation essential)', transitCard: 'Alipay / WeChat Transport QR', airport: 'Pudong (PVG) / Hongqiao (SHA)' },
  trackCommuteSummary: {
    title: 'Central Shanghai ➔ Circuit',
    time: '60 mins direct (Metro Line 11)',
    frequency: 'Every 5 mins',
    details: 'Take Metro Line 11 directly to Shanghai Circuit Station. Exit A drops you directly at the Main Grandstand concourse.'
  },
  morningSupplies: { location: 'FamilyMart / Lawson', tip: 'Stock up on snacks and drinks using digital payment before boarding the metro.' },
  cityTransport: { rideshare: 'Didi (via Alipay English interface).', nightTransit: 'Metro stops around 23:00; taxis/Didi take over.' },
  practicalities: { tapWater: 'Do not drink tap water. Use bottled water.', tipping: 'Not customary.', powerPlugs: 'Type A / C / I (220V)' },
  weatherAndVibe: { climate: 'Mild spring conditions (18-22°C), occasional rain.', dressCode: 'Casual and comfortable for extensive walking.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'The Bund & Skyline Views', activity: 'Walk along the Bund to take in the illuminated skyline of Pudong.' },
    { day: 'Friday', timing: 'Evening', title: 'Nanjing Road Eats', activity: 'Explore the pedestrian shopping street and sample local soup dumplings (Xiao Long Bao).' },
    { day: 'Saturday', timing: 'Evening', title: 'French Concession Bars', activity: 'Relax in craft cocktail bars and international pubs in the tree-lined French Concession.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Xintiandi Celebrations', activity: 'Celebrate with fellow motorsport fans in the lively pedestrian quarter.' },
    { day: 'Monday', timing: 'Morning', title: 'Yu Garden Stroll', activity: 'Explore traditional Ming Dynasty pavilions before heading to the airport.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Uncover both traditional and cutting-edge Shanghai.',
    culture: [{ name: 'Shanghai Tower', desc: 'Ride the world’s fastest elevator to the observation deck.' }],
    motorsport: [{ name: 'Shanghai Circuit Karting', desc: 'Karting track located right within the circuit grounds.' }]
  },
  neighborhoods: [
    { name: 'People’s Square / Jing’an', vibe: 'Central & Transit Hub', commuteTime: '55m (Metro)', transitRoute: 'Metro Line 2 to Jiangsu Rd ➔ Line 11', desc: 'Perfect central hub for dining and direct line connections.', bookingUrl: 'https://www.booking.com/city/cn/shanghai.html' }
  ],
  foodAndDrink: [{ name: 'Jia Jia Tang Bao', type: 'Dim Sum', desc: 'Legendary steamed soup dumplings.' }],
  watchParties: [{ name: 'The Camel Bar / Cages', type: 'Sports Bar', desc: 'Massive multi-screen sports venue in Jing\'an.' }],
  sightseeing: [{ name: 'Yu Garden', timeSlot: 'Morning', desc: 'Traditional gardens and tea houses in the heart of old Shanghai.' }]
};