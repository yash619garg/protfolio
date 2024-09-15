import mongoose from "mongoose";

export const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;
  try {
    if (connectionState == 1) {
      console.log("database already connected");
      return;
    } else if (connectionState == 2) {
      console.log("database connecting");
      return;
    } else {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log("database connected successfully");
    }
  } catch (error: any) {
    console.error("Error connecting to database:", error.message);
  }
};
