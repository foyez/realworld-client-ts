import React from 'react'
import { Article } from 'types'
import { Link } from 'react-router-dom'

interface IArticleActions {
  article: Article
}

export const ArticleActions: React.FC<IArticleActions> = ({ article }) => {
  const handleDeleteArticle = () => {
    alert('TODO: deleteArticle reducer (07 branch)')
  }

  return (
    <span>
      <Link
        to={`/editor/${article.slug}`}
        className="btn btn-outline-secondary btn-sm"
      >
        <i className="ion-edit" /> Edit Article
      </Link>

      <button
        onClick={handleDeleteArticle}
        className="btn btn-outline-danger btn-sm"
      >
        <i className="ion-trash-a" /> Delete Article
      </button>
    </span>
  )
}
