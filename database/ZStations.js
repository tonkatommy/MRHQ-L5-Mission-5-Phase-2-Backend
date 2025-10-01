import mongoose from "mongoose";

//Schema for Z-Stations
const ZStationsSchema = mongoose.Schema(
  {
    stationName: String,
    stationAddress: String,
    openingHours: String,

    // Location coordinates on Google Maps
    coordinates: {
      lat: Number,
      lng: Number,
    },

    // LPG swap & google, Drinks & Food, Car Wash, Trailer Hire
    keyServices: {
      keyServiceLabel: [String],
      keyServicesIcon: [String],
    },

    // Storage for remaining options without a respective icon
    services: [String],
    fuelType: [String],

    stationType: String,

    // Stored as Decimal128 for accuracy to be converted to string for JSON purposes
    fuelPrices: {
      Z91: Number,
      ZPremium: Number,
      ZDiesel: Number,
    },
  },
//   {
//     toJSON: {
//       transform: (doc, ret) => {
//         // Loop over fields prices and convert from Decimal128 to string for JSON purposes
//         if (ret.fuelPrices) {
//           Object.keys(ret.fuelPrices).forEach((key) => {
//             //
//             if (
//               ret.fuelPrices[key] !== null &&
//               ret.fuelPrices[key]._bsontype === "Decimal128"
//             ) {
//               ret.fuelPrices[key] = ret.fuelPrices[key].toString();
//             }
//           });
//         }

//         Convert Buffer file to string
//         if (ret.keyServices && ret.keyServices.keyServicesIcon) {
//           ret.keyServices.keyServicesIcon =
//             ret.keyServices.keyServicesIcon.toString("base64");
//         }
//         return ret;
//       },
//     },
//   }
);

// Define and export
export default mongoose.model("ZStations", ZStationsSchema);
