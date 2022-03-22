import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  StartPage, Login, SignUp, CategoryPage,
  MentorPage, ProfilePage, Layout, NotFoundPage
} from './components/pages'
import './style/main.scss';

export function App() {
    return(
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<StartPage />}/>
          <Route path='profile' element={<ProfilePage />} />
          <Route path='category/:id' element={<CategoryPage />} />
          <Route path='mentor/:id' element={<MentorPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    );
}
