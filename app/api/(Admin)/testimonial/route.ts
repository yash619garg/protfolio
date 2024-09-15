import { connectDB } from "@/config/db";
import reviews from "@/config/models/review";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const review = await reviews.find({});
    return NextResponse.json({ review }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const { title, image, name, quote } = await req.json();
    if (title && image && name && quote) {
      await connectDB();

      const newReview = new reviews({
        title,
        image,
        name,
        quote,
      });
      await newReview.save();
      return NextResponse.json(
        { message: "review added successfully", newReview },
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
