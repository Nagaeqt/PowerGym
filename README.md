# 💪 PowerGym

Sistema web desenvolvido para gerenciamento de usuários e informações relacionadas a academias, permitindo cadastro de usuários e armazenamento seguro dos dados em banco de dados.

Projeto acadêmico do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Faculdade Impacta**.

---

# 👨‍💻 Autor

**Lucas Ryan Lima Malmagro - RA 2401867**

Projeto acadêmico desenvolvido para fins educacionais.

---

# 📌 Objetivo do Projeto

O objetivo do projeto é desenvolver um sistema web utilizando arquitetura em **3 camadas (Front-end, Back-end e Banco de Dados)** para demonstrar conceitos de desenvolvimento de software, organização de código e integração entre interface e servidor.

---

# 🚀 Funcionalidades

- Cadastro de usuários
- Login de usuários
- Autenticação com token
- Consulta de perfil do usuário
- Interface web para interação com o sistema
- Estrutura preparada para expansão do sistema

Funcionalidades planejadas para próximas entregas:

- academias próximas
- acompanhamento de treinos
- planos de academia
- histórico de atividades

---

# 🧩 Arquitetura do Projeto

O sistema foi dividido em três camadas principais:

### Front-end
Interface visual da aplicação responsável pela interação com o usuário.

Arquivos disponíveis em:

[frontend](frontend)

---

### Back-end
Responsável pela lógica da aplicação e pelas rotas da API.

Arquivos disponíveis em:

[backend](backend)

---

### Banco de Dados
Responsável pelo armazenamento das informações do sistema.

Scripts disponíveis em:

[banco](banco)

---

# 🛠 Tecnologias Utilizadas

### Front-end
- HTML
- CSS
- JavaScript

### Back-end
- Node.js
- Express

### Banco de Dados
- PostgreSQL

### Ferramentas de Desenvolvimento
- VS Code
- Git
- GitHub
- Thunder Client

---

# 📁 Estrutura do Projeto

```
powergym
│
├── backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   │
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   └── academyController.js
│   │   │
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   └── academyRoutes.js
│   │   │
│   │   └── server.js
│
├── frontend
│   ├── assets
│   │   └── logo.png
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   └── script.js
│   │
│   └── index.html
│
├── banco
│   └── create_database.sql
│
├── README.md
└── LICENSE
```

---

# 🗄 Banco de Dados

O projeto utiliza **PostgreSQL**.

O script de criação do banco está disponível em:

[banco/create_database.sql](banco/create_database.sql)

---

# ⚙ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/powergym.git
```

---

### 2️⃣ Entrar na pasta do projeto

```
cd powergym
```

---

### 3️⃣ Instalar dependências do backend

```
cd backend
npm install
```

---

### 4️⃣ Configurar variáveis de ambiente

Criar um arquivo `.env` dentro da pasta **backend** com:

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=powergym
JWT_SECRET=powergym_secret_key
```

---

### 5️⃣ Rodar o servidor

```
npm run dev
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

# 📡 Rotas da API

### Cadastro de usuário

```
POST /auth/cadastro
```

---

### Login

```
POST /auth/login
```

---

### Perfil do usuário

```
GET /auth/perfil
```

Essa rota requer **token de autenticação**.

---

# 📚 Disciplina

Projeto desenvolvido para a disciplina:

**Software Product**

Curso:

**Análise e Desenvolvimento de Sistemas (ADS)**  
**Faculdade Impacta**

---

# 📄 Licença

Este projeto está sob a licença:

[MIT License](LICENSE)
