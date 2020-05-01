import { RootState } from 'types'

export const selectTodos = (state: RootState) => state.todoState
