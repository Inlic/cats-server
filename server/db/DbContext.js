import CatSchema from "../models/Cat";
import mongoose from "mongoose";

class DbContext {
  Cats = mongoose.model("Value", CatSchema);
}

export const dbContext = new DbContext();
