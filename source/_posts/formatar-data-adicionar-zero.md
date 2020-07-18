---
title: Como formatar data adicionando zero na frente
date: 2019-09-09 08:31:13
tags: 
- Javascript
- Front-end
postKeywords: adicionar 0 data, add 0 date, formatar data, javascript zero na data, html zero data
postDescription: Aprenda como construir uma função para adicionar zero em frente aos números em uma data, com Javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

As vezes, o formato no qual nos é retornado a data, pelo front-end, não é formato que realmente queremos.
O formato retornado pode ser que não tenha "0" na frente dos números, como por exemplo:

- `2/5/2019`
- `2:50`
- `3:4`

Isso pode acabar impactando na usabilidade de nossa aplicação.
Vamos então ver como podemor formatar?

<!-- more -->

Para formatar a nossa data, e adicionarmos zero à frente
Podemos utilizar a seguinte função:

```javascript
// Recebemos como parâmetro a data que queremos formatar
const formatDate = (date) => {
    if (date) {
        const receivedDate = new Date(date);
        return ('0' + receivedDate.getDate()).slice(-2) + '/' + ('0' + (receivedDate.getMonth()+1)).slice(-2) + '/' + receivedDate.getFullYear();
    }
}
```

Simples e rápido!
