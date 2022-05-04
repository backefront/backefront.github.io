---
title: Como verificar se a string possui letra maiúscula
date: 2021-08-26 07:22:42
tags:
  - Front-end
  - Javascript
postKeywords: maiuscula js, uppercase, verificar caixa alta, caixa alta, maiuscula verificar
postDescription: Veja como é rápido e fácil criar uma função em que retorna se a string possui letra maiúscula ou não!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Sem enrolação, direto ao ponto!
A função Javascript abaixo irá verificar se a string que passar como parâmetro possui letra maiúscula ou não:

```javascript
const hasUpper = (str) => /[A-Z]/.test(str);
```
