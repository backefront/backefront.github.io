---
title: Git - Sistema de controle de versão de arquivos
date: 2018-05-16 20:33:56
postKeywords: versionamento de codigo, git basico, funcionamento git, usar git, versionamento
postDescription: Git é um sistema de controle de versões de arquivos. Ele armazena as mudanças realizadas em algum determinado arquivo ao decorrer de um período e permite que você possa acessar, recuperar essas versões mais antigas.
tags:
- Git
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quem nunca deparou-se com essa palavra em descrições de vagas ou em uma conversa técnica com colegas da área?
Saber o conceito de Git já se tornou essencial na área de desenvolvimento mas nem todos sabem ou tem vergonha de perguntar sobre este assunto! Neste artigo, iremos apresentar este conceito de versionamento de arquivos!

<!-- more -->

## O que é git?

Em rápidas palavras, Git é um sistema de controle de versões de arquivos. Ele armazena as mudanças realizadas em algum determinado arquivo ao decorrer de um período e permite que você possa acessar, recuperar essas versões mais antigas. O uso de versionamento de arquivos pode abranger diversas áreas, como por exemplo, se você é um escritor ou até um designer gráfico, você pode armazenar seus textos/ilustrações e você pode acessar suas últimas alterações. 
O Git permite que veja quais e quando foram as últimas alterações realizadas nos arquivos alterados.

## Conceitos de branch

O git trabalha com um conceito de _branch_, que em inglês significa *ramo* ou *ramificação*, que é justamente a representação do git, onde temos uma árvore principal e as variações, que seriam as alterações que fazemos em arquivos. 
A imagem abaixo exemplifica este conceito, onde podemos ver que foi criado uma ramificação a partir do galho principal, que é a bolinha verde-água.
Nas branches, podemos realizar alterações sem que a ramificação principal seja afetado, com isso podemos trabalhar com maior tranquilidade sem medo de perder os arquivos antigos.

![Conceito de branch - Git básico](/posts/Conceito de Branch - Git Basico.png)

## Como utilizar Git

#### Download
Para começar utilizar, primeiramente você precisa ter instalado em seu computador. Você pode baixar diretamente pelo [site Oficial](https://git-scm.com/downloads). 

#### Iniciando repositório
Após instalar, você poderá criar um novo _repositório_, que nada mais é que o local onde o Git passará a observar alterações.
Dentro da pasta em que deseja criar o repositório, abra o terminal (prompt de comando) e digite o comando `git init`
```
git init
```

Adicione um arquivo dentro desta pasta e digite `git status`, com este comando você poderá ver todas as modificações que foram feitas dentro da pasta. Possivelmente você terá um retorno semelhante ao abaixo

```
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        backefront.txt

nothing added to commit but untracked files present (use "git add" to track)
```

#### Adicionando e commitando o arquivo
O arquivo recém adicionado estará em *vermelho*, o que significa que este arquivo ainda não foi confirmado, isto é, que realmente deseja "salvar" ele. Para isto, você precisa adicionar esse arquivo e fazer o `commit`.
Para adicionar arquivos você pode usar `git add <nomeDoArquivo>` ou `git add *`. Esse ** * ** significa que você está adicionando todos os arquivos alterados.

```
git add * //Para adicionar os arquivos
git commit -m 'Enviando arquivos' //Commitando os arquivos e adicionando mensagem para identificação
```

#### Enviando alterações

Nesta etapa, você está pronto para enviar suas alterações para o seu repositório remoto, para isso, execute o comando `git push origin master`
```
git push origin master
```

Se você não clonou um repositório existente e quer vincular seu repositório a um servidor remoto, você deve adiciona com o seguinte comando `git remote add origin <urlDoServidor>`
Agora você é capaz de enviar suas alterações para o servidor remoto selecionado.

Em próximos posts, abordaremos os principais comandos `git` e também os principais serviços para hospedagem de seus repositórios.