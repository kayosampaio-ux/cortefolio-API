const express = require("express");

const router = express.Router();

const controller =
require("../controllers/agendamentos.controller");

router.get("/", controller.listar);

module.exports = router;