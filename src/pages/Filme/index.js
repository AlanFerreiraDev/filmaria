import { useEffect, useState } from 'react';

import { Loading, LoadH1, Button, Buttons } from './styles';

//* Para acessar o parametro de ID que eu passei na rota
import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Filme() {
  const { id, nome } = useParams();
  const history = useHistory();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      // Tentou acessar com um id que não existe, navego ele para home
      if(response.data.length === 0) {
        history.replace('/');
        //* Esse return para a aplicação Aqui, então quando ele busca e nçao acha nada, ele retorna nada e para
        return;
      }


      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

    //* O hook useEffect funciona quandio um compoente é montado e desmontado, quando troca de pagina, desmonta o componente ... 
    return () => {
      console.log('COMPONENTE DESMONTADO')
    }

    //* O Browser reclama da dependencia id, então colocamos no array de dependencia a varoavel que ele pede
    //* E caso o id sofra alguma dependencia, ele roda o hook novamente, ele pede o history também como dependencia
  }, [id, history])

  function salvaFilme() {
    // Uso o localStorage egravo uma key com nome filmes
    const minhaLista = localStorage.getItem('filmes');
    // Transformo em JSON,poois em minhaLista vem tudo como string
    // O || é no caso se vier vazio, ele devolve um array vazio
    let filmesSalvos = JSON.parse(minhaLista) || [];
    // se o filme já foi salvo, não pode duplicar
    // Método some(), do Java Script e percorre minha lista e verifica a condição, e devolve um TRUE se encontrar algo e FALSE se não encontrar
    // o filme.id é do hook useState
    const hasFilm = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
    
    console.log(filmesSalvos)
  }

  { if(loading) {
    return (
      
        <Loading>
          <LoadH1>Carregando o Filme ... </LoadH1>
        </Loading>
    )
  }}
  return (
    <Loading>
      <LoadH1>{filme.nome}</LoadH1>
      <img src={filme.foto} alt={filme.nome}></img>
      <h3>Sinopse</h3>
      {filme.sinopse}

      <Buttons>
        <Button onClick={salvaFilme}>Salvar</Button>
        <Button>
          <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
            Trailer
          </a>
        </Button>
      </Buttons>

    </Loading>
  )
}