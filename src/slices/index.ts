import { combineReducers, Reducer } from 'redux'

import { todoReducer } from 'slices/todo'
import { articlesReducer } from 'slices/articles'
import { RootState } from 'types'

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  todoState: todoReducer,
  articlesState: articlesReducer,
})
