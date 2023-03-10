---
title: Como juntar arrays no JavaScript
date: 2019-02-25 07:30:23
tags: 
- Javascript
- Front-end
postKeywords: merge arrays js, juntar arrays js, mesclar arrays js, concatenar arrays js
postDescription: Alguma vez você já precisou juntar, mergear dois arrays no javascript? Você poderia até construir uma lógica relativamente simples, que ocuparia algumas linhas de código para resolver esta situação, sem problema nenhum! Mas e se eu te disser que você consegue resolver esse problema com uma linha de código? Se liga nessa dica então!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Alguma vez você já precisou juntar, mergear dois arrays no javascript? Você poderia até construir uma lógica relativamente simples, que ocuparia algumas linhas de código para resolver esta situação, sem problema nenhum! Mas e se eu te disser que você consegue resolver esse problema com **uma** linha de código? Se liga nessa dica então!

Temos as nossas duas listas, que contêm os nomes de alunos e a outra das alunas:

```javascript
const alunos = [ 'João Paulo', 'Rodolfo', 'Igor', 'Pedro', 'Gustavo' ];
const alunas = [ 'Maria', 'Carla', 'Melanie', 'Sabrina' ];
```

Agora vem a mágica, como podemos concatenar isso? Com o **Spread Operator**!

<!-- more -->

Spread Operator é o nosso querido amigo, que nos possibilitará de realizar essa "mágica" em apenas uma linha! Veja como é simples:

``` javascript
const classe = [ ...alunos, ...alunas ];
console.log(classe);
// Resultado esperado: (9) ["João Paulo", "Rodolfo", "Igor", "Pedro", "Gustavo", "Maria", "Carla", "Melanie", "Sabrina"]
```