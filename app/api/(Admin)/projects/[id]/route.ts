import { connectDB } from "@/config/db";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
import projects from "@/config/models/projects";

export const GET = async (req: Request, res: any) => {
  try {
    const { id } = await res.params;

    if (id || Types.ObjectId.isValid(id)) {
      await connectDB();
      const Project = await projects.findOne({ _id: id });
      if (!Project) {
        throw new Error("Project not found");
      }
      return NextResponse.json({ Project }, { status: 200 });
    }
    return NextResponse.json(
      { message: "id not valid or found" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const PATCH = async (req: Request, res: any) => {
  try {
    const { title, image, siteLink, gitLink, description } = await req.json();
    const { id } = await res.params;

    if (id || Types.ObjectId.isValid(id)) {
      await connectDB();
      const Project = await projects.findOne({ _id: id });
      if (!Project) {
        throw new Error("Project not found");
      }

      const existingProject = await projects.findOne({ title });
      if (existingProject) {
        return NextResponse.json(
          { message: "Project already exists" },
          { status: 400 }
        );
      }

      const updatedProject = await projects.findOneAndUpdate(
        { _id: id },
        { title, image, siteLink, gitLink, description },
        { new: true }
      );
      return NextResponse.json(
        { message: "Project data updated successfully", updatedProject },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "id not valid or found" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: any) => {
  try {
    const { id } = await res.params;

    if (id || Types.ObjectId.isValid(id)) {
      await connectDB();
      const Project = await projects.findOne({ _id: id });
      if (!Project) {
        throw new Error("Project not found");
      }

      const deletedProject = await projects.findOneAndDelete({ _id: id });
      return NextResponse.json(
        { message: "Project deleted successfully", deletedProject },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "id not valid or found" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
