import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  id: string;
}

export const configInitialState: UserState = {
  id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // DEV_RECRIUTMENT hardcoded data
  name: 'Dave', // DEV_RECRIUTMENT hardcoded data
};

export const userSlice = createSlice({
  name: 'user',
  initialState: configInitialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setId, setName } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;
