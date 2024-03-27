import { combineReducers, configureStore } from "@reduxjs/toolkit";
import atelierReducer from "./reducers/game/atelier";

export const store = configureStore({
  reducer: {
    game: combineReducers({
      atelier: atelierReducer,
    }),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
