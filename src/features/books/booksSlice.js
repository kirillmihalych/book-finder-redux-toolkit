import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  books: [],
  status: 'idle',
  error: null,
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (url) => {
  const response = await axios.get(url)
  console.log(response.data)
  return response.data
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.books = action.payload.items
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export default booksSlice.reducer
