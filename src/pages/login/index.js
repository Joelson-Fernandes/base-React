import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../../store/modules/example';
import { Title } from './style';
import { Container } from '../../styles/globalStyles';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Index Login</Title>
      <button type="button" onClick={() => dispatch(increment())}>
        Enviar
      </button>
    </Container>
  );
}
