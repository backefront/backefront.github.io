---
title: Como obter parâmetros da URL com Javascript Puro
date: 2020-04-20 12:18:02
tags:
- Front-end
- Javascript
postKeywords: url param js, get url param, param js, url param, javascript, como obter parametro url, obter url js, front-end, dicas front-end, javascript dicas
postDescription: Você sabe como acessar os parâmetros de uma URL utilizando Javascript puro? Com essa dica, você conseguirá acessar qualquer Query Parameter de uma URL sem dificuldades!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Trabalhar com URLs é uma tarefa comum em nosso desenvolvimento diário
Muitas das vezes, trabalhamos com frameworks como Angular, Vue, React que facilitam e muito o trabalho de manipular URLs, obter parâmetros, etc.
Mas alguma vez você já precisou obter os valores de uma `query parameter` com **javascript puro**?

<!-- more -->

Para obter os valores de parâmetro de uma URL, através do Javascript puro, podemos utilizar um cara chamado: `URLSearchParams`
Ele nos permite trabalharmos com as strings da URL com maior facilidade!

Veja como é fácil:

```javascript
// armazenamos os parâmetros da url
const urlParams = new URLSearchParams(window.location.search);

// acessamos o valor que desejamos
const myParam = urlParams.get('nomeDoParametro');
```

Então, vamos ter como exemplo a URL: `www.backefront.com.br/post?topic=javascript`
Seguindo o código acima, para termos o valor de `topic`precisamos então fazer:

```javascript
// armazenamos os parâmetros da url
const urlParams = new URLSearchParams(window.location.search);

// acessamos o valor que desejamos
const topic = urlParams.get('topic');

console.log(topic);
// Resultado esperado: "javascript"
```

Bem mais fácil do que imaginávamos!
Quanto sua aceitação nos navegadores, consultando o [Can I User](https://caniuse.com/#feat=urlsearchparams) vemos que praticamente apenas o IE não suporta essa interface!


🏡