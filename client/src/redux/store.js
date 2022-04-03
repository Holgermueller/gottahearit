import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./music";

export default configureStore({
  reducer: {
    music: musicReducer,
  },
});
