---
title: Como esperar o resultado de uma função no javascript
date: 2020-02-24 08:00:48
tags:
  - Front-end
  - Javascript
postKeywords: async function, esperar resultado, wait resolve, esperar resolver js, javascript, assincrono, esperar retorno javascript, front-end
postDescription: Neste post, irei mostrar como podemos converter uma função normal em uma função assíncrona, de forma que o Javascript espere a função se resolver para dar continuidade no código.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma coisa que é sabida é que o Javascript é síncrono.
Isto quer dizer que ele executa suas funções em paralelo, sem esperar terminar alguma função primeiro para depois executar uma outra.

Muitas das vezes, isso não nos causa nenhum impacto, mas em alguns casos, precisamos esperar o resultado de uma determinada função para que assim possamos seguir em diante do nosso código.

Para isso, precisaríamos então que essa nossa função se transforme em uma função `assíncrona`. Mas como?

<!-- more -->

Vamos considerar um cenário onde precisamos calcular um determinado número, armazena em um array e depois exibimos ele.
Começamos criando nossa estrutura inicial:

```javascript
const aluno = [];

function calcStudent() {
  aluno.push({ nome: "Victor", nota: 7 }, { nome: "Lo Ruanda", nota: 9 });
}

function showStudentResult() {
  calcStudent();
  console.log(aluno);
}
```

Nessa função, o Javascript fará o `console.log` antes mesmo de terminar o `push` dentro da função `calcStudent`.
Precisamos garantir então que o console.log deve **esperar** que a função de calcular foi terminada para assim exibir!

Para isso, usaremos o `Promise`!

A primeira coisa que devemos fazer é transformar a função `calcStudent` em **async** e informaremos que queremos que o Javascript **espere** a resolução dessa variável.

```javascript

  const aluno = [];

  // Adicionamos 'async'
  // no começo da função
  async function calcStudent() {
    aluno.push({nome: "Victor", nota: 7}, {nome: "Lo Ruanda", nota: 9});
    await Promise.resolve(aluno);
  }

  // Nesta função, a função agora
  // nos permite 'esperar' o
  // resultad
  function showStudentResult() {
    calcStudent().then(() => {
      console.log(aluno);
    };
  }
```

Dessa forma, esperamos a função se resolver para que possamos exibir o resultado!
Também poderíamos fazer como retorno da função, da seguinte maneira:

```javascript
  // Colocamos o await no retorno
  async function calcStudent() {
    const aluno = [];
    aluno.push({nome: "Victor", nota: 7}, {nome: "Lo Ruanda", nota: 9});
    return await Promise.resolve(aluno);
  }

  // Acessamos o retorno da função
  // através do response
  function showStudentResult() {
    calcStudent().then((response) => {
      console.log(response);
    };
  }
```

Essa abordagem nos permite transformar funções síncrona em assíncrona, o que é, em alguns casos, muito útil!
