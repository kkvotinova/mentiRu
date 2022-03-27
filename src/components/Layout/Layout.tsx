import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Layout() {
  const {isAuth} = useContext(AuthContext);

  return (
    <>
      <Header
        isGroup={true}
        isAuth={isAuth}/>
      <Outlet />
      <Footer />
    </>
  );
}
