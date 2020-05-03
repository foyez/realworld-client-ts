import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectHome } from 'selectors'
import { loadArticles } from 'slices/home'

import { ArticleList } from 'components/ArticleList'

export const MainView: React.FC = () => {
  const { articles } = useSelector(selectHome)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadArticles())
  }, [dispatch])

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <Link to="" className="nav-link active">
              Global Feed
            </Link>
          </li>
        </ul>
      </div>

      <ArticleList articles={articles} />
    </div>
  )
}
