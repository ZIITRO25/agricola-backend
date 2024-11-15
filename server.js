// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDatabase } = require('./config/database'); // Importa la función de conexión

// Importa las rutas
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const departamentoRoutes = require('./routes/departamentoRoutes');
const cultivoRoutes = require('./routes/cultivoRoutes');
const herramientaRoutes = require('./routes/herramientaRoutes');
const consejoRoutes = require('./routes/consejoRoutes');

const app = express();
app.use(cors());
app.use(express.json());


connectDatabase();


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/departamentos', departamentoRoutes);
app.use('/cultivos', cultivoRoutes);
app.use('/herramientas', herramientaRoutes);
app.use('/consejos', consejoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

