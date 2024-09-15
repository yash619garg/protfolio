import { connectDB } from "@/config/db";
import skills from "@/config/models/skills";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request, res: any) => {
  try {
    const { title } = await req.json();
    const { id } = await res.params;

    if (id || Types.ObjectId.isValid(id)) {
      await connectDB();
      const skill = await skills.findOne({ _id: id });
      if (!skill) {
        throw new Error("skill not found");
      }

      const existingSkill = await skills.findOne({ title });
      if (existingSkill) {
        return NextResponse.json(
          { message: "skill already exists" },
          { status: 400 }
        );
      }

      const updatedSkill = await skills.findOneAndUpdate(
        { _id: id },
        { title },
        { new: true }
      );
      return NextResponse.json(
        { message: "skill data updated successfully", updatedSkill },
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
      const skill = await skills.findOne({ _id: id });
      if (!skill) {
        throw new Error("skill not found");
      }

      const deletedSkill = await skills.findOneAndDelete({ _id: id });
      return NextResponse.json(
        { message: "skill deleted successfully", deletedSkill },
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
