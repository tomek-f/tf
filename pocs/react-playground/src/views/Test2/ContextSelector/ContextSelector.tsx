import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';
import Counter from './Counter/Counter';
import Person from './Person/Person';

const ContextSelector = () => (
    <Fieldset legend="(use)ContextSelector">
        {Math.random()}
        <Counter />
        <Person />
    </Fieldset>
);

export default ContextSelector;
