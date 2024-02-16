import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  reviewList: [] 
}

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: INITIAL_STATE,
  reducers: {
    setReviews(state, action) {
      state.reviewList = action.payload;
    }
  }
})

export const {setReviews} = reviewSlice.actions;

export const reviewReducer = reviewSlice.reducer;