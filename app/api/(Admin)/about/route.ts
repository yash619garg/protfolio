import { connectDB } from "@/config/db";
import About from "@/config/models/about";
import about from "@/config/models/about";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const about = await About.find({});
    if (!about) {
      throw new Error("No data Found");
    }
    return NextResponse.json({ about: about[0] }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const PATCH = async (req: Request, res: Response) => {
  try {
    const { description1, description2, lottieLink } = await req.json();
    await connectDB();
    const updatedAbout = await About.findOneAndUpdate(
      {},
      { description1, description2, lottieLink },
      { new: true }
    );
    if (!updatedAbout) {
      throw new Error("Couldn't find");
    }
    return NextResponse.json(
      { message: "about data updated successfully", updatedAbout },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
