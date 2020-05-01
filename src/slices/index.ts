import { combineReducers, Reducer } from 'redux'

import { articlesReducer } from 'slices/articles'
import { authReducer } from 'slices/auth'
import { RootState } from 'types'

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  articlesState: articlesReducer,
  authState: authReducer,
})
