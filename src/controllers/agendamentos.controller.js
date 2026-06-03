const db = require("../config/database");

exports.listar = (req, res) => {

  const sql = `
    SELECT
      a.id,
      c.nome AS cliente,
      s.nome AS servico,
      a.data_hora,
      a.status
    FROM agendamentos a
    INNER JOIN clientes c
      ON a.cliente_id = c.id
    INNER JOIN servicos s
      ON a.servico_id = s.id
  `;

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);

  });

};