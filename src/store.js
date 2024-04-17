import { configureStore } from '@reduxjs/toolkit'
import UsersSlice from './future/Users/UsersSlice'

export const store = configureStore({
  reducer: {
    Users: UsersSlice,
  },
})
