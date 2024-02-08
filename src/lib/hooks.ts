import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { ApplicationState, ApplicationDispatch } from './store';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch: () => ApplicationDispatch = useDispatch;
