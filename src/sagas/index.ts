import { put, all, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { ArticlesApi, AuthApi, setToken, CommentsApi } from 'api'
import {
  LoginPayload,
  RegisterPayload,
  UserSettingsPayload,
  CommentPayload,
} from 'types'

import {
  loadArticlesFailure,
  loadArticlesSuccess,
  loadArticles,
} from 'slices/home'
import {
  authFailure,
  loadAuth,
  authSuccess,
  logout,
  login,
  register,
  updateUser,
} from 'slices/auth'
import {
  loadArticle,
  loadArticleSuccess,
  addComment,
  addCommentSuccess,
  addCommentFailure,
} from 'slices/article'

/**
 * GET articles
 */
function* fetchArticles() {
  try {
    const res = yield ArticlesApi.all()

    yield put(loadArticlesSuccess(res.data.articles))
  } catch (err) {
    console.log(err.message)
    const { errors } = err.response.data
    yield put(loadArticlesFailure(errors))
  }
}

/**
 * Get article
 */
function* fetchArticle({ payload }: PayloadAction<string>) {
  try {
    console.log(payload)
    const res = yield Promise.all([
      ArticlesApi.get(payload),
      CommentsApi.getComments(payload),
    ])
    console.log(res[0].data, res[1].data)
    const data = {
      article: res[0].data!.article,
      comments: res[1].data!.comments,
    }

    yield put(loadArticleSuccess(data))
  } catch (err) {
    console.log(err.message)
    const { errors } = err.response.data
    yield put(loadArticlesFailure(errors))
  }
}

/**
 * Check user authentication
 */
function* isUserAuth() {
  try {
    const token = yield window.localStorage.getItem('jwt')
    if (!token) return yield put(logout())

    yield setToken(token)
    const res = yield AuthApi.current()

    yield put(authSuccess(res.data!.user))
  } catch (err) {
    console.log(err.message)
    const { errors } = err.response.data
    yield put(authFailure(errors))
  }
}

/**
 * Login user
 */
function* loginUser({ payload }: PayloadAction<LoginPayload>) {
  try {
    const res = yield AuthApi.login(payload)

    yield put(authSuccess(res.data!.user))
  } catch (err) {
    console.log(err.message)
    const { errors } = err.response.data
    yield put(authFailure(errors))
  }
}

/**
 * Register user
 *
 * @param {PayloadAction<UserSettingsPayload>} payload
 */
function* registerUser({ payload }: PayloadAction<RegisterPayload>) {
  try {
    const res = yield AuthApi.register(payload)

    yield put(authSuccess(res.data!.user))
  } catch (err) {
    console.log(err.message)
    const { errors } = err.response.data
    yield put(authFailure(errors))
  }
}

/**
 * Update user settings
 *
 * @param {PayloadAction<UserSettingsPayload>} payload
 */
function* updateUserSettings({ payload }: PayloadAction<UserSettingsPayload>) {
  try {
    const res = yield AuthApi.updateUser(payload)

    yield put(authSuccess(res.data!.user))
  } catch (err) {
    console.log(err.message)
    const { errors } = err.response.data
    yield put(authFailure(errors))
  }
}

/**
 * Add comment to article
 *
 * @param {PayloadAction<UserSettingsPayload>} payload
 */
function* addCommentToArticle({ payload }: PayloadAction<CommentPayload>) {
  try {
    const res = yield CommentsApi.create(payload)
    console.log(res.data)

    yield put(addCommentSuccess(res.data?.comment))
  } catch (err) {
    console.log(err.message)
    const { errors } = err.response.data
    yield put(addCommentFailure(errors))
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(loadAuth.type, isUserAuth),
    takeLatest(login.type, loginUser),
    takeLatest(register.type, registerUser),
    takeLatest(updateUser.type, updateUserSettings),
    takeLatest(loadArticles.type, fetchArticles),
    takeLatest(loadArticle.type, fetchArticle),
    takeLatest(addComment.type, addCommentToArticle),
  ])
}
