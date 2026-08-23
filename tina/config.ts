// tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // 1. Circuit Guides
      {
        name: "circuits",
        label: "Circuit Guides",
        path: "src/content/circuits",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "country", label: "Country" },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      // 2. Grandstand Reviews
      {
        name: "grandstands",
        label: "Grandstand Reviews",
        path: "src/content/grandstands",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Grandstand Name", isTitle: true, required: true },
          { type: "string", name: "circuit", label: "Circuit Name (e.g. Silverstone)" },
          { type: "string", name: "viewRating", label: "View Rating (e.g. 5/5)" },
          { type: "boolean", name: "covered", label: "Covered Seating?" },
          { type: "image", name: "heroImage", label: "Hero / View Image" },
          { type: "rich-text", name: "body", label: "Review & Tips", isBody: true },
        ],
      },
      // 3. City & Pub Guides
      {
        name: "cityGuides",
        label: "City & Pub Guides",
        path: "src/content/cityGuides",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Guide Title", isTitle: true, required: true },
          { type: "string", name: "city", label: "City / Nearest Town" },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "rich-text", name: "body", label: "Guide Content", isBody: true },
        ],
      },
      // 4. Ticket & Travel Advice
      {
        name: "travelTickets",
        label: "Ticket & Travel Advice",
        path: "src/content/travelTickets",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Guide Title", isTitle: true, required: true },
          { type: "string", name: "category", label: "Category (e.g. Flights, Shuttles, Camping, Tickets)" },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "rich-text", name: "body", label: "Guide Content", isBody: true },
        ],
      },
      // 5. Driver Profiles (NEW)
      {
        name: "driver",
        label: "Drivers",
        path: "src/content/drivers",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Full Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "code",
            label: "3-Letter Code",
            description: "Must match the Master Grid code (e.g. NOR, VER, HAM).",
            required: true,
          },
          {
            type: "number",
            name: "number",
            label: "Driver Number",
            required: true,
          },
          {
            type: "string",
            name: "team",
            label: "Team Name",
            required: true,
          },
          {
            type: "string",
            name: "teamKey",
            label: "Team Key (for CSS styling)",
            description: "e.g. mclaren, ferrari, redbull, mercedes, astonmartin, williams, alpine, rb, audi, haas, cadillac",
            required: true,
          },
          {
            type: "string",
            name: "teamColor",
            label: "Team Hex Color",
            description: "e.g. #ff8000",
            required: true,
          },
          {
            type: "string",
            name: "countryCode",
            label: "Country Flag Code (2-letter)",
            description: "e.g. gb, nl, mc, au, es",
            required: true,
          },
          {
            type: "string",
            name: "nationality",
            label: "Nationality Tag",
            description: "e.g. GBR, NED, MON, AUS",
            required: true,
          },
          {
            type: "number",
            name: "worldTitles",
            label: "World Championship Titles",
            description: "Enter 0 for drivers who haven't won a title yet.",
          },
          {
            type: "rich-text",
            name: "biography",
            label: "Biography & Career Notes",
            isBody: true,
          },
        ],
      },
      // 6. Live Weekend Results
      {
        name: "liveResults",
        label: "Live Weekend Results",
        path: "src/content/results",
        match: {
          include: "current", 
        },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            name: "fp1", label: "Practice 1 (FP1)", type: "object",
            fields: [{ name: "first", type: "string" }, { name: "second", type: "string" }, { name: "third", type: "string" }],
          },
          {
            name: "fp2", label: "Practice 2 / Sprint Quali", type: "object",
            fields: [{ name: "first", type: "string" }, { name: "second", type: "string" }, { name: "third", type: "string" }],
          },
          {
            name: "fp3", label: "Practice 3 / Sprint Race", type: "object",
            fields: [{ name: "first", type: "string" }, { name: "second", type: "string" }, { name: "third", type: "string" }],
          },
          {
            name: "quali", label: "Qualifying", type: "object",
            fields: [{ name: "first", type: "string" }, { name: "second", type: "string" }, { name: "third", type: "string" }],
          },
          {
            name: "race", label: "Grand Prix Race", type: "object",
            fields: [{ name: "first", type: "string" }, { name: "second", type: "string" }, { name: "third", type: "string" }],
          },
        ],
      },
      // 7. Driver Form Guide (Legacy)
      {
        name: "driverForm",
        label: "Driver Form Guide (Legacy)",
        path: "src/content/results",
        match: { include: "form" },
        format: "json",
        fields: [
          {
            type: "object", name: "drivers", label: "Drivers", list: true,
            ui: { itemProps: (item) => ({ label: item?.code || "New Driver" }) },
            fields: [
              { type: "string", name: "code", label: "Driver Code (e.g. VER)" },
              { type: "string", name: "recent", label: "Last 5 Races", list: true }
            ]
          }
        ]
      },
      // 8. Master Results Grid
      {
        name: "masterGrid",
        label: "2026 Master Results Grid",
        path: "src/content/results",
        match: {
          include: "season-2026", 
        },
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "drivers",
            label: "Driver Season Results",
            list: true,
            ui: {
              itemProps: (item) => ({ label: `${item?.code || 'Driver'} | ${item?.name || ''}` }),
            },
            fields: [
              { type: "string", name: "code", label: "Driver Code (e.g. VER, NOR)", required: true },
              { type: "string", name: "name", label: "Full Name (e.g. Max Verstappen)" },
              { type: "string", name: "team", label: "Team Name (e.g. Red Bull Racing)" },
              
              // Grid fields
              { type: "string", name: "r1", label: "R1: Australia" },
              { type: "string", name: "r2", label: "R2: China" },
              { type: "string", name: "r3", label: "R3: Japan" },
              { type: "string", name: "r4", label: "R4: Miami" },
              { type: "string", name: "r5", label: "R5: Canada" },
              { type: "string", name: "r6", label: "R6: Monaco" },
              { type: "string", name: "r7", label: "R7: Spain" },
              { type: "string", name: "r8", label: "R8: Austria" },
              { type: "string", name: "r9", label: "R9: Great Britain" },
              { type: "string", name: "r10", label: "R10: Belgium" },
              { type: "string", name: "r11", label: "R11: Hungary" },
              { type: "string", name: "r12", label: "R12: Netherlands" },
              { type: "string", name: "r13", label: "R13: Italy" },
              { type: "string", name: "r14", label: "R14: Madrid" },
              { type: "string", name: "r15", label: "R15: Azerbaijan" },
              { type: "string", name: "r16", label: "R16: Singapore" },
              { type: "string", name: "r17", label: "R17: USA (Austin)" },
              { type: "string", name: "r18", label: "R18: Mexico" },
              { type: "string", name: "r19", label: "R19: Brazil" },
              { type: "string", name: "r20", label: "R20: Las Vegas" },
              { type: "string", name: "r21", label: "R21: Qatar" },
              { type: "string", name: "r22", label: "R22: Abu Dhabi" },
            ]
          }
        ]
      }
    ],
  },
});