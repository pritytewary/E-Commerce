import { connectMongoDB } from "@/lib/index";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          // Ensure to only return the necessary user info
          return { id: user._id, name: user.name, email: user.email };
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // If the user object exists, it means the user has just logged in or signed up
      if (user) {
        token.id = user.id; // Persist the user ID in the token
        // Add any other user fields you might need in the session
      }
      return token; // Return the updated token
    },
    async session({ session, token }) {
      // Here, the token would have the fields from the jwt callback
      session.user.id = token.id; // Persist the user ID into the session
      // Include any other fields from the token into the session here
      return session; // Return the updated session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
