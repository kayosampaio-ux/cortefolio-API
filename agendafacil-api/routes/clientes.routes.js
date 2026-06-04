const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  const cliente = req.body;

  res.status(201).json({
    mensagem: 'Cliente cadastrado com sucesso!',
    cliente
  });
});

module.exports = router;