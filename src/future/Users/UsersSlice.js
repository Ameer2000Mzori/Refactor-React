import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userList: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const name = action.payload
      state.userList = [
        ...state.userList,
        {
          name,
        },
      ]

      console.log(state.userList)
    },
  },
})

export const { addUser } = userSlice.actions

export default userSlice.reducer
