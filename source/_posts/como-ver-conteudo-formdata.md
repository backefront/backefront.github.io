---
title: Como ver os valores dentro de um formData
date: 2022-07-30 11:40:22
tags:
  - Front-end
  - Javascript
postKeywords: console formdata, ver valores no formdata, como imprimir o formdata, formdata, console, leitura form, javascript
postDescription: Neste post vou falar como você pode exibir os valores do seu formData, no console.log!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Enquanto desenvolvemos, é muito comum queremos fazer um `console.log()` em algum valor para vermos que estamos enviando para nossa API.
Porém, nem sempre isso é possível! 

Caso estejamos trabalhando com um formData, não podemos isso:

```javascript
  const formData = new FormData();
  formData.append("file", image.file);
  console.log(formData);
```

<!-- more -->

A maneira correta para conseguirmos ver se foi realizado o append de maneira correta seria utilizando `formData.get('chave')`
Sendo assim, no nosso exemplo, para verificarmos se `file` foi preenchido de maneira correta, fazemos:

```javascript
  const formData = new FormData();
  formData.append("file", image.file);
  console.log(formData.get('file'));
```

E pronto! Eis seus valores no console! 
Qualquer dúvida comenta ai que vamos nos ajudando!
