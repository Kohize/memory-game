const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export { store };
