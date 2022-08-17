import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface MiniApp {
  id: string;
  logo: OverridableComponent<any>;
  name: string;
}

interface AppsState {
  loading: boolean;
  error?: string;
  apps: MiniApp[];
}

// Define the initial state using that type
const initialState: AppsState = {
  loading: false,
  apps: [ {
    id: 'my-app-1',
    logo: AddModeratorIcon,
    name: 'My App'
  } ]
}

export const appsSlice = createSlice({
  name: 'apps',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const selectApps = (state: RootState) => state.apps

export default appsSlice.reducer
