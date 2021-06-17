---
title: Como adicionar uma propriedade em objeto JS dinamicamente 
date: 2021-06-17 07:30:00
tags:
  - Front-end
  - Javascript
postKeywords: adicionar dinamicamente propriedade objeto, dynamic object, verificação objeto js, validar objeto, if object js, javascript, front-end
postDescription: Veja como é fácil adicionar uma propriedade dinamicamente em um objeto com Javascript, sem if!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Certa vez, enquanto estava fazendo integração em um determinado endpoint, tinha certas propriedades que eu não podia enviar dentro do payload caso o valor fosse vazio.

Pensando nisso, poderíamos fazer diversos IF, verificando se existe valor naquela propriedade ou não, e assim adicionar.
Mas sabia que podemos montar um objeto de uma só vez, verificando isso diretamente?

<!-- more -->

```javascript
const condition = true;
const person = {
  id: 1,
  name: 'John Doe',
  ...(condition && { idade: 16 }),
};
```

Dessa forma, montamos nosso objeto da forma que queremos, de maneira condicional, adicionado uma propriedade ao objeto apenas se cumprir os requisitos!
