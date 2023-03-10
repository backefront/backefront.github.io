---
title: Como remover os estilos dos navegadores mobile de um input
date: 2022-04-09 10:23:08
tags:
  - CSS
  - Front-end
postKeywords: appearence, aparencia mobile, input css mobile, reset css celular, css, mobile, frontend
postDescription: Você já fez um formulário em uma página web e quando acessou pelo celular viu que os estilos dos inputs estavam bem diferentes? No Android de uma forma e no iOS de outra? Veja como remover essas propriedades padrões!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já fez um formulário em uma página web e quando acessou pelo celular viu que os estilos dos inputs estavam bem diferentes? No Android de uma forma e no iOS de outra? Veja como remover essas propriedades padrões!

Para isso, iremos usar a propriedade `appearance`

<!-- more -->

A propriedade de `appearance` é usada para exibir um elemento usando um estilo plataforma com base no tema do sistema operacional (Android, iOS) dos usuários.

Então, se quisermos remover o estilo padrão do mobile de um select nosso, fazemos da seguinte maneira:

```css
select {
  appearance: none;
}
```

E dessa maneira, deixamos todas as plataformas uniformes! 
Fácinho né?
