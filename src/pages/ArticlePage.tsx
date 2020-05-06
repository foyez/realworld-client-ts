import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ReactMarkDown from 'react-markdown'

import { useDispatch, useSelector } from 'react-redux'
import { loadArticle } from 'slices/article'
import { selectArticle, selectAuth } from 'selectors'
import { ArticleMeta } from 'components/Article/ArticleMeta'
import { CommentContainer } from 'components/Article/CommentContainer'

interface IArticlePageProps extends RouteComponentProps<{ slug: string }> {
  // params: string
}

export const ArticlePage: React.FC<IArticlePageProps> = ({ match }) => {
  // console.log(match.params, location.search)
  const dispatch = useDispatch()
  const { article, comments, errors } = useSelector(selectArticle)
  const { currentUser } = useSelector(selectAuth)

  useEffect(() => {
    dispatch(loadArticle(match.params.slug))
  }, [dispatch, match.params.slug])

  const canModify = currentUser?.username === article.author.username

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article} canModify={canModify} />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <ReactMarkDown source={article.description} />
            <ul className="tag-list">
              {article.tagList.map((tag) => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <hr />

        <div className="row">
          <CommentContainer
            comments={comments}
            slug={match.params.slug}
            errors={errors}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  )
}
