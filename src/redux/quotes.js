import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [
      {
        quoteText: "This is a quote",
        author: "Namegoeshere",
      },

      {
        quoteText: "This is a quote",
        author: "Namegoeshere",
      },

      {
        quoteText: "This is a quote",
        author: "Namegoeshere",
      },
    ],
  },
  reducers: {},
});

export default quoteSlice.reducer;
