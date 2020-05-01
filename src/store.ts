import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { rootReducer } from 'slices'
import { rootSaga } from 'sagas'

const devMode = process.env.NODE_ENV !== 'production'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })]

devMode && middleware.push(logger)

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: devMode,
})

sagaMiddleware.run(rootSaga)
