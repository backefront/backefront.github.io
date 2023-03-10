---
title: Alternativa ao includes() com múltiplas opções
date: 2022-02-24 07:35:46
tags: 
- Front-end
- Javascript
postKeywords: includes multiplas palavras, includes, string, verificar duas strings, javascript, js, front-end
postDescription: Você já precisou verificar se uma string possui duas ou mais opções com o método includes? Veja como podemos fazer uma alternativa a isso!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou verificar se uma string possui duas ou mais opções com o método includes?
Como você sabe, isso não é possível com o método `includes()`, mas com RegEX, conseguimos criar uma alternativa muito simples!

```javascript
const hasWord = /teste|palavra/.test('palavra');
// Resultado: true
```

Com esse RegEX, podemos passar quantas palavras queremos testar!
Mas isso só funciona com `strings`, com objetos você deve usar o `includes()` mesmo! :)

Comenta aí o que achou!  
