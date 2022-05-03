export enum UserActions {
  USER_LOGIN = 'USER_LOGIN',
  USER_SIGNUP = 'USER_SIGNUP',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_DATA_FETCHING = 'USER_DATA_FETCHING',
  USER_DATA_FETCHED = 'USER_DATA_FETCHED',
  USER_DATA_FETCHING_ERROR = 'USER_DATA_FETCHING_ERROR'
}

export type IUserAction = IUserLogIn | IUserLogOut | IUserDataFetched | IUserDataFetching | IUserDataFetchingError | IUserSignUp;

export interface IUserLogIn {
  type: UserActions.USER_LOGIN;
}

export interface IUserSignUp {
  type: UserActions.USER_SIGNUP;
}

export interface IUserLogOut {
  type: UserActions.USER_LOGOUT;
}

export interface IUserDataFetching {
  type: UserActions.USER_DATA_FETCHING;
}

export interface IUserDataFetched {
  type: UserActions.USER_DATA_FETCHED;
  payload: IUserInfo;
}

export interface IUserDataFetchingError {
  type: UserActions.USER_DATA_FETCHING_ERROR;
}

export interface IUserState {
  isAuth: boolean;
  isSignUp: boolean;
  userLoadingStatus: 'loading' | 'idle' | 'error';
  userInfo: IUserInfo;
}

export interface IUserCVS {
// TODO
}

export interface IUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  cvs: IUserCVS[];
  avatar: string;
  phone: string;
}

export interface IUserForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IBDGetMe {
  user: {
    cvs: []
    date_time_add: number;
    email: string;
    first_name: string;
    gender: "M" | "W";
    id_: string;
    is_admin: boolean
    last_name: string;
    middle_name: string;
    password: string;
    phone: string;
    telegram_profile: string;
  }
}
