import { RootState } from 'types'

export const selectArticles = (state: RootState) => state.articlesState
export const selectAuth = (state: RootState) => state.authState
