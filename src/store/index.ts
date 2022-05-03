import { userReducer } from './reducers/user';
import { IUserState } from './reducers/user/type';
import { configureStore } from '@reduxjs/toolkit';

export interface IState {
  user: IUserState
}
export const store = configureStore({
  reducer: {user: userReducer},
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
