import { Schema, models, model } from "mongoose";

const contactSchema = new Schema({
  address: { type: "string", required: true },
  email: { type: "string", required: true },
  name: { type: "string", required: true },
});

const contacts = models.Contact || model("Contact", contactSchema);
export default contacts;
