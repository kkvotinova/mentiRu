import { Dispatch } from "redux";
import { API_URL, headersCors } from "../../api";
import {
  IUserInfo, UserActions, IUserDataFetched, IUserDataFetchingError,
  IUserDataFetching, IUserForm, IUserLogIn, IUserLogOut, IBDGetMe } from "../reducers/user/type";

export const userLogIn = (): IUserLogIn => ({type: UserActions.USER_LOGIN});
export const userLogOut = (): IUserLogOut => ({type: UserActions.USER_LOGOUT});
export const userDataFetchingError = (): IUserDataFetchingError => ({type: UserActions.USER_DATA_FETCHING_ERROR});
export const userDataFetching = (): IUserDataFetching => ({type: UserActions.USER_DATA_FETCHING});
export const userDataFetched = (data: IUserInfo): IUserDataFetched => ({
  type: UserActions.USER_DATA_FETCHED,
  payload: data
});

export const userSignIn = (data: Pick<IUserForm, 'email' | 'password'>) => (dispatch: Dispatch<any>) => {
  dispatch(userDataFetching());
  fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: headersCors,
    body: JSON.stringify({
      "email": data.email,
      "password": data.password
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('accessToken', data["accessToken"]);
      localStorage.setItem('refreshToken', data["refreshToken"]);
      localStorage.setItem('auth', 'true');
      dispatch(userLogIn());
    })
    .then(() => dispatch(userGetInfo()))
    .catch((error: Error) => {
      dispatch(userDataFetchingError());
      console.log("Error: ", error.message);
    });
}

export const userSignUp = (data: IUserForm) => (dispatch: Dispatch<any>) => {
  dispatch(userDataFetching());
  fetch(`${API_URL}/auth/registration`, {
    method: 'POST',
    headers: headersCors,
    body: JSON.stringify({
      "first_name": data.firstName,
      "last_name": data.lastName,
      "email": data.email,
      "password": data.password
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        dispatch({type: UserActions.USER_SIGNUP});
      }
    })
    .catch((error: Error) => {
      dispatch(userDataFetchingError());
      console.log("Error: ", error.message);
    });
}

export const userGetInfo = () => (dispatch: Dispatch<any>) => {
  const accessToken = String(localStorage.getItem('accessToken'));
  dispatch(userDataFetching());
  fetch(`${API_URL}/user/get_me`, {
    method: 'GET',
    headers: {
      'Authorization': accessToken
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data: IBDGetMe) => {
      const userInfo: IUserInfo = {
        firstName: data.user.first_name,
        lastName: data.user.last_name,
        email: data.user.email,
        cvs: data.user.cvs,
        phone: data.user.phone,
        avatar: 'https://6dou.ru/assets/user_assets/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B5%D0%B9%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2/nophoto.png'
      };
      dispatch(userDataFetched(userInfo));
    })
    .catch((error: Error) => {
      dispatch(userDataFetchingError());
      console.log("Error: ", error.message);
    });
}

export const userUpdateInfo = (data: Omit<IUserInfo, 'cvs' | 'avatar'>) => (dispatch: Dispatch<any>) => {
  const accessToken = String(localStorage.getItem('accessToken'));
  dispatch(userDataFetching());
  fetch(`${API_URL}/user/update_me`, {
    method: 'POST',
    headers: {
      'Authorization': accessToken
    },
    body: JSON.stringify({
      "first_name": data.firstName,
      "last_name": data.lastName,
      "email": data.email,
      "phone": data.phone || null
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data: IBDGetMe) => {
      const userInfo: IUserInfo = {
        firstName: data.user.first_name,
        lastName: data.user.last_name,
        email: data.user.email,
        cvs: data.user.cvs,
        phone: data.user.phone,
        avatar: 'https://6dou.ru/assets/user_assets/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B5%D0%B9%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2/nophoto.png'
      };
      dispatch(userDataFetched(userInfo));
    })
    .catch((error: Error) => {
      dispatch(userDataFetchingError());
      console.log("Error: ", error.message);
    });
}
