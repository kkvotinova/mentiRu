import { Reducer } from 'redux';
import { CategoriesActions, ICategoriesAction, ICategoriesState } from './type';

const initialState: ICategoriesState = {
  loadingStatus: 'loading',
  categoriesList: [],
};

export const categoriesReducer: Reducer = (
  state = initialState,
  action: ICategoriesAction,
): ICategoriesState => {
  switch (action.type) {
    case CategoriesActions.CATEGORIES_FETCHING:
      return {
        ...state,
        loadingStatus: 'loading',
      };
    case CategoriesActions.CATEGORIES_FETCHED:
      return {
        loadingStatus: 'idle',
        categoriesList: action.payload,
      };
    case CategoriesActions.CATEGORIES_FETCHING_ERROR:
      return {
        ...state,
        loadingStatus: 'error',
      };
    default:
      return state;
  }
};
