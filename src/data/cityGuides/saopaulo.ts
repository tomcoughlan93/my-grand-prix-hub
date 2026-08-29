import type { CityGuide } from '../types';

export const saopaulo: CityGuide = {
  slug: 'sao-paulo',
  city: 'São Paulo',
  raceSlug: 'sao-paulo-gp',
  race: 'São Paulo Grand Prix',
  circuitName: 'Autódromo José Carlos Pace (Interlagos)',
  country: 'Brazil',
  heroImage: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=1200&auto=format&fit=crop',
  intro: 'Passionate Ayrton Senna heritage and electric energy. Fans base themselves in Jardins or Pinheiros, enjoying Brazilian steakhouses (churrascarias) and direct express trains to Interlagos.',
  quickFacts: { currency: 'Brazilian Real (BRL / R$)', language: 'Portuguese', transitCard: 'Bilhete Único / Contactless', airport: 'Guarulhos (GRU) / Congonhas (CGH)' },
  trackCommuteSummary: {
    title: 'Pinheiros / Morumbi ➔ Autódromo Station',
    time: '35 mins (Line 9 Emerald Train)',
    frequency: 'Every 4-6 mins',
    details: 'Take CPTM Line 9-Emerald train directly to Autódromo Station. A 10-minute signposted walk leads to the circuit gates.'
  },
  morningSupplies: { location: 'Pão de Açúcar / Carrefour', tip: 'Weather changes in minutes at Interlagos. Buy ponchos and water before taking the train.' },
  cityTransport: { rideshare: 'Uber is safe, cheap, and the preferred night transit.', nightTransit: 'Metro closes around midnight. Use Uber afterward.' },
  practicalities: { tapWater: 'Do not drink tap water. Use bottled water.', tipping: '10% service usually included on bills.', powerPlugs: 'Type N / C (127V / 220V)' },
  weatherAndVibe: { climate: 'Warm spring weather with sudden tropical downpours.', dressCode: 'Casual clothing and waterproof shoes.' },
  itinerary: [
    { day: 'Thursday', timing: 'Evening', title: 'Churrascaria Feast', activity: 'Enjoy an authentic Brazilian barbecue rodízio dinner at Fogo de Chão.' },
    { day: 'Friday', timing: 'Evening', title: 'Vila Madalena Samba & Caipirinhas', activity: 'Explore vibrant samba bars and craft beer pubs in Vila Madalena.' },
    { day: 'Saturday', timing: 'Evening', title: 'Jardins Dining', activity: 'Dine in upscale Jardins, home to some of South America’s top restaurants.' },
    { day: 'Sunday', timing: 'Post-Race', title: 'Interlagos Track Invasion', activity: 'Join the world-famous track invasion at the Senna ' + 'S' + ' to celebrate the podium.' },
    { day: 'Monday', timing: 'Morning', title: 'Ibirapuera Park', activity: 'Stroll through São Paulo’s central park and visit the contemporary art museums.' }
  ],
  extendedStay: {
    title: 'Staying an Extra Day?',
    desc: 'Celebrate Brazilian motorsport history.',
    culture: [{ name: 'Avenida Paulista', desc: 'Iconic avenue closed to cars on Sundays with street performers.' }],
    motorsport: [{ name: 'Ayrton Senna Memorial (Morumbi Cemetery)', desc: 'Pay tribute to the legendary three-time champion.' }]
  },
  neighborhoods: [
    { name: 'Pinheiros / Itaim Bibi', vibe: 'Modern & Safe Dining', commuteTime: '35m (Train)', transitRoute: 'CPTM Line 9 direct', desc: 'Safe, lively neighborhood with direct train access to the circuit.', bookingUrl: 'https://www.booking.com/city/br/sao-paulo.html' }
  ],
  foodAndDrink: [{ name: 'Fogo de Chão Jardins', type: 'Churrascaria', desc: 'World-class continuous table-side cuts of Brazilian meat.' }],
  watchParties: [{ name: 'O\'Malley\'s Irish Pub (Jardins)', type: 'Sports Pub', desc: 'Famous expat sports pub with live music and screens.' }],
  sightseeing: [{ name: 'Beco do Batman', timeSlot: 'Afternoon', desc: 'Famous open-air graffiti alley in Vila Madalena.' }]
};