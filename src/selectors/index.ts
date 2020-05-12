import { RootState } from 'types'

export const selectHome = (state: RootState) => state.home
export const selectAuth = (state: RootState) => state.auth
export const selectArticle = (state: RootState) => state.article
export const selectProfile = (state: RootState) => state.profile
export const selectArticleList = (state: RootState) => state.articleList
