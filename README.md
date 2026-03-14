# 💪 PowerGym - Gerenciamento de Treinos

O **PowerGym** é um sistema web desenvolvido para permitir que usuários registrem e acompanhem seus treinos de academia.

O sistema implementa um **CRUD completo de treinos**, permitindo que o usuário:

- adicionar treinos
- editar treinos
- excluir treinos
- visualizar o histórico de treinos registrados

Projeto acadêmico desenvolvido para o curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Faculdade Impacta**.

---

# 👨‍💻 Autor

**Lucas Ryan Lima Malmagro - RA 2401867**

Projeto desenvolvido para fins educacionais.

---

# 📌 Objetivo da Funcionalidade

A funcionalidade de **gerenciamento de treinos** foi criada para permitir que o usuário registre e acompanhe sua rotina de exercícios.

O sistema permite armazenar informações detalhadas de cada treino realizado, facilitando o acompanhamento da evolução e organização da rotina de treinos.

Cada treino registrado pode conter:

- data do treino
- dia da semana
- tipo de treino
- foco do treino
- exercício realizado
- carga utilizada
- número de séries
- número de repetições
- tempo de descanso
- peso corporal
- altura
- observações adicionais

Além disso, o sistema registra automaticamente:

- **data de cadastro do treino**
- **data da última atualização do treino**

---

# 🚀 Funcionalidades Implementadas

### ➕ Adicionar treino

O usuário pode registrar um novo treino através do formulário disponível no dashboard.

Campos disponíveis no cadastro:

- Data do treino
- Dia da semana
- Tipo de treino
- Foco do treino
- Exercício
- Carga
- Séries
- Repetições
- Tempo de descanso
- Peso corporal
- Altura
- Observações

Após o cadastro, o treino é salvo no banco de dados PostgreSQL.

---

### ✏ Editar treino

Treinos já cadastrados podem ser editados diretamente pelo dashboard.

Ao clicar no botão **Editar**, o sistema:

- carrega os dados do treino no formulário
- permite alterar qualquer informação
- atualiza o registro no banco de dados
- registra automaticamente a **data de atualização**

---

### 🗑 Excluir treino

Treinos cadastrados podem ser removidos do sistema.

Ao clicar em **Excluir**, o sistema:

- exibe uma confirmação de exclusão
- remove o treino do banco de dados
- atualiza automaticamente a lista de treinos exibida

---

# 🧩 Arquitetura da Funcionalidade

A funcionalidade de treinos segue a arquitetura em **3 camadas**.

---

## Front-end

Responsável pela interface do usuário.

Arquivos disponíveis em:

[frontend](frontend)

Tecnologias utilizadas:

- HTML
- CSS
- JavaScript

Funcionalidades da interface:

- formulário de cadastro de treino
- listagem de treinos cadastrados
- edição de treinos
- exclusão de treinos
- histórico de treinos
- exibição de métricas de treino

---

## Back-end

Responsável pela lógica da aplicação e comunicação com o banco de dados.

Arquivos disponíveis em:

[backend](backend)

Tecnologias utilizadas:

- Node.js
- Express

Responsabilidades:

- criação de treinos
- atualização de treinos
- exclusão de treinos
- listagem de treinos do usuário
- autenticação e proteção de rotas

---

## Banco de Dados

Responsável pelo armazenamento persistente das informações.

Scripts disponíveis em:

[banco](banco)

Tecnologia utilizada:

- PostgreSQL

---

# 🗄 Estrutura da Tabela de Treinos

A tabela principal utilizada para essa funcionalidade é:

```
treinos
```

Principais campos da tabela:

- id
- usuario_id
- data_treino
- dia_da_semana
- tipo_de_treino
- foco_do_treino
- exercicio
- carga
- series
- repeticoes
- tempo_descanso
- peso_corporal
- altura
- observacoes
- data_registro
- data_atualizacao

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
- pgAdmin

---

# 📁 Estrutura do Projeto

```
powergym
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── trainingController.js
│   │   │
│   │   ├── routes
│   │   │   └── trainingRoutes.js
│   │   │
│   │   └── server.js
│
├── frontend
│   ├── assets
│   │   └── logo-powergym.png
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── dashboard.js
│   │   └── trainings.js
│   │
│   └── dashboard.html
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

Exemplo de consulta para visualizar os treinos cadastrados:

```sql
SELECT
    u.nome AS usuario,
    t.data_treino,
    t.dia_da_semana,
    t.tipo_de_treino,
    t.foco_do_treino,
    t.exercicio,
    t.carga,
    t.series,
    t.repeticoes,
    t.tempo_descanso,
    t.peso_corporal,
    t.altura,
    t.observacoes,
    t.data_registro,
    t.data_atualizacao
FROM treinos t
JOIN usuarios u ON t.usuario_id = u.id
ORDER BY t.data_treino DESC;
```

---

# 📡 Rotas da API

### Criar treino

```
POST /treinos
```

---

### Listar treinos

```
GET /treinos
```

---

### Atualizar treino

```
PUT /treinos/:id
```

---

### Excluir treino

```
DELETE /treinos/:id
```

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
