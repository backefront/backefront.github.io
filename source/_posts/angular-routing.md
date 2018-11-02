---
title: Criando projeto Angular com arquivo routing!
date: 2018-11-12 07:34:08
tags:
- Front-end
- Angular
postKeywords: criar rota angular 2, gerar aquivo route, generate routing angular 2, como gerar projeto com rota angular, angular, route, generate route
postDescription: Otimize seu tempo criando um projeto Angular com o arquivo de rota já configurado e importado em seu projeto através do AngularCLI!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O AngularCLI facilita muito na criação de projetos, com a geração de componentes, services, por linha de comando! Porém, quando executamos o comando **ng new nova-aplicacao**, o Angular nos fornece um projeto **sem** um arquivo muito importante: `app-routing.ts`.

É neste arquivo que indicamos as rotas que nossa aplicação usará e também quais componentes cada rota injetará em nosso navegador! Quando você gera um projeto apenas com esse comando, você precisa criar na mão posteriormente este mesmo arquivo para que possa adicionar suas rotas. Mas será mesmo que o nosso querido CLI não possui, nativamente, algo que possa solucionar esse problema?

<!-- more -->

Pensando neste problema, o Angular disponibilza um comando muito útil, que executamos juntamente à geração do nosso projeto! Para isso, quando for criar um novo projeto, execute o seguinte comando:

```javascript
    ng new nova-aplicacao --routing
```

Com este parâmetro, você exige que o Angular crie o arquivo routing e já importe dentro do seu `app.module.ts` de maneira correta!