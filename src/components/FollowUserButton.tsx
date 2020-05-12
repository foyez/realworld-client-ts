import React from 'react'

interface IFollowUserButton {
  onClick: () => void
  following: boolean
}

export const FollowUserButton: React.FC<IFollowUserButton> = ({
  onClick,
  following,
}) => {
  let classes = 'btn btn-sm action-btn'
  if (following) {
    classes += ' btn-secondary'
  } else {
    classes += ' btn-outline-secondary'
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      <i className="ion-plus-round"></i>
      &nbsp;
      {following ? 'Unfollow' : 'Follow'}
    </button>
  )
}
