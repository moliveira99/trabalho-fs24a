// servidor.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usuarioRotas = require('./routes/usuario');
const tarefaRotas = require('./routes/tarefa');

dotenv.config();
const app = express();
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error.message);
});

// Rotas
app.use('/api/usuarios', usuarioRotas);
app.use('/api/tarefas', tarefaRotas);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
