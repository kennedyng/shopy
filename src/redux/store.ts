import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import drawerReducer from "./features/drawerSlice";
import listReducer from "./features/listSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    drawerReducer,
    listReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
