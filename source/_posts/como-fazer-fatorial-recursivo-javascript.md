---
title: Como fazer função fatorial recursiva - Javascript
date: 2020-09-28 07:19:06
tags:
  - Front-end
  - Javascript
postKeywords: recursive fatorial javascript, javascript fatorial, javascript como fazer fatorial, how to fatorial js, js recursivo
postDescription: Criar uma função que calcule o fatorial é algo frequentemente pedido em exercícios de lógica. Para criar então em Javascript é uma atividade muito fácil a ser realizada! Vamos utilizar recursão para deixar o nosso código mais enxuto possível!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Criar uma função que calcule o fatorial é algo frequentemente pedido em exercícios de lógica.
Para criar então em Javascript é uma atividade muito fácil a ser realizada!
Vamos utilizar recursão para deixar o nosso código mais enxuto possível!

<!-- more -->

Primeiramente, vamos entender como funciona o fatorial, por exemplo, fatorial de 5:

```sh
5! = 5 * 4 * 3 * 2 * 1 = 120
```

Vamos agora converter essa lógica para o Javascript:

```javascript
const fatorial = (numero) => {
  if (numero < 0) {
    return false;
  }
  return numero === 0 ? 1 : numero * fatorial(numero - 1);
};

fatorial(5);
// Resultado esperado: 120
```

Com essa função, podemos retornar o resultado fatorial de qualquer número em algumas poucas linhas!
Poderíamos diminuir ainda mais, deixando o `if` em uma linha só:

```javascript
const fatorial = (numero) => {
  if (numero < 0) return false;
  return numero === 0 ? 1 : numero * fatorial(numero - 1);
};

fatorial(5);
// Resultado esperado: 120
```

Super simples realizar a função fatorial recursiva com Javascript, não é?

🏡
