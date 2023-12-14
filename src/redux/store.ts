import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import drawerReducer from "./features/drawerSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    drawerReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
