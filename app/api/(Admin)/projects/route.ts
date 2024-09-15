import { connectDB } from "@/config/db";
import projects from "@/config/models/projects";
import skills from "@/config/models/skills";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const project = await projects.find({});
    return NextResponse.json({ project }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const { title, image, siteLink, gitLink, description } = await req.json();
    if (title && image && description && siteLink && gitLink) {
      await connectDB();
      const existingProject = await projects.findOne({ title });
      if (existingProject) {
        return NextResponse.json(
          { message: "Project already exists" },
          { status: 400 }
        );
      }
      const newProject = new projects({
        title,
        image,
        siteLink,
        gitLink,
        description,
      });
      await newProject.save();
      return NextResponse.json(
        { message: "project added successfully", newProject },
        { status: 201 }
      );
    }
    return NextResponse.json(
      { message: "please provide all the information" },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
