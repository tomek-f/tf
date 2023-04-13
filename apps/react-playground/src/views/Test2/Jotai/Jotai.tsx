import Fieldset from 'REACT_PG/components/Fieldset/Fieldset';

import InputJotai from './InputJotai/InputJotai';
import Uppercase from './Uppercase/Uppercase';

const Jotai = () => {
  return (
    <Fieldset legend="Jotai">
      {Math.random()}
      <InputJotai />
      <Uppercase />
    </Fieldset>
  );
};

export default Jotai;
