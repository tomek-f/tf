import { useMemo } from 'react';

import { Code } from '../../../components/Code/Code';
import { Fieldset } from '../../../components/Fieldset/Fieldset';
import { useAppSelector } from '../../../hooks/store';

export const FullConfig = () => {
  const config = useAppSelector((state) => state.config);
  const configString = useMemo(() => {
    return JSON.stringify(config, null, 2);
  }, [config]);

  return (
    <Fieldset legend="Full Config" vertical={false}>
      <Code code={configString} />
    </Fieldset>
  );
};
