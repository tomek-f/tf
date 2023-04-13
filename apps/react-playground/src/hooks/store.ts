import type { AppDispatch, RootState } from 'REACT_PG/store';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

export const useStoreActions = () => useDispatch<AppDispatch>();
export const useStoreData: TypedUseSelectorHook<RootState> = useSelector;
