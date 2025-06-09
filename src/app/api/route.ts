import { dbConnect } from "@/database/connection";
import Message from "@/database/models/message";
import { NextRequest, NextResponse } from "next/server";

interface body {
  name: string;
  email: string;
  message: string;
}

export async function GET() {
  await dbConnect();

  return NextResponse.json({ Hello: 1 });
}
export async function POST(req: NextRequest) {
  const body: body = await req.json();

  try {
    await dbConnect();
    await Message.insertOne(body);
    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage });
  }
}
