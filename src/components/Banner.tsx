import React from 'react'

interface BannerProps {
  appName?: string
}

export const Banner: React.FC<BannerProps> = ({ appName }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName}</h1>
        <p>A place to share your knowledge</p>
      </div>
    </div>
  )
}
