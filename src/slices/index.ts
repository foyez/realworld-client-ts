import { combineReducers, Reducer } from 'redux'

import { RootState } from 'types'
import { homeReducer } from 'slices/home'
import { authReducer } from 'slices/auth'
import { articleReducer } from 'slices/article'
import { profileReducer } from './profile'
import { articleListReducer } from './articleList'

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  home: homeReducer,
  auth: authReducer,
  article: articleReducer,
  profile: profileReducer,
  articleList: articleListReducer,
})
