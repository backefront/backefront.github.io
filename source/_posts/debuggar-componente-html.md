---
title: Como debuggar componentes HTML
date: 2020-09-21 08:36:38
tags:
  - Front-end
postKeywords: debugging html, depurate html, inspecionar componente, html, front-end, como debuggar html, how to debug html
postDescription: Você sabia que podemos debuggar aquele componente HTML, de forma que mesmo alterando o estado (hover, focus) ainda conseguimos manter ele fixo na tela, para podermos mexer nele livremente?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Esses dias um amigo me mostrou um tweet do [@sulco](https://twitter.com/sulco) sobre **como debuggar html**, de uma forma bem simples!
Sabe aquele `Select` componente ou aquele dropdown que usamos e as vezes queremos alterar seu estilo, com ele aberto?

Sempre que tentamos selecioná-lo, acaba fechando, sumindo, desfazendo! Dá uma raiva!
Então hoje apresento algo que até poucos dias atrás não conhecia: "emulate a focused page"

<!-- more -->

Através do console de desenvolvedor, conseguimos ativar essa função!
Dá uma olhada como é fácil fazer:

![Habilitando focus mode - Chrome](/posts/debugg-html.gif)

Fica bem mais fácil assim né?
Então, resumindo:

### Como habilitar focused page no chrome

- Abra o "inspecionar elemento" (F12)
- Digite Ctrl + P ou [⌘]+[P] no Mac
- Escreva "> Emulate a focused page"
- Ative-a e estará pronto para usar!

Agora ficou muito mais fácil estilizar e mexer em componentes assim!
