import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: [] }

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value.push(action.payload)
    },
    decrement: (state, action) => {
      state.value = action.payload
    },
    editable: (state, action) => {
      state.value[action.payload.item_index] = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, editable } = bookSlice.actions

export default bookSlice.reducer