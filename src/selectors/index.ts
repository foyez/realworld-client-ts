import { RootState } from 'types'

export const selectHome = (state: RootState) => state.home
export const selectAuth = (state: RootState) => state.auth
export const selectArticle = (state: RootState) => state.article
