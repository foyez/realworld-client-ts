import React from 'react'
import { Comment as CommentType, CurrentUser } from 'types'
import { Link } from 'react-router-dom'
import { DeleteButton } from './DeleteButton'

interface ICommentProps {
  comment: CommentType
  slug: string
  currentUser: CurrentUser | null
}

export const Comment: React.FC<ICommentProps> = ({
  comment,
  slug,
  currentUser,
}) => {
  const show = currentUser?.username === comment.author.username

  const deleteComment = () => {}

  return (
    <div className="card">
      <div className="card-block">
        <div className="card-text">{comment.body}</div>
      </div>

      <div className="card-footer">
        <Link to={`@${comment.author.username}`}>
          <img
            src={comment.author.image}
            alt="author pic"
            className="comment-author-img"
          />
        </Link>
        &nbsp;
        <Link to={`@${comment.author.username}`} className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
        {show && <DeleteButton onClick={deleteComment} />}
      </div>
    </div>
  )
}
