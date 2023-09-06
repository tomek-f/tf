import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import Button from 'REACT_PG/components/Button/Button';
import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';

interface BearState {
    bears: number;
    increase: (by: number) => void;
    clear: () => void;
}

const initilState = {
    bears: 0,
};

const useBearStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                ...initilState,
                increase: (by) =>
                    set((state) => ({ bears: state.bears + by }), false, 'bear/increase'),
                clear: () => set((state) => ({ ...state, ...initilState }), true),
            }),
            { name: 'zustand-storage-example' },
        ),
    ),
);

const BearCounter = () => {
    const bears = useBearStore((state) => state.bears);

    return (
        <Fieldset legend="BearCounter">
            {Math.random()}
            <h1>{bears} around here ...</h1>
        </Fieldset>
    );
};

const Controls = () => {
    const increasePopulation = useBearStore((state) => state.increase);
    const clear = useBearStore((state) => state.clear);

    return (
        <Fieldset legend="Controls">
            {Math.random()}
            <div className="flex flex-wrap items-center gap-2 mt-4">
                <Button onClick={() => increasePopulation(1)}>one up</Button>
                <Button onClick={() => clear()}>clear</Button>
            </div>
        </Fieldset>
    );
};

const Zustand = () => (
    <Fieldset legend="Zustand">
        {Math.random()}
        <BearCounter />
        <Controls />
    </Fieldset>
);

export default Zustand;
