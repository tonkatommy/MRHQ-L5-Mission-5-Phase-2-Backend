import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Import Model
import ZStations from "./ZStations.js";

// Import Seed Data Function
import seedData from "./seedData.js";

// Connect to DB - will create DB if it doesn't exist yet
mongoose.connect(process.env.MONGO_URI).then(async function () {
  console.info("Connected to MongoDB - seeding documents");

  // Clear existing data
  await ZStations.deleteMany({});
  // Enter in seed data
  await ZStations.insertMany(seedData);

  console.info("Documents seeded");

  await mongoose.connection.close();
});
