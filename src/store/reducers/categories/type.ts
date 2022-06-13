export type initialCategories = 'backend' | 'frontend' | 'android' | 'ios' | 'devops' | 'design';

export type CategoriesList = Array<initialCategories | string>;

export interface ICategoriesState {
  loadingStatus: 'loading' | 'idle' | 'error';
  categoriesList: CategoriesList;
}

export enum CategoriesActions {
  CATEGORIES_FETCHING = 'CATEGORIES_FETCHING',
  CATEGORIES_FETCHED = 'CATEGORIES_FETCHED',
  CATEGORIES_FETCHING_ERROR = 'CATEGORIES_FETCHING_ERROR',
}

export type ICategoriesAction = ICategoriesFetching | ICategoriesFetched | ICategoriesFetchingError;

export interface ICategoriesFetching {
  type: CategoriesActions.CATEGORIES_FETCHING;
}

export interface ICategoriesFetched {
  type: CategoriesActions.CATEGORIES_FETCHED;
  payload: CategoriesList;
}

export interface ICategoriesFetchingError {
  type: CategoriesActions.CATEGORIES_FETCHING_ERROR;
}
