---
title: Como verificar se uma string possui espaço em branco - Javascript
date: 2019-05-27 07:26:13
tags: 
- Front-end
- Javascript
postKeywords: verificar espaco vazio js, white space js, espaco branco, espacamento, espaço vazio
postDescription: Veja como é simples verificar se uma string possui espaço branco com Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
---

Quando estamos desenvolvendo um formulário para criação de senha, normalmente essas senhas possuem algumas regras para criação.

Como por exemplo, deve conter um carácter maiúsculo, um minúsculo, conter números...

Estas são as regras mais comuns, mas também as vezes as senhas pedem para que **não** contenham espaços vazios (espaço, tab)

Você sabe como validar se esse tipo de carácter está presente na string digitada?

<!-- more -->

Podemos verificar se uma string contém um espaço vazio de duas formas.

A primeira, podemos usar o método [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

```javascript 
const verificaEspaco = (string) => string.indexOf(' ') >= 0;
```

Ou podemos usar o método [test](https://www.w3schools.com/jsref/jsref_regexp_test.asp), utilizando RegEx

```javascript
const verificaEspaco = (string) => /\s/g.test(string);
```

Em ambos os casos retornarão `true` ou `false` caso a string possua um espaço vazio.

Porém, o segundo método também considera **tab** como espaço, tornando uma solução mais completa.