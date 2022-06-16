import { Dispatch } from 'redux';
import {
  ICategoriesFetched,
  ICategoriesFetching,
  ICategoriesFetchingError,
  CategoriesActions,
  CategoriesList,
} from '../reducers/categories/type';

export const categoriesFetching = (): ICategoriesFetching => ({
  type: CategoriesActions.CATEGORIES_FETCHING,
});
export const categoriesFetchingError = (): ICategoriesFetchingError => ({
  type: CategoriesActions.CATEGORIES_FETCHING_ERROR,
});
export const categoriesFetched = (payload: CategoriesList): ICategoriesFetched => ({
  type: CategoriesActions.CATEGORIES_FETCHED,
  payload,
});

export const getCategories = () => (dispatch: Dispatch<any>) => {
  dispatch(categoriesFetching());
  fetch('/api/v1/categories/get_categories')
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(categoriesFetched(data.categories));
    })
    .catch((error: Error) => {
      dispatch(categoriesFetchingError());
      console.log(error.message);
    });
};
