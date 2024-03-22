import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/game";

export const store = configureStore({
  reducer: {
    game: combineReducers({}),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
