import React from 'react';
import FavoriteList from './components/FavoriteList';
import AnimeCard from './components/AnimeCard';

const mockAnimes = [
  { id: 1, title: 'Naruto' },
  { id: 2, title: 'One Piece' },
  { id: 3, title: 'Death Note' },
];

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Animes</h1>

      <h2>Todos os Animes</h2>
      <div>
        {mockAnimes.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>

      <FavoriteList />
    </div>
  );
}

export default App;
