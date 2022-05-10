import { userReducer } from './reducers/user';
import { IUserState } from './reducers/user/type';
import { configureStore } from '@reduxjs/toolkit';
import { ICategoriesState } from './reducers/categories/type';
import { categoriesReducer } from './reducers/categories';

export interface IState {
  user: IUserState;
  categories: ICategoriesState;
}
export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
