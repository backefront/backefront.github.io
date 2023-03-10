---
title: Como alterar o env no comando do package
date: 2022-11-08 07:31:11
tags:
  - Front-end
  - Javascript
postKeywords: env cmd, prod env cmd, qa env, env-cmd, como setar variaveis cmd, react prod, react qa
postDescription: Uma das coisas mais comuns em nosso desenvolvimento é a necessidade de rodar nossos projetos em ambientes diferentes, seja ele QA, Dev ou até mesmo apontar para PROD!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das coisas mais comuns em nosso desenvolvimento é a necessidade de rodar nossos projetos em ambientes diferentes, seja ele QA, Dev ou até mesmo apontar para PROD!
Seria extremamente chato se tivessémos que ficar alterando a URL em nosso arquivo `.env` toda vez que quiséssemos ver um diferente.

E é pensando nisso que hoje apresento para vocês um pacote que ajuda muito, o [env-cmd](https://www.npmjs.com/package/env-cmd)

<!-- more -->

Basta instalarmos:

```cmd
npm install env-cmd
```

E criarmos os arquivos `.env` que queremos
No caso, iremos usar 3:
- `.env.dev`
- `.env.qa`
- `.env.prod`

com esses arquivos criados, agora alteramos o nosso arquivo `package.json`:

```javascript
// ...package.json
  "scripts": {
    "dev": "env-cmd -f .env.dev react-scripts start", // adicionando Dev
    "dev:qa": "env-cmd -f .env.qa react-scripts start", // adicionando QA
    "dev:prod": "env-cmd -f .env.prod react-scripts start", // adicionando Prod
    "dev:3001": "PORT=3001 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "commit": "git add . && cz"
  },
```

Como pode ver, criamos 3 comandos diferentes e em cada um deles indicamos qual `env` gostaríamos de usar!
Fácil, não é?
