import type { CityGuide } from '../types';

export const mexicocity: CityGuide = {
  slug: 'mexico-city',
  city: 'Mexico City',
  raceSlug: 'mexico-city-gp',
  race: 'Mexico City Grand Prix',
  circuitName: 'Autódromo Hermanos Rodríguez',
  country: 'Mexico',
  heroImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200&auto=format&fit=crop',
  intro: 'The fiesta of the F1 calendar. Fans enjoy tacos, mezcal bars, and historic plazas in Roma and Condesa, with direct Metro Line 9 access right to the circuit gates.',
  quickFacts: { currency: 'Mexican Peso (MXN / $)', language: 'Spanish', transitCard: 'Integrated Mobility Card (Metro)', airport: 'Benito Juárez Int. (MEX)' },
  trackCommuteSummary: {
    title: 'Roma/Condesa ➔ Circuit',
    time: '25-35 mins (Metro Line 9)',
    frequency: 'Every 3 mins',
    details: 'Take Metro Line 9 (Brown) straight to Ciudad Deportiva or Puebla stations, dropping you directly at the stadium gates.'
  },
  morningSupplies: { location: 'OXXO / 7-Eleven', tip: 'Carry bottled water and electrolyte drinks; high altitude (2,240m) causes rapid dehydration.' },
  cityTransport: { rideshare: 'Uber is safe, reliable, and very cheap.', nightTransit: 'Metro stops at midnight. Use Uber for late-night transit.' },
  practicalities: { tapWater: 'Do not drink tap water. Use bottled water.', tipping: '10-15% standard in restaurants.', powerPlugs: 'Type A / B (127V)' },
  weatherAndVibe: { climate: 'Warm sunny days (22-25°C), cool evenings. High altitude thin air.', dressCode: 'Smart-casual city wear and comfortable walking shoes.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Roma Norte Taquerias', activity: 'Sample world-class Tacos al Pastor and mezcal in bohemian Roma Norte.' },
    { day: 'Friday', timing: 'Evening', title: 'Lucha Libre Wrestling', activity: 'Experience the electric masked wrestling atmosphere at Arena México.' },
    { day: 'Saturday', timing: 'Evening', title: 'Condesa Bars', activity: 'Enjoy craft cocktails along leafy Parque México.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Foro Sol Stadium Party', activity: 'Stay inside the baseball stadium section for the world’s biggest post-race DJ party.' },
    { day: 'Monday', timing: 'Morning', title: 'Chapultepec Castle', activity: 'Walk through Chapultepec Park and visit the historic hilltop castle.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Experience ancient Mesoamerican heritage.',
    culture: [{ name: 'Teotihuacan Pyramids', desc: 'Day trip to climb the colossal Pyramids of the Sun and Moon.' }],
    motorsport: [{ name: 'K1 Speed Mexico', desc: 'Indoor electric karting in Garden Santa Fe.' }]
  },
  neighborhoods: [
    { name: 'Roma Norte / Condesa', vibe: 'Top Dining & Nightlife', commuteTime: '30m (Metro)', transitRoute: 'Metro Line 9 direct', desc: 'The most popular neighborhood for international visitors with outstanding dining.', bookingUrl: 'https://www.booking.com/city/mx/mexico-city.html' }
  ],
  foodAndDrink: [{ name: 'Taquería Orinoco', type: 'Tacos al Pastor', desc: 'Famous for crispy trompo pork tacos and fried potatoes.' }],
  watchParties: [{ name: 'Pinche Gringo BBQ Warehouse', type: 'Sports Venue', desc: 'Huge screens, craft beer, and energetic race watch parties.' }],
  sightseeing: [{ name: 'National Museum of Anthropology', timeSlot: 'Morning', desc: 'World-class museum showcasing Aztec and Mayan treasures.' }]
};