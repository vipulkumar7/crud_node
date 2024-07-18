import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect("mongodb://localhost:27017/crud_node");
  if (connect) {
    console.log("DB connection successful");
  } else {
    console.log("DB connection failed");
  }
};

export default connectDB;
