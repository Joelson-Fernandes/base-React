/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'botao',
  initialState: {
    value: false,
  },
  reducers: {
    botaoClicado: (state) => {
      state.value = !state.value;
    },
  },
});

export const { botaoClicado } = exampleSlice.actions;

export default exampleSlice.reducer;
