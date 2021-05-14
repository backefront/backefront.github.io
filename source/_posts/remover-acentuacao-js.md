---
title: Como remover acentuação Javascript
date: 2021-05-15 08:16:00
tags:
  - Front-end
  - Javascript
postKeywords: remover acentuacao js, remover acento, js acento, remove accent, javascript como remover, acento, remover, javascript, como remover
postDescription: Regex simples para remoção de acentuação com Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Esses dias estava desenvolvendo um projeto onde uma das regras de negócio era que todos os cadastros não aceitassem acentuações.
Então, fazendo uma pesquisa, encontrei um regex que faz essa alteração, olha como é fácil!

<!-- more -->

```javascript 
const str = "Crème Brulée";
str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
> "Creme Brulee"
```
