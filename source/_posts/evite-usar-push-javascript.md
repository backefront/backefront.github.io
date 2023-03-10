---
title: Evite usar push em objetos no Javascript
date: 2020-01-13 07:21:55
tags:
  - Front-end
  - Javascript
postKeywords: avoid push, push com spread, adicionar item lista, objeto, javascript, como evitar push, porque não usar push javascript, spread
postDescription: Neste post, irei comentar um pouco porque não devemos alterar diretamente um objeto no Javascript utilizando a função push e como devemos contornar essa situação!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

No Javascript quando passamos um objeto/array em uma função, como parâmetro, passamos ela como **referência**.
Quando realizamos alguma operação que altera, como por exemplo, adicionar um elemento novo ao objeto e utilizamos `push`, estamos alterando diretamente aquele objeto que passamos apenas como referência!

Qual a consequência disso? Caso uma outra função esteja utilizando o mesmo objeto, será afetado pela ação de adicionar!

Então, pensando nisso, a melhor alternativa é sempre retornarmos uma cópia do objeto!
E para isso podemos utilizar o [`spread operator`](https://backefront.com.br/como-juntar-arrays-javascript/)

<!-- more -->

Vamos utilizar como exemplo uma função que adicione um nome na lista:

```javascript
listaNomes = ["Victor", "Lo Ruanda", "João"];

const addName = (listaNomes, nome) => {
  return [...listaNomes, nome];
};

addName(listaNomes, "Vicenzo");
// Retorno: ['Victor', 'Lo Ruanda', 'João', 'Vicenzo']
```

Agora com essa função, estamos retornando um novo objeto e não mais alterando o objeto que foi nos passado!
Caso queira deixar essa função em apenas uma linha, você pode fazer a seguinte alteração:

```javascript
const addName = (listaNomes, nome) => [...listaNomes, nome];

addName(listaNomes, "Vicenzo");
// Retorno: ['Victor', 'Lo Ruanda', 'João', 'Vicenzo']
```
