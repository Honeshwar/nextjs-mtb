import mongoose from "mongoose";

const CTMSchema = new mongoose.Schema(
  {
    mobile: {
      type: Number,
      unique: true,
      required: true,
      maxLength: 10,
      minLength: 10,
      default: null,
    },
    party_name: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const CTM =
  mongoose.models.Corruption_Teller_Machine ||
  mongoose.model("Corruption_Teller_Machine", CTMSchema);
export default CTM;
