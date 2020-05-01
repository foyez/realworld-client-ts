import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { Layout } from './layout'

const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Layout>
)

export default App
