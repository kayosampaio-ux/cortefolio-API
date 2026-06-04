const db = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {

  const { email, senha } = req.body;

  const sql = "SELECT * FROM usuarios WHERE email = ?";

  db.query(sql, [email], (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(401).json({
        mensagem: "Usuário não encontrado"
      });
    }

    const usuario = results[0];

  
    const senhaValida = bcrypt.compareSync(
      senha,
      usuario.senha_hash
    );

    if (!senhaValida) {
      return res.status(401).json({
        mensagem: "Senha inválida"
      });
    }

    
    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        perfil: usuario.perfil
      },
      "segredo_super_secreto",
      { expiresIn: "1h" }
    );

    return res.json({
      mensagem: "Login realizado com sucesso",
      token
    });

  });

};