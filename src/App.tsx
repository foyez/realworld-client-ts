import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { RestrictedRoute } from 'utils/CustomRoutes'

import { Layout } from './layout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from 'pages/LoginPage'

const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <RestrictedRoute path="/login" component={LoginPage} />
    </Switch>
  </Layout>
)

export default App
