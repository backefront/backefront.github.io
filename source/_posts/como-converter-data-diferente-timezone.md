---
title: Como converter uma data para outro timezone
date: 2021-04-15 07:30:00
tags:
  - Javascript
  - Front-end
postKeywords: converter data js, converter data br, convert date, parse date, toLocaleString, javascript, front-end
postDescription: Veja como é fácil fazer a conversão de uma data para qualquer outro timezone com javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Neste post, mostro como é fácil converter uma data para um timezone diferente!

<!-- more -->

Para isso, você pode usar o método `toLocaleString() ` para converter uma data em um outro timezone.
Como por exemplo: 

```javascript
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); 
// Retorno: 29/06/2019, 09:56:00
```

Ou para português:

```javascript
console.log(event.toLocaleString('pt-BR', { timeZone: 'UTC' })); 
// Retorno: 29/06/2019, 09:56:00
```
