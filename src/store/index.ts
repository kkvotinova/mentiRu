import { userReducer } from './reducers/user';
import { IUserState } from './reducers/user/type';
import { configureStore } from '@reduxjs/toolkit';
import { ICategoriesState } from './reducers/categories/type';
import { categoriesReducer } from './reducers/categories';
import { ICategoryState } from './reducers/category/type';
import { categoryReducer } from './reducers/category';

export interface IState {
  user: IUserState;
  categories: ICategoriesState;
  category: ICategoryState;
}
export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    category: categoryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
