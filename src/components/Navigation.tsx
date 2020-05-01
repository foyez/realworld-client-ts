import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation: React.FC = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {process.env.REACT_APP_NAME}
        </Link>
      </div>
    </nav>
  )
}
