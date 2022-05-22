import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import musicService from "./musicService";

const initialState = {
  music: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addMusic = createAsyncThunk(
  "music/add",
  async (musicData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await musicService.addMusic(musicData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getMusic = createAsyncThunk(
  "music/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await musicService.getMusic(token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMusic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMusic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.music.push(action.payload);
      })
      .addCase(addMusic.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = musicSlice.actions;
export default musicSlice.reducer;
