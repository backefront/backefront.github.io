---
title: Multiplas SSH Key no Github no mesmo computador
date: 2018-09-03 11:48:56
tags: 
- Git
postKeywords: Diferentes SSH Key, várias ssh keys, git, ssh key, criar ssh key, git, github, deploy key, Manage Multiple SSH Logins
postDescription: Como criar diferentes SSH key no mesmo computador para usar em repositórios diferentes, sem precisar excluir nenhuma
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Digamos que você esteja trabalhando em dois projetos diferentes, com github **diferentes** e você precisa adicionar a `SSH Key` em ambos repositórios. Ao tentar adicionar sua deploy key, você tenta colocar aquela chave que usa no outro projeto mas ao clicar em salvar, se depara com o seguinte erro:

![Erro de Chave em uso](/posts/Error - Key is already in use.png)

Para resolver esse problema, você deveria adicionar outra ssh key sem perder a que já está em uso. Mas como?

<!-- more --> 

## Criando a nova SSH

Gere uma nova key, com o comando de sempre, com um porém, altere o **nome** de como ela será salva, como na imagem abaixo:

```
//Comando para gerar nova ssh
ssh-keygen -t rsa -C "seuemail@email.com"
```

![Gerando uma nova SSH Key, alterando o nome do arquivo](/posts/Gerando SSH.png)

Como pode ser visto, alterei a opção default de criação de uma SSH, que é **id_rsa** para **id_rsa_trabalho**. Essa vai ser a chave que adicionarei no outro projeto.

## Criando arquivo de configuração

Para usar duas ssh keys diferentes, você deve acessar a pasta onde se encontra a atual e criar um arquivo de configuração:

No Windows
```
nul>config
```

Linux/Mac
```
touch config
```

Assim que gerar esse arquivo config, você deve editá-lo, usando seu editor preferido, adicionando as seguintes configurações:

```
Host trabalho.github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_trabalho`

Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
```

Observe que alterei o `Host` e o `IdentityFile`, fazendo referência a minha nova chave gerada e mantive a antiga public key como *default*.

Feito isso, basta adicionar essa nova chave ao seu repositório e alterar no repositório clonado o **remote**, para fazer isso, deve alterar a url para a que você configurou em `Host`, da seguinte forma:

```
git remote add origin git@trabalho.github.com:vjordan/projeto2
```

Com isso, você terá N chaves e gerará novas sem perder as antigas, sem problema nenhum!