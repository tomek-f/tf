import { useState, type FormEventHandler } from 'react';
import { isEqual } from 'lodash';

import { Button } from '../../components/Button/Button';
import { Code } from '../../components/Code/Code';
import { Fieldset } from '../../components/Fieldset/Fieldset';
import { HtmlContent } from '../../components/HtmlContent/HtmlContent';
import { HtmlHead } from '../../components/HtmlHead/HtmlHead';
import { InputAlphanumericOptimized } from '../../components/InputAlphanumericOptimized/InputAlphanumericOptimized';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setValues } from '../../models/config/configSlice';
import { analyticsService } from '../../services/analyticsService';
import { FullConfig } from '../components/FullConfig/FullConfig';

export const FormValues = () => {
  const dispatch = useAppDispatch();
  const dataGlobal = useAppSelector((state) => state.config.values);
  const [dataLocal, setDataLocal] = useState(dataGlobal);

  const handleSave = () => {
    dispatch(setValues(dataLocal));
  };
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDataLocal({ ...dataLocal, [name]: value });
    analyticsService.track('onChange', { name, value });
  };
  const handleChangeBoolean: FormEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked, name } = event.target;

    setDataLocal((prevData) => ({ ...prevData, [name]: checked }));
    analyticsService.track('onChange', { name, value: checked });
  };

  return (
    <>
      <HtmlHead title="Form Values" />

      <HtmlContent>
        <h2>Form Values</h2>
      </HtmlContent>
      <Fieldset legend="Controls">
        <label htmlFor="value1">Value 1</label>
        <InputAlphanumericOptimized
          id="value1"
          name="value1"
          onInput={handleChangeText}
          value={dataLocal.value1}
        />
        <label htmlFor="value2">Value 2</label>
        <InputAlphanumericOptimized
          id="value2"
          name="value2"
          onInput={handleChangeText}
          value={dataLocal.value2}
        />
        <label htmlFor="active">Active</label>
        <InputCheckbox
          checked={dataLocal.active}
          id="active"
          name="active"
          onChange={handleChangeBoolean}
        />
        <Button disabled={isEqual(dataGlobal, dataLocal)} onClick={handleSave}>
          Save
        </Button>
      </Fieldset>
      <Fieldset legend="Values" vertical={false}>
        <Code code={JSON.stringify(dataLocal, null, 2)} />
      </Fieldset>
      <FullConfig />
    </>
  );
};
