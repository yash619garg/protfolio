import { Schema, models, model } from "mongoose";

const infoSchema = new Schema({
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  welcomeText: { type: "string", required: true },
  description: { type: "string", required: true },
  caption: { type: "string", required: true },
});

const Info = models.Info || model("Info", infoSchema);
export default Info;
