---
title: Como criar variável de ambiente React
date: 2021-03-06 10:19:53
tags:
  - React
  - Front-end
postKeywords: react env variable, como criar variavel ambiente, react variavel, ambiente react variavel, react, variavel, .env, env, environment, reactjs, front-end, dicas, hardcoded react, evitar hardcoded
postDescription: Você sabe como podemos fazer para criar variáveis de ambiente dentro de uma aplicação React? Neste passo a passo, irei mostrar isso de uma maneira simples e rápida!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

> Antes de mais nada, essa feature está disponível a partir da versão 0.5.0 do react-scripts

Uma excelente prática enquanto estamos desenvolvendo é que nosso sistema nunca tenha estaticamente no código URLs e endereços, o famoso `hard coded`.
É muito aconselhável que tenhamos essas informações em um arquivo de variáveis

Para isso, neste post irei mostrar como podemos armazenas esses informações dentro de um arquivo chamado `.env`

<!-- more -->

### O que é .ENV?

Para começar, devemos criar um arquivo na raiz do seu projeto, chamado `.env`.
Neste arquivo, definiremos as variáveis que iremos utilizar para nosso desenvolvimento

Com o arquivo criado, podemos começar definir nossas variáveis, sempre se atentando a um detalhe em específico:

> Todas nossas variáveis devem iniciar com REACT_APP\_ para que o React entenda ela como uma variável de ambiente

Feito isso, olha como ficaria nosso arquivo:

```txt
REACT_APP_BASE_URL=https://myendpoint.com/api
```

E como podemos usar essas variáveis? Simples! Só usar! ahahaha

```jsx
render() {
  return (
    <div>
      <small>Endereço da aplicação <b>{process.env.REACT_APP_BASE_URL}</b> mode.</small>
    </div>
  );
}
```

Agora quando rodarmos nosso projeto, ele automaticamente reconhece nossas variáveis de ambiente e adiciona no nosso código React!

> Sempre que atualizar uma variável ou o arquivo em si, é necessário reiniciar a aplicação!

Muito simples não é mesmo?
