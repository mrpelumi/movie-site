import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  quoteList : []
}

export const quoteSlice = createSlice({
  name:'quotes',
  initialState: INITIAL_STATE,
  reducers: {
    setQuotes(state, action){
      state.quoteList = action.payload;
    }
  }
})

export const {setQuotes} = quoteSlice.actions;

export const quoteReducer = quoteSlice.reducer;