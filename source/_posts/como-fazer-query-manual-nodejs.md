---
title: Como criar query manual com nodejs postgres
date: 2020-08-31 08:43:52
tags:
  - Front-end
  - Javascript
  - Nodejs
postKeywords: nodejs postgres, node query manual, fazer consulta nodejs, consulta propria postgres, select nodejs postgres, select banco, front-end, nodejs, postgres, sequelize, query manual, node-postgres
postDescription: Enquanto desenvolvemos aplicações com NodeJS e Postgres, é comum usarmos ORM para facilitar o nosso desenvolvimento, como por exemplo, Sequelize. O Sequelize nos fornece uma forma rápida e fácil de consultarmos dados em nosso banco, sem muitas preocupações! Mas como fazemos, quando a consulta que o Sequelize está fazendo é muito complexa ou é inviável fazer por ele? Podemos fazer nossas próprias consultas! Para isso usaremos um cara chamado Node-Postgres
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Enquanto desenvolvemos aplicações com NodeJS e Postgres, é comum usarmos ORM para facilitar o nosso desenvolvimento, como por exemplo, Sequelize.
O Sequelize nos fornece uma forma rápida e fácil de consultarmos dados em nosso banco, sem muitas preocupações!
Mas como fazemos, quando a consulta que o Sequelize está fazendo é muito complexa ou é inviável fazer por ele?

Podemos fazer nossas próprias consultas! Para isso usaremos um cara chamado [Node-Postgres](https://node-postgres.com/)

<!-- more -->

Node-postgres nada mais é que uma API que nos permite conectar diretamente no banco de dados e executar nossas queries como se estivéssemos em nosso SGBD.
Vamos ver como usá-lo?

```cmd
npm install pg
```

Agora instalado, precisamos nos conectar ao banco de dados:

```js
const { Client } = require("pg");

const client = new Client({
  user: "dbuser",
  host: "database.server.com",
  database: "mydb",
  password: "secretpassword",
  port: 3211,
});
client.connect();
```

Feito isso, temos uma conexão aberta!
E como fazer uma consulta simples?

```js
client
  .query("SELECT * from CLIENTS")
  .then((res) => console.log(res.rows[0]))
  .catch((e) => console.error(e.stack));
```

Fácil não é mesmo?
Agora é só juntar todo seu conhecimento com banco de dados e mandar bala em suas consultas!
