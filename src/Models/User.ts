import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    mobile: {
      type: Number,
      unique: true,
      required: true,
      maxLength: 10,
      minLength: 10,
      default: null,
    },
    state_id: {
      type: Number,
      default: null,
    },
    district_id: {
      type: Number,
      default: null,
    },
    utm_source: {
      type: String,
      default: null,
    },
    utm_medium: {
      type: String,
      default: null,
    },
    utm_campaign: {
      type: String,
      default: null,
    },
    score: {
      type: Number,
      default: null,
    },
    otp_verified_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
// console.log("eror", mongoose.models.User);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
