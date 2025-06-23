import { getMongoDb } from "@/app/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import { Practitioner, PractitionerType } from "@/app/constants/practitioners";

export async function POST(req: NextRequest) {
  try {
    const db = await getMongoDb();
    const collection = db.collection<Practitioner>("practitioner");
    const body = await req.json();
    if (!body || !body.name) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    await collection.insertOne(body as Practitioner);
    return NextResponse.json({ success: true, practitioner: body }, { status: 201 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const db = await getMongoDb();
    const collection = db.collection<Practitioner>("practitioner");
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const filter = type ? { type: type as PractitionerType } : {};
    const practitioners = await collection.find(filter).toArray();
    return NextResponse.json({ practitioners });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const db = await getMongoDb();
    const collection = db.collection<Practitioner>("practitioner");
    const body = await req.json();
    if (!body || !body._id) {
      return NextResponse.json({ error: "Missing practitioner id." }, { status: 400 });
    }
    const { _id, ...updateFields } = body;
    // Convert _id to ObjectId if it's a string
    const { ObjectId } = await import('mongodb');
    const objectId = typeof _id === 'string' ? new ObjectId(_id) : _id;
    const result = await collection.findOneAndUpdate(
      { _id: objectId },
      { $set: updateFields },
      { returnDocument: "after" }
    );
    if (!result) {
      return NextResponse.json({ error: "Practitioner not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, practitioner: result });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

