import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import controlsPlayerReducer from "./controlsPlayer";
import { videosApi } from "./videosList";

export const store = configureStore({
  reducer: {
    controlsPlayer: controlsPlayerReducer,
    [videosApi.reducerPath]: videosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videosApi.middleware)
});

setupListeners(store.dispatch);
