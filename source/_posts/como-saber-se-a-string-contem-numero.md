---
title: Como saber se a string contém número - Javascript
date: 2019-02-11 07:30:10
tags:
- Javascript
- Front-end
postKeywords: regex numero em string, string numero regex, verificar numero palavra, checar algarismo em uma string, regex algarismo
postDescription: Veja como é fácil verificar se uma determinada palavra possui algum número no meio, utilizando o Regex e a função test() no Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das coisas mais poderosas que um desenvolvedor pode ter conhecimento é Regex. Regex são padrões utilizados para encontrar uma certa combinação em um texto, palavra, string! Graças ao Regex, conseguimos aplicar facilmente validações e hoje, irei mostrar como podemos verificar se uma determinada string possui número ou não, de forma que retorne `true` ou `false`!

<!-- more -->

Neste exemplo, buscaremos por toda a palavra, a existência de algum número:

```javascript
    const palavra = 'Olá, mundo!';
```

Com esta palavra, precisamos definir um modelo regex que iremos utilizar. Neste cenário, queremos apenas ver se há numeros, então ficaria assim:

```javascript
const regex = /[0-9]/
```

Basicamente, dizemos que queremos procurar números de 0 à 9 com o [0-9], desta forma, assim que o regex encontrar um dos algarismos, já nos enviará como resposta se há ou não um número naquela string.
Então, para testarmos, usamos a função `test()`, que o regex possui, que retorna **true** ou **false**!

```javascript
regex.test(palavra);
// Retorno esperado: false
```