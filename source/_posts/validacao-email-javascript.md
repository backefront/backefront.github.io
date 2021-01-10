---
title: Como validar um e-mail com Javascript
date: 2020-03-09 08:12:31
tags:
  - Front-end
  - Javascript
postKeywords: validar email javascript, como validar email, validate email js, javascript, formulario validacao, front-end, dicas front
postDescription: Quando estamos desenvolvendo um formulário em uma aplicação web ou em um simples campo de e-mail, desejamos fazer uma validação se o texto que está sendo inserido pelo o usuário está no formato de e-mail realmente. Existem algumas máscaras e até mesmo o input do HTML5 do tipo "email" que nos ajudam a fazer isto. Mas como podemos fazer essa validação via Javascript?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando estamos desenvolvendo um formulário em uma aplicação web ou em um simples campo de e-mail, desejamos fazer uma validação se o texto que está sendo inserido pelo o usuário está no formato de e-mail realmente.
Existem algumas máscaras e até mesmo o input do HTML5 do tipo "email" que nos ajudam a fazer isto.
Mas como podemos fazer essa validação via Javascript?

<!-- more -->

A validação de e-mail através do Javascript pode ser feita utilizando um Regex!
Podemos usar a seguinte função para fazer essa verificação:

```javascript
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
```

Neste Regex, informamos que para ser válido esse teste, queremos que nossa string seja composta por: `algumtexto@maistexto.texto`
Dessa forma, caso a string digitada fuja desse padrão, o retorno dado será falso!
