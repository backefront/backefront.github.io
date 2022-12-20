---
title: O que é Big O (Big O notation)
date: 2022-12-20 10:06:58
tags:
  - Algoritmos
  - Javascript
postKeywords: Complexidade de algoritmo, Análise de tempo de execução, Escalabilidade, O(1), O(n), O(n^2), O(log n), O(n log n), O(2^n), O(3^n), Notação matemática, Comparação de algoritmos, Medida de desempenho, Dados de entrada, Tamanho de dados, Tempo de execução, Memória (espaço)
postDescription: O que é a notação Big O e como ela é usada na análise de algoritmos.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Big O notation é uma notação matemática usada para descrever a complexidade de um algoritmo. 

É uma forma de medir quanto tempo e espaço (ou memória) um algoritmo leva para executar em função do tamanho de seus dados de entrada. Em outras palavras, a notação Big O nos diz o quanto o tempo de execução de um algoritmo aumenta à medida que a quantidade de dados aumenta.

Exemplos de notações Big O comuns incluem O(1), O(n), O(n^2) e O(log n). Aqui estão alguns exemplos de cada uma dessas notações em JavaScript:

<!-- more -->

### O(1)
Significa que o tempo de execução é constante, independentemente do tamanho dos dados de entrada. Por exemplo:

```js
function getFirstElement(arr) {
  return arr[0];
}
```
O tempo de execução desta função será sempre O(1), pois independentemente do tamanho do array, ela sempre retornará o primeiro elemento em uma única operação.

### O(n)

Significa que o tempo de execução é proporcional ao tamanho dos dados de entrada. Por exemplo:

```js
function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
```
O tempo de execução desta função é O(n), pois a quantidade de iterações do loop é proporcional ao tamanho do array. Se o array tiver 10 elementos, o loop será executado 10 vezes. Se o array tiver 100 elementos, o loop será executado 100 vezes.

### O(n^2)
```js
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
O tempo de execução desta função é O(n^2), pois o número de iterações do segundo loop é proporcional ao tamanho do array e o número de iterações do primeiro loop também é proporcional ao tamanho do array. Isso significa que o número total de iterações é proporcional ao quadrado do tamanho do array.

### O(log n)
Significa que o tempo de execução aumenta de forma logarítmica em relação ao tamanho dos dados de entrada. Isso significa que, se o tamanho dos dados de entrada aumentar 10 vezes, o tempo de execução aumentará apenas em um fator de 2. 

Exemplo:

```js
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
```

A função de pesquisa binária divide o array ao meio em cada iteração do loop, portanto, o número de iterações é proporcional ao logaritmo do tamanho do array. Se o array tiver 1024 elementos, a função executará o loop no máximo 10 vezes (2^10 = 1024). Se o array tiver 1048576 elementos (2^20), a função executará o loop no máximo 20 vezes.

É importante notar que a notação Big O é uma forma de expressar a complexidade relativa de um algoritmo em relação ao tamanho dos dados de entrada. Ela não dá uma medida exata do tempo de execução em segundos ou milissegundos, mas sim uma forma de comparar a escalabilidade de diferentes algoritmos.