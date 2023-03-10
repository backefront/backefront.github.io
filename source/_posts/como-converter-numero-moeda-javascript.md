---
title: Como converter um número em moeda com Javascript
date: 2021-02-15 10:26:08
tags:
  - Front-end
  - Javascript
postKeywords: convert javascript currency, adicionar R$, converter moeda, moeda javascript, javascript, currency, moeda, convert, dinheiro javascript
postDescription: Você sabia que nativamente o Javascript nos fornece uma maneira de convertermos um número para moeda? Essa forma nos permite trabalhar moedas de todos os tipos e automaticamente adicionar o pre-fixo, como "R$"
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Recentemente em um projeto, precisei formatar um valor para moeda.
Poderia facilmente fazer uma função que tratasse esse tipo de número ou algo do tipo, mas você sabia que o Javascript possui uma maneira nativa de fazer essa conversão?
Olha como é fácil!

<!-- more -->

Vamos considerar a seguinte variável:

```javascript
const montante = 600000.0;
```

Agora vamos converter esse número para String e adicionaremos até o "R$" juntamente ao valor!
Para isso então, fazemos isso:

```javascript
montante.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// Output: R$ 600.000,00
```

Bem legal né? Podemos fazer isso em vários tipos de moeda:

```javascript
// EUR
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
);
// → 123.456,79 €

// Japão
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })
);
// → ￥123,457
```
