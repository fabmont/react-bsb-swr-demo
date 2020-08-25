import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Title } from '../List/styles';
import useFetch from '../../hooks/useFetch';

export default function Details() {
  const { id } = useParams();
  const { data, error, revalidate } = useFetch(`/heroes/${id}`);

  return (
    <Container>
      {error && (
        <button type="button" onClick={revalidate}>
          Ocorreu um erro ao buscar os heróis, clique para tentar novamente
        </button>
      )}
      {!data && <div style={{ padding: 18 }}>Carregando...</div>}
      {data && (
        <>
          <Title>{data.name}</Title>
          <p>
            <b>Identity: </b>
            {data.identity}
          </p>
          <p>
            <b>Group: </b>
            {data.group}
          </p>
          <p>
            <b>Publisher: </b>
            {data.publisher}
          </p>
        </>
      )}
    </Container>
  );
}
