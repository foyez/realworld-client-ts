import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticlesState, Article, Errors } from 'types'

const initialState: ArticlesState = {
  articles: [],
  articlesCount: 0,
  errors: null,
  loading: true,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    loadArticles: () => initialState,
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
} = articlesSlice.actions
export const articlesReducer = articlesSlice.reducer
