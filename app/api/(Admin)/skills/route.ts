import { connectDB } from "@/config/db";
import skills from "@/config/models/skills";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const skill = await skills.find({});
    return NextResponse.json({ skill: skill }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const { title } = await req.json();
    if (title) {
      await connectDB();
      const existingSkill = await skills.findOne({ title });
      if (existingSkill) {
        return NextResponse.json(
          { message: "skill already exists" },
          { status: 400 }
        );
      }
      const newSkill = new skills({ title });
      await newSkill.save();
      return NextResponse.json(
        { message: "skill added successfully", newSkill },
        { status: 201 }
      );
    }
    return NextResponse.json({ message: "skill is required" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
