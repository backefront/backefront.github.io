---
title: Como adicionar fonte firacoda no VSCode
date: 2022-02-25 08:16:00
tags:
  - Front-end
postKeywords: firacoda, font ligature, como adicionar fonte firacoda, fonte combinar caracter, fonte developer, fonte desenvolvedor, alterar fonte vscode
postDescription: Veja como é simples alterar uma fonte no VSCode!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você sabe o que é fonte "ligature"?
Fontes ligatures são um tipo de fonte que combina múltiplos caracteres em um só caracter. 
Algumas dessas fontes são específicas para desenvolvimento de software, como por exemplo, a `Firacoda`.

Para usar ela em seu VSCode, basta seguir os passos abaixo:

1 - Faça o [download da fonte](https://github.com/tonsky/FiraCode) e instale ela em seu SO.

2 - Abra seu VSCode (ou reinicie ele, caso já esteja aberto)

3 - No VSCode abra `settings.json`, pressionando a combinação de `ctrl` + `,` no Windows ou `cmd` + `,` no Mac

4 - Procure sobre font e clique em "Edit in settings.json"

5 - Dentro do JSON, copie e cole o seguinte código: 

```javascript

  "editor.fontFamily": "Fira Code",
  "editor.fontSize": 12,
  "editor.fontLigatures": true

```

Feito isso, só reiniciar o editor de texto e pronto!


