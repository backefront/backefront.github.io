---
title: Qual a diferença entre Cookies e Localstorage?
date: 2022-12-16 08:20:18
tags:
  - Front-end
  - Javascript
postKeywords: cookies, localstorage, diferencas, javascript, frontend, dicas, perguntas entrevistas, js, react
postDescription: Você sabe quais são as principais diferenças entre usar Cookies ou Localstorage, na sua aplicação?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Recentemente, fui questionado se eu sabia o que era cookies e localstorage e se sim, quais as diferenças entre eles.
Essa pergunta me pegou pois eu não sabia a fundo a diferença entre os dois.

Então fui pesquisar e trago um resumo para vocês!

<!-- more -->

> Cookies são destinados a serem lidos pelo servidor, enquanto o localStorage só pode ser lido pelo navegador. Portanto, os cookies são restritos a volumes de dados pequenos, enquanto o localStorage pode armazenar mais dados.

A diferença entre localStorage e sessionStorage é que localStorage armazena dados sem data de expiração, enquanto os dados armazenados em sessionStorage são excluídos quando a sessão da página termina - ou seja, quando a página é fechada.

Falando sobre diferença técnica:

- Além de ser uma maneira antiga de salvar dados, os Cookies lhe dão um limite de 4096 bytes (4095, na verdade) - por cookie. O Local Storage é limitado a 5MB por domínio.
- localStorage é uma implementação da Storage Interface. Ele armazena dados sem data de expiração e é limpo apenas por JavaScript ou limpando o Cache do Navegador / Dados Armazenados Localmente - ao contrário da expiração do cookie.

Bem simples de lembrar!