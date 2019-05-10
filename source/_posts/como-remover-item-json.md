---
title: Como remover um item do JSON
date: 2019-05-10 16:04:45
tags:
- Front-end
- Javascript
postKeywords: remove object json, delete json, deletar propriedade json, delete property
postDescription: Veja como é fácil remover um item de um objeto javascript, nativamente e sem várias linhas de código!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

A manipulação de objetos javascript no desenvolvimento front-end é uma atividade diária e rotineira. Constantemente nos deparamos manipulando JSON, consultando uma propriedade específica, etc. Em um determinado dia, nos deparamos com o seguinte objeto:

```javascript
let pessoa = { nome: "Victor", sobrenome: "Jordan", idade: 25 };
```

E por algum motivo, precisamos deletar a propriedade **idade**. E agora? Como fazer?

<!-- more -->

Deletar uma propriedade de um objeto é a coisa mais simples que existe! Nós podemos usar a keyword `delete`! 
Então, a nossa implementação ficaria da seguinte forma:

```javascript
let pessoa = { nome: "Victor", sobrenome: "Jordan", idade: 25 };
delete pessoa.idade; // Ou também delete pessoa["idade"];
console.log(pessoa);
// Resultado esperado: { nome: "Victor", sobrenome: "Jordan" }
```

Simples assim!

