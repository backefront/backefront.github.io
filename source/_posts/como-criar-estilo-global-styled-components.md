---
title: como-criar-estilo-global-styled-components
date: 2020-03-23 08:26:45
tags:
- Front-end
- React
postKeywords: global style react, styled component global, criar estilo global react, reset react css, front-end, react, styled-component
postDescription: Você já precisou criar um estilo global para sua aplicação no react, mas por usar styled-components não sabia como fazer isso? Neste post, irei mostrar como podemos criar um arquivo de estilização global, utilizando o styled-components!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em um post anterior, expliquei [o que era e como podíamos utilizar styled-components](https://backefront.com.br/o-que-e-styled-components/).
Naquele post, ensinava à adicionar estilos em componentes próprios, criados especificamente.
Mas como podemos fazer, caso queiramos usar o [styled](https://styled-components.com/) para criar um estilo que se aplica para o **body, html** de toda nossa aplicação?

<!-- more -->

Com o Styled, conseguimos criar um estilo Global para nossa aplicação! Dessa forma, podemos adicionar nossas estilizações de reset, estilos para o body, para textos, etc!

Irei considerar que já está utilizando a biblioteca em seu projeto, então iremos criar, dentro da pasta **src** (caso não tenha), uma pasta chamada **styles** e dentro dela um arquivo chamado **global.js**. 

Sua estrutura de arquivos deve ter ficado algo semelhante a imagem abaixo:

![Estruturas de arquivos](/posts/estrutura-pastas.png)

Perfeito! Agora podemos começar a mexer nesse nosso arquivo `global.js`
A primeira coisa que devemos fazer é importar o GlobalStyle do próprio styled-components para dentro do nosso arquivo:

```javascript
import { createGlobalStyle } from 'styled-components';
```

Feito isso, podemos então adicionar nossas regras genéricas!

```javascript
import { createGlobalStyle } from 'styled-components';

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  // Adicione quais mais regras desejar!
```

Legal! Agora temos nosso arquivo feito, mas como usar ele?
Dentro do nosso arquivo `App.js` (ou o seu arquivo principal, onde você adiciona suas rotas, etc) você irá importar o `global` e irá adicioná-lo, dentro do **return**, como se fosse uma tag, um componente novo!

Dessa forma, sua estrutura do App deve ser semelhante a isso:

```javascript
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global'; // Arquivo que criamos

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      // Adicionamos como se fosse uma tag
      <GlobalStyle /> 
    </BrowserRouter>
  );
}

export default App;
```

E pronto! Agora temos nosso estilo global funcionando e importado, sem nenhuma dificuldade!