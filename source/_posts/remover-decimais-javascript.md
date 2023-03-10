---
title: Remover decimais com Javascript
date: 2022-03-24 07:16:00
tags:
  - Front-end
  - Javascript
postKeywords: remover decimal js, decimal js, parse int number js, javascript, frontend, remover, decimal
postDescription: Veja  como é fácil remover decimais com Javascript
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já ouviu falar do método `trunc` de `Math`?
Ele remove as casas decimais, sem modificar em nada o número que está a frente!

Olha como é simples:

```javascript
const number = 24.54;

const newNumber = Math.trunc(number);
// Output: 24
```

Muito simples né? Esse método só não funciona para IE (mas se nem a Microsoft dá mais suporte pra ele, quem sou eu pra dar né? 🤪)
