// tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
    ],
  },
});