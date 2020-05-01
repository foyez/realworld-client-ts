import React from 'react'

import { ArticlePreview } from './ArticlesPreview'
import { Article } from '../types'

interface ArticleListProps {
  articles: Article[]
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  if (!articles) {
    return <div className="article-preview">Loading...</div>
  }

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>
  }

  return (
    <div>
      {articles.map((article) => {
        return <ArticlePreview key={article.slug} article={article} />
      })}
    </div>
  )
}
