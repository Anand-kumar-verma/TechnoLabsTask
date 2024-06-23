import { configureStore } from '@reduxjs/toolkit'
import allreducersFromThemeSlice from './slices/ThemeSlice'
export const store = configureStore({
  reducer: {
    counter: allreducersFromThemeSlice,
  },
})