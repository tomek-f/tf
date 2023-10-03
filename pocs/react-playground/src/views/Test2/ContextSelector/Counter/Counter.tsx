import { useContextSelector } from 'use-context-selector';

import Button from 'REACT_PG/components/Button/Button';
import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';
import { ContextState } from 'REACT_PG/contextState';

const Counter = () => {
    const count = useContextSelector(ContextState, (v) => v[0].count);
    const dispatch = useContextSelector(ContextState, (v) => v[1]);

    return (
        <Fieldset legend="Counter">
            {Math.random()}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <span>Count: {count}</span>
                <Button onClick={() => dispatch({ type: 'increment' })}>
                    +1
                </Button>
                <Button onClick={() => dispatch({ type: 'decrement' })}>
                    -1
                </Button>
            </div>
        </Fieldset>
    );
};

export default Counter;
