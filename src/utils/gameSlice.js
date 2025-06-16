import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  difficulty: 'easy',
  gameArray: [],
  selectedId: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameArray: (state, action) => {
      state.gameArray = action.payload;
    },
    setSelectedId: (state, action) => {
      state.selectedId.push(action.payload);
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setGameArray, setSelectedId, setDifficulty } = gameSlice.actions;

export default gameSlice.reducer;
