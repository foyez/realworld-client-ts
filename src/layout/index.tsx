import React, { ReactNode } from 'react'

import { Navigation } from '../components/Navigation'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />

      {children}
    </>
  )
}
