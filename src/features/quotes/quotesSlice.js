import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quotes: "Quotes Go Here",
  },
  reducers: {},
});

export default quoteSlice.reducer;
