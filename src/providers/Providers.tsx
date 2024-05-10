import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeProvider'


const Providers: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme={'system'}>
      {children}
    </ThemeProvider>
  )
}

export default Providers