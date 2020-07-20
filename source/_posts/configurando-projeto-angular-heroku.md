---
title: Como fazer deploy de uma aplicação Angular no Heroku
date: 2019-06-17 07:30:04
tags:
- Angular
- Front-end
postKeywords: Angular heroku, deploy angular no heroku, deploy, heroku, angular, static file heroku, como subir aplicacao angular online
postDescription: Veja como subir sua aplicação Angular no Heroku com apenas algumas alterações em seu código, passo a passo!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você acaba de desenvolver uma aplicação super bacana em Angular e deseja mostrar para todos.
Mas onde subir sua aplicação? E como?

Podemos utilizar uma plataforma muito conhecida, chamada [Heroku](https://www.heroku.com/), que é uma plataforma em nuvem para implantação e execução de aplicações.
Com ele, conseguimos fazer o deploy de nossa aplicação facilmente e inclusive configurar um deploy contínuo com Github em apenas um clique!

Para fazermos isto, precisamos de algumas coisas:

- Uma conta no Heroku (é gratuito!)
- Algumas alterações no nosso código Angular.

<!-- more -->

### Configuração do Angular

A primeira coisa a ser feita é alterar o seu `package.json`.
Você deve copiar as dependências **@angular/cli**, **@angular/compiler-cli** e **typescript** das devDependencies para dependencies.
Seu package deve ficar parecido com algo assim:

```javascript
"dependencies": {
    "@angular/animations": "^6.1.0",
    "@angular/cli": "~6.1.4",
    "@angular/common": "^6.1.0",
    "@angular/compiler": "^6.1.0",
    "@angular/compiler-cli": "^6.1.0"
    // ...Outras dependências
    "typescript": "~2.7.2",
}
```

Ainda no arquivo `package.json` vamos adicionar dois novos scripts:

```javascript
"scripts": {
    "ng": "ng",
    "start": "node server.js", // Adicionamos o Start, do arquivo server.js que logo criaremos
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "heroku-postbuild": "ng build --prod" // Adicionamos esse comando para o heroku gerar o build dos nossos arquivos
},
```

E devemos também adicionar as versões do Node e NPM que queremos que o Heroku utilize. 
Para saber isso, rode o comando `node -v` para saber a versão do Node e `npm -v` para saber a versão do NPM.
Sabendo essas versões, adicione ainda no package as **engines**:

```javascript
  "engines": {
    "node": "10.15.3",
    "npm": "6.9.0"
  }
```
Você pode adicionar esse trecho logo após suas dependências!

### Criando nosso arquivo server.js

Quando estamos desenvolvendo, rodamos a aplicação com `ng serve`, porém em um ambiente de produção, precisamos configurar um servidor
para que possa rodar nossa aplicação, servindo os arquivos que foram gerados pelo `ng build` do Angular.
E é nesta parte que vamos configurar nosso arquivo `server.js`.

Primeiramente, precisamos instalar algumas novas dependências:

```
npm install express path --save
```

Agora, crie um arquivo chamado `server.js` na raiz do projeto (onde fica seus arquivos package.json, angular.json, etc)
E adicione o seguinte código:

```javascript
//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/NOME_DO_SEU_PROJETO'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/NOME_DO_SEU_PROJETO/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);
```

Com isto, toda sua configuração para o Heroku está pronta! 
Agora basta você vincular este projeto no github e habilitar a opção de integração!

### Criando um projeto no Heroku e habilitando Github

Criar um novo projeto no Heroku é muito simples! 
Devemos acessar a nossa conta e clicar na opção **New**, no canto superior direito e clicar em **Create new app**
Feito isto, você deve visualizar uma tela parecida com a seguinte:

![Tela de Configuração da aplicação - Heroku](/posts/heroku_integracao_github.png)

Para vincular a sua aplicação do Github com o Heroku, basta clicar em Github em **Deployment method** e permitir o acesso do Heroku no seu Git!
Com tudo configurado, você conseguirá pesquisar pelo seus repositórios e associar a um!

Agora você tem seu projeto vinculado ao Heroku! 
Basta você acionar **Deploy Automático** caso queira que a aplicação seja executada a cada push em sua branch
Ou realizar o deploy manual, que fica no final da página, onde está escrito **Manual Deploy**