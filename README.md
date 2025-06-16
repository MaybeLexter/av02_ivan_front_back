# 🧛‍♂️🧛‍♂️🧛‍♂️ Sistema de Cadastro de Vampiros🧛‍♂️🧛‍♂️🧛‍♂️

Sistema completo de autenticação e gerenciamento de vampiros, com integração entre Vue 3 (Composition API) + Vuetify + Firebase Auth + Express.js + MySQL.
Feito para a disciplina de Frameworks Modernos para Desenvolvimento de Sistemas — UNEMAT – Campus Sinop.

Tema: CRUD Vampiros
👨‍🏫 Professor: Ivan

---

## O que usei

| Camada   | Tecnologia                 |
| -------- | -------------------------- |
| Frontend | Vue 3 + Composition API    |
|          | Vuetify 3 (UI)             |
|          | Pinia (Estado)             |
|          | Firebase Authentication    |
|          | Vite + Bun                 |
| Backend  | Express.js + Bun           |
|          | MySQL (Banco de Dados)     |
|          | firebase-admin (token JWT) |

---

## Funcionalidade

✔️ Autenticação com Google (Firebase)
✔️ CRUD completo de vampiros
✔️ Interface temática vampiresca
✔️ Backend protegido com token JWT
✔️ Banco de dados MySQL local
✔️ Estrutura modular: routes, controllers, services
✔️ Layout responsivo com Vuetify
✔️ Projeto separado em frontend e backend

---

## Estrutura das pasta

```
vampiros-app/
├── frontend/           
│   ├── views/          
│   ├── stores/         
│   ├── plugins/        
│   ├── router/         
│   ├── firebase.js     
│   └── main.js
├── backend/            
│   ├── config/         
│   ├── controllers/   
│   ├── routes/         
│   ├── middlewares/    
│   ├── index.js        
│   └── .env
├── README.md
```

---

## Como Executar o Projeto

Pre-requisitoss: Node.js + Bun + MySQL local + Conta Firebase

1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/vampiros-app.git
cd vampiros-app
```

2. Crie o banco de dados MySQL

Execute (banco na porta 3306, padrao MySQL)

```sql
CREATE DATABASE vampiros_db;
USE vampiros_db;
CREATE TABLE vampiros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  idade INT,
  cla VARCHAR(255)
);
```

3. Configurar Firebase

* Vá para [https://console.firebase.google.com](https://console.firebase.google.com)
* Crie um projeto
* Ative o método de login com Google
* Pegue as credenciais e preencha em frontend/src/firebase.js

4. Configurar firebase-admin (opcional)

Se for usar autenticação JWT:

* Vá em Firebase > Configurações > Contas de Serviço
* Baixe o credentials.json
* Salve em backend/firebase/credentials.json

5. Frontend

```bash
cd frontend
bun install
bun dev
```

6. Backend

```bash
cd backend
bun install
bun index.js
```

---

## Testar Funcionalidades

Acesse [http://localhost:5173](http://localhost:5173)

* Faça login com Google
* Crie vampiros
* Edite e delete vampiros
* A lista é carregada do banco MySQL via API REST

---

## A

Uso acadêmico - UNEMAT (2025)
Disciplina: Frameworks Modernos para Desenvolvimento de Sistemas
Professor: Ivan

—
