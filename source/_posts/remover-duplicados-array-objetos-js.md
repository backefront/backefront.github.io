---
title: Como remover valores duplicados em array de objetos
date: 2022-07-18 07:00:22
tags:
  - Front-end
  - Javascript
postKeywords: js, javascript, remove duplicate array, remover duplicados, uniq without lodash, array unico, lodash
postDescription: Veja como podemos remover valores duplicados em um array de objetos do javascript sem lodash, com javascript puro!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em uns posts anteriores, falei sobre como podemos [remover valores duplicados em um ARRAY](https://backefront.com.br/removendo-valores-duplicados-array/).

Mas e se fosse um ARRAY de OBJETOS? A abordagem que ensinei no post não funciona, já que como falei, é um array de objetos. 

Além de não funcionar, não podemos simplesmente implementar um loop dentro de um loop (um forEach com um some, por exemplo), ou melhor dizendo, até podemos, mas esse algoritmo teria sua complexidade O(n²) o que é extremamente LENTO em caso de arrays maiores. 

Neste código abaixo, demonstro como podemos criar nossa função de remover valores repetidos em um array: 

<!-- more -->

```javascript
/**
 *
 * @param {Array} items - Array de itens a serem removidos
 * @param {String} prop - Propriedade a ser comparada
 * @returns {Array} - Array de itens sem duplicidade
 */
export function removeDuplicate(items, prop) {
  const checkedItems = {};

  const uniqueArray = items.filter((item) => {
    const isUnique = !checkedItems[`prop_${item[prop]}`];
    checkedItems[`prop_${item[prop]}`] = true;
    return isUnique;
  });

  return uniqueArray;
}
```

Dessa forma, os valores que já foram verificados são adicionados em uma variável auxiliar e sabemos se já apareceu alguma vez em nosso Array.

Talvez não seja a forma mais bonita, mas é eficiente! 
Diz ai se você usa algum outro algoritmo!
