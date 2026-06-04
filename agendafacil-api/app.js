const express = require('express');
const cors = require('cors');

const profissionaisRoutes = require('./routes/profissionais.routes');
const servicosRoutes = require('./routes/servicos.routes');
const clientesRoutes = require('./routes/clientes.routes');
const agendamentosRoutes = require('./routes/agendamentos.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/profissionais', profissionaisRoutes);
app.use('/api/servicos', servicosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/agendamentos', agendamentosRoutes);
app.use('/api/login', authRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API AgendaFácil rodando!' });
});

module.exports = app;