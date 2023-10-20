const { Schema, model } = require("mongoose");

const car_accessSchema = new Schema(
  {
    driver: {
      type: String,
      require: true,
      trim: true,
    },
    dateTime: {
      type: Date,
      require: true,
    },
    mileage: {
      type: Number,
      require: true,
    },
    accessType: {
      type: String,
      required: true,
    },
    vehicleId: {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Access", car_accessSchema);
