import React from 'react'

import { Banner } from '../components/Banner'
import { MainView } from '../components/MainView'

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Banner appName={process.env.REACT_APP_NAME} />

      <div className="container page">
        <div className="row">
          <MainView />

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
