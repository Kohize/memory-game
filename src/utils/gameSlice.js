import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  difficulty: 'easy',
  gameArray: [],
  cardDetails: [],
  selectedId: [],
  bestScore: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameArray: (state, action) => {
      state.gameArray = action.payload;
    },
    setCardDetails: (state, action) => {
      state.cardDetails = action.payload;
    },
    setSelectedId: (state, action) => {
      state.selectedId.push(action.payload);
    },
    clearSelectedId: (state) => {
      state.selectedId = [];
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setBestScore: (state, action) => {
      if (action.payload > state.bestScore) {
        state.bestScore = action.payload;
      }
    },
  },
});

export const {
  setGameArray,
  setSelectedId,
  setDifficulty,
  clearSelectedId,
  setBestScore,
  setCardDetails,
} = gameSlice.actions;

export default gameSlice.reducer;
