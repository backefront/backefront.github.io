---
title: Como fazer POST no NodeJS
date: 2020-02-10 09:36:03
tags:
- Front-end
- NodeJS
postKeywords: API Node, Nodejs, POST NodeJS, criar server node, api em node, como fazer node api
postDescription: Neste post, irei mostrar os primeiros passos para construção de uma API em NodeJS! Usaremos o express para configurar nossa primeira rota POST!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando falamos de desenvolvimento de um sistema logo nos vem na cabeça consumo de API, integração com back-end, etc.

Back-end é o que temos por trás de nossa aplicação, é onde estará concentrada a lógica do sistema, onde ocorrerá a comunicação entre o front-end com o banco de dados.
Neste post, vamos mostrar como criar um POST com NodeJS!

<!-- more -->

NodeJS é uma tecnologia que podemos utilizar como back-end, que usa o Javascript como síntaxe.

Vamos criar então, a nossa primeira API! 

Na pasta onde deseja guardar o projeto, vamos iniciar um projeto novo, rodando:

```cmd
yarn init -y
```
Ou caso esteja usando NPM:
```cmd
npm init -y
```

Agora temos nosso arquivo `package.json` criado, vamos instalar a dependência `express`:

```cmd
npm install express

// ou

yarn add express
```

Agora sim, temos tudo pronto para iniciarmos! Vamos criar um arquivo chamado `index.js` e adicionaremos o seguinte trecho de código:

```javascript
const express = require('express');

const server = express();
server.use(express.json());
server.listen(4000);
```

Feito isso, se rodarmos em nosso terminal `node index.js`, já teremos nosso servidor sendo executado!

Vamos deixar um objeto mockado, representando o nosso banco de dados

```javascript
const express = require('express');

const server = express();
server.use(express.json());

/**
 * A variável `projects` pode ser `const` porque um `array`
 * pode receber adições ou exclusões mesmo sendo uma constante.
 */
const projects = [];

server.listen(4000);
```

Agora, vamos criar a nossa rota POST!

```javascript
// Código anterior

/**
 * Request body: id, title
 * Cadastra um novo projeto
 */
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title
  };

  projects.push(project);

  return res.json(project);
});

```

Nesta rota, devemos passar dentro do body `id` e `title`!
Como podemos testar? Vamos usar o [Insomnia](https://insomnia.rest/)

Para testar nossa rota, devemos criar uma nova requisição do tipo POST, alterar a URL e adicionarmos nosso body, o que deve ficar da seguinte forma:

![POST - Cadastrar projetos](/posts/insomnia.png)

Pronto! Nossa primeira rota POST foi criada com sucesso! 
Nos próximos posts, falarei sobre os outros métodos e como podemos criá-los na nossa API!