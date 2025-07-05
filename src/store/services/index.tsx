import { configureStore } from "@reduxjs/toolkit";
import { cardApi } from "./getCardDetails";

export const store = configureStore({
  reducer: {
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardApi.middleware),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
