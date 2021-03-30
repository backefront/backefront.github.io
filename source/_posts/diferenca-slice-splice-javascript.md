---
title: Diferença entre Slice e Splice - Javascript
date: 2021-03-29 08:00:28
tags:
  - Front-end
  - Javascript
postKeywords: slice, splice, diferenca slice splice, purpose of the array splice, proposito do slice, proposito splice, como usar splice, javascript, front-end, entrevista
postDescription: Alguma vez você já se perguntou qual é a diferença entre o slice e o splice no javascript? Neste post, irei mostrar suas diferenças e suas aplicações!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você conhece a diferença entre o método slice e o método splice, do Javascript?
Apesar de serem bem semelhantes, há umas diferenças! 
Olha só:

<!-- more -->

| Slice | Splice |
|---- | ---------
| Não modifica o array original (imutável)  | Modifica o array original (mutável) |
| Retorna um subconjunto do array original | Retorna os itens deletados do array |
| Usado para escolher os elementos do array | É usado para inserir ou deletar elementos do array|

### Slice

Ele seleciona os elementos começando no argumento inicial fornecido e termina no argumento final (opcional) fornecido sem incluir o último elemento. 
Se você omitir o segundo argumento, ele seleciona até o final.

Alguns dos exemplos deste método são:

```javascript
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0,2); // retorna [1,2]
let arrayIntegers2 = arrayIntegers.slice(2,3); // retorna [3]
let arrayIntegers3 = arrayIntegers.slice(4); // retorna [5]
```

### Splice

O método splice () é usado para adicionar ou remover itens de um array e, em seguida, retornar o item removido. 
O primeiro argumento especifica a posição da matriz para inserção ou exclusão, enquanto o segundo argumento da opção indica o número de elementos a serem excluídos.
Cada argumento adicional é adicionado ao array.

Alguns dos exemplos deste método são:

```javascript
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // retorna [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // retorna [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); // retorna [4]; original array: [1, 2, 3, "a", "b", "c", 5]
```
