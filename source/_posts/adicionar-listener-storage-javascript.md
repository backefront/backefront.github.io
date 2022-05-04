---
title: Adicionar event listener no Storage Javascript
date: 2020-12-02 09:07:16
tags:
  - Front-end
  - Javascript
postKeywords: javascript, localstorage detect change, sessionstorage detect change, js, front-end
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Alguma vez você já precisou verificar se houve alguma alteração no Session Storage ou Local Storage, com o Javascript?
Você sabia que é possível adicionarmos um `event listener` a esse pessoal da mesma forma que fazemos, por exemplo, em um botão ou um input?

É muito fácil e útil, com isso podemos ficar observando e caso o usuário faça alteração em algum determinado, podemos redirecionar ele para outra URL, impedindo que faça modificações deste tipo!

Olha como é simples:

<!-- more -->

```javascript
function detectChange = () => {
  window.addEventListener('storage', function (e) {
    if (e.storageArea === sessionStorage && e.key === 'token_session') {
      console.log('storage changed!');
      sessionStorage.removeItem('paramKey');
    }
  });
}
```

Neste exemplo, estamos detectando mudanças no `storage` e dentro do **if** verificamos qual queremos pegar, com o `e.storageArea`, que pode ser `sessionStorage` ou `localStorage`!

Muito legal não é?
