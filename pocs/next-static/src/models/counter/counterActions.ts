import { counterSlice } from '.';
import { store, type AppDispatch } from '../../store';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(counterSlice.actions.incrementByAmount(amount));
  }, 3000);
};

const counterActions = {
  increment: () => store.dispatch(counterSlice.actions.increment()),
  decrement: () => store.dispatch(counterSlice.actions.decrement()),
  incrementByAmount: (amount: number) =>
    store.dispatch(counterSlice.actions.incrementByAmount(amount)),
  incrementAsync: (amount: number) => store.dispatch(incrementAsync(amount)),
};

export default counterActions;
