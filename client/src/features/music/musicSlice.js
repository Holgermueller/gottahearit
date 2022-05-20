import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  music: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = musicSlice.actions;
export default musicSlice.reducer;
