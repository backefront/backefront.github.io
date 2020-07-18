---
title: Como definir um valor default em uma função Javascript
date: 2019-12-16 08:26:06
tags:
- Javascript
- Front-end
postKeywords: default js function, valor padrao funcao, definir valor funcao, funcao js, default js, valor default, front-end, boas praticas js
postDescription: Uma das implementações do ES6 que deve ser adotada como boa prática é definir um valor default para parâmetros que são recebidos em funções, isto é, caso o parâmetro venha null, com essa prática, conseguimos seguir o fluxo normalmente, sem que isso venha resultar em um erro para o usuário ou até mesmo travar a nossa aplicação!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das implementações do ES6 que deve ser adotada como boa prática é definir um `valor default` para parâmetros que são recebidos em funções, isto é, caso o parâmetro venha null, com essa prática, conseguimos seguir o fluxo normalmente, sem que isso venha resultar em um erro para o usuário ou até mesmo travar a nossa aplicação!

Mas então, como podemos definir um valor default em uma função no Javascript?

<!-- more -->

Vamos analisar a seguinte função:

```javascript
function setName(name) {
    // Exibe no console o nome informado
    // Mas caso não seja passado nada
    // Será retornado 'undefined'
    console.log(name)
}
```

Para que não venha acontecer de retornar `undefined` e possa acarretar em outros problemas podemos definir um valor default.
Então, modificamos levemente a nossa função, alterando-a para:

```javascript
function setName(name = 'Victor Jordan') {
    // Exibe no console o nome informado
    // Mas caso não seja passado nada
    // Será retornado 'Victor Jordan'
    console.log(name)
}
```

Essa forma pode ser aplicada para qualquer tipo de valor, podemos definir números, strings, listas como valor padrão de nossas funções, evitando diversos problemas!

