import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from 'react-redux';

import type { AppDispatch, RootState } from 'REACT_PG/store';

export const useStoreActions = () => useDispatch<AppDispatch>();
export const useStoreData: TypedUseSelectorHook<RootState> = useSelector;
