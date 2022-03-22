import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './layout.scss';

export function Layout() {
  return (
    <>
      <Header isGroup={true}/>
      <Outlet />
      <Footer />
    </>
  );
}
