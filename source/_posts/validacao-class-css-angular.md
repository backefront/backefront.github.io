---
title: Como adicionar classe através de uma validação no Angular
date: 2018-11-26 07:20:39
tags: 
- Front-end
- Angular
postKeywords: if classe angular, validacao classe no angular, ngClass Angular
postDescription: Crie uma validação nas suas classes usando o ngClass do Angular!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Diariamente no desenvolvimento de aplicações mais complexas, nos deparamos com situações em que devemos aplicar uma classe em um elemento HTML apenas se satisfazer determinada condição. Trabalhando com o Angular, por exemplo, podemos fazer isso de maneira muito simples, caso a condição seja algo do tipo `if/else`.

O Angular possui uma sintaxe de templates que é muito poderosa! Como por exemplo, podemos citar o **ngFor**, **ngStyle** e a que permite adicionar uma validação dentro de uma classe é o **ngClass**!

<!-- more -->

Para utilizar, vamos usar o seguinte cenário:

> Queremos aplicar a cor vermelha caso a nota de um aluno seja **menor** que 6 e azul, caso seja **maior** que 6

Com isto em mente, logo pensamos em um `if (nota < 6 ) {...}` e podemos "traduzir" este pequeno trecho, diretamente no componente HTML, ficando da seguinte forma:

```html
<p [ngClass]="{{nota < 6 ? red : blue}}">
    {{nota}}
</p>
```

Com este operador ternário, ele adiciona uma classe de acordo com a validação, tornando muito mais fácil e rápido a adição de classes de acordo com sua validação!