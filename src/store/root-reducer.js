import { combineReducers } from "@reduxjs/toolkit";

import { reviewReducer } from "./review/review.reducer";
import {articleReducer} from "./article/article.reducer";
import { quoteReducer } from "./quote/quote.reducer";

export const rootReducer = combineReducers({
  reviews: reviewReducer,
  articles:articleReducer,
  quotes:quoteReducer
});