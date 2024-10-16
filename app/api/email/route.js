import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectDB();
    const emails = await EmailModel.find({});
  
    return NextResponse.json({ emails });
  }
  
export async function POST(request) {
    await connectDB();
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };

  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
}
