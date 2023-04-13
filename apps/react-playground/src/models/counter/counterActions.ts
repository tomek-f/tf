import { store } from 'REACT_PG/store';

import { decrement, increment, incrementAsync, incrementByAmount } from './counterSlice';

const counterActions = {
  increment: () => store.dispatch(increment()),
  decrement: () => store.dispatch(decrement()),
  incrementByAmount: (amount: number) => store.dispatch(incrementByAmount(amount)),
  incrementAsync: (amount: number) => store.dispatch(incrementAsync(amount)),
};

export default counterActions;
