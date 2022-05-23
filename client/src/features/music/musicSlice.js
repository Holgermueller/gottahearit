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

export const deleteMusic = createAsyncThunk(
  "goals/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await musicService.deleteMusic(id, token);
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
      })
      .addCase(getMusic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMusic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.music = action.payload;
      })
      .addCase(getMusic.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteMusic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMusic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.music = state.music.filter(
          (music) => music._id !== action.payload.id
        );
      })
      .addCase(deleteMusic.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = musicSlice.actions;
export default musicSlice.reducer;
