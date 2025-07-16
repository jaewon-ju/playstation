import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGames as fetchGamesApi } from "@/lib/api.ts/game";
import { fetchGenres as fetchGenresApi } from "@/lib/api.ts/genre";
import { Game, Genre } from "@/types";

interface GameState {
  games: Game[];
  genres: Genre[];
  gameLoading: boolean;
  genreLoading: boolean;
}

export const fetchGames = createAsyncThunk(
  "game/fetchGames",
  async ({ lastId, size }: { lastId: string | null; size: number }) => {
    const res = await fetchGamesApi(lastId, size);
    return res;
  }
);

export const fetchGenres = createAsyncThunk("genre/fetchGenres", async () => {
  const res = await fetchGenresApi();
  return res;
});

const gameSlice = createSlice({
  name: "game",
  initialState: {
    games: [],
    genres: [],
    gameLoading: true,
    genreLoading: true,
  } as GameState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.gameLoading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.gameLoading = false;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.gameLoading = false;
      })
      .addCase(fetchGenres.pending, (state) => {
        state.genreLoading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.genreLoading = false;
      });
  },
});

export default gameSlice.reducer;
