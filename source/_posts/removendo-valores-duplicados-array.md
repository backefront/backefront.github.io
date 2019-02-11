---
title: Como remover valores duplicados em um array Javascript
date: 2019-02-18 07:35:45
tags: 
- Javascript
- Front-end
postKeywords: remover duplicados js, tirar valores iguais js, remover iguais js, remove duplicated js, duplicados
postDescription: Veja como é fácil remover valores duplicados em um array, no javascript, com o ES6!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou remover elementos repetidos dentro de um array e não sabia como fazer isso? Com o ES6, temos uma maneira bem divertida de fazer isso! Olha como é fácil:

```javascript
const array = [1, 5, 3, 3, 1, 6, 7, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const novoArray = [ ...new Set( array ) ];
console.log(novoArray);
// Esperado: [1, 5, 3, 6, 7, 2, 4]
```

Desta forma, os números repetidos são removidos e não precisamos nos preocupar em construir uma lógica para fazer isso! Muito rápido, não é mesmo?