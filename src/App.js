import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import history from './services/history';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header';
import RoutesApp from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <RoutesApp />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
