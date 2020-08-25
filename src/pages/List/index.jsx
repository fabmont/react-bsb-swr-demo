import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { Container, Title, ListContainer } from './styles';

export default function List() {
  const { data, error, revalidate } = useFetch('/heroes');

  return (
    <Container>
      <Title>Comics Characteres</Title>
      {error && (
        <button type="button" onClick={revalidate}>
          Ocorreu um erro ao buscar os heróis, clique para tentar novamente
        </button>
      )}
      {!data && !error && (
        <div style={{ padding: 18 }}>Carregando itens...</div>
      )}
      <ListContainer>
        {(data || []).map((item) => (
          <Link key={item.id} to={`/${item.id}`}>
            <li>
              <span className="list-title">{item.name}</span>
              <br />
              <span className="list-description">{item.identity}</span>
            </li>
          </Link>
        ))}
      </ListContainer>
    </Container>
  );
}
