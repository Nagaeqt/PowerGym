const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cadastrar = async (req, res) => {
  try {
    const { nome, email, senha, plano_id, objetivo } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: "Preencha nome, email e senha." });
    }

    const usuarioExistente = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (usuarioExistente.rows.length > 0) {
      return res.status(400).json({ mensagem: "E-mail já cadastrado." });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const resultado = await pool.query(
      `INSERT INTO usuarios (nome, email, senha, plano_id, objetivo)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, nome, email, plano_id, objetivo`,
      [nome, email, senhaCriptografada, plano_id || null, objetivo || null]
    );

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
      usuario: resultado.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro ao cadastrar usuário.",
      erro: error.message
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ mensagem: "Preencha email e senha." });
    }

    const resultado = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    const usuario = resultado.rows[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ mensagem: "Senha inválida." });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      mensagem: "Login realizado com sucesso!",
      token: token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        plano_id: usuario.plano_id,
        objetivo: usuario.objetivo
      }
    });
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro no login.",
      erro: error.message
    });
  }
};

const recuperarSenha = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ mensagem: "Informe o email." });
    }

    const resultado = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: "E-mail não encontrado." });
    }

    res.json({
      mensagem: `Simulação: link de recuperação enviado para ${email}`
    });
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro ao recuperar senha.",
      erro: error.message
    });
  }
};

module.exports = {
  cadastrar,
  login,
  recuperarSenha
};