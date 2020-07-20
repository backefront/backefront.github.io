---
title: O que é styled-components
date: 2019-10-07 08:39:24
tags:
- Front-end
- React
postKeywords: styled-components, como usar styled react, react style tutorial, como styled react, component react, react, component, stlyed-component
postDescription: Styled-components é um tópico que muito tem se visto falar no desenvolvimento front-end com React, você já conhece e já usa? Neste post, mostrarei como usar styled-components no React!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das coisas que muito tem se falado, enquanto desenvolvendo aplicações com React, é sobre **styled components**
Styled components são componentes onde criamos o CSS no próprio arquivo do componente, o arquivo JS.
Com isso conseguimos obter algumas vantagens em diversos quesitos, tais como:

- Carregamento automático do CSS crítico, isso é, os componentes são renderizados com a página e são injetados apenas o CSS que realmente
será utilizado, nada mais! Ajudando em performance, visto que os usuários carregarão apenas o necessário.

- Sem problemas com nomes de classes! Styled-componentes geram nomes de classes automaticamente, sem preocupação em gerar nomes duplicados.

<!-- more -->

- Fácil remoção de CSS, visto que todo o CSS fica, normalmente, no próprio arquivo JS, então você encontra fácil o que precisa remover e também consegue
facilmente 

Entre outras facilidades! 
Mas vamos para a parte prática, como podemos começar utilizar?
Primeiramente, instale-o em seu projeto:

```javascript
npm install --save styled-components
```

O stlyed-component utiliza template literal para estilizar os componentes. 
Caso você não saiba o que é isso, falamos sobre essa funcionalidade há um tempo atrás neste [post aqui](https://backefront.com.br/template-string/)

Então vamos lá, vamos construir nosso primeiro stlyed-component! 
Teremos como base o seguinte componente, bem simples:

```javascript
render(
  <div>
    <h1>Blog backefront!</h1>
  </div>
);
```

Agora, vamos criar o estilo para a nossa `div` e o nosso `h1`:

```javascript
// Criamos o componente titulo
// e dizemos que ele irá estilizar
// a tag h1
const Titulo = styled.h1`
  font-size: 1.5em;
  color: purple;
`;

// Criamos o componente conteudo
// e dizemos que ele irá estilizar
// a tag div
const Conteudo = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

// Nosso componente react
render(
  <div>
    <h1>Blog backefront!</h1>
  </div>
);
```

Agora que criamos os nossos estilos, devemos substituir as tags que estilizamos pelo nome do estilo que criamos, então o nosso novo HTML
ficaria da seguinte forma:

```javascript
render(
  <Conteudo>
    <Titulo>Blog backefront!</Titulo>
  </Conteudo>
);
```

Bem simples, não é mesmo?
O resultado final do nosso componente então, ficou assim:

```javascript
// Criamos o componente titulo
// e dizemos que ele irá estilizar
// a tag h1
const Titulo = styled.h1`
  font-size: 1.5em;
  color: purple;
`;

// Criamos o componente conteudo
// e dizemos que ele irá estilizar
// a tag div
const Conteudo = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

// Nosso componente react
render(
  <Conteudo>
    <Titulo>Blog backefront!</Titulo>
  </Conteudo>
);
```

Mas stlyed-component não se limita em estilizar apenas componentes que você criou, também podemos estilizar componentes
de outras bibliotecas! Podemos, por exemplo, estilizar uma `tab` do react-bootstrap, da seguinte forma:

```javascript
const StyledTab = styled(Tab)`
  background-color: #c9c9c9;
`;
```

A única diferença é que, quando estilizamos um componente já existente, devemos passar ele entre " () ", ficando `styled(Componente)`