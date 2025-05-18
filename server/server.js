const express = require('express');
const cors = require('cors');
const app = express();
const animeRoutes = require('./routes/animes');

app.use(cors());
app.use(express.json());
app.use('/api', animeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
