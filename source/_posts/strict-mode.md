---
title: Como funciona o Strict Mode
date: 2018-04-10 13:21:09
postKeywords: Strict Mode, Javascript, dicas JS, como funciona strict, modo strict
postDescription: Entenda o funcionamento do "Strict mode", muito utilizado no desenvolvimento de scripts em Javascript
tags: 
- Javascript
- Front-end
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---


Quem nunca encontrou essas palavras enquanto procurava por referências ou até mesmo quando estava realizando a manutenção de um código, e acabou se deparando com ele?
É bem comum encontrarmos "strict mode" nos scripts mas como funciona seu funcionamento e para que serve? Neste post, explicaremos para você como usar e para que usar!

<!-- more -->

## O "strict mode"

Foi introduzido no ECMAScript5, atualmente suportado por todos os navegadores modernos,faz com que o navegador execute o seu código javascript de forma mais rígida. De certa forma, força que desenvolvamos nossos códigos de forma mais correta, não permitindo que façamos algumas coisas do tipo: utilizar uma variável que não havia sido declarada, usar palavras reservadas do javascript, entre outras coisas que listaremos mais a frente. Os benefícios de usá-lo, além de escrever melhor seu código, é também a possibilidade de encontrar bugs mais facilmente.

## Usando o strict mode
Para habilita-lo, você pode fazer de duas formas, sendo uma habilitando para todo o script ou em funções individuais. 

## Usando em scripts
Para invocar o strict mode dentro do script todo, você precisa apenas adicionar 'use strict'; antes de qualquer trecho de código, ou seja, em sua primeira linha do JS.

``` javascript
"use strict";

var mensagem = "Bem-vindo ao backefront!";
```
Esse código acima funcionaria sem problemas, pois você está declarando a variável mensagem e atribuindo um valor a mesma. 

``` javascript
"use strict";

mensagem = "Bem-vindo ao backefront!";
```
Já esse trecho apresentaria um erro, justamente por causa da invocação do strict, ocorreria um erro de referência. 
`Uncaught ReferenceError: mensagem is not defined`

## Usando em funções

Para usarmos esse modo dentro de funções, o funcionamento e a chamada dele é igual ao que fizemos no modo script! A única diferença é que o modo será aplicado somente para aquela função que fora definido. 

Exemplo de implementação do código
``` javascript
function strict(){
  'use strict';
  return "Bem-vindo ao backefront!"
}
```

## Mudanças ocasionadas ao utilizar strict mode

As mudanças são percebidas tanto no comportamento em execução quanto em sintaxe. Em geral, as principais alterações que a diretiva faz são: 

- Conversão de um simples engano no código para erro de compilação, que impedem a compilação do código.
- Não permite propriedades ou parametros duplicados
``` javascript
'use strict'
var object = {nome: "Back", nome: "front"}; //Lança erro de compilação
function getName(valor1, valor2, valor1){} // Lança erro de compilação
```
- Lança erro ao utilizar errado o delete. O operador `delete` que é usado para remover propriedades de objetos, não pode ser utilizado em propriedades não-configurável (configurable definida como false) de algum objeto.

## Referências

[MDN - Strict mode](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)
[w3schools - JavaScript Use Strict](https://www.w3schools.com/js/js_strict.asp)

Escrito por [Victor Jordan](https://www.linkedin.com/in/victorjordan95/)
