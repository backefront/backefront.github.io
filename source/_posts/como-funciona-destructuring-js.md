---
title: Como funciona o destructuring no Javascript
date: 2018-12-24 07:30:00
tags:
  - Front-end
  - Javascript
postKeywords: destructuring js, como usar destructuring, o que é destructuring js, o que é destructuring, como posso usar destructuring, destruct js
postDescription: A utilização do destructuring do Javascript permite que nosso código se torne mais elegante e legível!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

## O que é destructuring?

_Destructuring_ (desestruturação) é uma expressão no Javascript que possibilita ao usuário "desempacotar" valores de um array ou propriedades de objetos, em variáveis diferentes!
Com ele, conseguimos criar um código mais legível, mais estruturado e fácil de dar manutenção!

Sem este conceito, caso quiséssemos acessar os três valores de um array, teríamos que fazer algo desta forma:

```javascript
const array = ["Um", "Dois", "Três"];

let primeiro = array[0];
let segundo = array[1];
let terceiro = array[2];
```

Agora, se formos reescrever o mesmo código, utilizando o **destructuring**:

<!-- more -->

```javascript
const array = ["Um", "Dois", "Três"];

let [primeiro, segundo, terceiro] = array;
```

Muito mais simples, não é mesmo?

## Hora de desestruturar tudo!

Com esta mesma sintaxe, conseguimos fazer muito mais coisas! Vamos mostrar algumas coisas legais que conseguimos fazer com ele:

**- Pular itens**
Passando vírgula, conseguimos pular quantos elementos quisermos e capturar o restante.

```javascript
let [, , terceiro] = [1, 2, 3];
console.log(terceiro); // "terceiro"
```

**- Capturar um elemento em uma variável e o resto em outra**
Combinando com o operador spread (os três pontinhos), conseguimos associar quantos itens quisermos e associamos o restante à última variável após os três pontos.

```javascript
let [item, ...resto] = [1, 2, 3, 4, 5];
console.log(item); // 1
console.log(resto); // [2, 3, 4, 5]
```

**- Simplifica quando a propriedade e o valor têm nomes iguals**
Conseguimos simplificar a escrita do código quando a propriedade e o nome da variável são iguais:

```javascript
let { nome, sobrenome } = { nome: "Victor", sobrenome: "Jordan" };
console.log(nome); // 'Victor'
console.log(sobrenome); // 'Jordan'
```

**- Valor _default_**
Você pode definir um valor padrão, no caso do valor desempacotado seja `undefined`:

```javascript
let [a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

**- Troca de variáveis**
Com o destructuring, duas variáveis podem ter seus valores trocados, sem a necessidade de uma variável auxiliar!

```javascript
let a = 4;
let b = 7;
[a, b] = [b, a];
console.log(a); // 7
console.log(b); // 4
```

Com esta destructuring no javascript, conseguimos melhorar a qualidade de nossos códigos, tornando-os menos repetitivos, escrevendo menos mas de maneira mais eficiente e elegante!
