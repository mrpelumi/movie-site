import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  articleList: []
}

export const articleSlice = createSlice({
  name:'articles',
  initialState: INITIAL_STATE,
  reducers: {
    setArticlesList(state, action){
      state.articleList = action.payload;
    }
  }
})

export const {setArticlesList} = articleSlice.actions;

export const articleReducer = articleSlice.reducer;