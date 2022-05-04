---
title: Como criar uma barra de rolagem em uma DIV
date: 2020-06-22 07:25:54
tags:
  - Front-end
  - CSS
postKeywords: overflow css, barra rolagem div, barra rolagem css, css rolagem, overflow-x, overflow-y, front-end dicas
postDescription: Alguma vez você já precisou criar uma barra de rolagem DENTRO de uma div? Você quer que aquele determinado conteúdo cresça sem a necessidade da página toda crescer junto, então para isso precisaria que somente aquele determinado trecho fizesse o scroll.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Alguma vez você já precisou criar uma barra de rolagem DENTRO de uma div?
Você quer que aquele determinado conteúdo cresça sem a necessidade da página toda crescer junto, então para isso precisaria que somente aquele determinado trecho fizesse o scroll.

Com CSS conseguimos fazer isso sem nenhuma dificuldade!
Você só precisa utilizar a propriedade `overflow`!

<!-- more -->

Vamos criar uma div que tenha um tamanho de no máximo 300px:

```html
<style>
  .container {
    height: 300px;
  }
</style>

<div class="container">
  <p>Conteúdo</p>
</div>
```

Para então adicionarmos o scroll nessa div, devemos adicionar o seguinte CSS:

```html
<style>
  .container {
    height: 300px;
    overflow-y: scroll;
  }
</style>

<div class="container">
  <p>Conteúdo</p>
</div>
```

Nesse caso, queremos que tenha scroll apenas pra cima e para baixo, por isso usamos o overflow-y (do eixo cartesiano!)
Caso quiséssemos fazer scroll na horizontal, usaríamos o eixo X, ou seja, `overflow-x`

Fica muito fácil assim, não é?
