---
title: Como Corrigir um Commit na Branch Errada no Git
date: 2023-12-15 10:00:00
tags:
- Git
- Controle de Versão
- Desenvolvimento de Software
postKeywords: Git, commit, branch, desenvolvimento, controle de versão
postDescription: Aprenda como corrigir um commit feito na branch errada no Git antes de realizar o push. Este guia passo a passo ajudará você a desfazer o commit, mudar para a branch correta e refazer o commit no local certo.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você acabou de fazer um commit, mas percebeu que está na branch errada? Não se preocupe, é fácil corrigir isso antes de fazer o push para o repositório remoto. Siga este guia passo a passo para corrigir um commit na branch errada no Git:

1. **Desfaça o último commit:**
   ```bash
   git reset HEAD^
   ```
   Isso desfaz o último commit, mantendo as mudanças locais.

2. **Volte para a branch correta:**
   ```bash
   git checkout nomedaoutrabranch
   ```
   Substitua "nomedaoutrabranch" pelo nome da branch correta.

3. **Refaça o commit na branch correta:**
   ```bash
   git commit -c ORIG_HEAD
   ```

   Isso reutiliza a mensagem de commit e aplica as mudanças à branch correta.

4. **Faça o push das mudanças:**
   ```bash
   git push origin nomedaoutrabranch
   ```
   Envie as mudanças para a branch remota correta.

Lembre-se de adaptar "nomedaoutrabranch" para o nome real da sua branch correta. Este procedimento funciona apenas se você ainda não fez o push do commit para o repositório remoto. Se já tiver feito o push, considere outras abordagens para evitar problemas com o histórico compartilhado. Agora você está pronto para manter seu histórico de commits organizado!