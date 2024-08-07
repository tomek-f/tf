import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from 'REACT_PG/store';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    // eslint-disable-next-line sort-keys
    initialState,

    reducers: {
        decrement: (state) => {
            state.value -= 1;
        },
        increment: (state) => {
            state.value += 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
