---
title: Conheça a propriedade empty CSS
date: 2019-08-05 08:15:51
tags: 
- Front-end
- CSS
postKeywords: hide empty tag, esconder tag vazia, esconder tag, remover tag vazia, empty css, como funciona empty css, hide content empty css
postDescription: Veja uma maneira simples e fácil de esconder uma tag HTML que esteja vazia do seu navegador, apenas com CSS!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você sabia que existe uma pseudo-classe chamada `empty`?
Ela representa um elemento que não possui nenhum filho, isto é
elementos que estejam dentro desta tag.

Você conhece?

<!-- more -->

Para usarmos essa pseudo-classe, usamos como se fossemos
fazer um `hover` em um botão:

```css
div:empty {
  background: green;
}
```

E com esta técnica, conseguimos esconder tags que não possuem conteúdo!
Fazendo com CSS puro, da seguinte forma:

```css
div:empty {
  display: none;
}
```

Muito legal essa propriedade, não é?
