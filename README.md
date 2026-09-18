# Task Management

> Sistema web para gerenciamento de tarefas desenvolvido como teste técnico Full Stack.

Task Management é uma aplicação para organização pessoal ou corporativa de tarefas. A solução combina um front-end moderno em React com uma API REST em Node.js/Express e persistência em PostgreSQL.

## Funcionalidades

- Listagem de tarefas
- Criação de tarefas
- Edição de tarefas
- Alteração de status
- Exclusão com confirmação
- Filtro por status
- Filtro por prioridade
- Ordenação
- Feedback de carregamento
- Feedback de sucesso
- Feedback de erro
- Validação de formulário
- UX com toasts e mensagens visuais

## Tecnologias

### Front-end

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](#)

### Back-end

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)

### Banco de dados

[![Postgres](https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white)](#)

### Infraestrutura

[![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=000)](#)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-FF4A03?logo=Cloudflare-Pages&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)](#)

## Arquitetura

```text
Frontend (React + Vite + Tailwind)
            ↓
       REST API (Node.js + Express)
            ↓
      Banco de dados (PostgreSQL)
```

## Decisões técnicas
- React + TypeScript: utilizados para construção da interface e organização do código do front-end.
- Vite: utilizado como ferramenta de desenvolvimento e build do front-end.
- Tailwind CSS: utilizado para estilização e construção de uma interface responsiva.
- Node.js + Express: utilizados para construção da API REST.
- PostgreSQL: utilizado como banco de dados relacional para garantir a persistência das tarefas.
- Separação entre front-end, API e banco: permite manter responsabilidades bem definidas entre as camadas da aplicação.
- API como fonte dos dados: todas as operações de criação, leitura, atualização e exclusão são realizadas por meio da API e persistidas no banco.
- Feedback visual: estados de carregamento, sucesso e erro foram implementados para melhorar a experiência do usuário.
- Filtros e ordenação: disponibilizados na interface para facilitar a organização e visualização das tarefas.

### Variáveis de Ambiente

VITE_API_URL: Url do backend da aplicação, ela deve ficar em um arquivo env na pasta do frontend
DATABASE_URL: Ela deve ficar no backend, é responsável pela conexão com o banco

### Front-end

Provedor: Cloudflare Workers

URL:
https://tasks-crud-k4sw.gsilva12401321.workers.dev/

### API
Provedor: Render

A aplicação disponibiliza uma API REST para gerenciamento das tarefas.

- GET	/api/tasks -	Lista todas as tarefas
- GET	/api/tasks/:id -	Busca uma tarefa pelo ID
- POST	/api/tasks -	Cria uma nova tarefa
- PUT	/api/tasks/:id -	Atualiza uma tarefa
- DELETE	/api/tasks/:id -	Remove uma tarefa

### Banco de dados
Provedor: Neon

URL:
https://crud-tasks-managment-k4sw.onrender.com/

## Deploy

A aplicação foi disponibilizada em ambiente cloud para avaliação.

## Execução manual

1. Clone o repositório
git clone https://github.com/Guilh3rme-August0-bs/CRUD-tasks-managment-k4sw.git
cd CRUD-tasks-managment-k4sw
2. Instale as dependências do back-end
cd backend
npm install
3. Configure as variáveis de ambiente do back-end

Crie os arquivos .env utilizando as variáveis mencionadas anterioremnete

4. Instale as dependências do front-end

Em outro terminal:

cd frontend
npm install

Crie também o arquivo .env do front-end, caso necessário.

5. Configure o banco de dados

Certifique-se de que o PostgreSQL esteja em execução e que a variável DATABASE_URL esteja configurada corretamente.

## Uso de IA

A ferramenta de IA utilizada foi o GitHub Copilot, as finalidades estão a seguir:

- auxílio na identificação e correção de problemas;
- sugestões de implementação;
- apoio na documentação do projeto;
- acelerar o desenvolvimento da interface usando autocomplete.
