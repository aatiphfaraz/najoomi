import { getMongoDb } from "@/app/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export interface Query {
  phone: string;
  query: string;
  timestamp: string;
  pageUrl: string;
  createdAt?: Date;
}

export async function POST(req: NextRequest) {
  try {
    const db = await getMongoDb();
    const collection = db.collection<Query>("queries");
    const body = await req.json();

    // Validate required fields
    if (!body || !body.phone || !body.query) {
      return NextResponse.json(
        { error: "Missing required fields: phone and query are required." },
        { status: 400 }
      );
    }

    // Create query document
    const queryDoc: Query = {
      phone: body.phone.trim(),
      query: body.query.trim(),
      timestamp: body.timestamp || new Date().toISOString(),
      pageUrl: body.pageUrl || "",
      createdAt: new Date(),
    };

    // Insert into MongoDB
    await collection.insertOne(queryDoc);

    return NextResponse.json(
      { success: true, message: "Query submitted successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
