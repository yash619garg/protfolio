import { connectDB } from "@/config/db";
import contacts from "@/config/models/contact";
import contact from "@/config/models/contact";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const contact = await contacts.find({});
    if (!contact) {
      throw new Error("No contact details Found");
    }
    return NextResponse.json({ contact: contact[0] }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const PATCH = async (req: Request, res: Response) => {
  try {
    const { name, email, address } = await req.json();
    await connectDB();
    const updatedContact = await contact.findOneAndUpdate(
      {},
      { name, email, address },
      { new: true }
    );
    if (!updatedContact) {
      throw new Error("Couldn't find data");
    }
    return NextResponse.json(
      { message: "contact updated successfully", updatedContact },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
