# 📋🎓 Cadastro de Alunos (React, Node.js, SQLite) 

## 📝 Descrição

Este projeto é uma aplicação web completa que permite o gerenciamento de alunos. O frontend é construído com React (usando Vite) para uma interface de usuário responsiva. O backend utiliza Node.js com Express para a API e persiste os dados em um banco de dados SQLite.

As funcionalidades incluem:

*   Cadastro de alunos (com nome, email e curso) através de um formulário. ➕
*   Listagem de todos os alunos cadastrados. 📖
*   Remoção de alunos existentes. 🗑️

## 💻 Configuração Local (Opcional)

Se você preferir rodar o projeto sem Docker, siga estes passos:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/gusttazy/fullstack-app
    cd seu-projeto # Substitua 'seu-projeto' pelo nome da pasta do seu projeto clonado ou extraído
    ```

2.  Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    # ou yarn install, se usar yarn
    ```

3.  Instale as dependências do frontend:
    ```bash
    cd ../frontend
    npm install
    # ou yarn install, se usar yarn
    ```

4.  Configure variáveis de ambiente se necessário (por exemplo, no backend, se não usar SQLite).

## 🐳 Como Rodar com Docker

A maneira recomendada de rodar este projeto é usando Docker Compose. Certifique-se de ter o Docker e o Docker Compose instalados na sua máquina.

1.  Navegue até a raiz da pasta do seu projeto no terminal:
    ```bash
    cd /caminho/para/sua/pasta/seu-projeto # Substitua '/caminho/para/sua/pasta/seu-projeto' pelo caminho real da pasta do seu projeto
    ```

2.  Construa as imagens e inicie os serviços:
    ```bash
    docker-compose up --build
    ```

Este comando construirá as imagens Docker para o backend e frontend (se ainda não existirem ou se houver mudanças nos Dockerfiles/código) e iniciará os containers.

## 🌐 Acesso à Aplicação

Após os containers estarem rodando:

*   **Backend:** Disponível em `http://localhost:3000` 🚀
*   **Frontend:** Disponível em `http://localhost:3001` ✨

Abra seu navegador e acesse `http://localhost:3001` para ver o frontend em funcionamento. 🎉
