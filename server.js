// Module Imports
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

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
mongoose.connect(process.env.MONGO_URI);

// Initial Endpoint
app.get("/", async (req, res) => {
  console.log("The backend is connected");
  res.json({ message: "The backend is connected" });
});

// Endpoint for Z-Stations
app.post("/find-station", async (req, res) => {
  console.log("Find station connected");
  console.log("Received data from frontend:", req.body);

  res.json({
    message: "Search endpoint connected",
    receivedData: req.body,
  });
});

// Endpoint for filters
app.post("/filter-stations", async (req, res) => {
  console.log("Filter stations connected");
  console.log("Received data from frontend:", req.body);

  const { services, fuelType, stationType } = req.body;
  console.log("Services:", services);
  console.log("Fuel Type:", fuelType);
  console.log("Station Type:", stationType);
  
  res.json({ 
    message: "Filter endpoint connected", 
    receivedFilters: req.body 
  });
});

// Endpoint for Gas Station Prices
app.post("/find-gas-prices", async (req, res) => {
  console.log("Find gas prices connected");
  res.json({ message: "Prices endpoint connected" });
});

// Endpoint for Current Location
app.post("/find-current-location", async (req, res) => {
  console.log("Find current location connected");
  res.json({ message: "Current Location endpoint connected" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
