import mongoose from "mongoose";

//Schema for Z-Stations
const ZStationsSchema = mongoose.Schema(
  {
    stationName: String,
    stationAddress: String,
    openingHours: String,

    // LPG swap & google, Drinks & Food, Car Wash, Trailer Hire
    keyServices: {
      keyServiceLabel: String,
      keyServicesIcon: Buffer,
    },

    // Storage for remaining options without a respective icon
    services: [String],
    fuelType: [String],
    stationType: [String],

    // Stored as Decimal128 for accuracy to be converted to string for JSON purposes
    prices: {
      Z91: mongoose.Schema.Types.Decimal128,
      ZPremium: mongoose.Schema.Types.Decimal128,
      ZDiesel: mongoose.Schema.Types.Decimal128,
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        // Loop over fields prices and convert from Decimal128 to string for JSON purposes
        if (ret.prices) {
          Object.keys(ret.prices).forEach((key) => {
            //
            if (
              ret.prices[key] !== null &&
              ret.prices[key]._bsontype === "Decimal128"
            ) {
              ret.prices[key] = ret.prices[key].toString();
            }
          });
        }

        if (ret.keyServices && ret.keyServices.keyServicesIcon) {
          ret.keyServices.keyServicesIcon =
            ret.keyServices.keyServicesIcon.toString("base64");
        }
        return ret;
      },
    },
  }
);

// Define and export
export default mongoose.model("ZStations", ZStationsSchema);
