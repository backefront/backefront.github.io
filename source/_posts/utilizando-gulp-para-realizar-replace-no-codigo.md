---
title: Substituição de strings pelo Javascript - Gulp
date: 2019-01-21 07:30:41
tags:
- Front-end
- Javascript
postKeywords: substituir palavra gulp, gulp replace tutorial, como fazer replace com gulp, replace javascript, dicas de gulp, automatizar replace
postDescription: A criação de um script para substituição de palavras pelo Gulp é um processo simples e que gera ao desenvolvedor um aumento em sua produtividade, permitindo que este processo seja realizado em questão de segundos!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Com o decorrer do desenvolvimento, acabamos nos deparando com situações inusitadas que acabam nos permitindo aprender novas ferramentas e aumentar o nosso nível profissional. Um exemplo disso, seria a necessidade de substituir um caminho de todas as imagens, no HTML, para um outro, pois em nossa versão final, as imagens podem ser que fiquem em path diferente do que utilizamos no desenvolvimento local! Mas então, como podemos fazer isso de uma forma automatizada? Com nosso querido [Gulp!](https://gulpjs.com/)

<!-- more -->

## O que vamos precisar?

Para começar, precisamos ter o Gulp configurado, [como já fizemos neste link](https://backefront.com.br/melhorando-sua-performance-com-gulp/), e instalar a dependência [gulp-replace](https://www.npmjs.com/package/gulp-replace), que é uma dependência que irá realizar a alteração de strings que correspondam ao que deseja alterar. Para isto, entre no diretório onde está seu arquivo `gulpfile.js` e execute o comando: 

```terminal 
npm install --save-dev gulp-replace
```

## Configurando o Gulp-replace

Agora que temos instalado o gulp-replace, podemos configurá-lo para fazer as alterações automaticamente. Para isto, devemos seguir a estrutura que nos é fornecida na documentação:

```javascript
var replace = require('gulp-replace');
 
gulp.task('templates', function(){
    // Primeiro informamos qual (ou quais) arquivo 
    // desejamos alterar, separando por virgula, 
    // caso haja outros arquivos.
    gulp.src(['nossoArquivoHTML.html'])
        // No primeiro parâmetro do replace(),
        // dizemos qual palavra, frase, tag, etc
        // que desejamos procurar e no segundo
        // parâmetro a palavra que iremos 
        // colocar no lugar.
        .pipe(replace('frase a ser procurada', 'frase encontrada!'))
        // E dizemos para onde desejamos enviar
        // o arquivo com as alterações realizadas
        .pipe(gulp.dest('build/'));
});
```

Desta forma, assim que executarmos o comando `gulp templates` no terminal, essa nossa tarefa será executada e todas as palavras que se encaixem no contexto, irá ser feito a substituição! 

Você pode realizar na mesma tarefa, diversos _replaces_ juntos, basta adicionar outro `.pipe(replace())` em seguida do primeiro replace! Além disso, é possível fazer alterações usando `regex`, `funções de callback`, entre outras coisas!
