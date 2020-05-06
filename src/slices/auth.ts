import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AuthState,
  CurrentUser,
  Errors,
  LoginPayload,
  RegisterPayload,
  UserSettingsPayload,
} from 'types'

const initialState: AuthState = {
  currentUser: null,
  loading: true,
  errors: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadAuth: () => initialState,
    login: {
      reducer() {
        return initialState
      },
      prepare(payload: LoginPayload) {
        return { payload }
      },
    },
    register: {
      reducer() {
        return initialState
      },
      prepare(payload: RegisterPayload) {
        return { payload }
      },
    },
    updateUser: {
      reducer(state) {
        state.loading = true
      },
      prepare(payload: UserSettingsPayload) {
        return { payload }
      },
    },
    authSuccess: (state, { payload }: PayloadAction<CurrentUser>) => ({
      ...state,
      currentUser: payload,
      loading: false,
      errors: null,
    }),
    authFailure: (state, { payload }: PayloadAction<Errors>) => ({
      ...state,
      loading: false,
      errors: payload,
    }),
    logout: (state) => ({
      ...state,
      currentUser: null,
      loading: false,
      errors: null,
    }),
  },
})

export const {
  loadAuth,
  authSuccess,
  authFailure,
  login,
  register,
  updateUser,
  logout,
} = authSlice.actions
export const authReducer = authSlice.reducer
