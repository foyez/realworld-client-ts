import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, CurrentUser, Errors, LoginPayload } from 'types'

const initialState: AuthState = {
  currentUser: null,
  errors: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadAuth: () => initialState,
    login: {
      reducer() {},
      prepare(payload: LoginPayload) {
        return { payload }
      },
      // reducer(state, { payload }: PayloadAction<LoginPayload>) {
      //   const { email, password } = payload
      // },
      // prepare(email, password) {
      //   return { payload: { email, password } }
      // },
    },
    authSuccess: (state, { payload }: PayloadAction<CurrentUser>) => ({
      ...state,
      currentUser: payload,
      errors: null,
    }),
    authFailure: (state, { payload }: PayloadAction<Errors>) => ({
      ...state,
      errors: payload,
    }),
    logout: (state) => ({
      ...state,
      currentUser: null,
      errors: null,
    }),
  },
})

export const {
  loadAuth,
  authSuccess,
  authFailure,
  login,
  logout,
} = authSlice.actions
export const authReducer = authSlice.reducer
