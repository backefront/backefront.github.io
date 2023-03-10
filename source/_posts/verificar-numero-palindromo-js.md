---
title: Como verificar se um número é palíndromo ou não com Javascript
date: 2022-08-15 08:28:01
tags:
  - Front-end
  - Javascript
postKeywords: palindrome js, palindromo js, verificar numero palindromo js, js, front-end, teste logica numero palindromo
postDescription: Os números palíndromos, também chamados de capicuas, aparecem naturalmente na sequência dos números naturais, são números que podem ser lidos em ordem inversa e continuam tendo o mesmo valor. Você sabe como verificar se um número é palíndromo ou não, utilizando Javascript?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Os números palíndromos aparecem naturalmente na sequência dos números naturais, são números que podem ser lidos em ordem inversa e continuam tendo o mesmo valor.

Um exercício de lógica é verificar se um dado número é palíndromo ou não.
Você sabe então, como validar, utilizando Javascript?

<!-- more -->

Para verificar, podemos utilizar um algoritmo bem curto:
```javascript
const isPalindrome = function(x) {
    return x == String(x).split("").reverse().join("")
};
```

ou sendo mais performático:
```javascript
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x === 0) return true;
    let curr = 0
    let acc = ''
    let next = x
    while(next != 0){
        curr = next % 10
        acc += curr
        next = Math.floor(next / 10)
    }
    return parseInt(acc) === x
};
```

Com essa simples função, conseguimos verificar se o número é palíndromo ou não! Esse tipo de questão é muitas das vezes pedido em testes de entrevistas, provas de faculdades, ou até mesmo, em alguma determinada situação em nossos trabalhos!
