import type { CityGuide } from '../types';

export const montreal: CityGuide = {
  slug: 'montreal',
  city: 'Montreal',
  raceSlug: 'canadian-gp',
  race: 'Canadian Grand Prix',
  circuitName: 'Circuit Gilles Villeneuve',
  country: 'Canada',
  heroImage: 'https://images.unsplash.com/photo-1519178173458-7517a3a9b1c7?q=80&w=1200&auto=format&fit=crop',
  intro: 'Montreal is one of the most beloved F1 race weeks. The entire city shuts down Crescent and Peel Streets for massive street parties, and the track is just a 15-minute direct metro ride from downtown.',
  quickFacts: { currency: 'Canadian Dollar (CAD / $)', language: 'French & English', transitCard: 'OPUS Card / Contactless', airport: 'Montréal-Trudeau (YUL)' },
  trackCommuteSummary: {
    title: 'Downtown ➔ Circuit Gilles Villeneuve',
    time: '15-20 mins (Metro)',
    frequency: 'Every 2 mins',
    details: 'Take Metro Yellow Line straight to Jean-Drapeau station. Walk across the bridge directly onto the circuit grounds.'
  },
  morningSupplies: { location: 'Couche-Tard / Metro Supermarket', tip: 'Stock up on snacks and drinks in the city before taking the metro.' },
  cityTransport: { rideshare: 'Uber is standard.', nightTransit: 'Metro runs until 00:30 on weekdays, 01:00 on Saturdays.' },
  practicalities: { tapWater: '100% safe to drink.', tipping: '15-20% standard.', powerPlugs: 'Type A / B (120V)' },
  weatherAndVibe: { climate: 'Warm days (22-26°C), breezy on the island. Pack layers.', dressCode: 'Casual and ready for street parties.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Crescent Street Festival', activity: 'Experience the street closure festival with show cars, simulators, and live DJs.' },
    { day: 'Friday', timing: 'Evening', title: 'Old Montreal Dining', activity: 'Stroll cobblestone streets and dine at classic French-Canadian bistros.' },
    { day: 'Saturday', timing: 'Evening', title: 'Peel Street F1 Paddock Party', activity: 'Join the supercar displays and outdoor terrace parties on Peel Street.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Plateau Pub Crawl', activity: 'Celebrate with craft beers and poutine in the vibrant Plateau Mont-Royal.' },
    { day: 'Monday', timing: 'Morning', title: 'Mount Royal Viewpoint', activity: 'Walk up to Mount Royal lookout for panoramic views of the city.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Enjoy Montreal’s cuisine and culture.',
    culture: [{ name: 'Notre-Dame Basilica', desc: 'Gothic Revival masterpiece in Old Montreal.' }],
    motorsport: [{ name: 'Action 500 Karting', desc: 'Massive indoor go-kart facility.' }]
  },
  neighborhoods: [
    { name: 'Downtown / Ville-Marie', vibe: 'Street Parties & Fast Metro', commuteTime: '15m (Metro)', transitRoute: 'Yellow Line Metro', desc: 'The heart of the action, seconds from the Yellow line metro.', bookingUrl: 'https://www.booking.com/city/ca/montreal.html' }
  ],
  foodAndDrink: [{ name: 'La Banquise', type: 'Poutine 24/7', desc: 'Over 30 varieties of authentic Quebec poutine.' }],
  watchParties: [{ name: 'Peel Pub', type: 'Lively Sports Bar', desc: 'Legendary sports pub buzzing with race fans.' }],
  sightseeing: [{ name: 'Mont-Royal Lookout', timeSlot: 'Morning', desc: 'Scenic view overlooking the entire island.' }]
};