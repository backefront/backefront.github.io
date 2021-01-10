---
title: Como encontrar um elemento com Javascript Puro
date: 2019-10-28 07:18:18
tags:
  - Front-end
  - Javascript
postKeywords: encontrar elemento dom js, element find js, puro javascript dom, manipular dom js puro, dom, js, pure js, sem jquery,
postDescription: Você sabe como procurar por elementos do HTML com Javascript de forma nativa? Além de deixar sua aplicação mais leve, por não precisar carregar bibliotecas externas, você ainda ganha um bônus na performance da aplicação!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Mais um post sobre Javascript puro, hoje irei falar um pouco sobre como podemos encontrar um elemento no DOM utilizando o nosso querido Javascript!
Com o Javascript, podemos encontrar um elemento seja pela classe, elemento, por id!

Sem a necessidade de adicionarmos uma biblioteca externa para fazer uma manipulação tão simples quanto essa, veja como é simples:

<!-- more -->

## Encontrar um elemento pela classe

Para encontrarmos um elemento pela classe, podemos fazer de duas formas:

```javascript
document.querySelectorAll(".class");

// OU
document.getElementsByClassName("class");
```

## Encontrar um elemento pelo ID

Agora, para encontrarmos um elemento pelo ID, podemos fazer de três formas diferentes, sendo a terceira pouco conhecida!

```javascript
document.querySelector("#id");

// OU
document.getElementById("id");

// OU
window["id"];
```

A diferença entre querySelectorAll e as outras opções é que o querySelectorAll retorna todos os elementos que correspondem com aquilo que está procurando, como uma lista!
E também, por ser uma busca mais ampla, ele acaba sendo mais lento do que as outroas opções.
Então, caso performance seja algo que esteja buscando, recomendo que sempre opte por `document.getElementById`, `document.getElementsByClassName` ou `document.getElementsByTagName`
