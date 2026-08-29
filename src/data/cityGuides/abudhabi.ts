import type { CityGuide } from '../types';

export const abudhabi: CityGuide = {
  slug: 'abu-dhabi',
  city: 'Abu Dhabi',
  raceSlug: 'abu-dhabi-gp',
  race: 'Abu Dhabi Grand Prix',
  circuitName: 'Yas Marina Circuit',
  country: 'United Arab Emirates',
  heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
  intro: 'The traditional twilight season finale. Yas Island turns into a global entertainment hub with superyacht parties, theme parks, and headline concerts after the championship trophy is hoisted.',
  quickFacts: { currency: 'UAE Dirham (AED)', language: 'Arabic & English', transitCard: 'Hafilat Card / Rideshare', airport: 'Zayed Int. (AUH) / Dubai (DXB)' },
  trackCommuteSummary: {
    title: 'Downtown Abu Dhabi ➔ Yas Island',
    time: '25-35 mins (Taxi / Shuttle)',
    frequency: 'Continuous',
    details: 'Free Yas Express shuttle buses connect major Abu Dhabi hotels with Yas Marina Circuit gates.'
  },
  morningSupplies: { location: 'Waitrose / Carrefour (Yas Mall)', tip: 'Yas Mall is attached directly to the circuit perimeter for easy dining and supplies.' },
  cityTransport: { rideshare: 'Careem and Uber operate extensively. Taxis are very cheap.', nightTransit: 'Taxis operate 24/7.' },
  practicalities: { tapWater: 'Safe for brushing; bottled water preferred for drinking.', tipping: '10-15% standard.', powerPlugs: 'Type G (230V) - Standard UK plug.' },
  weatherAndVibe: { climate: 'Warm, pleasant twilight conditions (24-28°C).', dressCode: 'Smart-casual to glamorous evening resort wear.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Yas Marina Yacht Walk', activity: 'Stroll past superyachts and enjoy waterfront dining as race teams arrive.' },
    { day: 'Friday', timing: 'Evening', title: 'Etihad Park Concerts', activity: 'Attend the official post-session headline concert (included with race tickets).' },
    { day: 'Saturday', timing: 'Evening', title: 'Sheikh Zayed Grand Mosque', activity: 'Visit the breathtaking illuminated white marble mosque before evening qualifying.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Championship Finale Party', activity: 'Celebrate the world champion under the Yas Hotel lights and fireworks.' },
    { day: 'Monday', timing: 'Morning', title: 'Ferrari World Abu Dhabi', activity: 'Ride Formula Rossa—the world\'s fastest roller coaster—on Yas Island.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Explore world-class culture on Saadiyat Island.',
    culture: [{ name: 'Louvre Abu Dhabi', desc: 'Stunning floating museum dome designed by Jean Nouvel.' }],
    motorsport: [{ name: 'Ferrari World Abu Dhabi', desc: 'The ultimate Ferrari theme park right on Yas Island.' }]
  },
  neighborhoods: [
    { name: 'Yas Island', vibe: 'Zero Commute & Pure Action', commuteTime: '5m (Walk/Shuttle)', transitRoute: 'Walk to Circuit', desc: 'Stay right beside the track and theme parks for immediate access.', bookingUrl: 'https://www.booking.com/district/ae/abu-dhabi/yas-island.html' }
  ],
  foodAndDrink: [{ name: 'Cipriani Yas Island', type: 'Italian Fine Dining', desc: 'Overlooks Yas Marina with views of the yachts and race action.' }],
  watchParties: [{ name: 'Stars \'N\' Bars (Yas Marina)', type: 'Sports Bar', desc: 'American-style sports bar right on the marina with race screens.' }],
  sightseeing: [{ name: 'Sheikh Zayed Grand Mosque', timeSlot: 'Sunset', desc: 'One of the world\'s largest and most beautiful mosques.' }]
};