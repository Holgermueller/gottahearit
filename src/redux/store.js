import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quotes";

export default configureStore({
  reducer: {
    quotes: quoteReducer,
  },
});
