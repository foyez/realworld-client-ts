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

export interface CurrentUser {
  username: string
  email: string
  token: string
  image: string
  bio?: string
}

//==============================================================================
// State
//==============================================================================

export interface ArticlesState {
  articles: Article[]
  articlesCount: number
  error: string
  loading: boolean
}

export interface AuthState {
  currentUser: CurrentUser | null
  error: string
}

export interface RootState {
  articlesState: ArticlesState
  authState: AuthState
}
