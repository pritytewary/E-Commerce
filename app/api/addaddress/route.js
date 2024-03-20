import Address from "@/models/address";
import { connectMongoDB } from "@/lib";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    if (!userEmail) throw new Error("User not found");

    const { country, name, mobileNumber, postalCode, address } =
      await req.json();

    await connectMongoDB();

    // Check if an address document already exists for the user
    const existingAddress = await Address.findOne({ userEmail });

    if (existingAddress) {
      console.log("Address already exists for the user");
      return NextResponse.json(
        { message: "Address already exists" },
        { status: 400 }
      );
    }

    // Create a new address document
    await Address.create({
      country,
      name,
      mobileNumber,
      postalCode,
      address,
      userEmail,
    });

    console.log("Address added successfully");
    return NextResponse.json({ message: "Address was added" }, { status: 201 });
  } catch (error) {
    console.error("Error adding address:", error);
    return NextResponse.json(
      { message: "Address was not added", error },
      { status: 500 }
    );
  }
}
