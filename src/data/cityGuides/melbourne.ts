import type { CityGuide } from '../types';

export const melbourne: CityGuide = {
  slug: 'melbourne',
  city: 'Melbourne',
  raceSlug: 'australian-gp',
  race: 'Australian Grand Prix',
  circuitName: 'Albert Park',
  country: 'Australia',
  heroImage: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=1200&auto=format&fit=crop',
  intro: 'Melbourne fully embraces the Grand Prix. The city seamlessly integrates the Albert Park circuit with its world-class coffee culture, hidden laneway bars, and passionate sports community.',
  quickFacts: { currency: 'AUD ($)', language: 'English', transitCard: 'Myki', airport: 'Melbourne Airport (MEL)' },
  trackCommuteSummary: {
    title: 'CBD ➔ Albert Park',
    time: '15-20 mins (Tram)',
    frequency: 'Every 2-3 mins',
    details: 'Free Yarra Trams run continuously from Southern Cross and Flinders Street Stations directly to the circuit gates.'
  },
  morningSupplies: { location: 'Coles / Woolworths (CBD)', tip: 'Buy sunscreen and water in the CBD; trackside prices are high.' },
  cityTransport: { rideshare: 'Uber & DiDi are widespread.', nightTransit: 'Night Network trams run all night on weekends.' },
  practicalities: { tapWater: 'Safe to drink.', tipping: 'Not expected.', powerPlugs: 'Type I (230V)' },
  weatherAndVibe: { climate: 'Four seasons in one day. Pack layers and rain gear.', dressCode: 'Casual & stylish. F1 team gear welcomed everywhere.' },
  itinerary: [
    { day: 'Thursday', timing: 'Morning', title: 'Laneway Coffee & Pit Walk', activity: 'Grab a flat white in Degraves Street, then head to Albert Park for the pit lane walk.' },
    { day: 'Friday', timing: 'Evening', title: 'Southbank Drinks', activity: 'Take the tram back and dine along the Yarra River with traveling fans.' },
    { day: 'Saturday', timing: 'Evening', title: 'Richmond Pubs', activity: 'Head to Richmond sports bars to debrief qualifying.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'St Kilda Beach Celebrations', activity: 'Walk down to St Kilda beach bars for the afterparty.' },
    { day: 'Monday', timing: 'Morning', title: 'Queen Victoria Market', activity: 'Recover with deli eats and coffee before flying out.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Explore Melbourne’s sporting and coastal lifestyle.',
    culture: [{ name: 'MCG Tour', desc: 'Tour Australia’s most iconic sports stadium.' }],
    motorsport: [{ name: 'Great Ocean Road', desc: 'Hire a car for a scenic coastal road trip.' }]
  },
  neighborhoods: [
    { name: 'CBD / Southbank', vibe: 'Convenient & Free Trams', commuteTime: '15m (Tram)', transitRoute: 'Direct free tram', desc: 'The easiest base for free transit and restaurants.', bookingUrl: 'https://www.booking.com/district/au/melbourne/cbd.html' }
  ],
  foodAndDrink: [{ name: 'Hardware Lane', type: 'Laneway Dining', desc: 'Iconic spot for morning coffee and brunch.' }],
  watchParties: [{ name: 'The Imperial Hotel', type: 'Sports Pub', desc: 'Rooftop screen with live race audio.' }],
  sightseeing: [{ name: 'Eureka Skydeck', timeSlot: 'Sunset', desc: 'Panoramic views over the entire Albert Park track layout.' }]
};