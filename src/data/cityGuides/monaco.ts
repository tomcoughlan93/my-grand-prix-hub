import type { CityGuide } from '../types';

export const monaco: CityGuide = {
  slug: 'monte-carlo',
  city: 'Monaco / Nice',
  raceSlug: 'monaco-gp',
  race: 'Monaco Grand Prix',
  circuitName: 'Circuit de Monaco',
  country: 'Monaco',
  heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
  intro: 'The jewel in the motorsport crown. Most fans stay in nearby Nice for accessible hotels and take the scenic 20-minute double-decker train along the French Riviera straight into Monaco station.',
  quickFacts: { currency: 'Euro (€)', language: 'French (English widely spoken)', transitCard: 'SNCF Train Tickets / Lignes d’Azur', airport: 'Nice Côte d’Azur (NCE)' },
  trackCommuteSummary: {
    title: 'Nice-Ville ➔ Monaco-Monte-Carlo',
    time: '20 mins (TER Train)',
    frequency: 'Every 15 mins',
    details: 'SNCF TER trains run constantly along the coast from Nice-Ville straight into the underground Monaco Monte-Carlo station.'
  },
  morningSupplies: { location: 'Monoprix (Nice or Monaco)', tip: 'Monaco prices are astronomically high. Buy water and baguettes in Nice before traveling.' },
  cityTransport: { rideshare: 'Uber works in Nice; only official Monaco taxis inside the Principality.', nightTransit: 'Trains stop around 23:30.' },
  practicalities: { tapWater: 'Safe to drink.', tipping: 'Service is included; round up small change.', powerPlugs: 'Type C / E / F (230V)' },
  weatherAndVibe: { climate: 'Warm Mediterranean sun (23-27°C).', dressCode: 'Smart-casual to luxury. Collared shirts recommended for evenings.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Nice Old Town (Vieux Nice)', activity: 'Explore narrow alleys, drink Provençal wine, and eat socca flatbreads.' },
    { day: 'Friday', timing: 'Evening', title: 'Monaco Harbor Atmosphere', activity: 'Walk along Port Hercule after track sessions as superyachts start their parties.' },
    { day: 'Saturday', timing: 'Evening', title: 'Promenade des Anglais', activity: 'Stroll Nice’s famous waterfront promenade and enjoy coastal dining.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Rascasse Street Party', activity: 'After the race, the circuit track surface opens to the public for open-air DJ parties.' },
    { day: 'Monday', timing: 'Morning', title: 'Castle Hill (Colline du Château)', activity: 'Climb the steps in Nice for the iconic panorama over the Bay of Angels.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Explore the French Riviera.',
    culture: [{ name: 'Villa Ephrussi de Rothschild', desc: 'Stunning seaside mansion in Saint-Jean-Cap-Ferrat.' }],
    motorsport: [{ name: 'Monaco Top Cars Collection', desc: 'The Prince of Monaco’s personal collection of historic F1 cars.' }]
  },
  neighborhoods: [
    { name: 'Nice-Ville / Jean-Médecin', vibe: 'Accessible & Best Transit', commuteTime: '20m (Train)', transitRoute: 'Direct TER Train', desc: 'Close to Nice central station for the easiest daily train commute.', bookingUrl: 'https://www.booking.com/city/fr/nice.html' }
  ],
  foodAndDrink: [{ name: 'Chez René Socca', type: 'Niçoise Street Food', desc: 'Traditional chickpea flatbreads and local wine in Old Nice.' }],
  watchParties: [{ name: 'Ma Nolan’s Irish Pub (Nice Port)', type: 'Sports Pub', desc: 'Huge atmosphere with English commentary by Nice harbor.' }],
  sightseeing: [{ name: 'Prince’s Palace of Monaco', timeSlot: 'Morning', desc: 'Perched on the Rock of Monaco overlooking the harbor.' }]
};