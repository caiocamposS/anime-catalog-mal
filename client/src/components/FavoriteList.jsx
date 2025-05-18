import React, { useEffect, useState } from 'react';
import api from '../services/api';

const FavoriteList = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        api.get('/favorites')
            .then(response => setFavorites(response.data))
            .catch(error => console.error('Erro ao buscar favoritos:', error));
    }, []);

    return (
        <div>
            <h2>Favoritos</h2>
            <ul>
                {favorites.map(anime => (
                    <li key={anime.id}>{anime.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
