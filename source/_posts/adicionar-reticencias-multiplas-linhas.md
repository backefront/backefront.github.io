---
title: Como adicionar reticências com múltiplas linhas CSS
date: 2020-05-18 08:37:36
tags:
  - Front-end
  - CSS
postKeywords: reticencias css, limitar numero linhas css, tres pontinhos css, overflow text css, css, front-end, maximo numero linha css
postDescription: Neste post, irei demonstrar como podemos limitar a quantidade de linhas a serem exibidas em um parágrafo, adicionando reticências caso seja necessário, através de uma propriedade do próprio CSS!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você está desenvolvendo uma aplicação web onde em determinado local, você precisa mostrar a descrição de um produto.
Essa descrição pode ser um texto enorme, mais de 10 linhas ou pode ser um texto pequeno, contendo apenas duas linhas.
Então, o UX designer determina que a descrição deve conter apenas 3 linhas, caso ultrapasse isso, deve-se acrescentar reticências (...)

Como podemos adicionar reticências em múltiplas linhas, com CSS?
Vamos usar uma propriedade chamada `-webkit-line-clamp`! Bora ver como funciona?

<!-- more -->

A propriedade `-webkit-line-clamp` permite limitar um container com um número específico de linhas.

Essa propriedade funciona através da combinação entre a propriedade `display`, que deve ser definida como `-webkit-box` ou `-webkit-inline-box`
e a propriedade `-webkit-box-orient` deve ser definida como `vertical`

Então, vamos dizer que temos o seguinte conteúdo:

```html
<p>
  Este trecho de código tem como funcionalidade demonstrar a propriedade
  webkit-line-clamp em ação, no blog back & front!
</p>
```

Agora, adicionamos o CSS:

```css
p {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* Definimos quantas linhas queremos */
  display: -webkit-box;
  overflow: hidden;
  width: 300px; /* Definimos o tamanho máximo do nosso container*/
}
```

E obtemos o seguinte resultado:

![Resultado obtido através da propriedade -webkit-line-clamp](/posts/reticencias.png)
