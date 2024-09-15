import { connectDB } from "@/config/db";
import Info from "@/config/models/info";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const info = await Info.find({});
    if (!info) {
      throw new Error("No info Found");
    }
    return NextResponse.json({ info: info[0] }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const PATCH = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, description, caption, welcomeText } =
      await req.json();
    await connectDB();
    const updatedInfo = await Info.findOneAndUpdate(
      {},
      { firstName, lastName, description, caption, welcomeText },
      { new: true }
    );
    if (!updatedInfo) {
      throw new Error("Couldn't find");
    }
    return NextResponse.json(
      { message: "Info updated successfully", updatedInfo },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
