import React from 'react'
import { Article } from 'types'
import { Link } from 'react-router-dom'
import { ArticleActions } from './ArticleActions'

interface IArticleMetaProps {
  article: Article
  canModify: boolean
}

export const ArticleMeta: React.FC<IArticleMetaProps> = ({
  article,
  canModify,
}) => {
  return (
    <div className="article-meta">
      <Link to={`@${article.author.username}`}>
        <img src={article.author.image} alt="author profile pic" />
      </Link>

      <div className="info">
        <Link to={`@${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>

      {canModify && <ArticleActions article={article} />}
    </div>
  )
}
