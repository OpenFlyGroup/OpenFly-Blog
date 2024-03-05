import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import { postSlice } from './post/post.slice'
import { userSlice } from './user/user.slice'
import Storage from './createNoopStorage'

const persistConfig = {
  key: 'local',
  storage: Storage,
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export const persistor = persistStore(makeStore())
export type TypeRootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
