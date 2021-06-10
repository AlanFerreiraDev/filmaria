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

    a {
      text-decoration: none;
      color: brown;
    }

    button {
      margin-left: .75rem;
    }
  }

`;