import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from 'react'

export interface ElementsState {
  elements: ElementType[];
}

const initialState: ElementsState = {
  elements: [],
};

type ElementType = {
  id: string,
  name: string,
  currentScene: number,
  parentElement: React.ReactNode,
}

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<ElementType>) => {

    },
  },
});

// Action creators are generated for each case reducer function
export const {} = elementsSlice.actions;

export default elementsSlice.reducer;
