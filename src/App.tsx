import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  StartPage, Login, SignUp, CategoryPage,
  MentorPage, ProfilePage, Layout
} from './pages'
import { IState } from './store';

export function App() {
  const isSignUp = useSelector((state: IState) => state.user.isSignUp);
  const isAuth = useSelector((state: IState) => state.user.isAuth);

  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<StartPage />}/>
        <Route path='profile' element={isAuth ? <ProfilePage /> : <Navigate to={'/'}/> } />
        <Route path='category/:id' element={<CategoryPage />} />
        <Route path='mentor/:id' element={<MentorPage />} />
      </Route>
      <Route path='/login' element={isAuth ? <Navigate to={'/'} /> : <Login />} />
      <Route path='/signup' element={
        isAuth ? <Navigate to={'/'} /> : isSignUp ? <Navigate to={'/login'}/> : <SignUp />
      } />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  );
}
