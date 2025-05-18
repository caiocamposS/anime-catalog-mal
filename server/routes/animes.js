const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const favoritesPath = path.join(__dirname, '..', 'favorites.json');

// GET favoritos
router.get('/favorites', (req, res) => {
    const data = fs.readFileSync(favoritesPath, 'utf-8');
    const favorites = JSON.parse(data);
    res.json(favorites);
});

// POST novo favorito
router.post('/favorites', (req, res) => {
    const data = fs.readFileSync(favoritesPath, 'utf-8');
    const favorites = JSON.parse(data);

    const newFavorite = req.body;
    const alreadyExists = favorites.some(item => item.id === newFavorite.id);

    if (alreadyExists) {
        return res.status(400).json({ message: 'Anime já favoritado' });
    }

    favorites.push(newFavorite);
    fs.writeFileSync(favoritesPath, JSON.stringify(favorites, null, 2));
    res.status(201).json(newFavorite);
});

// DELETE favorito
router.delete('/favorites/:id', (req, res) => {
    const animeId = req.params.id;
    const data = fs.readFileSync(favoritesPath, 'utf-8');
    let favorites = JSON.parse(data);

    const filtered = favorites.filter(item => item.id != animeId);
    fs.writeFileSync(favoritesPath, JSON.stringify(filtered, null, 2));
    res.status(200).json({ message: 'Removido com sucesso' });
});

module.exports = router;
