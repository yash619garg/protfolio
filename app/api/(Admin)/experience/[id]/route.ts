import { connectDB } from "@/config/db";
import experiences from "@/config/models/experience";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: any) => {
  try {
    const { id } = await res.params;

    if (id || Types.ObjectId.isValid(id)) {
      await connectDB();
      const experience = await experiences.findOne({ _id: id });
      if (!experience) {
        throw new Error("experience not found");
      }
      return NextResponse.json({ experience }, { status: 200 });
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
      const experience = await experiences.findOne({ _id: id });
      if (!experience) {
        throw new Error("experience not found");
      }

      const existingExperience = await experiences.findOne({ title });
      if (existingExperience) {
        return NextResponse.json(
          { message: "experience already exists" },
          { status: 400 }
        );
      }

      const updatedExperience = await experiences.findOneAndUpdate(
        { _id: id },
        { title, image, siteLink, gitLink, description },
        { new: true }
      );
      return NextResponse.json(
        { message: "experience data updated successfully", updatedExperience },
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
      const experience = await experiences.findOne({ _id: id });
      if (!experience) {
        throw new Error("experience not found");
      }

      const deletedExperience = await experiences.findOneAndDelete({ _id: id });
      return NextResponse.json(
        { message: "experience deleted successfully", deletedExperience },
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
