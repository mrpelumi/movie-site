import { createSelector } from "@reduxjs/toolkit";

const selectReviewReducer = (state) => state.reviews.reviewList;

export const selectReviewItem = createSelector(
  [selectReviewReducer],
  (review) => review[review.length - 1]
)

export const selectReviewFilteredList = createSelector(
  [selectReviewReducer],
  (review) => review.slice(-7, -1).reverse()
)

export const selectReverseReviewList = createSelector(
  (selectReviewReducer),
  (review) => review.slice().reverse()
)