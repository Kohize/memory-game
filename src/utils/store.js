import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './gameSlice';
import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    game: gameSlice,
    theme: themeSlice,
  },
});

export default store;
