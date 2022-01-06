import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: "quotes go here",
  },
  reducers: {},
});

export default quoteSlice.reducer;
