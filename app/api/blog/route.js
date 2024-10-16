import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
LoadDB();

export async function GET(request) {
  try {
    console.log("Blog get hit");
    return NextResponse.json({ msg: "API WORKING" });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imageUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imageUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };
  await BlogModel.create(blogData);
  
  return NextResponse.json({ success:true,msg: "Blog Added" });
}
