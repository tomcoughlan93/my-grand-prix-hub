import type { CityGuide } from '../types';

export const doha: CityGuide = {
  slug: 'doha',
  city: 'Doha / Lusail',
  raceSlug: 'qatar-gp',
  race: 'Qatar Grand Prix',
  circuitName: 'Lusail International Circuit',
  country: 'Qatar',
  heroImage: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=1200&auto=format&fit=crop',
  intro: 'Ultra-modern luxury and desert racing under high-powered floodlights. Fans stay in Doha along the Corniche or The Pearl, taking the Red Line Metro and shuttles north to Lusail.',
  quickFacts: { currency: 'Qatari Riyal (QAR)', language: 'Arabic & English', transitCard: 'Doha Metro Card', airport: 'Hamad Int. Airport (DOH)' },
  trackCommuteSummary: {
    title: 'Central Doha ➔ Lusail Circuit',
    time: '35-45 mins (Metro + Shuttle)',
    frequency: 'Every 5 mins',
    details: 'Take the Red Line Metro straight to Lusail QNB Station, where dedicated official shuttles transfer fans to the track.'
  },
  morningSupplies: { location: 'Monoprix (Doha / The Pearl)', tip: 'Buy water in Doha before boarding shuttles; desert nights get dry and breezy.' },
  cityTransport: { rideshare: 'Uber and Karwa Taxis are cheap and ubiquitous.', nightTransit: 'Metro runs late on race weekends.' },
  practicalities: { tapWater: 'Safe for brushing, bottled water preferred for drinking.', tipping: '10-15% standard in hotels and restaurants.', powerPlugs: 'Type G (230V) - Standard UK plug.' },
  weatherAndVibe: { climate: 'Pleasant late-autumn temperatures (22-26°C at night).', dressCode: 'Smart-casual. Modest clothing appreciated in cultural sites.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Souq Waqif', activity: 'Wander through traditional markets, spice alleys, and outdoor dining terraces.' },
    { day: 'Friday', timing: 'Evening', title: 'Katara Cultural Village', activity: 'Explore seaside galleries, amphitheaters, and waterfront cafes.' },
    { day: 'Saturday', timing: 'Evening', title: 'Lusail Boulevard', activity: 'Experience the futuristic glowing architecture and supercars in Lusail City.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Night Race Fireworks', activity: 'Celebrate after the race as fireworks light up the Lusail skyline.' },
    { day: 'Monday', timing: 'Morning', title: 'Museum of Islamic Art', activity: 'Visit the architectural icon on the Doha Corniche before departure.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Discover Arabian luxury and heritage.',
    culture: [{ name: 'National Museum of Qatar', desc: 'Spectacular desert-rose architectural building.' }],
    motorsport: [{ name: 'Lusail Karting Track', desc: 'Floodlit outdoor karting right at the circuit.' }]
  },
  neighborhoods: [
    { name: 'West Bay / The Pearl', vibe: 'Luxury & Metro Access', commuteTime: '35m (Metro+Shuttle)', transitRoute: 'Red Line Metro', desc: 'Modern high-rises and restaurants with direct Red Line access to Lusail.', bookingUrl: 'https://www.booking.com/city/qa/doha.html' }
  ],
  foodAndDrink: [{ name: 'Shay Al Shomous (Souq Waqif)', type: 'Qatari Breakfast', desc: 'Famous for freshly baked regag bread and saffron tea.' }],
  watchParties: [{ name: 'Champions Sports Bar (West Bay)', type: 'Sports Lounge', desc: 'Dozens of screens showing international motorsport.' }],
  sightseeing: [{ name: 'Museum of Islamic Art', timeSlot: 'Afternoon', desc: 'World-class art collection overlooking Doha Bay.' }]
};