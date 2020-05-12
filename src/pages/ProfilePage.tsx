import React, { useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { loadProfile, follow, unfollow } from 'slices/profile'
import { loadArticleListByAuthor } from 'slices/articleList'
import { selectProfile, selectAuth, selectArticleList } from 'selectors'
import { FollowUserButton } from 'components/FollowUserButton'
import { ArticleList } from 'components/ArticleList'

interface IProfilePage extends RouteComponentProps<{ username: string }> {
  // params: string
}

export const ProfilePage: React.FC<IProfilePage> = ({ match }) => {
  const dispatch = useDispatch()
  const { profile } = useSelector(selectProfile)
  const { currentUser } = useSelector(selectAuth)
  const { articles, loading } = useSelector(selectArticleList)

  useEffect(() => {
    const username = match.params.username

    Promise.all([
      dispatch(loadProfile(username)),
      dispatch(loadArticleListByAuthor(username)),
    ])
  }, [dispatch, match.params.username])

  const canEdit = currentUser?.username === profile?.username
  const canFollow = currentUser?.username !== profile?.username

  const handleArticles = () => {
    alert('TODO: ARTICLES TAB')
  }

  const handleFavoriteArticles = () => {
    alert('TODO: FAVORITE ARTICLES TAB')
  }

  const handleFollow = () => {
    if (profile!.following) {
      dispatch(unfollow(profile!.username))
    } else {
      dispatch(follow(profile!.username))
    }
  }

  const renderTabs = () => (
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <button onClick={handleArticles} className="nav-link">
          Articles
        </button>
      </li>
      <li className="nav-item">
        <button onClick={handleFavoriteArticles} className="nav-link active">
          Favorite Articles
        </button>
      </li>
    </ul>
  )

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={profile?.image}
                alt="Profile pic"
                className="user-img"
              />
              <h4>{profile?.username}</h4>
              <p>{profile?.bio}</p>

              {canEdit && (
                <Link
                  to="/settings"
                  className="btn btn-sm btn-outline-secondary action-btn"
                >
                  <i className="ion-gear-a"></i> Edit Profile Settings
                </Link>
              )}

              {canFollow && (
                <FollowUserButton
                  onClick={handleFollow}
                  following={profile!.following}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">{renderTabs()}</div>
            <ArticleList articles={articles} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  )
}
