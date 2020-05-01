import { put, all, takeLatest } from 'redux-saga/effects'

import { TodoApi, ArticlesApi, AuthApi, setToken } from 'api'

import { loadTodos, loadTodosSuccess, loadTodosFailure } from 'slices/todo'
import {
  loadArticlesFailure,
  loadArticlesSuccess,
  loadArticles,
} from 'slices/articles'
import { authFailure, loadAuth, authSuccess, logout } from 'slices/auth'

/**
 * GET articles
 */
function* fetchArticles() {
  try {
    const res = yield ArticlesApi.all()

    yield put(loadArticlesSuccess(res.data.articles))
  } catch (err) {
    console.log(err)
    yield put(loadArticlesFailure(err.message))
  }
}

/**
 * GET todos from API
 */
function* fetchTodos() {
  try {
    const res = yield TodoApi.getTodos()

    yield put(loadTodosSuccess(res.data))
  } catch (error) {
    yield put(loadTodosFailure(error.message))
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

    yield put(authSuccess(res.data))
  } catch (err) {
    yield put(authFailure(err.message))
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(loadArticles.type, fetchArticles),
    takeLatest(loadTodos.type, fetchTodos),
    takeLatest(loadAuth.type, isUserAuth),
  ])
}
