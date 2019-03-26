---
title: Como otimizar tarefas com o Gulp
date: 2018-09-21 08:04:18
tags: 
- Javascript
- Front-end
postKeywords: gulp, gulp iniciante, como usar gulp, minificar, js, css, como criar um gulp, dicas gulp, otimizar gulp
postDescription: o Gulp serve para automatizar diversos processos repetitivos que desenvolvedores precisam realizar em seu dia-a-dia, de uma maneira simples e rápida! Mas afinal, como criar um script automatizador de tarefas com Gulp?
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Alguns dias atrás, comentei sobre algumas [técnicas para melhorar a performance de seu site](https://backefront.com.br/como-otimizar-meu-site/) e nele comentei sobre o [Gulp](https://gulpjs.com/), que serve para automatizar diversos processos repetitivos que desenvolvedores precisam realizar em seu dia-a-dia, de uma maneira simples e rápida! Mas afinal, como criar um script automatizador de tarefas com Gulp?

## Instalação

Para utilizar o Gulp, é necessário ter instalado o [NodeJS](https://nodejs.org/en/), com ele você consegue rodar o comando npm para instalar o gulp:

```javascript
npm install -g gulp
```

## Criando seu primeiro script de automatização

Para servir como exemplo, vamos pegar a dica dada antes, sobre minificação. O gulp requer um arquivo chamado `gulpfile.js`, esse arquivo conterá o script com a funções de minificação. Para isso, criei uma estrutura simples, como exemplo abaixo:

![Estrutura de Arquivos - Gulp](/posts/gulp-estrutura-pasta.png)

<!-- more --> 

### Passo 1 - Crie seu package.json

Package.json é o arquivo responsável por ser seu ponto de partida, nele contém todas as informações sobre seu projeto, as dependências usadas, suas versões respectivas e até mesmo se o tipo do projeto é open-source e o nome do autor!
Este arquivo é necessário para que possamos instalar as dependências do Gulp, então para isso, rode em seu terminal, dentro da pasta do projeto o comando ***npm init*** e pode apertar **enter** até terminar!

```javascript
npm init
```

Feito isso, o arquivo do gulp deve ter sido adicionado em sua pasta e você está pronto para começar adicionar as dependências!

### Passo 2 - Instalando as dependências

Com tudo pronto, você deve abrir o terminal e informar as dependências que deseja instalar e pedir para que o npm salve-as em seu arquivo package.json. Sabendo isso, iremos instalar o **gulp-clean-css**, **gulp-htmlmin**, **gulp-htmlclean** e o **uglify**! Em seu terminal, **execute o comando**:

```javascript
npm install gulp-clean-css gulp-htmlmin gulp-uglify --save
```

Atente-se ao *--save* passado junto, é esta opção que usamos para que todas as dependências que estamos instalando seja salva dentro do arquivo **package.json**

### Passo 3 - Criando o script Gulp

Agora que temos todos os recursos necessários, vamos criar o arquivo **gulpfile.js** na raiz (onde está a pasta app, build, etc) do seu projeto.

Vamos começar a construir nosso script! A primeira coisa que devemos fazer dentro deste arquivo é chamar as dependências que instalamos anteriormente. Para isso, adicione no começo: 

```javascript
var gulp = require('gulp');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
```

E agora conseguimos utilizar todas a funcionalidades através dessas variáveis que criamos! Vamos começar construir nossas funções, cada uma tendo um objetivo específico:

```javascript
// Esta primeira função pegará todos os arquivos do tipo CSS
// dentro da pasta CSS, dentro da pasta app e colocará a versão
// minificada dentro da pasta CSS, dentro de build
gulp.task('minify-css', function() {
  return gulp.src('./app/css/*.css')
    .pipe(minifycss({
	  compatibility: 'ie8'
  }))
  .pipe(gulp.dest('./build/css'));
});

// Esta segunda função pegará todos os arquivos do tipo
// HTML, removerá todos os comentários,minificará trechos de JS
// e CSS caso tenha e enviará os arquivos minificados para
// a pasta JS, dentro de build
gulp.task('minify-html', function() {
  return gulp.src('./app/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }))
    .pipe(gulp.dest('./build/js'))
});

// Esta segunda função pegará todos os arquivos do tipo
// Javascript, removerá todos os comentários, minificará os arquivos
// e enviará os arquivos minificados para a pasta JS, dentro de build
gulp.task('minify-js', function() {
  return gulp.src('./app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});
```

Com esse script salvo, você consegue chamar essas funções pelo nome que foi atribuido, para que elas executem a otimização, da seguinte forma:

```
// Este comando executará a função de minificar o HTML
gulp minify-html
```

Mas espera aí! Quer dizer que terei que rodar todos os comandos um por um sempre que quiser otimizar? **Não!**
Nós conseguimos fazer uma função para que o gulp execute um roteiro desejado, no nosso caso, podemos fazer com que rode as três funções passando apenas um comando! Para isso, adicione no seu arquivo **gulpfile.js** o seguinte script:

```javascript
// Com esta função, ele irá executar uma sequencia de comandos
// executando cada função passada como parâmetro
gulp.task('build', function(cb) {
  runSequence('minify-html', 'minify-css', 'minify-js', cb)
});
```

E agora finalmente, basta rodar:

```javascript
gulp build
```

Ou apenas `gulp`, pois o gulp entende o build como **default**, então ao digitar apenas gulp você estará fazendo o mesmo que `gulp build`. 

```javascript
gulp
```

Este foi uma explicação bem rápida de como o Gulp pode aumentar nosso desempenho em nosso desenvolvimento! Ele possui um leque de possibilidades e scripts que você pode fazer como por exemplo: criar um __livereload__ que sempre que você fizer uma alteração em seu código, o próprio gulp recarregue sua página, minificar todas as imagens do projeto, entre outras diversas coisas! 

Agora fica com você soltar a criatividade em como otimizar processos com o Gulp e sair criando funções para isso!
