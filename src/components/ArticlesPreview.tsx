import React from 'react'
import { Link } from 'react-router-dom'

import { Article } from 'types'

interface ArticlePreviewProps {
  article: Article
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
  const { image, username, favoritesCount } = article.author
  const date = new Date(article.createdAt).toDateString()

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to="">
          <img src={image} alt="author profile pic" />
        </Link>

        <div className="info">
          <Link to="" className="author">
            {username}
          </Link>
          <span className="date">{date}</span>
        </div>

        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i> {favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag, i) => {
            return (
              <li
                key={`${tag}${i}`}
                className="tag-default tag-pill tag-outline"
              >
                {tag}
              </li>
            )
          })}
        </ul>
      </Link>
    </div>
  )
}
