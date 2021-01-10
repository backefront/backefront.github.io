---
title: Como verificar se a data é hoje
date: 2019-09-02 08:31:13
tags:
  - Javascript
  - Front-end
postKeywords: check date is today, verificar data é hoje, é hoje js, javascript data é atual, é hoje javascript
postDescription: Aprenda como construir uma função para verificar se o dia que estamos validando é igual ao dia de hoje, com javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou verificar se a data que está recebendo é no dia de **hoje**?
Com uma função bem simples, conseguimos validar se o dia que estamos recebendo como parâmetro é referente ao dia de hoje
Basta usar a seguinte função:

<!-- more -->

```javascript
// Recebemos como parâmetro a data que queremos verificar
const isToday = (data) => {
  const today = new Date();
  return (
    data.getDate() == today.getDate() &&
    data.getMonth() == data.getMonth() &&
    data.getFullYear() == today.getFullYear()
  );
};
```

Bem simples, fácil e útil!
