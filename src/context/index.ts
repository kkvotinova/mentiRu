import React, { createContext, Dispatch, SetStateAction } from "react";

export interface IAppContext {
  isLoading: boolean;
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as IAppContext);
