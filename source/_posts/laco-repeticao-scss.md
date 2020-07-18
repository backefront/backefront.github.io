---
title: Como fazer um laço de repetição com SCSS
date: 2018-12-03 07:30:50
tags:
- CSS
- Front-end
postKeywords: laco repeticao scss, while scss, como fazer for no scss, css while, css for, repetir classes css
postDescription: Aprenda a utilizar o @for e @while no SCSS para deixar seus arquivos de estilo mais poderosos!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Alguma vez você já precisou criar um sistema de grid em seu CSS mas não queria ficar repetindo manualmente as classes de forma ineficiente? Ou por algum outro motivo, você pensa o quão bom seria fazer um **laço de repetição** dentro do seu arquivo **SCSS** e descobre que com o [Sass](https://sass-lang.com/) possibilita fazer isso! Mas como?

<!-- more -->

## Laço de Repetição @for

```css
$i: 0;
@for $i from 1 through 4 {
  .classe-#{$i} {
    width: 60px + $i
  }
}
```

Quando compilado, o resultado será o seguinte:

```css
    .classe-1 {
        width: 61px;
    }
    .classe-2 {
        width: 62px;
    }
    .classe-3 {
        width: 63px;
    }
    .classe-4 {
        width: 64px;
    }
```

## Laço de Repetição @while

```css
$i: 0;
@while $i <= 4 {
    .classe-#{$i} {
        width: 60px + $i
    }
    $i: $i+5;
}
```

O resultado será exatamente igual ao exemplo superior!

## Conclusão

Podemos utilizar esses laços de repetições quando precisamos criar classes que de alguma forma, serão iguais, ou terão um padrão de repetição, como é feito em um sistema de grids, como o do bootstrap!
