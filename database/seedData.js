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
    stationName: "Z Beach Rd Truck Stop",
    stationAddress: "150 Beach Road",
    openingHours: "Open 24 hours",

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
    stationType: "Truck stop",

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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Constellation Dr Truckstop",
    stationAddress: "36 Constellation Drive & Vega Place",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.748201332395574,
      lng: 174.73200485438667,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

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
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Green Bay",
    stationAddress: "82 Godley Road, Green Bay, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.93126478225649,
      lng: 174.67763789233535,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Greenlane",
    stationAddress: "128 Greenlane Road, Greenlane, Auckland",
    openingHours: "5am - 10pm",

    coordinates: {
      lat: -36.889969456659315,
      lng: 174.795793413213,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Henderson Valley",
    stationAddress: "1 Corban Avenue, Henderson, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.89181739984586,
      lng: 174.6231587795677,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "Fast fill Diesel lane",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Highbrook Truck Stop",
    stationAddress: "88 Highbrook Drive",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.9377117100794,
      lng: 174.87263157131088,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms", "AdBlue Diesel Exhaust Fluid"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Kepa Rd",
    stationAddress: "154 Kepa Road, Orakei, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.86130256393714,
      lng: 174.82317041974144,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "EV Charging - Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Kumeu",
    stationAddress: "134-152 Main Road, State Highway 16",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.77425033674919,
      lng: 174.55227368992237,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "EV Charging - Fast",
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Lakeside",
    stationAddress: "Cnr Northcote Road and Taharoto Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.785560396515294,
      lng: 174.75700200675635,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Northcote",
    stationAddress: "119 Onewa Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.810204542532716,
      lng: 174.73798363203136,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "EV Charging - Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Northcross",
    stationAddress: "847-849 East Coast Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.70992605568069,
      lng: 174.7282552890533,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
      "Fast fill Diesel lane",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Otahuhu",
    stationAddress: "19 Princes Street, Otahuhu, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.940964391905936,
      lng: 174.84317706609087,
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
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Pakuranga",
    stationAddress: "470 Pakuranga Highway, Pakuranga, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.90016293657216,
      lng: 174.89946765927039,
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
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Papakura North",
    stationAddress: "254 Great South Road, Takanini, Auckland",
    openingHours: "5am - 10pm",

    coordinates: {
      lat: -37.05059860702867,
      lng: 174.92974211229216,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Point Chev",
    stationAddress: "1125-1143 Great North Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.869152835024025,
      lng: 174.71263263497332,
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
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Ponsonby",
    stationAddress: "5-9 Williamson Avenue",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.858612193196215,
      lng: 174.74756251465737,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Pukekohe",
    stationAddress: "11 Stadium Drive",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.19992177892413,
      lng: 174.9083592262414,
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
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Roscommon Rd Truck Stop",
    stationAddress: "147 Roscommon Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.0036680563758,
      lng: 174.8536655424121,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms", "AdBlue Diesel Exhaust Fluid"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Royal Oak",
    stationAddress: "700 Mount Albert Road, Royal Oak, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.91115620856131,
      lng: 174.77362808083015,
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
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Silverdale",
    stationAddress: "5 Hibiscus Coast Highway",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.623331507710695,
      lng: 174.66809623539336,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Pay by plate",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Sylvia Park Truck Stop",
    stationAddress: "Sylvia Park Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.923913761984856,
      lng: 174.83625638623252,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["AdBlue Diesel Exhaust Fluid"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Te Atatu",
    stationAddress: "402 Te Atatu Road, Te Atatu, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.852045035335365,
      lng: 174.65073628586336,
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
      "EV Charging - Fast &/or Ultra-Fast",
      "EV Charging - Coming Soon",
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Waikumete",
    stationAddress: "4155 Great North Road, Glen Eden, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.90022414964897,
      lng: 174.65300163190068,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon],
    },

    services: [
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "Fast fill Diesel lane",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Silverdale Truck Stop",
    stationAddress: "100 Foundry Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.621419200219826,
      lng: 174.68391711226135,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: [],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Beach Rd",
    stationAddress: "150 Beach Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.849584190863276,
      lng: 174.77489346056632,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Highbrook",
    stationAddress: "88 Highbrook Drive",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.937673398126826,
      lng: 174.87267264789193,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Roscommon Rd",
    stationAddress: "147 Roscommon Rd",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.00373366376703,
      lng: 174.8534885657882,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Sylvia Park",
    stationAddress: "510 Mount Wellington Highway",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.9247512240128,
      lng: 174.84190228128827,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Bombay",
    stationAddress: "Cnr Mill Road & Great South Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.19183400419227,
      lng: 174.98339307608944,
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
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Sandringham",
    stationAddress: "340 Sandringham Road, Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.8850367236669,
      lng: 174.73917435110286,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Bombay Truck Stop",
    stationAddress: "Great South Road",
    openingHours: "24/7 pay at pump",

    coordinates: {
      lat: -37.19163586156229,
      lng: 174.9836263175078,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms", "AdBlue Diesel Exhaust Fluid"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Massey North Truck Stop",
    stationAddress: "Corner State Highway 16 & Asti Lane",
    openingHours: "24/7 pay at pump",

    coordinates: {
      lat: -36.82131428202514,
      lng: 174.6086983205087,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Tom Pearce Dr",
    stationAddress: "Tom Pearce Drive, Auckland International Airport",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.99921145832252,
      lng: 174.7971639005474,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "EV Charging - Fast",
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Karaka",
    stationAddress: "47 Harbourside Drive, Karaka, Auckland 2113",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.07360132784905,
      lng: 174.92563724953519,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon],
    },

    services: [
      "EV Charging - Coming Soon",
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Avondale",
    stationAddress: "50-60 Ash Street, Avondale, West Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.89594681165981,
      lng: 174.68855544225784,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "EV Charging - Fast",
      "EV Charging - Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z New Lynn",
    stationAddress: "62 Rata Street",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.90273787410023,
      lng: 174.68116344092695,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Massey North",
    stationAddress: "42 Fred Taylor Drive",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.821414949698415,
      lng: 174.60862509554354,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Harris Rd Truck Stop",
    stationAddress: "142 Harris Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.92974450087456,
      lng: 174.89670073830746,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Hunters Corner",
    stationAddress: "72-76 East Tamaki Road, Papatoetoe, South Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.96666305994549,
      lng: 174.86302540272527,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Manurewa",
    stationAddress: "1 Alfriston Road, Manurewa, South Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.02351200723428,
      lng: 174.89954967789907,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Ormiston Rd",
    stationAddress: "8 Ormiston Road, Flat Bush, South Auckland",
    openingHours: "5am - 10pm",

    coordinates: {
      lat: -36.96139263869693,
      lng: 174.8909298123963,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Te Irirangi Dr",
    stationAddress: "136 Dawson Road, Otara, South Auckland",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.97744432472374,
      lng: 174.8975666078627,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Ti Rakau Dr",
    stationAddress: "284 Ti Rakau Drive, East Tamaki, South Auckland",
    openingHours: "5am - 10pm",

    coordinates: {
      lat: -36.926238126421964,
      lng: 174.89532063239523,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Harris Rd",
    stationAddress: "142 Harris Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.92969997375263,
      lng: 174.89673949908007,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Albany",
    stationAddress: "287 Oteha Valley Road, Albany",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.72527282093708,
      lng: 174.69789685824648,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Browns Rd",
    stationAddress: "270 Roscommon Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.01773439373612,
      lng: 174.86198907316262,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Clevedon",
    stationAddress: "24-28 Papakura-Clevedon Road",
    openingHours: "5am - 8pm",

    coordinates: {
      lat: -36.99351459723435,
      lng: 175.03724264278654,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Glen Park",
    stationAddress: "241 Glenfield Road, Hillcrest, North Shore",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.794269239443345,
      lng: 174.72429504609744,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Kingsway",
    stationAddress: "26 Clevedon Road, Papakura",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.06173028342515,
      lng: 174.94842901342886,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM,",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Lakewood Court Truck Stop",
    stationAddress: "742 Great South Road",
    openingHours: "24/7 pay at pump",

    coordinates: {
      lat: -36.99456647154879,
      lng: 174.8861317687907,
    },

    keyServices: {
      keyServiceLabel: [],
      keyServicesIcon: [],
    },

    services: ["Bathrooms"],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Truck stop",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Lincoln Rd",
    stationAddress: "198 Lincoln Road, Henderson",
    openingHours: "5am - 10pm",

    coordinates: {
      lat: -36.85881487030961,
      lng: 174.62943648123382,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Sunnybrae",
    stationAddress: "37 Northcote Road, Takapuna",
    openingHours: "5am - 11pm",

    coordinates: {
      lat: -36.792318788005694,
      lng: 174.74725919004166,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Takanini",
    stationAddress: "166 Great South Road, Papakura",
    openingHours: "24/7 pay at pump",

    coordinates: {
      lat: -37.04338403763307,
      lng: 174.92010560567144,
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
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Waiuku",
    stationAddress: "16 Kitchener Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -37.248875564141244,
      lng: 174.73252453543813,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Warkworth",
    stationAddress: "1 Hudson Road, Warkworth",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.392419796066406,
      lng: 174.65129710443668,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "EV Charging - Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "f'real",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Pay by plate",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Whangaparaoa",
    stationAddress: "651 Whangaparaoa Road, Whangaparaoa",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.63443684294219,
      lng: 174.73926611244565,
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
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "A-Z Screen",
      "Compostable Cups",
      "ATM",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Wiri Station Rd",
    stationAddress: "83 Wiri Station Road, Manukau City",
    openingHours: "6am - 6pm",

    coordinates: {
      lat: -36.99952558371433,
      lng: 174.87117217008264,
    },

    keyServices: {
      keyServiceLabel: ["LPG SWAP n'GO", "Drinks & food", "Trailer hire"],
      keyServicesIcon: [lpgSwapAndGoIcon, drinksAndFoodIcon, trailerHireIcon],
    },

    services: [
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Constellation Dr",
    stationAddress: "36 Constellation Drive",
    openingHours: "5am - 11pm",

    coordinates: {
      lat: -36.74820985121296,
      lng: 174.73200145894162,
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
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
  {
    stationName: "Z Lakewood Court",
    stationAddress: "742 Great South Road",
    openingHours: "Open 24 hours",

    coordinates: {
      lat: -36.99495815219979,
      lng: 174.88603608336012,
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
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "Pre-order Coffee",
      "Pay in app",
      "Z Espress Coffee & Fresh Food",
      "Z2O carwash",
      "Trailer hire",
      "LPG SWAP'n'GO",
      "24/7 Pay at pump",
      "Super long hoses",
      "Bathrooms",
      "Pay by plate",
      "Compostable Cups",
    ],
    fuelType: ["Z91", "ZPremium", "ZDiesel"],
    stationType: "Service station",

    fuelPrices: {
      Z91: randomZ91(),
      ZPremium: randomZPrem(),
      ZDiesel: randomZDiesel(),
    },
  },
];

export default seedData;
