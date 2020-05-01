import { put, all, takeLatest } from 'redux-saga/effects'

import { TodoApi, ArticlesApi } from 'api'

import { loadTodos, loadTodosSuccess, loadTodosFailure } from 'slices/todo'
import {
  loadArticlesFailure,
  loadArticlesSuccess,
  loadArticles,
} from 'slices/articles'

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

export function* rootSaga() {
  yield all([
    takeLatest(loadArticles.type, fetchArticles),
    takeLatest(loadTodos.type, fetchTodos),
  ])
}
