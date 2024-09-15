import { connectDB } from "@/config/db";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
import reviews from "@/config/models/review";

export const GET = async (req: Request, res: any) => {
  try {
    const { id } = await res.params;

    if (id || Types.ObjectId.isValid(id)) {
      await connectDB();
      const review = await reviews.findOne({ _id: id });
      if (!review) {
        throw new Error("review not found");
      }
      return NextResponse.json({ review }, { status: 200 });
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
    const { title, image, name, quote } = await req.json();
    const { id } = await res.params;

    if (id || Types.ObjectId.isValid(id)) {
      await connectDB();
      const review = await reviews.findOne({ _id: id });
      if (!review) {
        throw new Error("review not found");
      }

      const updatedReview = await reviews.findOneAndUpdate(
        { _id: id },
        { title, image, name, quote },
        { new: true }
      );
      return NextResponse.json(
        { message: "review updated successfully", updatedReview },
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
      const review = await reviews.findOne({ _id: id });
      if (!review) {
        throw new Error("review not found");
      }

      const deletedReview = await reviews.findOneAndDelete({ _id: id });
      return NextResponse.json(
        { message: "review deleted successfully", deletedReview },
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
