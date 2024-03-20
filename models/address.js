import mongoose, { Schema, models } from "mongoose";

const addressSchema = new Schema(
  {
    country: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Address = models.Address || mongoose.model("Address", addressSchema);
export default Address;
