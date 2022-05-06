import { Dispatch } from "redux";
import { API_URL } from "../../api";
import { ICategoriesFetched, ICategoriesFetching, ICategories, ICategoriesFetchingError, CategoriesActions } from "../reducers/categories/type";

export const categoriesFetching  = (): ICategoriesFetching => ({type: CategoriesActions.CATEGORIES_FETCHING})
export const categoriesFetchingError = (): ICategoriesFetchingError => ({type: CategoriesActions.CATEGORIES_FETCHING_ERROR})
export const categoriesFetched = (payload: ICategories[]): ICategoriesFetched => ({
  type: CategoriesActions.CATEGORIES_FETCHED,
  payload,
})

export const getCategories = () => (dispatch: Dispatch<any>) => {
  dispatch(categoriesFetching());
  fetch(`${API_URL}/categories/get_categories`)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(data => {
      const payload: ICategories[] = data.categories.map((item: any) => ({
        name: item
      }));
      dispatch(categoriesFetched(payload));
    })
    .catch((error: Error) => {
      dispatch(categoriesFetchingError());
      console.log(error.message);
    })
}
