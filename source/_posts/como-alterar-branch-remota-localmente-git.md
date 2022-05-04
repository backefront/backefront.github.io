---
title: Como alterar para branch remota para local
date: 2021-03-11 08:00:28
tags:
  - Git
postKeywords: git, git fetch, trazer branch remota localmente, puxar branch remota, recuperar branch, branch local, branch remote, git, git update
postDescription: Veja como você pode fazer a troca de uma branch remotamente para localmente com um simples comando do git, nessa nova versão!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você está trabalhando em uma atividade juntamente com seu colega de trabalho.
Em determinado momento, ele pediu que você ajudasse nesse desenvolvimento e pediu que entrasse na branch que ele está trabalhando.
Você sabe como trazer a branch remota, localmente?

<!-- more -->

Introduzido na versão `2.30.2` do git, o comando `git switch` veio para facilitar a nossa vida e deixar esse processo muito mais simples!
Quando queremos acessar uma branch que não está em nosso ambiente, podemos utilizar esse comando, da seguinte maneira:

```git
git switch nomeDaBranch
```

Massa não é? Ajuda muito!
