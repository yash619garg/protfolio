import { Schema, models, model } from "mongoose";

const reviewSchema = new Schema({
  image: { type: "string", required: true },
  title: { type: "string", required: true },
  name: { type: "string", required: true },
  quote: { type: "string", required: true },
});

const reviews = models.Review || model("Review", reviewSchema);
export default reviews;
