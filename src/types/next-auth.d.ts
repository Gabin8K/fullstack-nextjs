import { Prisma } from "@prisma/client";
import { DefaultSession } from "next-auth";


declare module 'next-auth' {
  interface Session {
    user: Prisma.userGetPayload<{}> & DefaultSession['user']
  }
}