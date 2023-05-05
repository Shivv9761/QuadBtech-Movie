import { configureStore } from '@reduxjs/toolkit'
import {  MovieSlice } from './Slices/MovieSlice'

export const store = configureStore({
  reducer: {
    movie:MovieSlice.reducer
  },
})