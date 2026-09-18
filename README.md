# Task Management

> Sistema web para gerenciamento de tarefas desenvolvido como teste técnico Full Stack.

O **Task Management** é uma aplicação web para gerenciamento de tarefas, permitindo criar, visualizar, editar, atualizar o status e excluir tarefas.

A solução é composta por um front-end desenvolvido em **React + TypeScript**, uma **API REST em Node.js + Express** e persistência de dados em **PostgreSQL**.

## Funcionalidades

* Listagem de tarefas
* Criação de tarefas
* Edição de tarefas
* Alteração de status
* Exclusão de tarefas com confirmação
* Filtro por status
* Filtro por prioridade
* Ordenação de tarefas
* Validação de formulário
* Feedback de carregamento
* Feedback de sucesso e erro
* Notificações visuais (toasts)
* Interface responsiva

## Tecnologias

### Front-end

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react\&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css\&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=fff)](#)

### Back-end

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js\&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express\&logoColor=%2361DAFB)](#)

### Banco de dados

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?logo=postgresql\&logoColor=white)](#)

### Infraestrutura

[![Render](https://img.shields.io/badge/Render-46E3B7?logo=render\&logoColor=000)](#)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare%20Workers-F38020?logo=cloudflare\&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker\&logoColor=fff)](#)

## Arquitetura

```text
                Front-end
          React + TypeScript
          Vite + Tailwind CSS
                   │
                   ▼
               REST API
          Node.js + Express
                   │
                   ▼
             PostgreSQL
```

O front-end se comunica exclusivamente com a API REST para realizar as operações de criação, consulta, atualização e exclusão das tarefas.

## Decisões técnicas

* **React + TypeScript:** utilizados na construção da interface, proporcionando componentização e tipagem durante o desenvolvimento.
* **Vite:** utilizado para desenvolvimento e build do front-end.
* **Tailwind CSS:** utilizado para estilização e construção de uma interface responsiva.
* **Node.js + Express:** utilizados na construção da API REST.
* **PostgreSQL:** utilizado como banco de dados relacional para persistência das tarefas.
* **Separação de responsabilidades:** front-end, API e banco de dados são mantidos em camadas distintas.
* **API como fonte dos dados:** as operações realizadas pela interface são processadas pela API e persistidas no banco de dados.
* **Feedback de interface:** estados de carregamento, sucesso e erro foram implementados para fornecer retorno visual durante as operações.
* **Filtros e ordenação:** implementados para facilitar a localização e organização das tarefas.

## Variáveis de ambiente

### Front-end

Crie um arquivo `.env` dentro da pasta `frontend`:

```env
VITE_API_URL=http://localhost:3000
```

`VITE_API_URL` define a URL utilizada pelo front-end para acessar a API.

### Back-end

Crie um arquivo `.env` dentro da pasta `backend`:

```env
DATABASE_URL=sua_string_de_conexao
```

`DATABASE_URL` contém a string de conexão utilizada pela API para acessar o banco PostgreSQL.

Um arquivo `.env.example` também está disponível no projeto como referência para configuração das variáveis.

## Aplicação publicada

### Front-end

**Provedor:** Cloudflare Workers

**URL:**
https://tasks-crud-k4sw.gsilva12401321.workers.dev/

### API

**Provedor:** Render

A aplicação disponibiliza uma API REST para gerenciamento das tarefas.

#### Endpoints

| Método | Endpoint         | Descrição                |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/tasks`     | Lista todas as tarefas   |
| GET    | `/api/tasks/:id` | Busca uma tarefa pelo ID |
| POST   | `/api/tasks`     | Cria uma nova tarefa     |
| PUT    | `/api/tasks/:id` | Atualiza uma tarefa      |
| DELETE | `/api/tasks/:id` | Remove uma tarefa        |

### Banco de dados

**Provedor:** Neon

O banco PostgreSQL é utilizado para persistência dos dados da aplicação.

## Deploy

A aplicação foi disponibilizada em ambiente cloud para permitir a avaliação do projeto sem necessidade de configuração local.

* **Front-end:** Cloudflare Workers
* **API:** Render
* **Banco de dados:** Neon

## Execução local

### 1. Clone o repositório

```bash
git clone https://github.com/Guilh3rme-August0-bs/CRUD-tasks-managment-k4sw.git

cd CRUD-tasks-managment-k4sw
```

### 2. Instale as dependências do back-end

```bash
cd backend
npm install
```

Configure o arquivo `.env` utilizando o `.env.example` como referência.

### 3. Configure o banco de dados

Certifique-se de possuir uma instância PostgreSQL disponível e configure a variável `DATABASE_URL` com a string de conexão correspondente.

Caso o projeto possua scripts de inicialização ou criação das tabelas, execute-os conforme definido no `package.json`.

### 4. Inicie o back-end

```bash
npm run dev
```

### 5. Instale as dependências do front-end

Em outro terminal:

```bash
cd frontend
npm install
```

Configure o arquivo `.env` utilizando o `.env.example` como referência.

### 6. Inicie o front-end

```bash
npm run dev
```

Após a inicialização, acesse a URL informada pelo Vite no terminal.

## Uso de IA

Durante o desenvolvimento foi utilizado o **GitHub Copilot** como ferramenta de apoio.

Seu uso esteve concentrado em:

* sugestões de implementação;
* auxílio na identificação e correção de problemas;
* autocomplete durante o desenvolvimento;
* apoio na documentação do projeto.

A ferramenta foi utilizada como recurso de assistência durante o desenvolvimento, com revisão e validação das sugestões antes de sua utilização no projeto.
