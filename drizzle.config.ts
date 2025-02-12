import { defineConfig } from "drizzle-kit"
console.log(process.env.DATABASE_URL)
console.log(process.env.DATABASE_AUTH_TOKEN)

export default defineConfig({
    schema: "./db/schema.ts",
    dialect: "sqlite", 
    driver: "turso", 
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN,
    }
})