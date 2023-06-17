import { counterSlice, incrementAsync } from '.';
import { store } from '../../store';

const counterActions = {
  increment: () => store.dispatch(counterSlice.actions.increment()),
  decrement: () => store.dispatch(counterSlice.actions.decrement()),
  incrementByAmount: (amount: number) =>
    store.dispatch(counterSlice.actions.incrementByAmount(amount)),
  incrementAsync: (amount: number) => store.dispatch(incrementAsync(amount)),
};

export default counterActions;
