---
title: CSS - Como fazer uma barra de progresso de leitura
date: 2019-08-19 07:30:28
tags:
  - Front-end
  - CSS
  - Javascript
  - HTML
postKeywords: barra progresso leitura, porcentagem leitura css, css leitura barra, barra, leitura, progresso, progressbar js, css barra
postDescription: Uma coisa bem legal que podemos fazer para melhorar a usabilidade é criar uma barra de progresso indicando quanto falta para terminar a leitura de um determinado ou terminar a página! Veja como é fácil criar uma barra de progresso de leitura, usando CSS e Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma coisa bem legal que podemos fazer para melhorar a usabilidade
é criar uma barra de progresso, indicando quanto falta para
terminar a leitura de um determinado texto ou para terminar a página!

Veja como é fácil criar uma barra de progresso de leitura,
usando CSS e Javascript!

<!-- more -->

Primeiramente, precisamos adicionar HTML:

```HTML
<header>
    <h2>Leitor</h2>
    <div class="progress-container">
        <div class="progress-bar" id="js-barraDeLeitura"></div>
    </div>
</header>

<div>Conteúdo</div>
```

Agora, adicionamos o CSS da nossa barra de progresso:

```CSS
/* Estilo do Header - Fixo no Topo */
header {
    background-color: #f1f1f1;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
}

.progress-container {
    background: #eeeeee;
    height: 5px;
    width: 100%;
}

/* A barra de progresso */
.progress-bar {
    background: #2196f3;
    height: 4px;
    width: 0%;
}
```

E agora, adicionamos o Javascript:

```javascript
// Quando o usuário fizer scroll na página,
// irá disparar a função showProgressBar
showProgressBar = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("js-barraDeLeitura").style.width = `${scrolled}%`;
};
window.onscroll = () => {
  showProgressBar();
};
```

[Neste link](https://codepen.io/victorjordan95/pen/KORWjy) você pode ver o resultado obtido
através deste código que fizemos!

Bem legal o efeito e ainda mostra ao usuário quanto ele já
leu de um determinado post, melhorando a usabilidade!
