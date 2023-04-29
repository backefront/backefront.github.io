---
title: Axios vs. Fetch - qual escolher para suas requisições HTTP?
date: 2023-04-29 07:35:46
tags: 
- Front-end
- Javascript
postKeywords: Axios, Fetch, requisições HTTP, front-end, biblioteca JavaScript, função nativa do navegador, interceptadores, cancelamento de requisições, conversão automática de dados, sintaxe de Promises, navegadores antigos, ES6.
postDescription: Descubra as principais diferenças entre Axios e Fetch para fazer requisições HTTP em projetos front-end. Saiba qual escolher de acordo com as necessidades do seu projeto e das suas preferências pessoais.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando se trata de fazer requisições HTTP em projetos front-end, há várias ferramentas disponíveis para os desenvolvedores. Duas das mais populares são Axios e Fetch. Ambas têm funcionalidades semelhantes, mas existem algumas diferenças importantes que podem influenciar na escolha da melhor opção para o seu projeto.

<!-- more -->

Axios é uma biblioteca JavaScript para fazer requisições HTTP que foi criada para oferecer suporte a navegadores antigos e para permitir o uso de interceptadores. Interceptadores são funções que podem ser usadas para gerenciar erros e autenticação de maneira centralizada. 

O Axios também tem um sistema de cancelamento de requisições em andamento, o que pode ser útil para melhorar a performance e evitar desperdício de recursos. Além disso, o Axios oferece suporte para conversão automática de dados de resposta, o que significa que você pode receber dados formatados em JSON, XML ou outros formatos diretamente. Em termos de sintaxe, o Axios é baseado em Promises e usa um formato mais familiar para os desenvolvedores que já estão acostumados com jQuery ou AngularJS.

Fetch, por outro lado, é uma função nativa do navegador que foi introduzida no ECMAScript 6 (também conhecido como ES6 ou ES2015). Isso significa que você não precisa adicionar nenhuma biblioteca externa para fazer requisições HTTP em projetos front-end. No entanto, o Fetch não oferece suporte a navegadores antigos e não permite o uso de interceptadores. Também não há um recurso nativo de cancelamento de requisições em andamento, o que pode ser um problema para projetos que precisam lidar com muitas requisições simultâneas. 

Além disso, com Fetch você precisa usar métodos adicionais para converter os dados recebidos em um formato legível. Em termos de sintaxe, o Fetch usa a sintaxe de Promises nativa do JavaScript e pode parecer mais complicado para os desenvolvedores menos experientes.

Então, qual escolher para suas requisições HTTP? A resposta depende das necessidades do seu projeto e das suas preferências pessoais. Se você precisa oferecer suporte a navegadores antigos, usar interceptadores ou converter automaticamente dados de resposta em formatos legíveis, o Axios pode ser a melhor escolha. Por outro lado, se você está trabalhando em um projeto que não precisa lidar com muitas requisições simultâneas ou se prefere a sintaxe de Promises nativa do JavaScript, o Fetch pode ser uma opção mais adequada.

Em resumo, tanto o Axios quanto o Fetch são ferramentas úteis e podem ser usadas para fazer requisições HTTP em projetos front-end. A escolha entre eles dependerá das necessidades do seu projeto e das suas preferências pessoais. É importante entender as diferenças entre as duas ferramentas para tomar a melhor decisão para o seu projeto.

### Resumindo principais diferenças

- Axios oferece suporte a navegadores antigos e permite o uso de interceptadores, o que pode ajudar na gestão de erros e autenticação. Fetch, por outro lado, é uma função nativa do navegador e não oferece esses recursos adicionais.

- Axios tem um sistema de cancelamento de requisições, o que significa que você pode cancelar uma requisição em andamento se necessário. Com Fetch, não há um recurso nativo de cancelamento.

- Axios tem suporte para conversão automática de dados de resposta, o que significa que você pode receber dados formatados em JSON, XML ou outros formatos diretamente. Com Fetch, você precisa usar métodos adicionais para converter os dados recebidos em um formato legível.

- Em termos de sintaxe, Axios é baseado em Promises e usa um formato mais familiar para os desenvolvedores que já estão acostumados com jQuery ou AngularJS. Fetch, por outro lado, usa a sintaxe de Promises nativa do JavaScript e pode parecer mais complicado para os desenvolvedores menos experientes.