import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Provider>
  );
}

export default App;
