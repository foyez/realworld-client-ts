import React from 'react'
import { Errors } from 'types'

interface ListErrorsProps {
  errors: Errors
}

export const ListErrors: React.FC<ListErrorsProps> = ({ errors }) => {
  return errors ? (
    <ul className="error-messages">
      {Object.keys(errors).map((key) => {
        return (
          <li key={key}>
            {key} {errors[key]}
          </li>
        )
      })}
    </ul>
  ) : null
}
