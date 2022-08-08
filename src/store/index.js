/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './features/example';

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
