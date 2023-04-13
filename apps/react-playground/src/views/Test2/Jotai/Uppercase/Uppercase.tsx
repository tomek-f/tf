import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';
import { uppercaseAtom } from 'REACT_PG/jotai';
import { useAtom } from 'jotai';

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);

  return (
    <Fieldset legend="Uppercase">
      {Math.random()}
      <div>Uppercase: {uppercase}</div>
    </Fieldset>
  );
};

export default Uppercase;
