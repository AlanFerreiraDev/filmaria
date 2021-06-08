import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const Filmes = styled.div`
  margin: 1rem;

  img {
    width: 900px; 
    max-height: 350px;
  }
`;
export const Artigo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;

  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;

  strong {
    padding-bottom: 1rem;
    font-size: 1.5rem;
  }

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  a {
    text-decoration: none;
    color: #FFF;
    background-color: brown;
    font-size: 1.4rem;
    width: 100%;
    text-align: center;
    padding-top: .625rem; 
    padding-bottom: .625rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
