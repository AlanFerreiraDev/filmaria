import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;

    li {
      padding: 0;
      list-style: none;
      min-width: 600px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .75rem;

      span {
        font-size: 1.5rem;
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      color: brown;
    }

    button {
      margin-left: .75rem;
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