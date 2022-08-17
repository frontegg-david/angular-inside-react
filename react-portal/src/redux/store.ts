import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import appsReducer from './apps'

const store = configureStore({
  reducer: {
    apps: appsReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
