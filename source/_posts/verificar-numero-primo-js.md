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
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Por definição, temos que um número primo é aquele número onde ele é divisível apenas por 1 e por ele mesmo.
Como exemplo, os primeiros números primos são: 2, 3, 5, 7 e assim por diante.

Um exercício de lógica muito comum pedido é verificar se um dado número é primo ou não.
Você sabe como verificar se um número é primo ou não, utilizando Javascript?

<!-- more -->

Com o Javascript, conseguimos verificar se o número é primo ou não utilizando um algoritmo bem curto:

```javascript
const isPrime = (num) => {

  for(let i = 2; i < num; i++)
    if(num % i === 0) {
        return false
    };
  return num > 1;
}
```

Com essa função, conseguimos verificar se o número é primo ou não!
Bem simples, não é mesmo?