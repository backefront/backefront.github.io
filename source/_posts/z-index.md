---
title: Entendendo o z-index
date: 2018-05-10 11:05:44
postKeywords: z-index, css, como funciona z-index, posicionamento css
postDescription: Entenda como funciona a propriedade z-index do CSS!
tags: 
- CSS
- Front-end
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em geral, uma página HTML pode ser considerada bidimensional, isto é, seus elementos como textos e imagens são organizados na página sem uma sobreposição. Neste caso, a construção da página segue um fluxo e os elementos têm consciência do espaço e tamanho que outros elementos ocupam. Com o z-index, podemos mudar esse funcionamento.

<!-- more -->

>No CSS 2.1, cada elemento possui sua posição em três dimensões. Adicionado a sua posição horizontal/vertical, os elementos possuem os "z-axis" e são formados um no topo do outro. As posições z-axis são particulamente revelantes quando ocorre visualmente a sobreposição. (CSS 2.1 Section 9.9.1 - Layered presentation)

A propriedade z-index define a posição dos elementos permitindo que um elemento fique por cima ou abaixo de outro. Os valores nele definido são descedentes, ou seja, quanto maior o número, mais 'próximo' de você ele estará.

Para que esta propriedade seja aplicada, é necessário que o elemento que esteja sendo aplicado tenha um `position` diferente de `static`.

## Sintaxe 
A propriedade z-index é definida por palavra-chave ou um inteiro, podendo esse número ser negativo!

```CSS
/* Uso de uma palavra-chave */
z-index: auto;

/* Usando valores inteiros */
z-index: 3;
z-index: -1; /* Negative values to lower the priority */

/* Valores globais */
z-index: inherit;
z-index: initial;
z-index: unset;
```

Com o z-index você pode sobrepor elementos, trazendo para a primeira camada o elemento desejado. Muito utilizado em construção de `modal`. Também podemos ver essa propriedade em ação quando queremos que o background tenha um efeito de sobrepor ao rolar a página, como pode ser visto neste exemplo [aqui](https://codepen.io/thomasvaeth/pen/xLwwZq).

Existem várias coisas legais que podem ser feitas, resta agora só usar imaginação! :)


