import { Schema, models, model } from "mongoose";

const projectSchema = new Schema({
  image: { type: "string", required: true },
  title: { type: "string", required: true },
  gitLink: { type: "string", required: true },
  siteLink: { type: "string", required: true },
  description: { type: "string", required: true },
});

const projects = models.Project || model("Project", projectSchema);
export default projects;
