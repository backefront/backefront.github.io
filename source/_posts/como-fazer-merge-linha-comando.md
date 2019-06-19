---
title: Como fazer merge por linha de comando
date: 2019-06-24 08:00:39
tags:
- Git
postKeywords: git merge, command line git merge, git, merge, comamnd, mergear master, como fazer merge
postDescription: Neste post, será abordado como fazer merge de uma branch para outra, por linha de comando, no git, sem complicações!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Um desenvolvedor tem em seu cotidiano o git constantemente.
Em diversos momentos, trabalhamos com branches, modificamos arquivos, criamos novas estruturas.
E precisamos trazer para nossa MASTER as mudanças que realizamos em nossas branches.
Este ato de trazer as mudanças é chamado de **merge**
Então, como realizamos um merge da nossa branch para master?

<!-- more -->

Para fazer isso, primeiramente, verifique se você está na branch master (ou a qual você deseja trazer as informações):

```cmd
git checkout master
```

Então, para realizar o merge, diga **qual** branch você deseja integrar:

```
git merge develop
```

No exemplo acima, estamos trazendo a branch **develop** para dentro da nossa **master**.
