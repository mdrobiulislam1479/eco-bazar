import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/actions/server/auth";
import { dbConnect } from "@/lib/dbConnect";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await loginUser(credentials);
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isExist = await dbConnect("users").findOne({
        email: user.email,
        provider: account?.provider,
      });

      if (isExist) return true;

      const newUser = {
        provider: account?.provider,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "user",
      };

      const result = await dbConnect("users").insertOne(newUser);

      return result.acknowledged;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // async session({ session, token, user }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
