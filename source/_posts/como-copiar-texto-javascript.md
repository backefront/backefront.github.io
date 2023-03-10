---
title: Como copiar um texto com Javascript
date: 2021-01-10 11:40:22
tags:
  - Front-end
  - Javascript
postKeywords: copy text js, copiar texto javascript, clipboard js, como copiar com js, front-end, javascript, copiar texto
postDescription: Veja como é simples copiar um texto de um input para seu "ctrl V" usando Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Recentemente, precisei fazer uma funcionalidade em meu sistema onde ao clicar em um botão, copiasse o texto que estava na caixa de texto.
Fazer isso com Javascript é muito simples!

Primeiro vamos considerar a seguinte estrutura:

<!-- more -->

```html
<!-- Input texto -->
<input type="text" value="Texto a ser copiado" id="texto-usuario" />

<!-- Botão que usaremos para copiar -->
<button onclick="copiarTexto()">Copiar texto</button>
```

Legal, agora vamos ver como fica o Javascript!

```javascript
function copiarTexto() {
  /* Selecionamos por ID o nosso input */
  var textoCopiado = document.getElementById("texto-usuario");

  /* Deixamos o texto selecionado (em azul) */
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); /* Para mobile */

  /* Copia o texto que está selecionado */
  document.execCommand("copy");

  alert("Texto copiado: " + textoCopiado.value);
}
```

Super simples, não é mesmo? 😁✌

🏡
