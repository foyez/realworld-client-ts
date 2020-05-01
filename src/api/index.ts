import Axios from 'axios'
import { Todo } from 'types'

const API_ROOT = 'https://jsonplaceholder.typicode.com'

const axios = Axios.create({
  baseURL: API_ROOT,
})

export const TodoApi = {
  getTodos: () => axios.get<Todo[]>('/todos'),
}
