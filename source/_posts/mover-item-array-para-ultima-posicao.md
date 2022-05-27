---
title: Como mover um item no array para a última posição
date: 2022-05-27 08:26:06
tags:
  - Javascript
  - Front-end
postKeywords: mover array ultima posicao, mover array, ultima posicao, javascript, array
postDescription: Como enviar para última posição um item do array com Javascript
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Para mover um elemento (que você sabe o Index) para o final do array, basta fazer isso:

```javascript
const index = 2;
array.push(array.splice(index, 1)[0]);
```

Agora, se você não sabe o index, pode fazer o seguinte:

```javascript
const index = array.findIndex(element => element));
array.push(array.splice(index, 1)[0]);
```

Exemplo:

```javascrpt
const arr = [1, 2, 6, 3, 4, 5];
arr.push(arr.splice(arr.indexOf(6), 1)[0]);
console.log(arr); // [1, 2, 3, 4, 5, 6]
```
