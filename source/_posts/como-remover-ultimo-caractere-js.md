---
title: Como remover o último caractere - Javascript
date: 2021-07-30 07:30:50
tags: 
- Javascript
- Front-end
postKeywords: remover último caractere lista, remover caractere, slice, javascript, remover, lista, estrutura de dados, front-end
postDescription: Veja como é fácil remover o último caractere de uma palavra, usando os métodos do próprio Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

A solução é muito simples, usando o método `slice()`, de uma string, passando 2 parâmetros
O primeiro é o ponto de início, ou seja, a partir de qual elemento vamos começar a contar para remover
O segundo é a quantidade de itens que desejamos remover

Ao passarmos um número negativo, o JS começará a contar do fim ao começo
O código ficaria assim:
<!-- more -->

Usando o Splice:
```javascript
const texto = 'backefront'
const novoTexto = texto.slice(0, -1) //'backefron'
```

Fácil né?
