---
title: Como bloquear redirecionamento do href
date: 2022-01-04 07:16:00
tags:
  - Front-end
  - Javascript
postKeywords: block a link, block redirect link, href block, bloquear redirecionamento, evitar link html, front-end, html, javascript, link, ancora, a,
postDescription: Como bloquear o redirecionamento de um link html para outra página, com javascript de forma nativa
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Recentemente, trabalhando em um componente de paginação, tive a necessidade de bloquear o redirecionamento de um link (a href=""), para que pudesse usar uma função customizada para fazer a paginação.

O atributo `href` por sua vez, era obrigatório ser passado e toda vez que o clique era feito, recarregava a página, fazendo com que eu perdesse o estado da minha aplicação.

Como foi resolvido?

<!-- more -->

Resolvi isso de uma maneira bem simples, com um bom e velho amigo, nosso querido javascript puro.
No lugar do href, simplesmente coloquei: 

```html
<a href="javascript:void(0)"> Link </a>
```

Simples, não é?
