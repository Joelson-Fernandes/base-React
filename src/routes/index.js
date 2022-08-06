import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Login from '../pages/login';
import Home from '../pages/home';
import Page404 from '../pages/page404';

export default function RoutesApp() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
