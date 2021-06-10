import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { toast } from 'react-toastify';

export default function Favoritos() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    // Pegio o item do localStorage 
    const minhaLista = localStorage.getItem('filmes');
    // Seto no meu State e já transformo em JSON, pq no localStorage está como JSON
    setFilmes(JSON.parse(minhaLista) || []);

  }, [])

  //* Vou filtrar para retornar todos os filmes, menos o que eu cliquei, pq o botão é de excluir
  // O id que eu recebi aqui é o item.id passado no evento onClick
  // Faço um filtro para filtrar o que é diferente de id, que foi clicado
  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return (
        (item.id !== id)
      )
    })

    // salvo no State
    setFilmes(filtroFilmes);
    // E seto apenas os filmes que não foram deletados no localStorage
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme Excluído com Sucesso');
  }

  return(
    <Container>
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme Salvo :( </span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>

              <div>
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                {/* Quando clicar no botão ele vai enviar para  afunção handleDelete o item.id */}
                {/* O ideal aqui é passar uma função anonima antes, pq se eu coloco direto um item dnetro, ele vai deletar tudo, pois será executada a função na hora, com a função anonima ele só executa quando clicar no botão */}
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
  }