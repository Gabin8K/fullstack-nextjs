import type { Metadata } from "next";
import Providers from "@/providers/Providers";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Discu's Blog",
  description: "A blog about software development and programming see GitHub profile Gabin8K",
};

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const session = await getServerSession();
  return (
    <Providers
      session={session}
    >
      <main>
        {children}
      </main>
    </Providers>
  );
}
