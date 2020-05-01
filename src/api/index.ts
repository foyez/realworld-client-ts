import Axios from 'axios'
import { Todo, Article } from 'types'

// const API_ROOT = process.env.REACT_APP_API_ROOT
const API_ROOT = 'https://foyez-realworld-api.herokuapp.com/api'

const axios = Axios.create({
  baseURL: API_ROOT,
})

export const TodoApi = {
  getTodos: () => axios.get<Todo[]>('/todos'),
}

export const ArticlesApi = {
  all: () => axios.get<Article[]>('/articles?limit=10'),
}

export default {
  ArticlesApi,
}
