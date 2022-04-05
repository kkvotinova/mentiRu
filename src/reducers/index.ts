import { Reducer } from "redux";

const initialState: IState = {
  isAuth: false,
  loadingStatus: 'loading',
}

export const reducer: Reducer = <P>(state: IState = initialState, action: IAction<P>) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        isAuth: true,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        isAuth: false,
      };
    case 'DATA_FETCHING':
      return {
        ...state,
        loadingStatus: 'loading',
      };
    case 'DATA_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        loadingStatus: 'idle',
      };
    case 'DATA_FETCHING_ERROR':
      return {
        ...state,
        loadingStatus: 'error',
      };
    default:
      return state;
  }
}

export interface IAction<P> {
  readonly type: string;
  readonly payload?: P;
}

export interface IState {
  isAuth: boolean;
  loadingStatus: 'loading' | 'idle' | 'error';
}
