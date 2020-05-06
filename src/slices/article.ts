import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ArticleState,
  Errors,
  ArticlePayload,
  Comment,
  CommentPayload,
} from 'types'

const initialState: ArticleState = {
  article: {
    slug: '',
    title: '',
    tagList: [],
    description: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      image: '',
      following: false,
    },
    createdAt: '',
  },
  comments: [],
  errors: null,
  loading: true,
}

const failed = (state: ArticleState, { payload }: PayloadAction<Errors>) => ({
  ...state,
  loading: false,
  errors: payload,
})

const articleSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    loadArticle: {
      reducer(state) {
        state.loading = true
      },
      prepare(slug: string) {
        return { payload: slug }
      },
    },
    loadArticleSuccess: (state, { payload }: PayloadAction<ArticlePayload>) => {
      const { article, comments } = payload

      return {
        ...state,
        article,
        comments,
        loading: false,
        errors: null,
      }
    },
    loadArticleFailure: failed,
    addComment: {
      reducer(state) {
        state.loading = true
      },
      prepare(payload: CommentPayload) {
        return { payload }
      },
    },
    addCommentSuccess: (state, { payload }: PayloadAction<Comment>) => ({
      ...state,
      comments: [payload].concat(state.comments),
      loading: false,
      errors: null,
    }),
    addCommentFailure: failed,
    deleteComment: {
      reducer(state) {
        state.loading = true
      },
      prepare(payload: CommentPayload) {
        return { payload }
      },
    },
    deleteCommentSuccess: (
      state,
      { payload }: PayloadAction<CommentPayload>,
    ) => ({
      ...state,
      comments: state.comments.filter(
        (comment) => comment.id !== payload.commentId,
      ),
      loading: false,
      errors: null,
    }),
    deleteCommentFailure: failed,
  },
})

export const {
  loadArticle,
  loadArticleSuccess,
  loadArticleFailure,
  addComment,
  addCommentSuccess,
  addCommentFailure,
  deleteComment,
  deleteCommentSuccess,
  deleteCommentFailure,
} = articleSlice.actions
export const articleReducer = articleSlice.reducer
