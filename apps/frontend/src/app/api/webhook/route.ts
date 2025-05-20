import { CFEnvironment, Cashfree } from 'cashfree-pg';
import { NextResponse } from "next/server";

// const COLLECTION_NAME = "bookings";

const isSandbox = process.env.CASHFREE_ENV === 'SANDBOX';

const cashfree = new Cashfree(
  isSandbox ? CFEnvironment.SANDBOX : CFEnvironment.PRODUCTION,
  isSandbox ? process.env.CASHFREE_CLIENT_ID_SANDBOX : process.env.CASHFREE_CLIENT_ID,
  isSandbox ? process.env.CASHFREE_CLIENT_SECRET_SANDBOX : process.env.CASHFREE_CLIENT_SECRET,
);
console.log(cashfree);

// GET /api/hello
export async function POST() {
  return NextResponse.json({ message: 'Hello, world!' });
}
