import { store } from 'REACT_PG/store';
import {
    decrement,
    increment,
    incrementAsync,
    incrementByAmount,
} from './counter-slice';

const counterActions = {
    decrement: () => store.dispatch(decrement()),
    increment: () => store.dispatch(increment()),
    incrementAsync: (amount: number) => store.dispatch(incrementAsync(amount)),
    incrementByAmount: (amount: number) =>
        store.dispatch(incrementByAmount(amount)),
};

export default counterActions;
