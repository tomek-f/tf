import Button from 'REACT_PG/components/Button/Button';
import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';
import { useStoreActions, useStoreData } from 'REACT_PG/hooks/store';
import counterActions from 'REACT_PG/models/counter/counter-actions';
import {
    decrement,
    increment,
    incrementAsync,
    incrementByAmount,
} from 'REACT_PG/models/counter/counter-slice';

const Rtk = () => {
    const count = useStoreData(({ counter }) => counter.value);
    const actions = useStoreActions();

    return (
        <Fieldset legend="RTK">
            {Math.random()}
            <div>count using useAppSelector {count}</div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button onClick={() => actions(decrement())}>decrement</Button>
                <Button onClick={() => actions(increment())}>increment</Button>
                <Button onClick={() => actions(incrementByAmount(5))}>
                    incrementByAmount + 5
                </Button>
                <Button onClick={() => actions(incrementAsync(10))}>
                    incrementAsync + 10
                </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button onClick={counterActions.decrement}>
                    counterActions.decrement
                </Button>
                <Button onClick={counterActions.increment}>
                    counterActions.increment
                </Button>
                <Button onClick={() => counterActions.incrementByAmount(5)}>
                    counterActions.incrementByAmount + 5
                </Button>
                <Button onClick={() => counterActions.incrementAsync(10)}>
                    counterActions.incrementAsync + 10
                </Button>
            </div>
        </Fieldset>
    );
};

// false positive for RTK
export default Rtk;
