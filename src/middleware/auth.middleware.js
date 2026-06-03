const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      mensagem: "Token não enviado"
    });
  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(
      token,
      "segredo_super_secreto"
    );

    req.usuario = decoded;

    next();

  } catch (err) {
    return res.status(401).json({
      mensagem: "Token inválido"
    });
  }

};