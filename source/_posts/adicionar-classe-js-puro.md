---
title: Como adicionar classes no HTML com Javascript puro
date: 2018-12-31 07:16:00
tags:
- Front-end
- Javascript
postKeywords: classe js puro, adicionar classe js, add class pure js, classe js, adicionar pelo js
postDescription: Você sabia que pode adicionar classe pelo javascript nativamente, de maneira mais eficiente e performática?
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando precisamos manipular informações diretamente no HTML pelo Javascript, a primeira coisa que normalmente vem à cabeça é o nosso querido [JQuery](https://jquery.com/), com suas facilidades de acessar elementos pela classe com o `$`, fica fácil e rápido, não é mesmo?

Entretanto, nem sempre precisamos ou queremos importar uma lib inteira apenas para adicionar uma classe! Então, como podemos adicionar uma classe no HTML com javascript puro?

<!-- more -->

## Adicionando classe com javascript

Para adicionar uma classe com o JQuery, você faria algo semelhante com: 

```javascript
$('#elemento').addClass('red');
```

Agora, em sua versão com javascript **puro**:

```javascript
const elemento = document.getElementById('elemento');

if (elemento.classList)
  elemento.classList.add('red');
else
  elemento.className += ' red';
```

Simples, não é mesmo? Basicamente, criamos uma variável com o elemento HTML, para que não precisemos ficar percorrendo o DOM para acessar aquela tag, desta forma melhoramos nossa performance, e verificamos se há alguma classe já adicionada neste elemento!

Ainda falando em performance, selecionar um elemento através do JS puro, é bem mais rápido do que quando feito com JQuery, o que pode ser visto [neste JSFiddle](https://jsfiddle.net/develoger/h6gze2LL/), que foi desenvolvido para [este post do develoger](https://jsfiddle.net/develoger/h6gze2LL/)

