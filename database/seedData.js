// Importing Icons as Buffer data
import icons from "./icons.js";

const { carWashIcon, drinksAndFoodIcon, lpgSwapAndGoIcon, trailerHireIcon } =
  icons;

// Generate random Z91 price:
function randomZ91() {
  let z91Min = 2.5;
  let z91Max = 3.3;
  let z91Rand = (Math.random() * (z91Max - z91Min) + z91Min).toFixed(2);
  return z91Rand;
}

// Generate random ZPremium price:
function randomZPrem() {
  let zpremMin = 2.75;
  let zpremMax = 3.5;
  let zpremRand = (Math.random() * (zpremMax - zpremMin) + zpremMin).toFixed(2);
  return zpremRand;
}

// Generate random ZDiesel price:
function randomZDiesel() {
  let zDieselMin = 1.84;
  let zDieselMax = 1.98;
  let zDieselRand = (
    Math.random() * (zDieselMax - zDieselMin) +
    zDieselMin
  ).toFixed(2);
  return zDieselRand;
}

const seedData = [
  {
    stationName: "Z Beach Rd",
    stationAddress: "150 Beach Road",
    openingHours: "Open 24 Hours",

    coordinates: {
      lat: -36.84958126919784,
      lng: 174.7748969122704,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck Stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Botany Downs",
    stationAddress: "550 Te Irirangi Drive, Botany Downs, Auckland",
    openingHours: "5am - 10pm",

    coordinates: {
      lat: -36.930849729062146,
      lng: 174.91091707482937,
    },

    keyServices: {
      keyServiceLabel: [
        "LPG SWAP n'GO",
        "Drinks & food",
        "Car wash",
        "Trailer hire",
      ],
      keyServicesIcon: [
        lpgSwapAndGoIcon,
        drinksAndFoodIcon,
        carWashIcon,
        trailerHireIcon,
      ],
    },

    services: [
      "EV Charging - Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",

      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service Station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Constellation",
    stationAddress: "36 Constellation Drive & Vega Place",
    openingHours: "Open 24 Hours",

    coordinates: {
      lat: -36.748201332395574,
      lng: 174.73200485438667,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathroom"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck Stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Ellerslie",
    stationAddress: "301 Ellerslie-Panmure Highway, Mt Wellington, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.89821350616708,
      lng: 174.82463729524991,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",

      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service Station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Glen Innes",
    stationAddress: "222-236 Apirana Avenue, Glen Innes, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.8770480500969,
      lng: 174.85448895240893,
    },

    keyServices: {
      keyServiceLabel: [
        "LPG SWAP n'GO",
        "Drinks & food",
        "Car wash",
        "Trailer hire",
      ],
      keyServicesIcon: [
        lpgSwapAndGoIcon,
        drinksAndFoodIcon,
        carWashIcon,
        trailerHireIcon,
      ],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",

      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service Station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
];

export default seedData;
