---
title: Como criar função que retorna o maior valor com Javascript
date: 2019-11-11 09:22:42
tags:
  - Front-end
  - Javascript
postKeywords: max value pure js, maior valor javascript, retorno maior js, maior, array maior, maior valor
postDescription: Veja como é rápido e fácil criar uma função em que retorne o maior número de um array com Javascript puro!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou, alguma vez, de uma função que retornasse o maior número em um array?
Com o Lodash, podemos utilizar a função **max**, mas você sabia que podemos fazer uma função que retorne
o maior valor com Javascript puro? Veja como é fácil!

<!-- more -->

Para fazermos uma função, como Javascript puro, que retorne o maior número de um array, podemos usar o seguinte código:

```javascript
const max = (nums) => (nums.length ? Math.max(...nums) : undefined);

max([7, 10, 1, 8, 15]);
// Retorno esperado: 15

max([]);
// Retorno esperado: undefined
```

De uma maneira bem simples, resolvemos o problema de retornar o maior número, sem a necessidade de importarmos uma biblioteca extra!
