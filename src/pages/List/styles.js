import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  height: 100%;
`;

export const Title = styled.h1`
  font-weight: bold;
  padding: 0;
  color: white;
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;

  a {
    text-decoration: none;
  }

  li {
    padding: 12px 8px;
    position: relative;
    transition: 0.3s;
    color: white;

    &:hover {
      background-color: #373737;
      cursor: pointer;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #373737;
    }

    .list-title {
      font-weight: bold;
      font-size: 20px;
    }

    .list-description {
      font-size: 14px;
      opacity: 0.5;
    }
  }
`;
