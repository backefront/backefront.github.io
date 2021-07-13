---
title: Como remover o último elemento de uma lista Javascript
date: 2021-07-13 07:30:50
tags: 
- Javascript
- Front-end
postKeywords: remover último elemento lista, remover lista, pop, splice, javascript, remover, lista, estrutura de dados, front-end
postDescription: Veja como é fácil remover o último elemento de uma lista, usando os métodos do próprio Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Remover o último elemento de uma lista com Javascript é uma coisa bem simples, podemos fazer isso de várias formas.
Podemos usar o `.pop()` ou `.splice()`, da seguinte maneira:
<!-- more -->

Usando o Splice:
```javascript
const array = [1,0,2];
array.splice(-1,1);
// Resultado: [1,0];
```

Usando pop:
```javascript
const array = [1,0,2];
const novoArray = array.pop();
// Resultado: [1,0];
```

