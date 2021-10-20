---
title: Como remover valores vazios de um Objeto Javascript
date: 2021-10-20 08:16:00
tags:
  - Front-end
  - Javascript
postKeywords: remover null object, remove empty object, como remover null object, exibir apenas valores objeto
postDescription: Você sabe como limpar o seu objeto javascript para apenas conter chaves do objeto com valor?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Manipulação de objetos em Javascript é uma atividade comum em nosso desenvolvimento diário.
Recentemente, precisei remover todos os valores que eram vazios de um determinado objeto, com Javascript

A função que utilizei para fazer isso é a seguinte:

<!-- more -->

```javascript
export function removeEmptyFilter(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
}
```

Muito simples a função, não é mesmo?
