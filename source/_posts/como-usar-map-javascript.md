---
title: Como usar o método map do Javascript
date: 2019-01-28 07:30:00
tags:
postKeywords: map javascript, retornar novo array, iterar array e retornar novo, iterar array, como usar map js, metodo de iteraçao js, percorrer array js
postDescription: O método map() é uma função muito útil quando desejamos retornar um novo array sem alterar o original! Desta forma, criamos uma cópia e podemos realizar as alterações desejadas, sem nos preocupar em perder o array original!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O método `map()` é uma função muito útil quando desejamos retornar um novo array sem alterar o original! Desta forma, criamos uma cópia e podemos realizar as alterações desejadas, sem nos preocupar em perder o array original!

Sua síntaxe é simples de entender, muito semelhante ao [filter](https://backefront.com.br/filter-function/), basta informarmos o array que iremos percorrer e em seguida a função de retorno! Um exemplo seria:

<!-- more -->

```javascript
let array = [2,4,8,10];

// Desejamos um array com a metade de cada um dos valores:

const metade = array.map(numero => numero / 2);
console.log(metade)
// Resultado esperado: [1,2,4,5]
```

No exemplo acima, estamos usando uma `arrow function`, onde a variável `numero` representa cada número dentro do array original, e dividimos ele por 2. 

O método `map()` irá realizar esta operação repetidas vezes, até concluir todos os número no array.

### Considerações

Considerando que `map` retorna um array inteiramente novo, usar este método quando você não pretende usar um array novo, é considerado uma má prática, caso seja o seu caso, use o `forEach()` ou [for-of](https://backefront.com.br/js-forof/).

Sinais que talvez você não precise utilizar o `map()`

* Você não está utilizando o array que está sendo retornado.
* Você não está retornando um valor do callback.

Tendo estes detalhes observados, você está apto a utilizar o map! É muito importante saber **quando** e **porque** estamos fazendo/utilizando os recursos da linguagem!