import type { CityGuide } from '../types';

export const budapest: CityGuide = {
  slug: 'budapest',
  city: 'Budapest',
  raceSlug: 'hungarian-gp',
  race: 'Hungarian Grand Prix',
  circuitName: 'Hungaroring',
  country: 'Hungary',
  heroImage: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1200&auto=format&fit=crop',
  intro: 'Budapest is one of the most affordable and entertaining stops on the F1 calendar. Fans enjoy thermal baths, ruin bars, and river cruises along the Danube between track sessions.',
  quickFacts: { currency: 'Hungarian Forint (HUF / Ft)', language: 'Hungarian', transitCard: 'BudapestGO App / HÉV Ticket', airport: 'Budapest Ferenc Liszt (BUD)' },
  trackCommuteSummary: {
    title: 'Budapest ➔ Hungaroring',
    time: '45 mins (HÉV Train + Shuttle)',
    frequency: 'Every 10-15 mins',
    details: 'Take the M2 Metro to Örs vezér tere, transfer to HÉV suburban train H8 to Kerepes, and catch the free circuit shuttle bus.'
  },
  morningSupplies: { location: 'Spar / CBA Príma', tip: 'Buy water and sun hats before leaving the city; the Hungaroring natural bowl gets scorching hot.' },
  cityTransport: { rideshare: 'Bolt is the official taxi app in Budapest (Uber does not operate standard service).', nightTransit: 'Tram 6 runs 24/7 along the Grand Boulevard.' },
  practicalities: { tapWater: 'Safe to drink.', tipping: '10-15% standard in restaurants.', powerPlugs: 'Type C / F (230V)' },
  weatherAndVibe: { climate: 'Very hot summer days (30-35°C). Bring strong sun protection.', dressCode: 'Casual summer clothing.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Danube Sunset Cruise', activity: 'See the illuminated Hungarian Parliament building from a river cruise with drinks.' },
    { day: 'Friday', timing: 'Evening', title: 'Jewish Quarter Ruin Bars', activity: 'Explore the world-famous Szimpla Kert ruin bar complex.' },
    { day: 'Saturday', timing: 'Evening', title: 'Goulash & Craft Beer', activity: 'Enjoy traditional Hungarian goulash and local craft beer in District VII.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Thermal Bath Party (Sparty)', activity: 'Celebrate after the race at the evening thermal bath parties at Széchenyi Baths.' },
    { day: 'Monday', timing: 'Morning', title: 'Fisherman’s Bastion', activity: 'Stroll the fairytale panoramic towers overlooking the city.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Soak in the historic baths.',
    culture: [{ name: 'Széchenyi Thermal Baths', desc: 'Relax in massive outdoor natural geothermal pools.' }],
    motorsport: [{ name: 'Hungaroring Karting Center', desc: 'Outdoor kart track located inside the race circuit.' }]
  },
  neighborhoods: [
    { name: 'District VII (Erzsébetváros)', vibe: 'Nightlife & Ruin Bars', commuteTime: '45m (Metro+HÉV)', transitRoute: 'M2 Metro connection', desc: 'Heart of the dining and bar scene, close to the M2 subway line.', bookingUrl: 'https://www.booking.com/district/hu/budapest/07-erzsebetvaros.html' }
  ],
  foodAndDrink: [{ name: 'Szimpla Kert', type: 'Iconic Ruin Bar', desc: 'The original ruin pub built inside an abandoned factory.' }],
  watchParties: [{ name: 'Pointer Pub & Sports Bars', type: 'Sports Pub', desc: 'Lively venue with multiple screens showing race sessions.' }],
  sightseeing: [{ name: 'Hungarian Parliament Building', timeSlot: 'Sunset', desc: 'Spectacular neo-Gothic building on the banks of the Danube.' }]
};