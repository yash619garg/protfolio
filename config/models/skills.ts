import mongoose from "mongoose";

// Define your schema (if it’s not already defined)
const skillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

// Check if the model already exists before creating it
const skills = mongoose.models.Skills || mongoose.model("Skills", skillSchema);

export default skills;
