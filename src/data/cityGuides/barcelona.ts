import type { CityGuide } from '../types';

export const barcelona: CityGuide = {
  slug: 'barcelona',
  city: 'Barcelona',
  raceSlug: 'spanish-gp',
  race: 'Spanish Grand Prix',
  circuitName: 'Circuit de Barcelona-Catalunya',
  country: 'Spain',
  heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1200&auto=format&fit=crop',
  intro: 'Barcelona offers world-class architecture, Mediterranean beaches, and legendary nightlife, making it one of the easiest race weekends to pair with a holiday.',
  quickFacts: { currency: 'Euro (€)', language: 'Spanish & Catalan', transitCard: 'T-Casual Card / Rodalies Train Ticket', airport: 'Barcelona-El Prat (BCN)' },
  trackCommuteSummary: {
    title: 'Barcelona Sants/Passeig de Gràcia ➔ Montmeló',
    time: '30 mins (Rodalies R2 Train)',
    frequency: 'Every 15-20 mins',
    details: 'Take the R2 or R2 Nord train to Montmeló station. From there, take the 10-minute shuttle bus or a 30-minute signposted walk to the track.'
  },
  morningSupplies: { location: 'Supermercado Dia / Mercadona', tip: 'Montmeló sun is intense. Pack 2+ litres of water and snacks before boarding the train.' },
  cityTransport: { rideshare: 'FreeNow (taxis), Cabify, Uber.', nightTransit: 'Metro runs until 02:00 on Saturdays, all night on festival weekends.' },
  practicalities: { tapWater: 'Safe to drink but tastes chlorinated. Bottled water preferred.', tipping: 'Round up small change.', powerPlugs: 'Type C / F (230V)' },
  weatherAndVibe: { climate: 'Hot and sunny (26-30°C). Bring strong sun protection.', dressCode: 'Casual beach and city wear.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Gothic Quarter Tapas', activity: 'Get lost in the historic Gothic Quarter and sample tapas at El Xampanyet.' },
    { day: 'Friday', timing: 'Evening', title: 'Barceloneta Beach Drinks', activity: 'Head to the beach chiringuitos (beach bars) for sunset beers.' },
    { day: 'Saturday', timing: 'Evening', title: 'El Born Bars & Cocktails', activity: 'Explore vibrant cocktail lounges in the trendy Born neighborhood.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Plaça de Catalunya Celebrations', activity: 'Meet up with fellow fans in the city centre to toast the race winner.' },
    { day: 'Monday', timing: 'Morning', title: 'Sagrada Família Tour', activity: 'Visit Gaudí’s awe-inspiring architectural masterpiece before your flight.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Immerse yourself in Catalan art and architecture.',
    culture: [{ name: 'Park Güell', desc: 'Iconic park with mosaic sculptures and city views.' }],
    motorsport: [{ name: 'Karting Cardedeu', desc: 'Historic outdoor karting circuit near Montmeló.' }]
  },
  neighborhoods: [
    { name: 'Eixample / Passeig de Gràcia', vibe: 'Central & Direct Train', commuteTime: '30m (Train)', transitRoute: 'Direct R2 Train', desc: 'Upscale dining, iconic architecture, and direct train access to Montmeló.', bookingUrl: 'https://www.booking.com/district/es/barcelona/eixample.html' }
  ],
  foodAndDrink: [{ name: 'Cervecería Catalana', type: 'Tapas Bar', desc: 'Famous for fresh montaditos and seafood tapas.' }],
  watchParties: [{ name: 'The George Payne', type: 'Massive Irish Pub', desc: 'Huge screens and incredible international fan atmosphere in Urquinaona.' }],
  sightseeing: [{ name: 'Sagrada Família', timeSlot: 'Morning', desc: 'Book tickets well in advance for Gaudí’s legendary basilica.' }]
};