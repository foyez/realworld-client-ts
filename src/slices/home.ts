import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HomeState, Article, Errors } from 'types'

const initialState: HomeState = {
  articles: [],
  articlesCount: 0,
  errors: null,
  loading: true,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    loadArticles: (state) => {
      state.loading = true
    },
    loadArticlesSuccess: (state, { payload }: PayloadAction<Article[]>) => ({
      ...state,
      articles: payload,
      loading: false,
      errors: null,
    }),
    loadArticlesFailure: (state, { payload }: PayloadAction<Errors>) => ({
      ...state,
      loading: false,
      errors: payload,
    }),
  },
})

export const {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesFailure,
} = homeSlice.actions
export const homeReducer = homeSlice.reducer
