# cortefolio-API

API REST para sistema de agendamento de barbearia.

## Tecnologias

- Node.js
- Express
- MySQL
- JWT
- bcrypt
- dotenv

## Endpoints

### Auth
POST /api/auth/login

### Clientes
GET /api/clientes
POST /api/clientes

### Profissionais
GET /api/profissionais

### Serviços
GET /api/servicos

### Agendamentos
GET /api/agendamentos
POST /api/agendamentos
PUT /api/agendamentos/:id
DELETE /api/agendamentos/:id