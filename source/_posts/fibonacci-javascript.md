---
title: Fibonacci no Javascript
date: 2020-10-05 07:36:07
tags:
  - Front-end
  - Javascript
postKeywords: fibonacci recursivo, fibonacci javascript, performance fibonacci, memorização javascript fibonacci, function fibo js, front-end, javascript, fibonacci algoritimo
postDescription: Que atire a primeira pedra quem nunca em uma aula de algoritmo se deparou com o famoso fibonacci. Fibonacci é uma sequência numérica em que cada número seguinte é somado aos dois números anteriores, começando por 0. Com o Javascript, podemos fazer esse algoritmo muito fácil, usando a recursividade, em poucas linhas resolvemos o problema
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Que atire a primeira pedra quem nunca em uma aula de algoritmo se deparou com o famoso fibonacci.
Fibonacci é uma sequência numérica em que cada número seguinte é somado aos dois números anteriores, começando por 0.
A fórmula então seria:

> Fn = (Fn - 1) + (Fn - 2)

Vamos ver como aplicar isso em um algoritmo Javascript?

<!-- more -->

Com o Javascript, podemos fazer esse algoritmo muito fácil, usando a recursividade, em poucas linhas resolvemos o problema

```javascript
const fibonacci = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};
```

Só que nem tudo são rosas...
Usar fibonacci recursivo tem um problema, aumentamos a complexidade do algoritmo ao pior caso.
Isto quer dizer que conforme formos aumentando os números, mais complexo fica e mais demorado o tempo de resposta é.
O tempo de resposta tornou-se exponencial!

Uma forma que podemos fazer para corrigir tal problema é a utilização de _memorização_
Ela é uma técnica usada para aumentar a velocidade de programas, armazenando os resultados de outra chamadas.

```javascript
const fibonacci = (num, memo) => {
  // Recebe os números anteriores
  // ou um novo objeto, se for a primeira vez
  memo = memo || {};

  // Verifica se já existe o
  // valor calculado anteriormente
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  // Caso realmente não tenha,
  // executa normalmente o código
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
};
```

Com essa pequena alteração, o ganho de performance é gigantesco!
Espero que tenham gostado!
