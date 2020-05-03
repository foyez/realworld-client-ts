import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from 'slices/auth'
import { selectAuth } from 'selectors'

export const SettingsForm = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(selectAuth)

  const [settings, setSettings] = useState({
    image: '',
    username: '',
    bio: '',
    email: '',
  })
  const { image, username, bio, email } = settings

  useEffect(() => {
    if (currentUser) {
      setSettings((settings) =>
        Object.assign({}, settings, {
          image: currentUser.image || '',
          username: currentUser.username,
          bio: currentUser.bio,
          email: currentUser.email,
        }),
      )
    }

    //// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const handleChange = (fieldName: string) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target

    setSettings({ ...settings, [fieldName]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(updateUser(settings))
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="URL of profile picture"
            value={image}
            onChange={handleChange('image')}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange('username')}
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows={5}
            placeholder="Short bio about you"
            value={bio}
            onChange={handleChange('bio')}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange('email')}
          />
        </fieldset>

        <button className="btn btn-lg btn-primary pull-xs-right">
          Update settings
        </button>
      </fieldset>
    </form>
  )
}
