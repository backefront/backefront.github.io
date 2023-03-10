---
title: O que é DOM HTML
date: 2019-12-30 07:30:22
tags:
  - Front-end
postKeywords: dom, o que é dom, dom html, entender dom, como funciona dom, dom web, web, front-end
postDescription:
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando iniciamos no mundo de desenvolvimento para internet, somos bombardeados por diversas informações, regras, sintaxes, nomenclaturas e abreviações que, em sua grande maioria, parece formar uma densa névoa de confusão em nossas cabeças e não sabemos por onde começar a abrir os caminhos nessa tão vasta área.

Pensando nisso, vamos começar a tentar clarear aos poucos as mais diversas dúvidas iniciais!

No post de hoje, conversaremos sobre DOM! Esse DOM não está relacionado com talento ou qualidade inata e sim com nosso querido HTML!
Mas e aí, o que é esse tal de DOM?

<!-- more -->

DOM é uma sigla que em inglês significa Document Object Model, ou em português, Modelo de Documento por Objetos é a forma como o seu HTML e XML são lidos pelos navegadores.
No momento em que acessamos uma página, o navegador interpreta o que está escrito em HTML (o código) e cria uma representação da estrutura da página, que chamamos de `árvore DOM`.

Essa árvore nos fornece opções de manipulações dos elementos, de maneira dinâmica, utilizando o Javascript.
A manipulação de elementos em nossas páginas são diretamente dependentes de conhecermos o DOM bem como seus métodos e funções!

Vamos conhecer alguns dos principais e mais usados?

### Window

Window é o objeto que contém o objeto `document` dentro do DOM. Podemos considerar que ele é a cabeça de tudo.
Toda nossa página fica abaixo dele

```javascript
const window = document.defaultView;
```

É com window que temos acesso a um dos principais métodos, o nosso `localstorage`:

```javascript
// Armazena no localstorage "nome"
window.localStorage.setItem("nome", "Victor");

// Recupera o valor da variável "nome"
window.localStorage.getItem("nome");
```

Com o window, conseguimos também exibir um alerta na tela do usuário! Através do `window.alert`

```javascript
window.alert("Olá, back&front!");
```

O window também é utilizando quando queremos capturar o tamanho da tela do navegador que está sendo utilizando pelo o usuário de nosso site, sistema, através de `window.innerHeight` ou `window.innerWidth`

### Document

Document é o nosso primeiro nó do DOM e é com ele que conseguimos ter acesso ao corpo de nosso HTML, por exemplo `document.getElementById()`, `document.querySelector()` entre outros!

Esse é um pequeno resumo do que é o DOM e algumas coisinhas dele, mas essa conversa pode se delongar muito mais!
Espero que tenha dado uma iluminada no que é o DOM e para que serve!
