require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const academyRoutes = require("./routes/academyRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/academy", academyRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "API PowerGym funcionando!" });
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      mensagem: "Banco conectado com sucesso",
      hora_servidor: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao conectar no banco",
      detalhe: error.message
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});