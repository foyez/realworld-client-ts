import { combineReducers, Reducer } from 'redux'

import { homeReducer } from 'slices/home'
import { authReducer } from 'slices/auth'
import { RootState } from 'types'

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  home: homeReducer,
  auth: authReducer,
})
