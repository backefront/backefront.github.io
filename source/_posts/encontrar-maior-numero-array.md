---
title: Como encontrar o maior número de um array javascript
date: 2019-03-11 07:30:07
tags:
- Front-end
- Javascript
postKeywords: Maior numero js, highest number array js, js maior numero, js array maior
postDescription: Encontrar o maior elemento em uma lista com o JavaScript é uma tarefa extremamente simples e rápida, com a ajuda do nosso amigo Spread Operator! Com ele, em uma linha de código conseguimos resolver esta questão!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Encontrar o maior elemento em uma lista com o JavaScript é uma tarefa extremamente simples e rápida, com a ajuda do nosso amigo **Spread Operator**! Com ele, em uma linha de código conseguimos resolver esta questão! Olha como é fácil: 

<!-- more -->

Temos a seguinte lista com os números:

```javascript
const numeros = [12, 20, 8, 2, 1, 39, 45];
```

E agora para retornar apenas o maior número, usamos a função `max` do objeto `Math` do Javascript, da seguinte forma:

``` javascript
Math.max(...numeros);
console.log(classe);
// Resultado esperado: 45
```
