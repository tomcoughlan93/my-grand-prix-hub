import type { CityGuide } from '../types';

export const spa: CityGuide = {
  slug: 'brussels',
  city: 'Brussels / Liège',
  raceSlug: 'belgian-gp',
  race: 'Belgian Grand Prix',
  circuitName: 'Circuit de Spa-Francorchamps',
  country: 'Belgium',
  heroImage: 'https://images.unsplash.com/photo-1572978939886-0610f4dc794b?q=80&w=1200&auto=format&fit=crop',
  intro: 'Spa-Francorchamps is pure motorsport romance in the Ardennes forest. Fans staying in Liège or Brussels enjoy Belgian waffles, frites, and world-class Trappist beers alongside legendary track action.',
  quickFacts: { currency: 'Euro (€)', language: 'French, Dutch & German', transitCard: 'SNCB Train Tickets', airport: 'Brussels Airport (BRU) / Charleroi (CRL)' },
  trackCommuteSummary: {
    title: 'Liège / Brussels ➔ Spa',
    time: '45-90 mins (Train + City Shuttle)',
    frequency: 'Hourly',
    details: 'Take the SNCB train to Verviers-Central, where dedicated TEC shuttle buses run continuously to the circuit entrance.'
  },
  morningSupplies: { location: 'Delhaize / Carrefour Express', tip: 'Mud and unpredictable rain are guaranteed at Spa. Pack snacks, waterproof boots, and ponchos.' },
  cityTransport: { rideshare: 'Uber in Brussels and Liège.', nightTransit: 'Trains connect major cities until midnight.' },
  practicalities: { tapWater: 'Safe to drink.', tipping: 'Service included; round up small change.', powerPlugs: 'Type C / E (230V)' },
  weatherAndVibe: { climate: 'Unpredictable microclimate: rain can hit one sector while another is dry.', dressCode: 'Sturdy hiking boots and rain gear are mandatory.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Grand Place & Belgian Beer', activity: 'Stroll Brussels’ illuminated central square and sample Trappist beers at Delirium Café.' },
    { day: 'Friday', timing: 'Evening', title: 'Liège Waffles & Frites', activity: 'Taste authentic Liège sugar waffles and crispy double-fried Belgian frites.' },
    { day: 'Saturday', timing: 'Evening', title: 'Ardennes Village Dining', activity: 'Dine in nearby Malmedy or Stavelot for a cozy countryside atmosphere.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Kemmel Straight Track Walk', activity: 'Walk the uphill track through Eau Rouge and Raidillon after the podium ceremony.' },
    { day: 'Monday', timing: 'Morning', title: 'Atomium & Comic Strip Route', activity: 'Explore Brussels\' architectural icon before heading home.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Explore Belgium’s historic towns.',
    culture: [{ name: 'Bruges Day Trip', desc: 'Take a 1-hour train to the medieval canal city of Bruges.' }],
    motorsport: [{ name: 'Stavelot Abbey Racetrack Museum', desc: 'Museum dedicated to the history of Spa-Francorchamps.' }]
  },
  neighborhoods: [
    { name: 'Liège-Guillemins', vibe: 'Closest City Base', commuteTime: '45m (Train+Shuttle)', transitRoute: 'Train to Verviers', desc: 'Modern train station hub with the fastest rail link to the track.', bookingUrl: 'https://www.booking.com/city/be/liege.html' }
  ],
  foodAndDrink: [{ name: 'Maison Antoine (Brussels)', type: 'Friterie', desc: 'Famous spot for traditional Belgian frites with dozens of sauces.' }],
  watchParties: [{ name: 'Delirium Monasterium', type: 'Beer Hall', desc: 'Vibrant beer hall with hundreds of options and sport screenings.' }],
  sightseeing: [{ name: 'Grand Place (Brussels)', timeSlot: 'Evening', desc: 'One of the most beautiful public squares in the world.' }]
};