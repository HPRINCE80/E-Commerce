import mongoose from "mongoose"
import config from "./config.js";

export async function connectDB() {
    try {

      await  mongoose.connect(config.MONGO_URI);
        console.log("MongoDB is connected");
    }
    catch(err) {
        console.log("MongoDB is not connected", error.message)
    }
}