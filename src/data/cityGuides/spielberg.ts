import type { CityGuide } from '../types';

export const spielberg: CityGuide = {
  slug: 'vienna',
  city: 'Graz / Vienna',
  raceSlug: 'austrian-gp',
  race: 'Austrian Grand Prix',
  circuitName: 'Red Bull Ring',
  country: 'Austria',
  heroImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1200&auto=format&fit=crop',
  intro: 'Set in the Styrian mountains, the Austrian Grand Prix offers a festival camping atmosphere. Non-camping fans base themselves in nearby Graz or Vienna and take regional rail into the alpine valley.',
  quickFacts: { currency: 'Euro (€)', language: 'German', transitCard: 'ÖBB App Tickets', airport: 'Graz (GRZ) / Vienna (VIE)' },
  trackCommuteSummary: {
    title: 'Graz ➔ Red Bull Ring',
    time: '50 mins (Train + Shuttle)',
    frequency: 'Every 30 mins',
    details: 'Take the ÖBB train from Graz to Knittelfeld station, where free official shuttle buses transfer you to the Red Bull Ring gates.'
  },
  morningSupplies: { location: 'Billa / Spar', tip: 'Supermarkets are strictly closed on Sundays in Austria! Buy weekend supplies on Friday or Saturday.' },
  cityTransport: { rideshare: 'Uber in Graz/Vienna; local taxis around Spielberg.', nightTransit: 'Limited night rail in the countryside.' },
  practicalities: { tapWater: 'Pristine mountain alpine tap water—among the world\'s best.', tipping: '5-10% standard.', powerPlugs: 'Type C / F (230V)' },
  weatherAndVibe: { climate: 'Mountain climate: hot days, cold nights, sudden storms.', dressCode: 'Outdoor activewear and waterproofs.' },
  itinerary: [
    { day: 'Thursday', timing: 'Afternoon', title: 'Graz Old Town & Schlossberg', activity: 'Explore the UNESCO-listed historic centre of Graz and take the funicular to the clock tower.' },
    { day: 'Friday', timing: 'Evening', title: 'Styrian Wine & Schnitzel', activity: 'Enjoy traditional Austrian schnitzel and local Styrian pumpkin seed oil delicacies.' },
    { day: 'Saturday', timing: 'Evening', title: 'Campsite Festival Atmosphere', activity: 'Explore the lively festival grounds surrounding the circuit.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Track Invasion & Concerts', activity: 'Walk the track after the podium and enjoy open-air DJ sets in the F1 fanzone.' },
    { day: 'Monday', timing: 'Morning', title: 'Vienna Coffee House', activity: 'If departing via Vienna, enjoy a traditional Melange coffee and Sachertorte.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Enjoy alpine beauty and Austrian culture.',
    culture: [{ name: 'Schönbrunn Palace (Vienna)', desc: 'Imperial summer residence of the Habsburgs.' }],
    motorsport: [{ name: 'Red Bull Ring Driving Center', desc: 'Book track driving experiences on non-race days.' }]
  },
  neighborhoods: [
    { name: 'Graz Centre', vibe: 'Historic & Easy Commute', commuteTime: '50m (Train+Shuttle)', transitRoute: 'ÖBB Train to Knittelfeld', desc: 'The best city hub with restaurants and direct race trains.', bookingUrl: 'https://www.booking.com/city/at/graz.html' }
  ],
  foodAndDrink: [{ name: 'Der Steirer (Graz)', type: 'Styrian Cuisine', desc: 'Outstanding local Austrian tapas and regional wines.' }],
  watchParties: [{ name: 'Bros Sports Bar (Graz)', type: 'Sports Bar', desc: 'Great beer selection and motorsport screenings.' }],
  sightseeing: [{ name: 'Schlossberg Clock Tower', timeSlot: 'Sunset', desc: 'Hilltop view overlooking the red roofs of Graz.' }]
};