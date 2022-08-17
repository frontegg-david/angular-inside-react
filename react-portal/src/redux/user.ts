import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface UserState {
  isAuthenticated: boolean;
  id?: string;
  username?: string;
  profile?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }
}

// Define the initial state using that type
const initialState: UserState = {
  isAuthenticated: false,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.id = 'my-user-id';
      state.profile = {
        firstName: 'David',
        lastName: 'Antoon',
        phoneNumber: '0547551379'
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.id = undefined;
      state.profile = undefined;
    },
  },
})

export const { login, logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
