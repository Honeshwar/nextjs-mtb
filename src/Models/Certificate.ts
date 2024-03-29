import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    mobile: {
      type: Number,
      unique: true,
      required: true,
    },
    certificate_url: {
      type: String,
      default: null,
      required: true,
    },
  },
  { timestamps: true }
);

const Certificate =
  mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);
export default Certificate;
