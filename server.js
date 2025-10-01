// Module Imports
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Import Models
import ZStations from "./database/ZStations.js";

// Enable Express
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Initial Endpoint
app.get("/", async (req, res) => {
  console.log("The backend is connected");
  res.json({ message: "The backend is connected" });
});

// Endpoint for all Z-Stations
app.get("/api/z-stations", async (req, res) => {
  try {
    console.log("Z-Stations endpoint connected");
    // Fetch all Z-Stations from the database
    const stations = await ZStations.find();
    console.log(`Found ${stations.length} stations`);
    res.json(stations);
  } catch (error) {
    console.error("Error fetching Z-Stations:", error);
    res.status(500).json({ 
      error: "Failed to fetch Z-Stations", 
      details: error.message 
    });
  }
});

// Endpoint for Z-Stations
app.post("/api/find-station", async (req, res) => {
  console.log("Find station connected");
  console.log("Received data from frontend:", req.body);

  res.json({
    message: "Search endpoint connected",
    receivedData: req.body,
  });
});

// Endpoint for filters
app.post("/api/filter-stations", async (req, res) => {
  console.log("Filter stations connected");
  console.log("Received data from frontend:", req.body);

  const { services, fuelType, stationType } = req.body;
  console.log("Services:", services);
  console.log("Fuel Type:", fuelType);
  console.log("Station Type:", stationType);

  res.json({
    message: "Filter endpoint connected",
    receivedFilters: req.body,
  });
});

// Endpoint for Gas Station Prices
app.post("/api/find-gas-prices", async (req, res) => {
  console.log("Find gas prices connected");
  res.json({ message: "Prices endpoint connected" });
});

// Endpoint for Current Location
app.post("/api/find-current-location", async (req, res) => {
  console.log("Find current location connected");
  res.json({ message: "Current Location endpoint connected" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
