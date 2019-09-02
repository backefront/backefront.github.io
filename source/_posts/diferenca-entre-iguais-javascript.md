---
title: Diferenca entre iguais no Javascript
date: 2019-04-01 07:00:44
tags: 
- Front-end
- Javascript
postKeywords: comparacao js, diferenca entre == e ===, == e === js, comparacao js, como comparar tipo js
postDescription: No começo de nosso aprendizado em javascript, é comum nos depararmos com algumas situações que causam dúvidas e até estramento, principalmente se o estudante estiver estudando alguma outra linguagem em paralelo ou já possui um conhecimento prévio de linguagem de programação, e uma desta dúvida é qual a diferença entre comparar algo com dois iguais ( == ) e com três iguais ( === )? No Javascript, tem uma diferença enorme entre esses dois tipos de comparações! Vamos ver?
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

No começo de nosso aprendizado em javascript, é comum nos depararmos com algumas situações que causam dúvidas e até estramento, principalmente se o estudante estiver estudando alguma outra linguagem em paralelo ou já possui um conhecimento prévio de linguagem de programação, e uma desta dúvida é: qual a diferença entre comparar algo com **dois iguais** ( == ) e com **três iguais** ( === )?
No Javascript, tem uma diferença enorme entre esses dois tipos de comparações! Vamos ver?

<!-- more -->

A comparação feita com === tem como objetivo comparar o **tipo** e o **valor**. Isto quer dizer que, para que o retorno da comparação seja verdadeiro, precisa ser o mesmo tipo (string, number, boolean) e o valor o mesmo. Por exemplo:

```javascript

console.log(1 === 1);
// Retorno true

console.log(1 === '1');
// Retorno false, pois o tipo é diferente (number é diferente de string)
```

Já a comparação feita com == tem como objetivo comparar apenas o valor, ou seja, ignorando se o tipo do que está sendo comparado são iguais. Por exemplo: 

console.log(1 == 1);
// Retorno true

console.log(1 == '1');
// Retorno true
```