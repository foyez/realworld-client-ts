import React, { ReactNode, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectAuth } from 'selectors'
import { loadAuth } from 'slices/auth'

import { Navigation } from '../components/Navigation'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentUser } = useSelector(selectAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAuth())
  }, [dispatch])

  return (
    <>
      <Navigation currentUser={currentUser} />

      {children}
    </>
  )
}
