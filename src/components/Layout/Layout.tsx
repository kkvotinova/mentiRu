import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { IState } from '../../store/reducers';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Layout() {
  const isAuth = useSelector((state: IState) => state.isAuth);

  return (
    <>
      <Header
        isGroup={!isAuth}
        isAuth={isAuth}/>
      <Outlet />
      <Footer />
    </>
  );
}
