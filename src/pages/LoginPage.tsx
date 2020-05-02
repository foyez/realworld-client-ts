import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { login } from 'slices/auth'
import { selectAuth } from 'selectors'

import { ListErrors } from 'components/ListErrors'

interface LoginPageProps extends RouteComponentProps {
  // location: Location
}

export const LoginPage: React.FC<LoginPageProps> = ({ location }) => {
  const dispatch = useDispatch()
  const { errors } = useSelector(selectAuth)

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const { email, password } = credentials
  const isEnabled = email.length && password.length

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(login(credentials))
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to={{ pathname: '/register', state: location.state }}>
                Need an account
              </Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={!isEnabled}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
