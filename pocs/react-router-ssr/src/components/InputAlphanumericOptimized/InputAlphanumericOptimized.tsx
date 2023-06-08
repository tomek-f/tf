import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import {
  InputAlphanumeric,
  type InputAlphanumericProps,
} from '../InputAlphanumeric/InputAlphanumeric';

const saveDebounceDelay = 500;

export const InputAlphanumericOptimized = ({
  onInput,
  value: initValue,
  ...restProps
}: InputAlphanumericProps) => {
  const [value, setValue] = useState(initValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onInputDebounce = useCallback(
    debounce(onInput as React.ChangeEventHandler<HTMLInputElement>, saveDebounceDelay),
    [onInput],
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;

    setValue(newValue);
    onInputDebounce(event);
  };

  // updates from store, eg. fetching data from the server
  useEffect(
    () => {
      if (value !== initValue) {
        setValue(initValue);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initValue],
  );

  return <InputAlphanumeric onInput={handleChange} value={value} {...restProps} />;
};
