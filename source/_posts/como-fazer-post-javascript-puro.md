---
title: Como fazer um POST com Javascript puro
date: 2020-01-06 09:34:45
tags:
- Front-end
- Javascript
postKeywords: fetch api, fetch post, como fazer post javascript puro, post javascript, request javascript puro, request, fetch, javascript, front-end
postDescription: Veja como podemos fazer um POST utilizando a interface FETCH, de uma maneira simples e intuitiva!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Com a evolução do Javascript, fazer uma request com Javascript tornou-se uma tarefa muito mais simples!
O que antes nós usávamos JQuery para facilitar nosso trabalho, atualmente é algo relativamente fácil e tranquilo de ser feito através de javascript puro.

Você sabe como fazer uma requisição "POST" com Javascript puro?

<!-- more -->

Quando queremos fazer um POST com Javascript puro, podemos usar o `fetch API`, que é uma interface para fazermos requisições!
Então como fazemos um POST com o fetch? Podemos fazer da seguinte maneira:

```javascript
const data = { username: 'Victor Jordan' };

fetch('https://backefront.com.br/api/users', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
```

O Fetch nos permite trabalhar com todos os métodos HTTP, sendo eles: GET, POST, PUT, DELETE, etc.
Sua implementação é bem simples e intuitiva, o que facilita muito em nosso desenvolvimento!
