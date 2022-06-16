import { LoadingStatus } from '../../../utils/constants';
import { ICV } from '../mentor/type';

export interface ICategoryState {
  loadingStatus: LoadingStatus;
  cvs: ICV[];
}

export enum CategoryActions {
  CATEGORY_FETCHING = 'CATEGORY_FETCHING',
  CATEGORY_FETCHED = 'CATEGORY_FETCHED',
  CATEGORY_FETCHING_ERROR = 'CATEGORY_FETCHING_ERROR',
}

export type ICategoryAction = ICategoryFetching | ICategoryFetched | ICategoryFetchingError;

export interface ICategoryFetching {
  type: CategoryActions.CATEGORY_FETCHING;
}

export interface ICategoryFetched {
  type: CategoryActions.CATEGORY_FETCHED;
  payload: ICV[];
}

export interface ICategoryFetchingError {
  type: CategoryActions.CATEGORY_FETCHING_ERROR;
}

export interface CategoryFetchData {
  filter?: { categories: string[] };
  search_text?: string;
}
