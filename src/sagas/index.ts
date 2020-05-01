import { put, all, takeLatest } from 'redux-saga/effects'

import { TodoApi } from 'api'

import { loadTodos, loadTodosSuccess, loadTodosFailure } from 'slices/todo'

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
  yield all([takeLatest(loadTodos.type, fetchTodos)])
}
