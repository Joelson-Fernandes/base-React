import React from 'react';
import { useDispatch } from 'react-redux';
import { botaoClicado } from '../../store/features/example';

import { Title, Botao } from './style';
import { Container } from '../../styles/globalStyles';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Aperte o botão e modifique o estado de Redux no navbar</Title>
      <Botao type="button" onClick={() => dispatch(botaoClicado())}>
        Botao
      </Botao>
    </Container>
  );
}
