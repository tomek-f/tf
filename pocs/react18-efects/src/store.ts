import { init, type RematchDispatch, type RematchRootState } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loading, { type ExtraModelsFromLoading } from '@rematch/loading';
import persist from '@rematch/persist';
import updated, { type ExtraModelsFromUpdated } from '@rematch/updated';
import storage from 'redux-persist/lib/storage';

import { models, type RootModel } from './models';

type FullModel = ExtraModelsFromLoading<RootModel> & ExtraModelsFromUpdated<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [
    updated({ blacklist: ['loading'] }),
    loading({ blacklist: ['updated'] }),
    persist({
      key: 'persist-storage',
      storage,
      whitelist: ['settings'],
    }),
    immerPlugin(),
  ],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
