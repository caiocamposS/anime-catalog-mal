import React from 'react';
import api from '../services/api';

const AnimeCard = ({ anime }) => {
    const addFavorite = async () => {
        try {
            await api.post('/favorites', anime);
            alert('Favoritado!');
        } catch (error) {
            alert('Erro ao favoritar');
            console.error(error);
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '8px', margin: '8px' }}>
            <h3>{anime.title}</h3>
            <button onClick={addFavorite}>Favoritar</button>
        </div>
    );
};

export default AnimeCard;
