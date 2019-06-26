---
title: Como ler uma variável de ambiente com o NodeJS
date: 2019-07-01 07:30:46
tags:
- NodeJS
- Front-end
- Back-end
postKeywords: nodejs environment variable, ler variavel node, acessar path node, node variavel ambiente, armazenar token node, expor token node
postDescription: Veja como podemos acessar as variáveis de ambiente de nosso computador através do NodeJS, sem complicações!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das coisas mais comum que acontece no desenvolvimento diário é a necessidade de adicionar um token de uma API.
Frequentemente, quando precisamos fazer uma chamada API, é comum pedir que passe esse token como parâmetro na URL, no header, etc.
Entretanto, deixar nosso token exposto dentro do código e consequentemente em nossos repositórios, é uma péssima coisa!
Afinal, onde fica a segurança nisso?

Mas você sabia, que você pode acessar suas variáveis de ambiente para ler um valor e injetar dentro do código?
Com isso, você não se expõe e tudo continua funcionando normalmente!

Cada linguagem tem um modo de acessar essas variáveis, e hoje vamos ver como fazemos isso com o NodeJS

<!-- more -->

Com o Node, nós conseguimos acessar nossas variáveis através de: `process.env.NOME_VARIAVEL`.
Em seu terminal, inicialize o node:

```javascript
node
```

E experimente digitar: `process.env` para ver o resultado!

![Executando process.env no terminal Node](/posts/environments-nodejs.png)

Possivelmente, você teve um retorno semelhante a este!
Agora com isto em mente, você pode acessar uma variável passando o nome dela

![Lendo uma variável de ambiente com o Node](/posts/lendo-variavel-ambiente-node.gif)


