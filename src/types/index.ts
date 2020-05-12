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
  body: string
  tagList: string[]
  favorited: boolean
  favoritesCount: number
  author: Author
  createdAt: string
  // [key: string]: string | number | boolean | Author | string[] | Date
}

export interface Comment {
  id: string
  body: string
  author: Author
  createdAt: string
}

export interface CurrentUser {
  username: string
  email: string
  token: string
  image: string
  bio: string
}

export interface Profile {
  username: string
  bio: string
  image: string
  following: boolean
}

export type Errors = { [key: string]: string } | null

//==============================================================================
// API
//==============================================================================
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
  [key: string]: string
}

export interface ArticlesPayload {
  authorUsername: string
  page: number
}

export interface ArticlePayload {
  article: Article
  comments: Comment[]
}

export interface CommentPayload {
  slug: string
  body?: string
  commentId?: string
}

//==============================================================================
// State
//==============================================================================

export interface HomeState {
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

export interface ArticleState {
  article: Article
  comments: Comment[]
  loading: boolean
  errors: Errors
}

export interface ProfileState {
  profile: Profile | null
  profileArticlesByAuthor: Article[]
  profileArticlesByFavorites: Article[]
  loading: boolean
  errors: Errors
}

export interface ArticleListState {
  articles: Article[]
  articlesCount: number
  loading: boolean
  errors: Errors
}

export interface RootState {
  home: HomeState
  auth: AuthState
  article: ArticleState
  profile: ProfileState
  articleList: ArticleListState
}
