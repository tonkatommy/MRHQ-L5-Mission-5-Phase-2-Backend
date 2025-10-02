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
mongoose
  .connect(process.env.MONGO_URI)
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
      details: error.message,
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
  try {
    console.log("Received filter data:", req.body);

    const { services, fuelType, stationType } = req.body;

    // Fuel type mapping from frontend display names to database field names
    const fuelTypeMapping = {
      "ZX Premium": "ZPremium",
      "Z91 Unleaded": "Z91",
      "Z Diesel": "ZDiesel",
    };

    // Build MongoDB query object
    const query = {};

    // Add filters if they exist
    if (services && services.length > 0) {
      // Match stations that have the selected services
      query.services = { $all: services };
    }

    if (fuelType && fuelType !== "") {
      // Map frontend fuel type to database field name
      const dbFuelField = fuelTypeMapping[fuelType];
      if (dbFuelField) {
        // Check if the fuel price exists and is not null
        query[`fuelPrices.${dbFuelField}`] = { $exists: true, $ne: null };
        console.log(`Filtering for fuel type: ${fuelType} -> ${dbFuelField}`);
      }
    }

    if (
      stationType &&
      stationType !== "" &&
      stationType !== "Select station type"
    ) {
      query.stationType = stationType;
    }

    console.log("MongoDB query:", JSON.stringify(query, null, 2));

    // Query the database
    const stations = await ZStations.find(query);

    console.log("Found stations:", stations.length);

    // Always include selectedFuelPrice - either single fuel type or all available types
    const stationsWithPrices = stations.map((station) => {
      const stationObj = station.toObject();

      if (stationObj.fuelPrices) {
        const reverseFuelMapping = {
          ZPremium: "ZX Premium",
          Z91: "Z91 Unleaded",
          ZDiesel: "Z Diesel",
        };

        if (fuelType && fuelTypeMapping[fuelType]) {
          // Specific fuel type selected - include only that fuel type
          const dbFuelField = fuelTypeMapping[fuelType];
          if (stationObj.fuelPrices[dbFuelField]) {
            stationObj.selectedFuelPrice = [
              {
                type: fuelType,
                dbField: dbFuelField,
                price: stationObj.fuelPrices[dbFuelField],
              },
            ];
          }
        } else {
          // No fuel type selected - include all available fuel types
          stationObj.selectedFuelPrice = [];
          Object.entries(stationObj.fuelPrices).forEach(([dbField, price]) => {
            if (price !== null && price !== undefined) {
              stationObj.selectedFuelPrice.push({
                type: reverseFuelMapping[dbField] || dbField,
                dbField: dbField,
                price: price,
              });
            }
          });
        }
      }

      return stationObj;
    });

    res.json({
      success: true,
      count: stationsWithPrices.length,
      stations: stationsWithPrices,
      appliedFilters: {
        services,
        fuelType: fuelType
          ? {
              displayName: fuelType,
              dbField: fuelTypeMapping[fuelType],
            }
          : null,
        stationType,
      },
    });
  } catch (error) {
    console.error("Error filtering stations:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
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
