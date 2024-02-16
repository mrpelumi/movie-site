import { createSelector } from "@reduxjs/toolkit";
import { sample } from "lodash";

export const selectQuoteReducer = (state) => state.quotes.quoteList;

export const selectQuoteItem = createSelector(
  [selectQuoteReducer],
  (quotes) => sample(quotes)
)
