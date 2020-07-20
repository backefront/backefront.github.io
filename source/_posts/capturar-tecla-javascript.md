---
title: Como capturar a tecla digitada pelo usuário com Javascript
date: 2019-11-18 07:31:11
tags:
- Front-end
- Javascript
postKeywords: capturar tecla javascript, tecla digitada javascript, tecla digitada, onenter, reconhecer enter javascript, enter javascript, pressed key, tecla pressionada, funçao pressionar tecla
postDescription: Através do Javascript, conseguimos reconhecer qual tecla que estamos digitando pelo teclado, conseguimos inclusive, fazer chamadas de funções personalizadas de acordo com a tecla que foi digitada pelo usuário! Veja como é simples e fácil!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você sabia que é possível "pegar" a tecla digitada pelo usuário pelo Javascript?
Você pode criar comandos personalizados para sua aplicação de acordo com o que o usuário está digitando!

Com a evolução do Javascript, podemos reconhecer a tecla digitada pelo seu "nome"
Antes, tínhamos que reconhecer através de seu ID, hoje não é mais necessário isso!

No código abaixo, temos a representação de como conseguimos pegar a tecla digitada pelo usuário através do Javascript

<!-- more -->

```javascript
node.addEventListener('keydown', (e) => {
    alert(e.key)
});
```

Vamos imaginar um cenário onde queremos capturar a tecla __"Enter"__, em um _textarea_
Caso seja enter, deve chamar uma função.

```javascript
<textarea rows="5" id="user-text"></textarea>

// Primeiro pegamos o nosso input com javascript
const textarea = document.getElementById('user-text');

// Adicionamos nossa função para observar esse input
// e caso a tecla pressionada seja Enter
// chama a função "salvaFormulario"
textarea.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
        salvaFormulario()
    }
});
```

Com essa pequena quantidade de código, conseguimos reconhecer qual tecla está sendo digitada
E através disso, melhoramos a usabilidade, trazendo mais velocidade para o usuário, que agora 
pode salvar suas informações teclando Enter!

É uma funcionalidade extremamente simples mas que quando bem usada, pode agregar muito em nossas aplicações!