import React from 'react'
import { Comment as CommentType, CurrentUser } from 'types'

import { Comment } from './Comment'

interface ICommentListProps {
  comments: CommentType[]
  slug: string
  currentUser: CurrentUser | null
}

export const CommentList: React.FC<ICommentListProps> = ({
  comments,
  slug,
  currentUser,
}) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser={currentUser}
            slug={slug}
          />
        )
      })}
    </div>
  )
}
