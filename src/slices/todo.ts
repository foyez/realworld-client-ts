import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoState, Todo } from 'types'

const initialState: TodoState = {
  todos: [],
  error: '',
  loading: true,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    loadTodos: () => initialState,
    loadTodosSuccess: (state, { payload }: PayloadAction<Todo[]>) => ({
      ...state,
      todos: payload,
      loading: false,
    }),
    loadTodosFailure: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
})

export const {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} = todoSlice.actions
export const todoReducer = todoSlice.reducer
