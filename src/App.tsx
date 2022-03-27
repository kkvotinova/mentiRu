import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context';
import {
  StartPage, Login, SignUp, CategoryPage,
  MentorPage, ProfilePage, Layout } from './pages'

export function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  });

  return(
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
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
    </AuthContext.Provider>
  );
}
