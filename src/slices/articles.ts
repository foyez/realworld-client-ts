import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticlesState, Article } from 'types'

const initialState: ArticlesState = {
  articles: [],
  articlesCount: 0,
  error: '',
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
    }),
    loadArticlesFailure: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
})

export const {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesFailure,
} = articlesSlice.actions
export const articlesReducer = articlesSlice.reducer
