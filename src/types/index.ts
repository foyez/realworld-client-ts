export interface Todo {
  id: number
  title: string
  completed: boolean
}

//==============================================================================
// State
//==============================================================================

export interface TodoState {
  todos: Todo[]
  error: string
  loading: boolean
}

export interface RootState {
  todoState: TodoState
}
