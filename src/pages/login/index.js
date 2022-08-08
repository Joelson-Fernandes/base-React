import React from 'react';
import { useDispatch } from 'react-redux';
import { botaoClicado } from '../../store/features/example';

import { Title } from './style';
import { Container } from '../../styles/globalStyles';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Index Login</Title>
      <button type="button" onClick={() => dispatch(botaoClicado())}>
        Enviar
      </button>
    </Container>
  );
}
