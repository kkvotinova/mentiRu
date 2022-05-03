import { Reducer } from "redux";
import { IUserAction, IUserState, UserActions } from "./type";

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
    avatar: 'https://6dou.ru/assets/user_assets/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B5%D0%B9%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2/nophoto.png'
  }
}

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
        isSignUp: true
      }
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
        userInfo: action.payload
      };
    case UserActions.USER_DATA_FETCHING_ERROR:
      return {
        ...state,
        userLoadingStatus: 'error',
      };
    default:
      return state;
  }
}

