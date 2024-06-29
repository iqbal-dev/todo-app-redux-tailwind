import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./api/api";
import todoReducers from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    todos: todoReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
