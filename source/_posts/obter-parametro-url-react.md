---
title: Obtendo parâmetros da URL com React
date: 2019-12-02 07:15:39
tags:
- Front-end
- React
postKeywords: parameter url react, parametro url react, como pegar atributo url react, react url variavel, get variable url
postDescription: Neste post, explicarei como acessar um parâmetro passado pela URL com o React, acessando a variável da URL pelo props, do React!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Assim como expliquei [neste post](https://backefront.com.br/como-obter-parametro-url-angular/), o React nos permite fazer o mesmo de uma maneira extremamente simples
Podemos obter os parâmetros enviados pela URL usando o nosso querido `props`!

Vamos começar configurando a nossa rota, para informarmos qual vai ser a nossa variável em nossa URL:

<!-- more -->

Em nosso arquivo onde definimos a navegação das rotas de nossa aplicação, devemos adicionar uma variável, que configuramos usando `:nomeVariavel`
No exemplo abaixo, a nossa rota `movie` recebe uma variável chamada `id`:

```javascript
<Route path="/movie/:id">
    <Movie />
</Route>
```

Desta forma, o React irá entender que precisamos passar alguma informação após a string `movie`!
Muito bem, feito isso podemos acessar então a nossa variável, no componente desta página!

Em nosso componente, precisamos ter acesso ao `props` e com ele, tudo já está disponível para usarmos!
Então, para acessarmos o parâmetro ID pela URL, podemos acessar da seguinte maneira:

```javascript 
const fetchMovieById = () => {
    // Usamos essa propriedade para acessar
    // a variável vinda pela URL!
    const movieId = props.match.params.id;
}
```

Temos acesso facilmente através de `props.match.params` e passamos o nome da variável que configuramos pela URL!