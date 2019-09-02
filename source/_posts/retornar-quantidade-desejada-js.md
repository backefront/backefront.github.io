---
title: JS - Retornando uma quantidade de elementos do array
date: 2019-08-26 07:14:12
tags:
- Front-end
- Javascript
postKeywords: enesimo numero array, retornar quantidade itens, retornar os dez primeiros itens js, slice, lista js alguns itens
postDescription: Neste post, irei mostrar como podemos retornar apenas uma quantidade desejada de itens de algum outro array, com o javascript, com o método slice!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em uma determinada situação, nos deparamos com o seguinte problema:
*"Precisamos retornar apenas uma quantidade de itens de um determinado array"*

Então, como fazemos para retornar, os primeiros N elementos de um array, no Javascript?
Para isso, podemos utilizar o método `slice`!

<!-- more -->

O método **slice** nos retorna uma quantidade de itens de um array em um novo array,
onde precisamos informar a partir de qual item queremos começar a contar e, caso queira,
podemos também informar até qual será o final.

O array original, o qual estamos buscando esses elementos, não será modificado!

Então, como resolvemos nosso problema?
Vamos considerar que temos uma lista com os seguintes números:

```javascript
const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
```

E queremos que nos retorne apenas os **10 primeiros** elementos.
Podemos então, fazer da seguinte forma:

```javascript
const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const listaFiltrada = lista.slice(0, 10);
console.log(listaFiltrada); // Resultado esperado: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

O método `slice()` aceita dois parâmetros, o primeiro é onde deve-se começar a extração.
Esse primeiro parâmetro aceita inclusive, **números negativos**
Por exemplo, se passássemos `slice(-2)`, ele retornaria os dois últimos número do array

Já o segundo parâmetro, é onde deve-se terminar!

As vezes nos deparamos com problemas que são, em sua grande maioria, fáceis de serem resolvidos.
O que nos falta, é conciliar os nossos conhecimentos na linguagem de programação com a situação apresentada.
