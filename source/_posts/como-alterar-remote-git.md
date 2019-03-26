---
title: Como alterar a URL de um projeto git
date: 2018-12-17 07:30:44
tags:
- Git
postKeywords: repositorio git set url, definir url repositorio git, git url repositorio, alterar url repositorio
postDescription: As vezes precisamos alterar a URL de nossos projetos para outros repositórios no git e podemos fazer isso de uma forma rápida e fácil com o comando que o git nos disponibiliza!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Digamos que você esteja trabalhando em um determinado projeto, a qual está *apontado* para um repositório git (bitbucket, github, etc) e em certo momento, é decidido que deve ser migrado para outro repositório. Então, você deve enviar todas suas novas alterações para o novo caminho! 

Clonar o novo repositório e passar os arquivos alterados na base do *ctrl + c/ctrl + v* não parece ser a solução mais eficiente e elegante, não é mesmo? Para isto, o git possui um comando chamado `git remote set-url`!

<!-- more -->

## O Comando

O comando `git remote set-url` pode aceitar dois argumentos:

* Um nome de remote existente, como por exemplo: `origin` ou `upstream`
* Uma nova URL para o remote

## Alterando o remote

Em seu terminal, acesse o diretório onde se encontra o seu projeto e execute os comandos:

```cmd
// exibe na tela o seu remote atual
git remote -v

// define a nova url
git remote set-url origin https://github.com/USUARIO/REPOSITORIO.git
```

Na próxima vez que for fazer um `git fetch`, `git pull` ou `git pull` para o novo repositório, será solicitado seu usuário/senha novamente!
