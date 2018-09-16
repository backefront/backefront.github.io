---
title: Template Strings, o que é e como usar?
date: 2018-04-11 19:30:54
postKeywords: javascript, ecmascript, es6, ecma, ECMAScript 2015, template string, string template, templates string, literais strings
postDescription: Template Strings são literais strings que permitem a concatenação de strings e expressões de um modo muito mais fácil e agradável de interpretar o código. Aprenda como implementá-la!
tags:
- Front-end
- Javascript
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Template Strings são literais strings que permitem a concatenação de strings e expressões de um modo muito mais fácil e agradável de interpretar o código. Em minha opinião, é uma das features implementadas no ECMAScript 2015 que facilitou meu desenvolvimento de códigos!

## Como utilizar template strings

A utilização de Template Strings é muito fácil, basta envolver o que você deseja entre acentos graves (também conhecido como crase).
No exemplo abaixo, mostramos como é a utilização normal e como ficaria usando a template string.

<!-- more -->

```javascript
var nome = 'Essa é uma declaração de variável de forma clássica';
```

```javascript
var nome = `Essa é a declaração usando template strings`;
```

> Legal! Mas aparentemente nada mudou, continua a mesma coisa! Então qual seria a vantagem de trocar um pelo outro?

Realmente, olhando em um exemplo tão básico assim, não faz diferença nenhuma! Mas e se complicarmos só um pouquinho?

Vamos imaginar um cenário em que você deseja retornar um elemento HTML criado através do Javascript, vamos lá!

```javascript
var elemento = '<section><h1>Pequeno teste</h1><p>Esse é um pequeno teste para o site backefront.com.br!</p></section>';
```

Meio confuso isso né? Vamos quebrar o elemento por linhas para poder facilitar a leitura!

```javascript
var elemento = '<section>';
elemento += '<h1>Pequeno teste</h1>';
elemento += '<p>Esse é um pequeno teste para o site backefront.com.br!</p>';
elemento += '</section>';
```
Agora melhorou, mas ainda sim é chato ficar digitando tudo isso! Com o template strings, isso fica muito mais fácil!

```javascript
var elemento = `
  <section>
    <h1>
	Pequeno teste
    </h1>
    <p>
	Esse é um pequeno teste para o site backefront.com.br!
    </p>
  </section>
`;
```

Muito melhor não? E o melhor de tudo, isso funciona sem problemas! Perceba que envolvemos o conteúdo entre os acentos, da mesma forma que fazemos com aspas e pronto!

## Template Strings encapsulando funções

Para encapsular variáveis dentro de uma string, no molde antigo você precisaria fazer da seguinte forma:

```javascript
var valor = 10;

var encapsulado = 'Esse blog é ' + valor; //Resultado: Esse blog é 10
```

Agora com essa nova feature:

```javascript
var valor = 10;

var encapsulado = `Esse blog é ${valor}`; //Resultado: Esse blog é 10
```

O mesmo se aplica para quando quer passar uma função no meio da string!


```javascript
function valor(){
  return 10
}

var encapsulado = `Esse blog é ${valor()}`; //Resultado: Esse blog é 10
```

## Considerações finais

Template Strings é uma característica do ES6 que veio para facilitar nossas vidas, é extremamente poderoso e muito útil no nosso dia-a-dia! Sua aceitação entre os navegadores é praticamente total, como demonstrado na imagem abaixo, através de um site de consulta do que podemos usar, o [caniuse](https://caniuse.com) 

![Can I Use - Template Strings](/posts/CanIUse - Template Strings.png)

Espero que utilizem essa fantástica propriedade!

## Referências

[MDN - Template Strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)
[ECMAScript 2015 (6th Edition, ECMA-262)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)