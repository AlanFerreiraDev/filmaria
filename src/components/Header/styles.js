import styled from 'styled-components';

export const  Head = styled.header`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 width: 100%;
 height: ${props => `${props.altura}px`};
 background-color: ${props => `${props.cor}`};

 .home__film {
   text-decoration: none;
   font-size: 20px;
   color: #FFF;
   cursor: pointer;
 }

 .favoritos__film {
  cursor: pointer;
  text-decoration: none;
  background-color: #FFF;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  color: brown;
  padding: .5rem;
 }

`;