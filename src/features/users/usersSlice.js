import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// const initialState = [
//   { id: '0', name: 'William Shakespeare' },
//   { id: '1', name: 'Agatha Christie' },
//   { id: '2', name: 'Barbara Cartland' },
// ];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const res = await axios.get(USERS_URL);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
