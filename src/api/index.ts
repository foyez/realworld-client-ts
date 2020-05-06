import Axios from 'axios'
import {
  Article,
  CurrentUser,
  LoginPayload,
  RegisterPayload,
  UserSettingsPayload,
  CommentPayload,
} from 'types'

// const API_ROOT = process.env.REACT_APP_API_ROOT
const API_ROOT = 'https://foyez-realworld-api.herokuapp.com/api'

const axios = Axios.create({
  baseURL: API_ROOT,
})

export const setToken = (_token: string | null) => {
  if (_token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`
  }
}

export const ArticlesApi = {
  all: () => axios.get<Article[]>('/articles?limit=10'),
  get: (slug: string) => axios.get<Article>(`/articles/${slug}`),
  del: (slug: string) => axios.delete(`/articles/${slug}`),
}

export const CommentsApi = {
  create: ({ slug, body }: CommentPayload) =>
    axios.post(`/articles/${slug}/comments`, { comment: { body } }),
  delete: (slug: string, commentId: string) =>
    axios.delete(`/articles/${slug}/comments/${commentId}`),
  getComments: (slug: string) => axios.get(`/articles/${slug}/comments`),
}

export const AuthApi = {
  current: () => axios.get<CurrentUser>('/user'),
  login: ({ email, password }: LoginPayload) =>
    axios.post('/users/login', { user: { email, password } }),
  register: ({ username, email, password }: RegisterPayload) =>
    axios.post('/users', { user: { username, email, password } }),
  updateUser: (user: UserSettingsPayload) => axios.put('/user', { user }),
}
