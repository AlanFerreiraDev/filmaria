import styled from 'styled-components';

export const LoadH1 = styled.h1`
  color: #000;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;

  img {
    border-radius: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

`;
export const Button = styled.button`
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  font-size: 1.25rem;
  outline: none;
  padding: .75rem;
  background-color: #FFF;
  transition: all .5s;

  &:hover {
    background-color: brown;
    color: #FFF;
  }

  a {
    text-decoration: none;
    color: #000;
    transition: all .5s;

    &:hover {
      color: #FFF;
    }
  }
`;

