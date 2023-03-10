---
title: Debounce Javascript - Executando função segundos após digitar
date: 2020-08-10 08:31:55
tags:
  - Front-end
  - Javascript
postKeywords: debounce javascrit, funcao esperar digitar, debounce, como fazer debounce, tutorial debounce js, debbounce, procurando dados após terminar digitar, terminar digitar js
postDescription: Você já precisou executar uma função que esperasse um determinado tempo para aí sim executar? Quando falo nesse cenário, pode passar em sua cabeça usar o `setTimeout` o que não está errado! Mas sabia que existe uma prática que podemos usar chamada debounce? Você já ouviu falar nesse termo?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou executar uma função que esperasse um determinado tempo para aí sim executar?
Quando falo nesse cenário, pode passar em sua cabeça usar o `setTimeout` o que não está errado!
Mas sabia que existe uma prática que podemos usar chamada `debounce`?
Você já ouviu falar nesse termo?

<!-- more -->

Debounce no Javascript é uma prática usada para melhorar nossa performance nos navegadores.

Mas como assim?

É simples! Sabe aquela função que executamos para fazer uma busca enquanto o usuário está digitando no campo de busca?
Se deixarmos que a função seja executada toda vez que tivermos alteração no input, não concorda que estaremos constantemente fazendo requisições desnecessárias?

Agora e se executarmos apenas quando o usuário parar de digitar, isto é, quando ele digitou algumas letras e fez uma pausa, podemos entender que essa pausa é ele aguardando a resposta da busca, e é nesse momento em que fazemos a solicitação ao nosso back-end para a consulta!

Isso é debounce! Bem legal, né?

Vamos ver isso em código agora!
Peguei esse trecho de código [deste artigo](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086). Se você sabe inglês, recomendo a leitura!

```javascript
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
```

No código acima temos três coisas que precisamos entender:

- Parâmetro `func`: É a função que você deseja executar após o tempo;
- Parâmetro `wait`: É o tempo que você quer que a função aguarde para que execute alguma determinada função. Esse tempo é em milissegundos;
- `timeout`: O valor usado para indicar o tempo corrido;

Agora com a nossa função criada, como podemos utilizá-la?
Basta chamar ela, passando os parâmetros necessários!

```javascript
var returnedFunction = debounce(function () {
  // Aqui podemos inserir a lógica
  // para realizar as buscas em
  //  nosso back-end.
}, 250);

document
  .getElementById("input-search")
  .addEventListener("keyup", returnedFunction);
```

Os cenários mais comuns para o uso do debounce são: resize, scroll, e keyup/keydown.
Espero que tenha gostado e que isso possa ajudá-los a diminuir a quantidade de requisições e consequentemente, melhorar a performance de sua aplicação!
