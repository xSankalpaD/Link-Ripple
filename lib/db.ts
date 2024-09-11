import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already Connected to Database");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting to Database ...");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "link-ripple",
      bufferCommands: true,
    });
    console.log("MongoDB Connected")
  } catch (err) {
    console.error("Error Connecting to Database:", err);
  }
}

export default connect;