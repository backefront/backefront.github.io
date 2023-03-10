---
title: Como arredondar número com Javascript
date: 2019-12-09 08:00:09
tags:
  - Front-end
  - Javascript
postKeywords: round number js, arredondar numero javascript, arredondar cima js, retornar inteiro proximo, arredondar, javascript, round, ES6, front-end
postDescription: Neste post, irei mostrar como podemos arredondar números com nosso Javascript, tudo utilizando o Math, de uma maneira simples e rápida, que nos garante um bom desenvolvimento e eficácia em nossos códigos!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou arredondar algum número mas não sabia como fazer isso?
Ou arredondar para o valor inteiro mais próximo?

No javascript, temos um objeto chamado `Math`, com ele conseguimos realizar diversas operações matemáticas, simplesmente chamando este objeto e passando o método que desejamos!

Neste post, irei mostrar como podemos arredondar números com nosso Javascript, tudo utilizando o `Math`!

<!-- more -->

## Arredondar número para cima

Quando queremos que arredonde **para cima** o número, independente do valor após a vírgula, usamos `Math.ceil(valor)`:

```javascript
Math.ceil(4.598); // retorna 5
Math.ceil(4 / 3); // retorna 2
```

## Arredondar número para baixo

Quando queremos que arredonde **para baixo** o número, independente do valor após a vírgula, usamos `Math.floor(valor)`:

```javascript
Math.floor(4.7); // retorna 4
Math.floor(4 / 3); // retorna 1
```

## Arredondar para o valor mais próximo

Quando não temos uma regra específica e queremos apenas que o número seja arredondado para o número **mais perto**, utilizamos `Math.round(valor)`:

```javascript
Math.round(4.7); // retorna 5
Math.round(4.4); // retorna 4
```

O objeto `Math` contém diversas funções que nos auxiliam diariamente em nosso desenvolvimento, é algo que vale muito a pena termos como conhecimento!
