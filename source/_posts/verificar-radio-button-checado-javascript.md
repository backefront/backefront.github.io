---
title: Como verificar se o radio button está checado com Javascript
date: 2020-06-01 08:10:15
tags:
  - Front-end
  - Javascript
postKeywords: javascript validation, radio button checked, verificar js radio button, radio button verificacao, check js radio, javascript, front-end
postDescription: Diariamente, o desenvolvedor constantemente depara-se com situações onde devem ser feitas verificações em seus formulários. Esses formulários são compostos, por sua maioria, de input de textos, telefones, endereço, etc. E também temos casos onde há o input do tipo radio. A pergunta é, como verificar se o radio button está checado, pelo Javascript?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Diariamente, o desenvolvedor constantemente depara-se com situações onde devem ser feitas verificações em seus formulários.
Esses formulários são compostos, por sua maioria, de input de textos, telefones, endereço, etc
E também temos casos onde há o input do tipo `radio`.

A pergunta é, como verificar se o radio button está checado, pelo Javascript?

<!-- more -->

Imaginemos que você tem o seguinte HTML:

```html
<input type="radio" name="gender" id="genero_masculino" value="Masculino" />
<input type="radio" name="gender" id="genereo_feminino" value="Feminino" />
```

Para verificarmos se o gênero está selecionado, podemos usar a seguinte abordagem com Javascript puro:

```javascript
if (document.getElementById("genero_masculino").checked) {
  // Lógica caso seja gênero
  // masculino selecionado
} else if (document.getElementById("genero_feminino").checked) {
  // Lógica caso seja gênero
  // feminino selecionado
}
```

Esta é uma verificação bem simples que podemos fazer!
Mas lembre-se que nem só de validação _server-side_ viverá sua aplicação!
O ideal sempre é que tenhamos alguma validação também do lado do back-end!
