'use client'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';


type Props = PropsWithChildren<{
  session: Session | null
}>;

const Providers: FunctionComponent<Props> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme={'system'}>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Providers