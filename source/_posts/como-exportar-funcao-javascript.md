---
title: Como exportar função Javascript
date: 2019-11-04 07:49:06
tags:
  - Front-end
  - Javascript
postKeywords: export function js, exportar funcao js, como importar funcao, import, export, js, javascript, funcao exportar javascript, como exporar arquivo javascript, front-end, dicas javascript
postDescription: Quando estamos desenvolvendo aplicações front-end, começamos a escrever códigos que podem ser reutilizados em outras partes do sistema. Dessa forma, o ideal seria que modularizarmos aquelas funções específicas! Você sabe como podemos exportar funções no Javascript? É algo simples e poderoso!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando estamos desenvolvendo aplicações front-end, começamos a escrever códigos que podem ser reutilizados em outras partes do sistema.
Dessa forma, o ideal seria que modularizarmos aquelas funções específicas!
Você sabe como podemos exportar funções no Javascript? É algo simples e poderoso!

<!-- more -->

Primeiramente, devemos isolar o nosso código em um arquivo separado

```javascript
// Arquivo Calculos.js
const soma = (a, b) => a + b;
const subtrair = (a, b) => a - b;
```

Agora que temos, no nosso arquivo `Calculos.js` as funções que usaremos em nossa aplicação, devemos exportá-las, isto quer dizer, deixa-las disponíveis para podemos importar onde quer que seja.

Para isto, devemos então **exportar** as nossa funções, vamos fazer uma modificação no nosso arquivo `Calculos.js`:

```javascript
// Arquivo Calculos.js
const soma = (a, b) => a + b;
const subtrair = (a, b) => a - b;

// Adicionamos export
// e dizemos quais funções
// queremos exportar
export { somar, subtrair };
```

Com isso, temos acesso a essas funções em qualquer lugar que quisermos!
Vamos agora, utilizar em nosso arquivo Javascript principal, que vamos chamar de `main.js`:

```javascript
// Arquivo main.js

// Importamos as funções que queremos usar
// do nosso arquivo Calculos.js
import { somar, subtrair } from "./Calculos.js";

// E podemos utilizar todas
// as funções que temos no outro arquivo
console.log(`Resultado é ${somar(1, 2)}`);
```

Com esse import, temos acesso as funções que criamos, mas também podemos importar apenas as que realmente queremos utilizar! Ou seja, poderíamos fazer `import {somar} from './Calculos.js'` sem problemas nenhum!

Criar funções genéricas onde podemos utilizar em outras partes do sistema é uma boa prática, pois desta forma reaproveitamos código e deixamos mais fácil de realizar manutenções!
