import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, CurrentUser } from 'types'

const initialState: AuthState = {
  currentUser: null,
  error: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadAuth: () => initialState,
    authSuccess: (state, { payload }: PayloadAction<CurrentUser>) => ({
      ...state,
      currentUser: payload,
    }),
    authFailure: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      error: payload,
    }),
    logout: (state) => ({
      ...state,
      currentUser: null,
      error: '',
    }),
  },
})

export const { loadAuth, authSuccess, authFailure, logout } = authSlice.actions
export const authReducer = authSlice.reducer
