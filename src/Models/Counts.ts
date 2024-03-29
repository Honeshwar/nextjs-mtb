import mongoose from "mongoose";

const counts_Schema = new mongoose.Schema(
  {
    pledge_count: {
      type: Number,
      default: 0,
    },
    image_download_count: {
      type: Number,
      default: 0,
    },
    image_share_count: {
      type: Number,
      default: 0,
    },
    spin_the_wheel_count: {
      type: Number,
      default: 0,
    },
    video_share_count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Counts =
  mongoose.models.counts || mongoose.model("counts", counts_Schema);
export default Counts;
