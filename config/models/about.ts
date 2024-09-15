import { Schema, models, model } from "mongoose";

const aboutSchema = new Schema({
  lottieLink: { type: "string", required: true },
  description1: { type: "string", required: true },
  description2: { type: "string", required: true },
  skills: { type: "array", required: true },
});

const About = models.About || model("About", aboutSchema);
export default About;
