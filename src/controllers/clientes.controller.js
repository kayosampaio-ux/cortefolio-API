const db = require("../config/database");

exports.listar = (req, res) => {

  db.query(
    "SELECT * FROM clientes",
    (err, results) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );

};
exports.criar = (req, res) => {

  const {
    nome,
    email,
    telefone
  } = req.body;

  const sql = `
    INSERT INTO clientes
    (nome,email,telefone,data_cadastro)
    VALUES
    (?, ?, ?, CURDATE())
  `;

  db.query(
    sql,
    [nome, email, telefone],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensagem: "Cliente cadastrado",
        id: result.insertId
      });

    }
  );

};