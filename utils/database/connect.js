import mongoose from "mongoose";
import { MONGO_URI } from "./config";

async function dbConnect() {
  mongoose.connect(
    MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected")
  );
}
export default dbConnect;
