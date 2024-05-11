'use client'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import "@/app/globals.scss";
import { Toaster } from '@/components/ui';
import NextAuthProvider from './NextAuthProvider';


type Props = PropsWithChildren<{
  session: Session | null
}>;

const inter = Inter({ subsets: ["latin"] });

const Providers: FunctionComponent<Props> = ({ children, session }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NextAuthProvider>
            <ThemeProvider defaultTheme={'system'}>
              {children}
              <Toaster />
            </ThemeProvider>
          </NextAuthProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

export default Providers