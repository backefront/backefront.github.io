---
title: Como remover espaço em branco - Javascript
date: 2021-03-02 07:35:46
tags: 
- Front-end
- Javascript
postKeywords: remove string js, white space js, remover espaco branco js, remover espaco, string remove, js, javascript, como remover espaco em branco
postDescription: Veja nesse post como é fácil e simples remover um espaço em branco de uma string com Javascript
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

As vezes enquanto desenvolvemos, nos deparamos com situações que precisamos remover espaços em branco de uma string.
Fazer isso com Javascript é muito fácil, com uma linha você já consegue solucionar isso!

<!-- more -->

```javascript
const string = 'Palavra com espaço';

// Usamos replace com regex para substituir
str.replace(/\s/g, '');

// Resultado: Palavracomespaço
```
Simples né?
