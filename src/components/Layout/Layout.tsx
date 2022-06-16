import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { IState } from '../../store';
import { userGetInfo, userLogIn } from '../../store/actions/user';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Layout() {
  const isAuth = useSelector((state: IState) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(userLogIn());
      dispatch(userGetInfo());
    }
  }, [dispatch]);

  return (
    <>
      <Header isGroup={!isAuth} isAuth={isAuth} />
      <Outlet />
      <Footer />
    </>
  );
}
