import { configureStore } from '@reduxjs/toolkit';

import { configReducer } from '../models/config/configSlice';
import { userReducer } from '../models/user/userSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
