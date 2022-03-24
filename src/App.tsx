import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context';
import {
  StartPage, Login, SignUp, CategoryPage,
  MentorPage, ProfilePage, Layout, NotFoundPage
} from './pages'
import './style/main.scss';

export function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
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
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='/login' element={isAuth ? <Navigate to={'/'} /> : <Login />} />
        <Route path='/signup' element={isAuth ? <Navigate to={'/'} /> : <SignUp />} />
      </Routes>
    </AuthContext.Provider>
  );
}
