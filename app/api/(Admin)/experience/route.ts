import { connectDB } from "@/config/db";
import experiences from "@/config/models/experience";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const Experience = await experiences.find({});
    return NextResponse.json({ Experience }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const { title, endDate, startDate, company, description } =
      await req.json();
    if (title && endDate && startDate && company && description) {
      await connectDB();
      const existingExperience = await experiences.findOne({ title });
      if (existingExperience) {
        return NextResponse.json(
          { message: "Experience already exists" },
          { status: 400 }
        );
      }
      const newExperience = new experiences({
        title,
        endDate,
        startDate,
        company,
        description,
      });
      await newExperience.save();
      return NextResponse.json(
        { message: "Experience added successfully", newExperience },
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
