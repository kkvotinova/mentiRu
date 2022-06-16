import { Reducer } from 'redux';
import { CategoryActions, ICategoryAction, ICategoryState } from './type';

const initialState: ICategoryState = {
  loadingStatus: 'loading',
  cvs: [],
};

export const categoryReducer: Reducer = (
  state = initialState,
  action: ICategoryAction,
): ICategoryState => {
  switch (action.type) {
    case CategoryActions.CATEGORY_FETCHING:
      return {
        ...state,
        loadingStatus: 'loading',
      };
    case CategoryActions.CATEGORY_FETCHED:
      return {
        loadingStatus: 'idle',
        cvs: action.payload,
      };
    case CategoryActions.CATEGORY_FETCHING_ERROR:
      return {
        ...state,
        loadingStatus: 'error',
      };
    default:
      return state;
  }
};
