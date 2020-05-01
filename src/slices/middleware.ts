import { setToken } from 'api'

interface User {
  token: string
}

interface Payload {
  user: User
}

interface Action {
  type: string
  payload: Payload
}

const localStorageMiddleware = () => (next: Function) => (action: Action) => {
  if (action.type === 'auth/authSuccess') {
    const { token } = action.payload.user
    window.localStorage.setItem('jwt', token)
    setToken(token)
  } else if (action.type === 'auth/logout') {
    window.localStorage.removeItem('jwt')
    setToken(null)
  }

  next(action)
}

export { localStorageMiddleware }
