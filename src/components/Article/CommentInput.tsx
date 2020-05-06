import React, { ChangeEvent, FormEvent, useState, useRef } from 'react'
import { CurrentUser } from 'types'

import { useDispatch } from 'react-redux'
import { addComment } from 'slices/article'

interface ICommentInput {
  currentUser: CurrentUser | null
  slug: string
}

export const CommentInput: React.FC<ICommentInput> = ({
  currentUser,
  slug,
}) => {
  const dispatch = useDispatch()

  const [body, setBody] = useState('')
  const inputEl = useRef<HTMLTextAreaElement>(null)

  const changeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target

    inputEl.current?.focus()
    setBody(value)
  }

  const createComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(addComment({ slug, body }))
    setBody('')
  }

  return (
    <form className="card comment-form" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          placeholder="Write a comment..."
          className="form-control"
          rows={3}
          value={body}
          ref={inputEl}
          onChange={changeBody}
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={currentUser?.image}
          alt="author profile pic"
          className="comment-author-img"
        />
        <button type="submit" className="btn btn-sm btn-primary">
          Post Comment
        </button>
      </div>
    </form>
  )
}
