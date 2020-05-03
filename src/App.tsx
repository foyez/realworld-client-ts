import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { RestrictedRoute, PrivateRoute } from 'utils/CustomRoutes'

import { Layout } from './layout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { SettingsPage } from 'pages/SettingsPage'

const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <RestrictedRoute path="/login" component={LoginPage} />
      <RestrictedRoute path="/register" component={RegisterPage} />
      <PrivateRoute path="/settings" component={SettingsPage} />
    </Switch>
  </Layout>
)

export default App
