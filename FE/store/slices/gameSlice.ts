import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "expo-constants";

const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl;

export const fetchGames = createAsyncThunk(
  "game/fetchGames",
  async (lastId: string | null) => {
    const res = await axios.get(
      `${API_BASE_URL}/games?lastId=${lastId}&size=20`
    );
    return res.data;
  }
);

export const fetchGenres = createAsyncThunk("genre/fetchGenres", async () => {
  const res = await axios.get(`${API_BASE_URL}/genres`);
  return res.data;
});

const gameSlice = createSlice({
  name: "game",
  initialState: {
    games: [],
    categories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default gameSlice.reducer;
