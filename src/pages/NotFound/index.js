import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <span>
        Talvez voce esteja procurando por: 
        <Link to="/">Home</Link>
      </span>
    </Container>
  )
}