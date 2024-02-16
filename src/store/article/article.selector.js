import { createSelector } from "@reduxjs/toolkit";

export const selectArticleReducer = (state) => state.articles.articleList;

export const selectArticleItem = createSelector(
  [selectArticleReducer],
  (articles) => articles[articles.length - 1]
)

export const selectArticleFilteredList = createSelector(
  [selectArticleReducer],
  (articles) => articles.slice(-5, -1).reverse()
)

export const selectReverseArticleList = createSelector(
  [selectArticleReducer],
  (articles) => articles.slice().reverse()
)
