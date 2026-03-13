-- =====================================================
-- BANCO DE DADOS POWERGYM
-- Projeto acadêmico - Faculdade Impacta
-- Curso: Análise e Desenvolvimento de Sistemas (ADS)
-- =====================================================

-- Criar banco
CREATE DATABASE powergym;

-- Conectar ao banco (executar depois de criar)
-- \c powergym


-- =============================
-- TABELA DE PLANOS
-- =============================

CREATE TABLE planos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    preco NUMERIC(10,2)
);


-- =============================
-- TABELA DE USUÁRIOS
-- =============================

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    plano_id INTEGER,
    objetivo VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_plano
    FOREIGN KEY (plano_id)
    REFERENCES planos(id)
);


-- =============================
-- TABELA DE UNIDADES (ACADEMIAS)
-- =============================

CREATE TABLE unidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(255),
    cidade VARCHAR(100),
    estado VARCHAR(50)
);


-- =============================
-- TABELA DE TREINOS
-- =============================

CREATE TABLE treinos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    nivel VARCHAR(50)
);


-- =============================
-- TABELA DE TREINOS REALIZADOS
-- =============================

CREATE TABLE treinos_realizados (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER,
    treino_id INTEGER,
    data_realizacao DATE,

    CONSTRAINT fk_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id),

    CONSTRAINT fk_treino
    FOREIGN KEY (treino_id)
    REFERENCES treinos(id)
);