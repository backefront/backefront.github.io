---
title: For of - Como fazer uma condição de parada no For no Javascript
date: 2018-10-29 07:36:32
tags:
postKeywords: break for, quebrar for, como fazer break em um for, for com condição de parada, break laço, condição for parada, condição de parada for
postDescription: For.. of, uma maneira elegante de quebrar seu laço de repetição no javascript!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Digamos que você tenha um objeto e que caso dentro desse objeto, contenha um determinado valor, deve retornar imediatamente um novo valor. Para isto, você pode pensar em utilizar um `for` com alguma condição para "quebrar" seu laço de repetição, mas por que não utilizar a declaração `for... of`?

O **for of** cria um loop a qual itera objetos, inclusive: Strings, Array, Map, Set. Assim como o **for**, **forEach**, o `for of` itera cada elemento porém com uma diferença que pode ser o essencial para resolver seu problema: você pode quebrar seu laço com o **break**.

<!-- more -->

Para ficar mais intuitivo, vamos considerar o seguinte problema:

> Um determinado filme possui a faixa etária de 12 anos para exibição. A professora de uma determinada escola gostaria de exibir este filme para seus alunos, mas primeiro precisa verificar se todos seus alunos possuem 12 ou mais anos! Caso uma única criança tenha 11 anos, a exibição não poderá ser feita!

No array abaixo, temos todas as idades dos alunos:

```javascript
let idadeAlunos = [12, 12, 13, 14, 15, 12, 11, 15, 16, 12, 13, 14, 16, 15, 11];
```

Usando o **for of**, podemos resolver esse problema de uma maneira rápida e elegante:

```javascript
function verificaIdade(idadeAlunos) {
  for (const element of idadeAlunos) {
    if (element < 12) {
      console.log("Aluno menor de 12 anos!");
      break;
    }
    return true;
  }
}

let idadeAlunos = [12, 12, 13, 14, 15, 12, 13, 15, 16, 12, 13, 14, 16, 15, 11];
verificaIdade(idadeAlunos);

// Retorna: Aluno menor de 12 anos!
```

Como podemos observar, desta vez a professora não poderá exibir o filme!
Neste caso, poderíamos ter usado `return false`, o que funcioria da mesma forma! A vantagem do break é quando não queremos necessariamente um retorno booleano (true/false), como exemplo, caso quisessemos armazenar o primeiro valor que corresponda com a validação feita dentro do **if**!
