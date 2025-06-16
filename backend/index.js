const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

// Rotas de Vampi
const vampirosRoutes = require('./routes/vampiros');
app.use('/api/vampiros', vampirosRoutes);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
