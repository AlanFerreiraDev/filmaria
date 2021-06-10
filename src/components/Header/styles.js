import styled from 'styled-components';

export const  Head = styled.header`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 width: 100%;
 height: 60px;
 background-color: brown;

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
  color: #000;
  padding: .5rem;
 }

`;