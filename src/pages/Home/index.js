
import { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Filmes, Artigo } from './styles'

import { Link } from 'react-router-dom';

export default function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      //* Como eu criei na api a baseURL, é só colocar as rotas aqui, sem me preocupar em colocar a url inteira, isso no axios
      //sujeitoprogramador.com + r-api/?api=filmes/
      const response = await api.get('r-api/?api=filmes/')
      // console.log(response.data)
      setFilmes(response.data)
    }

    loadFilmes();

  }, [])


  return (
    <Container>
      <Filmes>
        {filmes.map((filme) => {
          return(
            <Artigo key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </Artigo>
          )
        })}
      </Filmes>
    </Container>
  
  )
}