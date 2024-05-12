'use client'
import { Button } from '@/components/ui'
import { ThemeProvider } from '@/providers'
import Link from 'next/link'
import React from 'react'


export default function Page() {
  return (
    <ThemeProvider defaultTheme={'system'}>
      <div className={'flex flex-col gap-y-4 h-screen justify-center items-center'}>
        <h1 className={'text-4xl font-bold text-slate-800 dark:text-slate-300'}>
          404 - Not Found
        </h1>
        <Link
          passHref
          href={'/'}
        >
          <Button>
            Go back
          </Button>
        </Link>
      </div>
    </ThemeProvider>
  )
}