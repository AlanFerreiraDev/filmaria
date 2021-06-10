import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  span{
    font-weight: bold;

    a {
      cursor: pointer;
      text-decoration: none;
      background-color: #FFF;
      border: 1px solid brown;
      border-radius: 5px;
      padding: 5px;
      font-weight: bold;
      color: brown;
      padding: .5rem;
      margin: 1rem;
      transition: all .5s;

      &:hover {
        color: #FFF;
        background-color: brown;
      }
    }
  }

`;