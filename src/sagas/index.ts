import { put, all, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { ArticlesApi, AuthApi, setToken } from 'api'
import { LoginPayload, RegisterPayload, UserSettingsPayload } from 'types'

import {
  loadArticlesFailure,
  loadArticlesSuccess,
  loadArticles,
} from 'slices/articles'
import {
  authFailure,
  loadAuth,
  authSuccess,
  logout,
  login,
  register,
  updateUser,
} from 'slices/auth'
// import {
//   updateUser,
//   updateUserSuccess,
//   updateUserFailure,
// } from 'slices/settings'

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
 * Check user authentication
 */
function* isUserAuth() {
  try {
    const token = yield window.localStorage.getItem('jwt')
    if (!token) return put(logout())

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

    yield put(authSuccess(res.data!.data))
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

export function* rootSaga() {
  yield all([
    takeLatest(loadArticles.type, fetchArticles),
    takeLatest(loadAuth.type, isUserAuth),
    takeLatest(login.type, loginUser),
    takeLatest(register.type, registerUser),
    takeLatest(updateUser.type, updateUserSettings),
  ])
}
