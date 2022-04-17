import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  music: [
    { id: "x", artist: "MCR", title: "WTTBP", type: "album", rating: "pass" },
    {
      id: "y",
      artist: "Moby",
      title: "Play",
      type: "album",
      rating: "unheard",
    },
    {
      id: "z",
      artist: "Osees",
      title: "Protean Threat",
      type: "album",
      rating: "Buy it",
    },
  ],
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addMusic: (state) => {},

    editMusic: (state) => {},
  },
});

export const { addMusic, editMusic } = musicSlice.actions;

export default musicSlice.reducer;
