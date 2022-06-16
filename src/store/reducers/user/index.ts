import { Reducer } from 'redux';
import { IUserAction, IUserState, UserActions } from './type';
import avatar from '../../../resources/avatar.png';

const initialState: IUserState = {
  isAuth: false,
  isSignUp: false,
  userLoadingStatus: 'loading',
  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    cvs: [],
    phone: '',
    avatar: avatar,
  },
};

export const userReducer: Reducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserActions.USER_LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    case UserActions.USER_SIGNUP:
      return {
        ...state,
        isSignUp: true,
      };
    case UserActions.USER_LOGOUT:
      return initialState;
    case UserActions.USER_DATA_FETCHING:
      return {
        ...state,
        userLoadingStatus: 'loading',
      };
    case UserActions.USER_DATA_FETCHED:
      return {
        ...state,
        userLoadingStatus: 'idle',
        userInfo: action.payload,
      };
    case UserActions.USER_DATA_FETCHING_ERROR:
      return {
        ...state,
        userLoadingStatus: 'error',
      };
    case UserActions.USER_OTHER:
      return {
        ...state,
        userLoadingStatus: 'idle',
      };
    default:
      return state;
  }
};
