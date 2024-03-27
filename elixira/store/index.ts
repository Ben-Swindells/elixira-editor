import { combineReducers, configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./reducers/game/element";

export const store = configureStore({
  reducer: {
    game: combineReducers({
      elementsReducer
    }),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
