import { RootState } from 'types'

export const selectTodos = (state: RootState) => state.todoState
export const selectArticles = (state: RootState) => state.articlesState
