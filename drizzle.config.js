import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/models/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
