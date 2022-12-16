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

Local storage e cookies são duas opções de armazenamento de dados no navegador que permitem que um site armazene informações no lado do cliente. No entanto, existem algumas diferenças importantes entre eles.

O primeiro e mais óbvio é o tamanho de armazenamento disponível. Cookies são geralmente limitados a cerca de 4KB de dados, enquanto o local storage pode armazenar até 10MB de dados por site. Isso significa que o local storage é muito mais adequado para armazenar grandes quantidades de dados, enquanto os cookies são mais adequados para pequenas quantidades de informações importantes.

Outra diferença é a forma como os dados são enviados para o servidor. Quando você faz uma solicitação a um site, os cookies são enviados junto com a solicitação, permitindo que o servidor leia os cookies e use as informações armazenadas para personalizar a resposta. No entanto, o local storage não é enviado para o servidor, o que significa que as informações armazenadas nele só podem ser lidas pelo próprio navegador.

Além disso, o local storage é armazenado de forma mais permanente do que os cookies. Os cookies geralmente têm uma data de validade e são excluídos quando essa data é atingida, enquanto o local storage fica armazenado até que seja explicitamente excluído pelo usuário ou pelo site.

Em resumo, os cookies são mais adequados para armazenar pequenas quantidades de informações importantes que precisam ser enviadas para o servidor com cada solicitação, enquanto o local storage é mais adequado para armazenar grandes quantidades de dados que precisam ser armazenados de forma mais permanente no navegador.
