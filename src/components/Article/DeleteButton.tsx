import React from 'react'

interface IDeleteButtonProps {
  onClick: () => void
}

export const DeleteButton: React.FC<IDeleteButtonProps> = ({ onClick }) => {
  return (
    <span className="mod-options">
      <i className="ion-trash-a" onClick={onClick}></i>
    </span>
  )
}
