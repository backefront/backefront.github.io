---
title: Como verificar se um número é primo ou não com Javascript
date: 2020-01-20 08:28:01
tags:
  - Front-end
  - Javascript
postKeywords: prime js, primo js, verificar numero primo js, js, front-end, teste logica numero primo
postDescription: Por definição, temos que um número primo é aquele número onde ele é divisível apenas por 1 e por ele mesmo. Como exemplo, os primeiros números primos são 2, 3, 5, 7 e assim por diante. Um exercício de lógica muito comum pedido é verificar se um dado número é primo ou não. Você sabe como verificar se um número é primo ou não, utilizando Javascript?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Por definição, temos que um número primo é aquele número onde ele é divisível apenas por 1 e por ele mesmo.
Como exemplo, os primeiros números primos são: 2, 3, 5, 7 e assim por diante.

Um exercício de lógica muito comum pedido é verificar se um dado número é primo ou não.
Você sabe então, como validar, utilizando Javascript?

<!-- more -->

Para verificar, podemos utilizar um algoritmo bem curto:

```javascript
const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};
```

Com essa simples função, conseguimos verificar se o número é primo ou não! Esse tipo de questão é muitas das vezes pedido em testes de entrevistas, provas de faculdades, ou até mesmo, em alguma determinada situação em nossos trabalhos!
