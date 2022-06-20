import { Dispatch } from 'redux';
import { headersCors } from '../../api';
import {
  CategoryActions,
  CategoryFetchData,
  ICategoryFetched,
  ICategoryFetching,
  ICategoryFetchingError,
} from '../reducers/category/type';
import { ICV } from '../reducers/mentor/type';

export const categoryFetching = (): ICategoryFetching => ({
  type: CategoryActions.CATEGORY_FETCHING,
});
export const categoryFetchingError = (): ICategoryFetchingError => ({
  type: CategoryActions.CATEGORY_FETCHING_ERROR,
});
export const categoryFetched = (payload: ICV[]): ICategoryFetched => ({
  type: CategoryActions.CATEGORY_FETCHED,
  payload,
});

export const getCategory = (data: CategoryFetchData) => (dispatch: Dispatch<any>) => {
  dispatch(categoryFetching());
  fetch('/api/v1/cv/search_cv', {
    method: 'POST',
    headers: headersCors,
    body: JSON.stringify(data),
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(categoryFetched(data.cvs));
    })
    .catch((error: Error) => {
      dispatch(categoryFetchingError());
      console.log(error.message);
    });
};
