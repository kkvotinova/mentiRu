import { Reducer } from "redux";

const initialState: IState = {
  isAuth: false,
  loadingStatus: 'loading',
}

export const reducer: Reducer = <P>(state = initialState, action: IAction<P>): IState => {
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
