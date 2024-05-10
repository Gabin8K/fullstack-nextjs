import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import prisma from "@/lib/prisma";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ profile }: any) {
      try {
        const user = await prisma.user.findFirst({ where: { email: profile?.email } })
        if (!user) {
          await prisma.user.create({
            data: {
              email: profile?.email!,
              name: profile?.name,
              image: profile?.picture
            }
          })
        }
        return true;
      } catch (error) {
        console.log(error)
        return false;
      }
    },
    async session({ session }) {
      const user = await prisma.user.findFirst({ where: { email: session.user.email } })
      if (user) {
        session.user = user;
      }
      return session;
    }
  }
})

export { handler as GET, handler as POST }