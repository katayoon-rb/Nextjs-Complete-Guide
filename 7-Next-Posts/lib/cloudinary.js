import { v2 as cloudinary } from "cloudinary";

if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
  throw new Error("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set");
}

if (!process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY) {
  throw new Error("NEXT_PUBLIC_CLOUDINARY_API_KEY is not set");
}

if (!process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET) {
  throw new Error("NEXT_PUBLIC_CLOUDINARY_API_SECRET is not set");
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function uploadImage(image) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = "base64";
  const base64Data = Buffer.from(imageData).toString("base64");
  const fileUri = "data:" + mime + ";" + encoding + "," + base64Data;
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: "NEXT_PUBLICjs-course-mutations",
  });
  return result.secure_url;
}
