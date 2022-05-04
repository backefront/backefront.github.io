---
title: Como descobrir se um valor está presente em um array javascript
date: 2019-06-03 07:00:54
tags:
  - Front-end
  - Javascript
postKeywords: verificar string array, valor em array, achar numero array, array possui valor
postDescription: Você já precisou verificar se uma determinada palavra está presente em um array? Ou algum número? Em nosso querido ECMAScript 2016, temos um método chamado includes, o qual faz toda a mágica acontecer!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou verificar se uma determinada palavra está presente em um array?
Ou algum número?

Em nosso querido ECMAScript 2016, temos um método chamado `includes()`, o qual faz toda a mágica acontecer!

De acordo com a especificação, o método verifica se um determinado valor está incluso nos valores dentro do array.

Vamos analisar o exemplo abaixo:

<!-- more -->

```javascript
let array = [5, 4, 7];

console.log(array.includes(4));
// Retorno: true
```

E também funciona perfeitamente com strings:

```javascript
let array = ["Victor", "Igor", "Melanie"];

console.log(array.includes("Roberto"));
// Retorno: false
```

Este método pode ser de grande ajuda no desenvolvimento de uma autenticação por role, isto é, o tipo de perfil do usuário.
Por exemplo:

```javascript
let usuario = { nome: "Victor", idade: "23", role: ["STUDENT"] };

if (usuario.role.includes("ADMIN")) {
  // código destinado para usuarios do tipo admin
}
```
