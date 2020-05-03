export interface LoginPayload {
  email: string
  password: string
  [key: string]: string
}

export interface RegisterPayload {
  username: string
  email: string
  password: string
  [key: string]: string
}

export interface UserSettingsPayload {
  image: string
  username: string
  bio: string
  email: string
  password: string
  [key: string]: string
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

export interface CurrentUser {
  username: string
  email: string
  token: string
  image: string
  bio: string
}

export type Errors = { [key: string]: string } | null

//==============================================================================
// State
//==============================================================================

export interface ArticlesState {
  articles: Article[]
  articlesCount: number
  loading: boolean
  errors: Errors
}

export interface AuthState {
  currentUser: CurrentUser | null
  loading: boolean
  errors: Errors
}

export interface RootState {
  articlesState: ArticlesState
  authState: AuthState
}
