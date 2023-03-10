---
title: Como pegar o idioma do navegador
date: 2022-08-17 07:30:50
tags: 
- Javascript
- Front-end
postKeywords: idioma navegador, linguagem navegador, idioma javascript, language by js, idioma usuario javascript, javascript, frontend
postDescription: Atualizar o NPM é uma tarefa simples! Seja no Windows, Mac ou Linux, atualizar seu npm não deve ser um impecilho no seu desenvolvimento! Relembre o comando para atualizar seu NPM neste post!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Alguma vez você já precisou pegar o idioma que o usuário utiliza em seu navegador para utilizar no sistema, seja para exibir alguma informação daquele idioma ou até para realizar a internacionalização?

O navagador possui, dentro da propriedade `navigator`, os idiomas preferenciais do usuário, e é muito fácil recuperar esse valor:

<!-- more -->

Para recuperarmos, vamos acessar a propriedade `navigator`:
```javascript
const userLocale = navigator?.languages?.length ? navigator.languages[0] : navigator.language;

console.log(userLocale); // 👉️ "pr-BR", essa opção vai retornar o idioma preferencial

// Ou da seguinte maneira 👇️
console.log(navigator.languages); // ["pt-BR", "en-US", "en"], dessa forma retorna um array com os idiomas que o usuário tem preferência
```

Simples não é?