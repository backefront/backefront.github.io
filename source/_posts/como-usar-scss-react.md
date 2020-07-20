---
title: Como usar SCSS com React
date: 2020-04-13 14:59:12
tags:
- React
- Front-end
postKeywords: scss react, react sass, preprocessor react, react com scss, frontend, react, scss, sass
postDescription: Veja como é fácil utilizar scss dentro de projetos em React!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você utiliza Sass ou Scss para construir seu CSS e está criando um aplicação em React mas não sabe como utilizar ele?
Usar o Sass dentro do React é muito simples e fácil de ser configurado!

Para isso, em seu terminal instale o sass:

<!-- more -->

```javascript
npm install node-sass

// Ou utlizando yarn

yarn add node-sass
```

Pronto, agora você já está apto a utilizar arquivos Sass dentro do seu projeto!
Mas como podemos importar os estilos? Da mesma maneira que fazemos com o CSS tradicional

Criamos um arquivo .scss, nesse caso, chamaremos de estilo.scss:

```css
$color: #000;

h1 {
  color: $color;
}
```

E dentro do nosso arquivo `js`, importamos nosso estilo:

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './estilo.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Blog Back&Front!</h1>
        <p>Seja bem-vindo!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Sem complicações nem dores de cabeça, simples e rápido! :)

🏡
