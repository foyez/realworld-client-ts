import React from 'react'
import { Comment, Errors, CurrentUser } from 'types'
import { CommentList } from './CommentList'
import { ListErrors } from 'components/ListErrors'
import { CommentInput } from './CommentInput'
import { Link } from 'react-router-dom'

interface ICommentContainerProps {
  comments: Comment[]
  slug: string
  errors: Errors
  currentUser: CurrentUser | null
}

export const CommentContainer: React.FC<ICommentContainerProps> = ({
  comments,
  slug,
  errors,
  currentUser,
}) => {
  return (
    <div className="col-xs-12 col-md-8 offset-md-2">
      {currentUser ? (
        <>
          <ListErrors errors={errors} />
          <CommentInput currentUser={currentUser} slug={slug} />
        </>
      ) : (
        <>
          <Link to="/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/register">Sign up</Link>
          &nbsp;to add comments on this article
        </>
      )}

      <CommentList comments={comments} slug={slug} currentUser={currentUser} />
    </div>
  )
}
