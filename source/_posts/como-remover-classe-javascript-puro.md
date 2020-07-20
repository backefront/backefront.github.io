---
title: Como remover uma classe HTML com Javascript puro
date: 2019-10-21 07:33:00
tags:
- Front-end
- Javascript
postKeywords: classe js puro, remover classe js, remove class pure js, classe js, remover pelo js, toggle js class, como remover classe
postDescription: Você sabia que pode remover classe pelo Javascript nativamente, de maneira mais eficiente e performática? Sem a necessidade de incluir bibliotecas externas, o que acabaria sobrecarregando sua aplicação desnecessáriamente!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Continuando a nossa série de "coisas que podemos fazer com Javascript puro", [no último post](https://backefront.com.br/adicionar-classe-js-puro/), conversamos sobre como podemos adicioanr uma classe em um elemento HTML com Javascript puro. 
Hoje vou mostrar como podemos fazer o processo reverso, remover uma classe com Javascript puro, sem nenhuma lib!

<!-- more -->

Para remover uma classe com o famoso JQuery, você faria algo semelhante com: 

```javascript
$('#elemento').removeClass('red');
```

Agora, removendo uma classe, na versão Javascript **puro**:

```javascript
const elemento = document.getElementById('elemento');

elemento.classList.remove('red');
```

O Javascript tem evoluído constantemente e sempre nos trazendo facilidades, fazendo com que, muitas das vezes, não precisemos utilizar bibliotecas que apenas sobrecarregariam o nosso sistema, permitindo que façamos tudo nativamente com o Javascript. 
A remoção de classe com Javascript puro é um exemplo disso!
