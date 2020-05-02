import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { register } from 'slices/auth'
import { selectAuth } from 'selectors'

import { ListErrors } from 'components/ListErrors'

interface RegisterPageProps extends RouteComponentProps {
  // location: Location
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ location }) => {
  const dispatch = useDispatch()
  const { errors } = useSelector(selectAuth)

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = credentials
  const isEnabled = username.length && email.length && password.length

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(register(credentials))
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to={{ pathname: '/login', state: location.state }}>
                Have an account?
              </Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </fieldset>
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
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
