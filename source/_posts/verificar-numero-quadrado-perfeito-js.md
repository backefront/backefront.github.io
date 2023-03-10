---
title: Como verificar se um número é quadrado perfeito com Javascript
date: 2021-11-17 08:28:01
tags:
  - Front-end
  - Javascript
postKeywords: quadrado perfeito numero, javascript, square number, perfect square, js, front-end, teste logica numero quadrado perfeito
postDescription: A definição de um número quadrado perfeito pode ser entendida como um número natural inteiro positivo cuja raiz quadrada é, também, um número natural inteiro positivo. Mas como podemos verificar isso, usando o Javascript?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre, pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

A definição de um número quadrado perfeito pode ser entendida como: um número natural inteiro positivo cuja raiz quadrada é, também, um número natural inteiro positivo.

Assim temos: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...

Você sabe então, como validar, utilizando Javascript?

<!-- more -->

Para verificar, podemos utilizar um algoritmo bem curto:

```javascript
const isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
};
```

Com essa simples função, conseguimos verificar se o número é quadrado perfeito ou não!

Esse tipo de questão é muitas das vezes pedido em testes de entrevistas, provas de faculdades, ou até mesmo, em alguma determinada situação em nossos trabalhos!
