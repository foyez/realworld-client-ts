import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { Location } from 'history'

import { useSelector } from 'react-redux'
import { selectAuth } from 'selectors'

interface CustomRouteProps extends RouteProps {
  path: string
  component: React.FC<any>
  location?: Location<{ from?: Location }>
}

export const PrivateRoute: React.FC<CustomRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { currentUser } = useSelector(selectAuth)

  const renderFn = (props: RouteProps) => {
    return currentUser ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )
  }

  return <Route {...rest} render={renderFn} />
}

export const RestrictedRoute: React.FC<CustomRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { currentUser } = useSelector(selectAuth)
  const from = rest.location?.state?.from || '/'

  const renderFn = (props: RouteProps) => {
    return currentUser ? <Redirect to={from} /> : <Component {...props} />
  }

  return <Route {...rest} render={renderFn} />
}
