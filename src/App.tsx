import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { dataFetched, userLogIn } from './actions';
import { IState } from './reducers';
import {
  StartPage, Login, SignUp, CategoryPage,
  MentorPage, ProfilePage, Layout
} from './pages'

export function App() {
  const isAuth = useSelector((state: IState) => state.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(userLogIn());
    }
    dispatch(dataFetched());
  });

  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<StartPage />}/>
        <Route path='profile' element={<ProfilePage />} />
        <Route path='category/:id' element={<CategoryPage />} />
        <Route path='mentor/:id' element={<MentorPage />} />
      </Route>
      <Route path='/login' element={isAuth ? <Navigate to={'/'} /> : <Login />} />
      <Route path='/signup' element={isAuth ? <Navigate to={'/'} /> : <SignUp />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  );
}
