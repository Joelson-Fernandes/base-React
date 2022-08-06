import React from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/globalStyles';
import { Title } from './style';

export default function Home() {
  const customId = 'custom-id-yes';
  toast.success('Oi, sucesso!', {
    toastId: customId,
  });

  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
}
