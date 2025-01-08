import { NextResponse } from "next/server";
import events from "@/lib/events.json";

export async function GET() {
  try {
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error in API Route:", error);
    return NextResponse.json(
      { error: "Failed to load events" },
      { status: 500 }
    );
  }
}
