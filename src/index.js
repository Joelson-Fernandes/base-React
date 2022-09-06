import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from 'react-router-dom';

import history from './services/history';
import App from './App';

// Routes
import Page404 from './pages/page404';
import Home from './pages/home';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </React.StrictMode>
);
