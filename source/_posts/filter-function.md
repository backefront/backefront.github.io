---
title: Como usar o método filter em Javascript
date: 2018-08-27 11:43:25
tags: 
- Javascript
- Front-end
postKeywords: JS, filter, ecmascript, dicas de javascript, retornar elementos, ECMAScript 5
postDescription: Entenda como o método filter funciona no javascript e como ele pode melhorar o seu desenvolvimento front-end com essas dicas de javascript.
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em um determinado momento de seu desenvolvimento, você recebe um array com diversos valores aleatórios, mas precisa trabalhar apenas os que são maiores que 20. Para isso, você poderia percorrer essa lista e verificar um por um e retornar um novo array apenas com os valores que passam nessas condições, que poderia ser feito com um `for` ou um `while` mas, coincidentemente, o Javascript possui um método do chamado `filter` que faz justamente isso! 

Você tem uma série de idades e deseja apenas quem é maior de idade.

```javascript
	let idades = [9, 10, 19, 1, 40, 55, 6, 87];
```

<!-- more --> 

## Solução

O método `find()` retorna um novo array com todos os valores que passam na validação implementada na função, caso nenhum número satisfaça essa condição, um array vazio será retornado.

```javascript
	const maioresDeIdade = idades.filter(idade => idade >= 18);
```

Na função acima, estamos percorrendo todos os valores do array e chamando o elemento que está sendo executado no momento com o nome `idade`. Desta forma, utilizando arrow function, passamos na mesma linha a condição, verificando se idade é igual ou maior à 18.

E o resultado:
![Retorno da função: Ensino Médio](/posts/filter-javascript.gif)


