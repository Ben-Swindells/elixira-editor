import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

type AtelierState = {
  elements: ElementType[];
  recipes: RecipeType[];
};

type ElementType = {
  id: string;
  name: string;
  currentScene: number;
};

type RecipeType = {
  id: string;
  name: string;
};

const initialState: AtelierState = {
  elements: [],
  recipes: [],
};

export const atelierSlice = createSlice({
  name: "atelier",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<ElementType>) => {},
    addRecipe: (state, action: PayloadAction<RecipeType>) => {},
  },
});

// Action creators are generated for each case reducer function
export const {} = atelierSlice.actions;

export default atelierSlice.reducer;
