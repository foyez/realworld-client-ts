import React from 'react'
import { Link } from 'react-router-dom'

export const MainView: React.FC = () => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <Link to="" className="nav-link active">
              Global Feed
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
