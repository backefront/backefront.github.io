---
title: Como criar um fundo com duas cores com CSS
date: 2020-03-03 08:36:18
tags: 
- Front-end
- CSS
postKeywords: two colors css, duas cores background, css gradient, gradiente, css dividir cores, fundo varias cores, css, frontend, dicas front
postDescription: Neste post, mostro como podemos criar um background com duas cores, sem a necessidade de usarmos uma imagem como fundo para isso!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Antigamente, quando precisávamos fazer um background onde tivesse duas cores, teríamos que utilizar uma imagem ou dividir em duas `div` diferentes o que poderia não ser tão prático.
Com a evolução do CSS, conseguimos agora criar um background com duas ou mais cores, da forma que quisermos!

Para isso, usamos a mesma propriedade `background`, porém com um pequeno detalhe a mais!

<!-- more -->

O grande segredo em ter diversas cores em um mesmo background é utilizarmos `linear-gradient` ou `radial-gradient` juntamente ao background.
Ficando algo semelhante ao seguinte trecho:

```css
background: linear-gradient(red, yellow);
```

Também podemos usar uma variação com ângulo e a porcentagem do background que queremos preencher:

```css
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
```

Fácil, não é mesmo?

Como exemplo do que podemos fazer, o desenvolvedor [Kedar](https://codepen.io/kedar) criou um codepen com diversos exemplos, que você pode visualizar [neste link](https://codepen.io/kedar/pen/MpXgoR)



