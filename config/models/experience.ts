import { Schema, models, model } from "mongoose";

const experienceSchema = new Schema({
  title: { type: "string", required: true },
  startDate: { type: Date, default: new Date() },
  endDate: { type: Date, default: new Date() },
  description: { type: "string", required: true },
  company: { type: "string", required: true },
});

const experiences = models.Experience || model("Experience", experienceSchema);
export default experiences;
