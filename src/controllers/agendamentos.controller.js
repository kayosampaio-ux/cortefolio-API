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

exports.criar = (req, res) => {

  const {
    cliente_id,
    servico_id,
    data_hora,
    observacao
  } = req.body;

  const sql = `
    INSERT INTO agendamentos
    (
      cliente_id,
      servico_id,
      data_hora,
      status,
      observacao
    )
    VALUES
    (
      ?, ?, ?, 'agendado', ?
    )
  `;

  db.query(
    sql,
    [
      cliente_id,
      servico_id,
      data_hora,
      observacao
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensagem: "Agendamento criado",
        id: result.insertId
      });

    }
  );

};

exports.atualizar = (req, res) => {

  const id = req.params.id;

  const {
    data_hora,
    status,
    observacao
  } = req.body;

  const sql = `
    UPDATE agendamentos
    SET
      data_hora = ?,
      status = ?,
      observacao = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      data_hora,
      status,
      observacao,
      id
    ],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensagem:
        "Agendamento atualizado"
      });

    }
  );

};

exports.remover = (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM agendamentos WHERE id = ?",
    [id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensagem:
        "Agendamento removido"
      });

    }
  );

};