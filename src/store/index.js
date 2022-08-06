/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import botaoClicado from './modules/example';

export default configureStore({
  reducer: {
    counter: botaoClicado,
  },
});
