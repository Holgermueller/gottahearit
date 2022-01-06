import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [
      {
        id: "1",
        quoteText:
          "When you start to doubt yourself the real qorld will eat you alive.",
        speaker: "Henry Rollins",
      },
      {
        id: "2",
        quoteText:
          "Strength is the product of struggle, you must do what others don't to achieve what others won't",
        speaker: "Henry Rollins",
      },
      {
        id: "3",
        quoteText: "You need a little bit of insanity to do great things.",
        speaker: "Henry Rollins",
      },
      {
        id: "4",
        quoteText:
          "No such thing as spare time, no such thing as free time, no such thing as down time. All you got is life time. Go.",
        speaker: "Henry Rollins",
      },
      {
        id: "5",
        quoteText:
          "Do not waste time with normal people. They are a plague and will only slow you down.",
        speaker: "Henry Rollins",
      },
      {
        id: "6",
        quoteText:
          "Being an artist is dragging your innermost feelings out, giving a piece of yourself, no matter inwhich art form, in which medium.",
        speaker: "Henry Rollins",
      },
      {
        id: "7",
        quoteText: "It's sad when someone you know becomes someone you knew.",
        speaker: "Henry Rollins",
      },
      {
        id: "8",
        quoteText:
          "I believe that one defines oneself by reinventionn. To not be like your parents. To not be like your friends. To be yourself. To cut yourself out of stone.",
        speaker: "Henry Rollins",
      },
    ],

    quoteToDisplay: [],
  },

  reducers: {
    displayQuoteOnLoad: (state) => {
      state.quoteToDisplay =
        state.quotes[Math.floor(Math.random() * state.quotes.length)];
    },

    getRandomQuote: (state) => {
      state.quoteToDisplay =
        state.quotes[Math.floor(Math.random() * state.quotes.length)];

      console.log(state.quoteToDisplay);
    },
  },
});

export const { displayQuoteOnLoad, getRandomQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
