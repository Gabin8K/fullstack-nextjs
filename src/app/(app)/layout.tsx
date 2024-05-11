import { Layout } from '@/components/Layout'
import React, { PropsWithChildren } from 'react'


export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}