import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema(
  {
    mobile: {
      type: Number,
      unique: true,
      required: true,
      maxLength: 10,
      minLength: 10,
      default: null,
    },
    otp: {
      type: Number,
      default: null,
      minLength: 6,
      maxLeng: 6,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      expires: 0, // Immediately expires when TTL(time-to-live) expires
      //         Documents will be automatically deleted from the collection based on the expiration time specified in the expireAt field.
      // MongoDB will use the default TTL index behavior to delete documents after their expiration time, without needing the expires option explicitly set in the schema.
    },
  },
  { timestamps: true }
);

const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema);
export default OTP;
