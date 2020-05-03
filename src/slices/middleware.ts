import { setToken } from 'api'
import { CurrentUser } from 'types'

interface Action {
  type: string
  payload: CurrentUser
}

const localStorageMiddleware = () => (next: Function) => (action: Action) => {
  if (action.type === 'auth/authSuccess') {
    const { token } = action.payload
    window.localStorage.setItem('jwt', token)
    setToken(token)
  } else if (action.type === 'auth/logout') {
    window.localStorage.removeItem('jwt')
    setToken(null)
  }

  next(action)
}

export { localStorageMiddleware }
