import { useEffect, useState, type FormEventHandler } from 'react';
import { isEqual } from 'lodash';

import { Button } from '../../components/Button/Button';
import { Code } from '../../components/Code/Code';
import { Fieldset } from '../../components/Fieldset/Fieldset';
import { HtmlContent } from '../../components/HtmlContent/HtmlContent';
import { HtmlHead } from '../../components/HtmlHead/HtmlHead';
import { InputAlphanumericOptimized } from '../../components/InputAlphanumericOptimized/InputAlphanumericOptimized';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setOptions } from '../../models/config/configSlice';
import { analyticsService } from '../../services/analyticsService';
import { FullConfig } from '../components/FullConfig/FullConfig';
import { useData } from './useData';

export const FormOptions = () => {
  const dispatch = useAppDispatch();
  const dataGlobal = useAppSelector((state) => state.config.options);
  const [dataLocal, setDataLocal] = useState(dataGlobal);
  // yup, always loading data from the server on mount
  const { data: dataRemote, error: dataRemoteError, loading: dataRemoteLoading } = useData();

  useEffect(() => {
    if (dataRemote) {
      const { title, brand } = dataRemote;

      setDataLocal((prevData) => ({ ...prevData, brand, title }));
    }
  }, [dataRemote]);

  const handleSave = () => {
    dispatch(setOptions(dataLocal));
  };
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDataLocal((prevData) => ({ ...prevData, [name]: value }));
    analyticsService.track('onChange', { name, value });
  };
  const handleChangeBoolean: FormEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked, name } = event.target;

    setDataLocal((prevData) => ({ ...prevData, [name]: checked }));
    analyticsService.track('onChange', { name, value: checked });
  };

  if (dataRemoteLoading) {
    return (
      <HtmlContent>
        <HtmlHead title="Form Options Loading" />

        <h2>Form Options Loading</h2>
        <p>Loading…</p>
      </HtmlContent>
    );
  }

  if (dataRemoteError) {
    return (
      <HtmlContent>
        <HtmlHead title="Form Options Error" />

        <h2>Form Options Error</h2>
        <p>{dataRemoteError}</p>
      </HtmlContent>
    );
  }

  return (
    <>
      <HtmlHead title="Form Options" />

      <HtmlContent>
        <h2>Form Options</h2>
      </HtmlContent>
      <Fieldset legend="Controls">
        <label htmlFor="brand">Brand</label>
        <InputAlphanumericOptimized
          id="brand"
          name="brand"
          onInput={handleChangeText}
          value={dataLocal.brand}
        />
        <label htmlFor="title">Title</label>
        <InputAlphanumericOptimized
          id="title"
          name="title"
          onInput={handleChangeText}
          value={dataLocal.title}
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
      <Fieldset legend="Options" vertical={false}>
        <Code code={JSON.stringify(dataLocal, null, 2)} />
      </Fieldset>
      <FullConfig />
    </>
  );
};
