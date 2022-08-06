/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const botaoClicado = createSlice({
  name: 'botao',
  initialState: {
    value: false,
  },
  reducers: {
    increment: (state) => {
      state.value = !state.value;
    },
  },
});

export const { increment } = botaoClicado.actions;

export default botaoClicado.reducer;
