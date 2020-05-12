import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleListState, Errors } from 'types'

const initialState: ArticleListState = {
  articles: [],
  articlesCount: 0,
  loading: false,
  errors: null,
}

const failed = (
  state: ArticleListState,
  { payload }: PayloadAction<Errors>,
) => ({
  ...state,
  loading: false,
  errors: payload,
})

const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    loadArticleList: {
      reducer(state) {
        state.loading = true
      },
      prepare(username: string) {
        return { payload: username }
      },
    },
    loadArticleListByAuthor: {
      reducer(state) {
        state.loading = true
      },
      prepare(username: string) {
        return { payload: username }
      },
    },
    loadArticleListByFavorite: {
      reducer(state) {
        state.loading = true
      },
      prepare(username: string) {
        return { payload: username }
      },
    },
    loadArticleListSuccess: (
      state,
      { type, payload }: PayloadAction<ArticleListState>,
    ) => {
      state.loading = false
      state.articles = payload.articles
      state.articlesCount = payload.articlesCount
    },
    loadArticleListFailure: failed,
  },
})

export const {
  loadArticleList,
  loadArticleListByAuthor,
  loadArticleListByFavorite,
  loadArticleListSuccess,
  loadArticleListFailure,
} = articleListSlice.actions
export const articleListReducer = articleListSlice.reducer
