import { userReducer } from './reducers/user';
import { IUserState } from './reducers/user/type';
import { configureStore } from '@reduxjs/toolkit';
import { ICategoriesState } from './reducers/categories/type';
import { categoriesReducer } from './reducers/categories';
import { ICategoryState } from './reducers/category/type';
import { categoryReducer } from './reducers/category';
import { IMentorState } from './reducers/mentor/type';
import { mentorReducer } from './reducers/mentor';
import { IBidsState } from './reducers/bids/type';
import { bidsReducer } from './reducers/bids';

export interface IState {
  user: IUserState;
  categories: ICategoriesState;
  category: ICategoryState;
  mentor: IMentorState;
  bids: IBidsState;
}
export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    category: categoryReducer,
    mentor: mentorReducer,
    bids: bidsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
