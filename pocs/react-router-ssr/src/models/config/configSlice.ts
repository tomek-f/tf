import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ConfigState {
  productID: number;
  meta: {
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    description: string;
    category: string;
    thumbnail: string;
    active: boolean;
  };
  options: {
    brand: string;
    title: string;
    active: boolean;
  };
  values: {
    value1: string;
    value2: string;
    active: boolean;
  };
}

export const configInitialState: ConfigState = {
  productID: 1, // DEV_RECRIUTMENT hardcoded data
  meta: {
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    description: '',
    category: '',
    thumbnail: '',
    active: false,
  },
  options: {
    brand: '',
    title: '',
    active: false,
  },
  values: {
    value1: '',
    value2: '',
    active: false,
  },
};

export const configSlice = createSlice({
  name: 'config',
  initialState: configInitialState,
  reducers: {
    setMeta: (state, action: PayloadAction<ConfigState['meta']>) => {
      state.meta = action.payload;
    },
    setOptions: (state, action: PayloadAction<ConfigState['options']>) => {
      state.options = action.payload;
    },
    setValues: (state, action: PayloadAction<ConfigState['values']>) => {
      state.values = action.payload;
    },
  },
});

export const { setMeta, setOptions, setValues } = configSlice.actions;

export const configReducer = configSlice.reducer;

export const configActions = configSlice.actions;
