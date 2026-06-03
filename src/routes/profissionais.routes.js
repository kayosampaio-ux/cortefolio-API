const express = require("express");

const router = express.Router();

const controller =
require("../controllers/profissionais.controller");

router.get("/", controller.listar);

module.exports = router;