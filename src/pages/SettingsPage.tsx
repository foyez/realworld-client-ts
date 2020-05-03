import React from 'react'

import { useSelector } from 'react-redux'
import { selectAuth } from 'selectors'

import { ListErrors } from 'components/ListErrors'
import { SettingsForm } from 'components/SettingsForm'

export const SettingsPage = () => {
  const { errors } = useSelector(selectAuth)

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1>Your Settings</h1>

            <ListErrors errors={errors} />

            <SettingsForm />
          </div>
        </div>
      </div>
    </div>
  )
}
