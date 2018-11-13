---
title: Como adicionar um projeto a um novo repositório git
date: 2018-12-10 07:30:00
tags:
- Git
postKeywords: repositorio git set remote, definir url repositorio git, git url repositorio, alterar url repositorio
postDescription: Adicionar um novo projeto a um repositório git que já exista talvez possa parecer ser uma tarefa chatinha, mas é justamente o contrário! É muito mais simples que pensa, com o comando que o git nos disponibiliza!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O git é uma ferramenta muito utilizada no dia-a-dia de um desenvolvedor. Frequentemente, precisamos nos aventurar nos comandos `git ...` para concluir nossas tarefas diárias. O conhecimento em git é essencial, independente do seu nível de senioridade ou anos de experiência! 

Frequentemente clonamos repositórios para alterar os arquivos de acordo com a necessidade de nossas atividades, *commitamos* nossas alterações e enviamos e por aí vai! Mas e caso tivéssemos criado nosso projeto do **zero** e no final do dia, desejamos adicionar todos nossos arquivos em um repositório? Quase que o oposto do primeiro cenário! Então como podemos adicionar um projeto novo à um repositório no git?

<!-- more -->

## Criando um novo git

Primeiramente, devemos iniciar dentro da pasta onde contém os arquivos do projeto, o git, com o comando `git init`

```bash
git init
```

Feito isso, temos agora um repositório **local**, que contém seus arquivos! Só precisamos adicionar, commitar:

```bash
# Adiciona todos os seus arquivos de uma vez.
git add . 

# Commita e insere um comentário.
git commit -m "Adicionando arquivos do projeto"
```

Agora só precisamos fazer um **push** para nosso repositório, e para isso, devemos primeiramente **definir** qual é nossa URL de destino! Então usaremos o comando "*git remote add origin remote **urlRepositorio** *"

```bash
# Define um novo repositório como destino
git remote add origin remote repository URL

git remote -v
# Comando para verificar a URL que foi adicionada
```

E para finalizar, basta enviar suas alterações tranquilamente!

```bash
# Envia seus arquivos adicionados para o repositório definido
git push origin master
```