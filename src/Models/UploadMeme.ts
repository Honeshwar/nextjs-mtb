import mongoose from "mongoose";

const uploadMemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    data: {
      //file as binary data
      type: Buffer,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UploadMeme =
  mongoose.models.UploadMeme || mongoose.model("UploadMeme", uploadMemeSchema);
export default UploadMeme;
