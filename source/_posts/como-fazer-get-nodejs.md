---
title: Como fazer uma rota de GET no NodeJS
date: 2020-02-17 07:33:05
tags:
- Javascript
- NodeJS
- Front-end
postKeywords: get all nodejs, get node, get by id node, parametro url node, como acessar parametro url node, nodejs, front-end, javascript, api node tutorial
postDescription: Continuando a série sobre API NodeJS, hoje irei mostrar como podemos construir uma rota GET All projects e também como podemos fazer para retornar um projeto de um id específico
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Continuando a série sobre NodeJS, hoje irei mostrar como podemos fazer uma rota de GET com ele!
Caso tenha perdido, você pode ler sobre como criar uma rota de POST [neste link aqui](https://backefront.com.br/como-fazer-post-nodejs/)

Em nosso arquivo `index.js` iremos criar então as configurações desta nova rota:

<!-- more -->

```javascript
const express = require('express');

const server = express();
server.use(express.json());

/**
 * A variável `projects` pode ser `const` porque um `array`
 * pode receber adições ou exclusões mesmo sendo uma constante.
 */
const projects = [
  {id: 1, title: "Um novo post"}
];

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.listen(4000);
```

A nossa rota GET é bem simples, ela irá nos retornar todos os projetos que armazenamos.
Se testarmos a nossa rota criada anteriormente, fazendo um POST e depois requisitarmos todos os projetos através desta nova rota, devemos ver o projeto recém criado!

Mas como faríamos se quiséssemos pegar um ID vindo da URL para fazer a consulta? 
Não mudaria muito, a diferença que usaríamos os parâmetros de rota:

```javascript

const projects = [
  {id: 1, title: "Um novo post"}
];

/**
 * Aqui definimos que depois de projects
 * teremos um valor que será enviado na URL
 * e o chamamos de ID.
 */
server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.find(project => project.id == id);

  return res.json(projects);
});

server.listen(4000);
```

Com isso, pegamos o ID vindo da URL e buscamos em todos os projetos, retornando apenas o projeto que for igual ao ID enviado!
Simples não é mesmo?

🏡