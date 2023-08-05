import { auth } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authorization = request.headers.get("authorization");
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    throw new Error("No token");
  }
  try {
    const decodedToken = await auth.verifyIdToken(token);
  } catch (error) {
    throw new Error("Invalid token");
  }

  return NextResponse.json({ message: "Hello, world!" });
}
