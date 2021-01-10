---
title: Como obter o valor selecionado pelo radio button Javascript
date: 2020-06-08 08:22:32
tags:
  - Front-end
  - Javascript
postKeywords: value radio button, obter valor radio, input js radio, front-end, javascript dicas, javascript iniciante
postDescription: Enquanto estamos desenvolvendo um formulário no HTML, as vezes nos deparamos em cenários onde precisamos pegar o valor selecionado pelo usuário. Isso envolve campos de texto, select box, radio buttons, checkbox! Hoje, vou mostrar como podemos pegar o valor selecionado pelo usuário em um radio button, com Javascript puro!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Enquanto estamos desenvolvendo um formulário no HTML, as vezes nos deparamos em cenários onde precisamos pegar o valor selecionado pelo usuário.
Isso envolve campos de texto, select box, radio buttons, checkbox!
Hoje, vou mostrar como podemos pegar o valor selecionado pelo usuário em um radio button, com Javascript puro!

<!-- more -->

Vamos considerar que o nosso HTML tem a seguinte estrutura:

```html
<div class="form-group">
  <label class="d-block font-weight-bold">Já é cliente?</label>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" value="true" name="client" />
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" value="false" name="client" />
    <label class="form-check-label">Não</label>
  </div>
</div>
```

Legal, agora queremos saber qual é o valor selecionado pelo usuário.
Para isso, vamos verificar com Javascript!

```javascript
document.querySelector('input[name="client"]:checked').value;
```

Com esse Javascript, nós acessamos apenas o radio button que estiver selecionado e que seu name seja client, que é o que definimos no nosso HTML!
Bem simples né?
