// src/data/teamLineage.ts

export const timelineStart = 1950;
export const timelineEnd = 2026;
export const totalYears = timelineEnd - timelineStart + 1;

export interface Era {
  name: string;
  shortName?: string;
  start: number;
  end: number;
  color: string;
  textDark?: boolean;
}

export interface TeamLineage {
  currentTeam: string;
  eras: Era[];
}

export const teamLineage: TeamLineage[] = [
  {
    currentTeam: "Ferrari",
    eras: [
      { name: "Scuderia Ferrari", shortName: "Ferrari", start: 1950, end: 2026, color: "#e8002d" }
    ]
  },
  {
    currentTeam: "McLaren",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1965, color: "transparent" },
      { name: "McLaren Racing", shortName: "McLaren", start: 1966, end: 2026, color: "#ff8000", textDark: true }
    ]
  },
  {
    currentTeam: "Williams",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1976, color: "transparent" },
      { name: "Williams Racing", shortName: "Williams", start: 1977, end: 2026, color: "#64c4ff", textDark: true }
    ]
  },
  {
    currentTeam: "Red Bull",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1996, color: "transparent" },
      { name: "Stewart Grand Prix", shortName: "Stewart", start: 1997, end: 1999, color: "#ffffff", textDark: true },
      { name: "Jaguar Racing", shortName: "Jaguar", start: 2000, end: 2004, color: "#004225" },
      { name: "Red Bull Racing", shortName: "Red Bull", start: 2005, end: 2026, color: "#3671c6" }
    ]
  },
  {
    currentTeam: "Mercedes",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1969, color: "transparent" },
      { name: "Tyrrell Racing", shortName: "Tyrrell", start: 1970, end: 1998, color: "#000080" },
      { name: "British American Racing", shortName: "BAR", start: 1999, end: 2005, color: "#ffffff", textDark: true },
      { name: "Honda", start: 2006, end: 2008, color: "#ffffff", textDark: true },
      { name: "Brawn GP", shortName: "Brawn", start: 2009, end: 2009, color: "#c8ff00", textDark: true },
      { name: "Mercedes", start: 2010, end: 2026, color: "#27f4d2", textDark: true }
    ]
  },
  {
    currentTeam: "Alpine",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1980, color: "transparent" },
      { name: "Toleman", start: 1981, end: 1985, color: "#0000ff" },
      { name: "Benetton Formula", shortName: "Benetton", start: 1986, end: 2001, color: "#00a08e" },
      { name: "Renault", start: 2002, end: 2011, color: "#fff500", textDark: true },
      { name: "Lotus", start: 2012, end: 2015, color: "#000000" },
      { name: "Renault", start: 2016, end: 2020, color: "#fff500", textDark: true },
      { name: "Alpine", start: 2021, end: 2026, color: "#ff87bc", textDark: true }
    ]
  },
  {
    currentTeam: "Aston Martin",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1990, color: "transparent" },
      { name: "Jordan Grand Prix", shortName: "Jordan", start: 1991, end: 2005, color: "#ffd700", textDark: true },
      { name: "Midland F1 Racing", shortName: "Midland", start: 2006, end: 2006, color: "#ff0000" },
      { name: "Spyker", start: 2007, end: 2007, color: "#ff6600" },
      { name: "Force India", start: 2008, end: 2018, color: "#f9a01b", textDark: true },
      { name: "Racing Point", shortName: "Racing Pt.", start: 2019, end: 2020, color: "#f596c8", textDark: true },
      { name: "Aston Martin", start: 2021, end: 2026, color: "#229971" }
    ]
  },
  {
    currentTeam: "Visa Cash App RB",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1984, color: "transparent" },
      { name: "Minardi", start: 1985, end: 2005, color: "#111111" },
      { name: "Toro Rosso", start: 2006, end: 2019, color: "#0000ff" },
      { name: "AlphaTauri", start: 2020, end: 2023, color: "#ffffff", textDark: true },
      { name: "RB", start: 2024, end: 2026, color: "#6692ff" }
    ]
  },
  {
    currentTeam: "Audi",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 1992, color: "transparent" },
      { name: "Sauber", start: 1993, end: 2005, color: "#0000ff" },
      { name: "BMW Sauber", start: 2006, end: 2010, color: "#ffffff", textDark: true },
      { name: "Sauber", start: 2011, end: 2018, color: "#0000ff" },
      { name: "Alfa Romeo", start: 2019, end: 2023, color: "#900000" },
      { name: "Stake", start: 2024, end: 2025, color: "#00e700", textDark: true },
      { name: "Audi", start: 2026, end: 2026, color: "#000000" }
    ]
  },
  {
    currentTeam: "Haas",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 2015, color: "transparent" },
      { name: "Haas F1 Team", shortName: "Haas", start: 2016, end: 2026, color: "#b6babd", textDark: true }
    ]
  },
  {
    currentTeam: "Cadillac",
    eras: [
      { name: "Did Not Compete", shortName: " ", start: 1950, end: 2025, color: "transparent" },
      { name: "Cadillac F1 Team", shortName: "Cadillac", start: 2026, end: 2026, color: "#d4af37", textDark: true }
    ]
  }
];