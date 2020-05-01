import Axios from 'axios'
import { Article, CurrentUser } from 'types'

// const API_ROOT = process.env.REACT_APP_API_ROOT
const API_ROOT = 'https://foyez-realworld-api.herokuapp.com/api'

const axios = Axios.create({
  baseURL: API_ROOT,
})

let token: string | null = null
const authHeader = () => {
  let options = {}

  if (token) {
    options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  }

  return options
}

export const setToken = (_token: string | null) => {
  token = _token
}

export const ArticlesApi = {
  all: () => axios.get<Article[]>('/articles?limit=10'),
}

export const AuthApi = {
  current: () => axios.get<CurrentUser>('/user', authHeader()),
  login: (email: string, password: string) =>
    axios.post('/users/login', { user: { email, password } }),
}

export default {
  ArticlesApi,
}
