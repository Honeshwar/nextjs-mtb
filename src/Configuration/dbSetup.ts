import mongoose from "mongoose";

console.log("Connecting to MongoDB ", process.env.MONGODB_CONNECTION_STRING);
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://honeshwr_1:rfBXGDgKGLqtKtfd@authcluster.dapzytl.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = mongoose.connection;
    db.on("error", (error) => {
      console.error(error);
      process.exit();
    });
    db.on("open", () => console.log("Connected to MongoDB"));
  } catch (error) {
    console.error("Failed to connect", error);
  }
};
