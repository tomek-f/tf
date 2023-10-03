import { useContextSelector } from 'use-context-selector';

import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';
import Input from 'REACT_PG/components/Input/Input';
import { ContextState } from 'REACT_PG/contextState';

const Person = () => {
    const person = useContextSelector(ContextState, (v) => v[0].person);
    const dispatch = useContextSelector(ContextState, (v) => v[1]);

    return (
        <Fieldset legend="Person">
            {Math.random()}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                First Name:
                <Input
                    onChange={(event) => {
                        const firstName = event.target.value;

                        dispatch({ firstName, type: 'setFirstName' });
                    }}
                    value={person.firstName}
                />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
                Last Name:
                <Input
                    onChange={(event) => {
                        const lastName = event.target.value;

                        dispatch({ lastName, type: 'setLastName' });
                    }}
                    value={person.lastName}
                />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
                Age:
                <Input
                    onChange={(event) => {
                        const age = Number(event.target.value) || 0;

                        dispatch({ age, type: 'setAge' });
                    }}
                    value={person.age}
                />
            </div>
        </Fieldset>
    );
};

export default Person;
