const express = require('express');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir apenas o frontend do seu projeto
const corsOptions = {
    origin: 'http://localhost:3001', // A URL do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
app.use(cors(corsOptions)); // Aplica CORS a todas as rotas

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API de Gerenciamento de Projetos está funcionando!');
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch(error => {
  console.error('Erro ao sincronizar banco de dados:', error);
});

const projetoRoutes = require('./routes/projetoRoutes');
app.use('/api', projetoRoutes);

const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/api', tarefaRoutes);

module.exports = app;
