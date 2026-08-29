// src/data/types.ts

export interface CityGuide {
  slug: string;
  city: string;
  raceSlug: string;
  race: string;
  circuitName: string;
  country: string;
  heroImage: string;
  intro: string;
  quickFacts: {
    currency: string;
    language: string;
    transitCard: string;
    airport: string;
  };
  trackCommuteSummary: {
    title: string;
    time: string;
    frequency: string;
    details: string;
  };
  morningSupplies: {
    location: string;
    tip: string;
  };
  cityTransport: {
    rideshare: string;
    nightTransit: string;
  };
  practicalities: {
    tapWater: string;
    tipping: string;
    powerPlugs: string;
  };
  weatherAndVibe: {
    climate: string;
    dressCode: string;
  };
  itinerary: {
    day: string;
    timing: string;
    title: string;
    activity: string;
  }[];
  extendedStay: {
    title: string;
    desc: string;
    culture: { name: string; desc: string }[];
    motorsport: { name: string; desc: string }[];
  };
  neighborhoods: {
    name: string;
    vibe: string;
    commuteTime: string;
    transitRoute: string;
    desc: string;
    bookingUrl: string;
  }[];
  foodAndDrink: {
    name: string;
    type: string;
    desc: string;
    mapUrl?: string;
  }[];
  watchParties: {
    name: string;
    type: string;
    desc: string;
  }[];
  sightseeing: {
    name: string;
    timeSlot: string;
    desc: string;
    ticketUrl?: string;
  }[];
}