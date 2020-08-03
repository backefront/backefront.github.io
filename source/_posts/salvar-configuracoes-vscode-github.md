---
title: Importar e exportar extensões do VSCode
date: 2020-08-03 08:55:14
tags:
- Front-end
postKeywords: vscode extensions import, salvar extensão, importar extensão, exportar extensão, salvar, recuperar vscode, dicas vscode
postDescription: Neste post, irei mostrar como podemos fazer para não perdermos as nossas extensões quando mudamos de ambientes, dessa forma, podemos manter as mesmas extensões em todos os nossos ambientes!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das maiores vantagens de usarmos editores de textos como o VSCode é sua vasta quantidade de extensões que podemos utilizar.
Temos das mais diversas, desde temas até extensões que nos ajudam a implementar nosso código!
Só que todos esses auxiliares ficam salvos localmente, ou seja, se baixarmos o VS em outro computador, não teremos nada instalado!

Foi pensando nesse problema que criaram a extensão [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
E usar ela é muito simples, basta você ter uma conta no Github e pronto!

<!-- more -->

### Passo 1: Instalação

- Instale a extensão em seu VS Code.
- Quando terminar de instalar, você será redirecionado para a página onde contém informações sobre a extensão:

![Tela de configuração do Settings Sync](/posts/vscode-settings-01.png)

### Passo 2: Autenticação

Agora que está tudo instalado, você deve autorizar que a extensão tenha acesso ao seu Github.
Para isso, você deve clicar em **Login with Github**

Esta opção abrirá uma página do Github no seu navegador pedindo para que efetue o login!
Se tudo ocorreu bem, você deve ver uma mensagem parecida com "Success!"

### Passo 3: Enviando suas configurações

Agora que está logado no Github, você está pronto para enviar suas configurações.

- Acesse sua paleta de comandos através do atalho "Ctrl + Shift + P" no Windows ou "CMD+Shift+P" no Mac.
- Digite: Sync: Update/Upload Settings
- Quando fizer isso, abrirá um janela de confirmação no canto inferior esquerdo perguntando se deseja forçar o upload. Clique em **SIM**.
- Quando tiver terminado, terá sido criado um Gist privado, que pode ser visto através [deste link](https://gist.github.com/)

![Paleta de comandos](/posts/vscode-settings-02.png)

### Passo 4: Sincronizando suas configurações em outros ambientes

Para sincronizar em outros ambientes, você deve seguir os passos 1 e 2 novamente nesse novo computador, instalando e sincronizando o Github.
A diferença agora é que ao invés de você enviar suas configurações no seu Gist, você baixará!

Naquela tela inicial da extensão, após selecionar login, você deve clicar em **Edit configuration**

Nessa tela, você verá seu Github Access Token, mas pode ser que se depare com um campo vazio. Caso aconteça isso, abra seu gist e copie o número que fica na URL, que é o seu Gist.

Cole esses caracteres no seu Gist ID.

Feito isso, você deve abrir de novo sua paleta de comandos e escreva "sync download" e clique enter! Isso baixará suas configurações que você sincronizou!

