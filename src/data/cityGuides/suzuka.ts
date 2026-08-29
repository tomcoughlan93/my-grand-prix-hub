import type { CityGuide } from '../types';

export const suzuka: CityGuide = {
  slug: 'suzuka',
  city: 'Nagoya / Suzuka',
  raceSlug: 'japanese-gp',
  race: 'Japanese Grand Prix',
  circuitName: 'Suzuka Circuit',
  country: 'Japan',
  heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
  intro: 'Most international fans base themselves in Nagoya and take the dedicated Kintetsu or JR trains down to Suzuka for the world’s most passionate motorsport atmosphere.',
  quickFacts: { currency: 'Japanese Yen (JPY / ¥)', language: 'Japanese', transitCard: 'Suica / Pasmo / ICOCA IC Card', airport: 'Chubu Centrair (NGO)' },
  trackCommuteSummary: {
    title: 'Nagoya ➔ Suzuka Circuit',
    time: '50-60 mins (Train + Shuttle/Walk)',
    frequency: 'Every 10-15 mins',
    details: 'Take the Kintetsu Limited Express from Kintetsu-Nagoya to Shiroko Station, then take the dedicated 15-minute shuttle bus to the track.'
  },
  morningSupplies: { location: '7-Eleven / FamilyMart (Nagoya Station)', tip: 'Pick up onigiri, bento boxes, and bottled tea; track queues can be immense.' },
  cityTransport: { rideshare: 'JapanTaxi app / Uber. Trains are the undisputed best choice.', nightTransit: 'Subways stop around midnight.' },
  practicalities: { tapWater: '100% safe to drink.', tipping: 'Strictly no tipping in Japan.', powerPlugs: 'Type A / B (100V)' },
  weatherAndVibe: { climate: 'Pleasant spring weather (17-21°C), occasional showers.', dressCode: 'Casual. Crazy homemade driver hats and F1 cosplay are strongly encouraged!' },
  itinerary: [
    { day: 'Thursday', timing: 'Morning', title: 'Suzuka Pit Walk & Fan Forum', activity: 'Arrive early at Suzuka for the legendary Japanese fan forum and pit lane access.' },
    { day: 'Friday', timing: 'Evening', title: 'Nagoya Chicken Wings (Tebasaki)', activity: 'Head back to Nagoya and try local spicy fried chicken wings at Sekai no Yamachan.' },
    { day: 'Saturday', timing: 'Evening', title: 'Sakae Nightlife', activity: 'Enjoy izakayas and draft beer in the lively entertainment district of Sakae.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Grandstand Light-Up Ceremony', activity: 'Stay at the track after the race for the fan track walk and illuminated ferris wheel.' },
    { day: 'Monday', timing: 'Morning', title: 'Nagoya Castle', activity: 'Visit the historic castle grounds before catching the Shinkansen.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Explore the automotive heart of Japan.',
    culture: [{ name: 'Nagoya Castle', desc: 'Historic 17th-century fortress.' }],
    motorsport: [{ name: 'Toyota Commemorative Museum', desc: 'Explore the heritage and machinery of Toyota in Nagoya.' }]
  },
  neighborhoods: [
    { name: 'Nagoya Station (Meieki)', vibe: 'Fastest Commute', commuteTime: '50m (Train)', transitRoute: 'Kintetsu Express to Shiroko', desc: 'The most efficient location to catch direct trains every morning.', bookingUrl: 'https://www.booking.com/city/jp/nagoya.html' }
  ],
  foodAndDrink: [{ name: 'Sekai no Yamachan', type: 'Izakaya', desc: 'Famous for Nagoya-style peppered chicken wings and draft beer.' }],
  watchParties: [{ name: 'Shooters Sports Bar (Nagoya)', type: 'International Sports Pub', desc: 'English-speaking staff showing motorsport with live commentary.' }],
  sightseeing: [{ name: 'Suzuka Circuit Ferris Wheel', timeSlot: 'Afternoon', desc: 'Ride the iconic ferris wheel inside the circuit for track views.' }]
};