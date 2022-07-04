---
title: Metodo at, encontrando o último elemento - ES2022
date: 2018-12-31 07:16:00
tags:
  - Front-end
  - Javascript
postKeywords: at js, es2022, ecmascript 2022, features 2022 ecmascript, ultimo elemento js, pegar ultimo item, ultimo, js, frontend
postDescription: Neste post, irei mostrar o novo método "at", adicionado no Ecma2022 para facilitar nossas vidas!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma coisa que normalmente precisamos fazer em nosso desenvolvimento diário é pegar o último elemento de um `array` ou uma `String`.
Atualmente (2022) para realizar isso, fazemos da seguinte forma:

```javascript
const arrayFrutas = ['banana', 'maçã', 'laranja', 'goiaba'];
console.log(arrayFrutas[arrayFrutas.length -1])
// Saída: goiaba

const fruta = 'mexerica';
console.log(fruta[fruta.length -1])
// Saída: a
```

Mas agora, com o novo método implementado na versão do `ECMAScript 2022`, podemos procurar por index negativo! Igual fazemos com Python

<!-- more -->

Para isso, fazemos da seguinte maneira:

```

```javascript
const arrayFrutas = ['banana', 'maçã', 'laranja', 'goiaba'];
console.log(arrayFrutas.at(-1))
// Saída: goiaba

const fruta = 'mexerica';
console.log(fruta.at(-1))
// Saída: a
```

Super mais prático, não é mesmo?
