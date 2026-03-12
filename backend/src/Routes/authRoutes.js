const express = require("express");
const router = express.Router();

const verificarToken = require("../middleware/authMiddleware");

const {
  cadastrar,
  login,
  recuperarSenha
} = require("../controllers/authController");

router.post("/cadastro", cadastrar);
router.post("/login", login);
router.post("/recuperar-senha", recuperarSenha);

router.get("/perfil", verificarToken, (req, res) => {
  res.json({
    mensagem: "Acesso autorizado!",
    usuario: req.usuario
  });
});

module.exports = router;