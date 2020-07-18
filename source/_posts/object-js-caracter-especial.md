---
title: Acessando objetos com espaço no Javascript
date: 2018-10-17 09:17:49
tags: 
- Front-end
- Javascript
postKeywords: ng-for com acento, ng-repeat com espaço, ngfor espaço, ng-repeat acento, acessar objeto com espaço javascript, como acessar objetos
postDescription: Neste post, mostraremos como é possível acessar o conteúdo de objetos Javascript de uma forma alternativa.
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Normalmente, acessamos os valores de um objeto javascript através de "." (ponto), por exemplo, temos o seguinte objeto: 

```javascript
const user = { 'name': 'Victor', 'idade': 22 };
```

Para resgatar o valor `name`, bastaria acessar usando: `user.name`, correto? Mas você sabe como acessar caso a chave do seu objeto tenha caracteres especiais ou espaços, como no exemplo abaixo?

```javascript
const address = { 'Endereço': 'Rua Nova', 'Descrição Rua': 'Uma rua nova' };
```

<!-- more --> 

Caso você tente acessar "`address.Descrição Rua`", com certeza não irá conseguir, afinal, esse espaço acaba estragando tudo! Então, para acessar, você pode passar o campo que deseja acessar entre colchetes `[]`, no nosso caso, ficaria: `address['Descrição Rua']`

Caso você esteja trabalhando com algum framework como Angular, quando fizesse um **ngFor** (ng-repeat, se estiver usando AngularJS) que percorresse esse objeto, e tentasse usar: 
```javascript
{{user.Endereço}}
```
acabaria deparando-se com um erro justamente por causa do caractere especial **"ç"**. Para contornar este erro, você deve usar a mesma técnica de acesso, alterando para: 

```javascript
{{user["Endereço"]}}
```

Desta forma, você evitará erros e alcançará o resultado esperado!


