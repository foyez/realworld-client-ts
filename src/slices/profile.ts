import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileState, Errors, Profile } from 'types'

const initialState: ProfileState = {
  profile: null,
  profileArticlesByAuthor: [],
  profileArticlesByFavorites: [],
  loading: false,
  errors: null,
}

const failed = (state: ProfileState, { payload }: PayloadAction<Errors>) => ({
  ...state,
  loading: false,
  errors: payload,
})

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadProfile: {
      reducer(state) {
        state.loading = true
      },
      prepare(username: string) {
        return { payload: username }
      },
    },
    follow: {
      reducer(state) {
        state.loading = true
      },
      prepare(username: string) {
        return { payload: username }
      },
    },
    unfollow: {
      reducer(state) {
        state.loading = true
      },
      prepare(username: string) {
        return { payload: username }
      },
    },
    loadProfileSuccess: (state, { type, payload }: PayloadAction<Profile>) => {
      state.loading = false
      state.profile = payload
    },
    loadProfileFailure: failed,
  },
})

export const {
  loadProfile,
  follow,
  unfollow,
  loadProfileSuccess,
  loadProfileFailure,
} = profileSlice.actions
export const profileReducer = profileSlice.reducer
