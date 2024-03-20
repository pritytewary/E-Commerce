import Address from "@/models/address";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { connectMongoDB } from "@/lib";
import User from "@/models/user";

export default async function getAddress() {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const userId = session?.user?.id;
    if (!userEmail) throw new Error("User not found");
    await connectMongoDB();
    const addresses = await Address.find({ userEmail });
    console.log(addresses);
    const user = await User.findOne({ email: userEmail });

    return {
      user: JSON.parse(JSON.stringify(user)),
      addresses: JSON.parse(JSON.stringify(addresses)),
    };
  } catch (error) {
    console.log(error);
    return [];
  }
}
