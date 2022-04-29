---
title: Resolvendo conexão privada no Chromium - teste end-to-end
date: 2022-04-28 07:31:11
tags:
  - Front-end
  - Javascript
postKeywords: your connection is not private puppeteer, chromium private connection, private connection js, endtoend test, chromium, puppeteer, frontend, javascript
postDescription: Veja como solucionar o problema de conexão privada ao rodar testes com Jest.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Enquanto estava realizando alguns testes end-to-end com Puppeteer, me deparei com um problema que no instante que o Chromium abria, aparecia erro de "Sua conexão não é privada" (Your connection is not private)

Então procurando a respeito, encontrei a solução para esse problema de conexão privada para o chromium, com o puppeteer:

<!-- more -->

```javascript
const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
```

Com essa configuração, quando abrimos o navegador, ele ignora erros HTTPs, como é o caso da conexão!


