const bcrypt = require("bcrypt");

const senha = "123456";

const hash = bcrypt.hashSync(senha, 10);

console.log(hash);