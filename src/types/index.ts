export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface Author {
  username: string
  image: string
  following: boolean
  [key: string]: string | boolean
}

export interface Article {
  slug: string
  title: string
  description: string
  tagList: string[]
  favorited: boolean
  favoritesCount: number
  author: Author
  createdAt: string
  // [key: string]: string | number | boolean | Author | string[] | Date
}

//==============================================================================
// State
//==============================================================================

export interface TodoState {
  todos: Todo[]
  error: string
  loading: boolean
}

export interface ArticlesState {
  articles: Article[]
  articlesCount: number
  error: string
  loading: boolean
}

export interface RootState {
  todoState: TodoState
  articlesState: ArticlesState
}
