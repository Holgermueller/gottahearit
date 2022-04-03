import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  music: [
    { id: "x", artist: "MCR", title: "WTTBP", type: "albume" },
    {
      id: "y",
      artist: "Moby",
      title: "Play",
      type: "album",
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
