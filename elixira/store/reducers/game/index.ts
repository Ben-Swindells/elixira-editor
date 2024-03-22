import { createSlice } from "@reduxjs/toolkit";

export interface GameState {}

const initialState: GameState = {};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = gameSlice.actions;

export default gameSlice.reducer;
