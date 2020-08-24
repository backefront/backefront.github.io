---
title: Criando uma máscara em input ReactJS
date: 2020-08-24 08:06:58
tags:
- Front-end
- React
postKeywords: reactjs mask, cep mask react, criar mascara react, mascara telefone, input mask react, como usar react mask, reactjs, front-end
postDescription: Neste post, irei mostrar a maneira mais simples e fácil de criar uma máscara para um input em uma aplicação React, utilizando o react-input-mask!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Enquanto estamos desenvolvendo formulários em nossas aplicações, nos deparamos com campos comuns do tipo CEP, CPF, RG, telefone, etc.
Esses campos possuem uma formatação padrão entre eles, por exemplo, o CEP sabemos que o formato é algo assim:

```cmd
xxxxx-xxx
```

Então, como podemos adicionar essa formatação automaticamente dentro do nosso sistema?
Para ser mais rápido, utilizaremos um cara chamado [react-input-mask](https://www.npmjs.com/package/react-input-mask)

<!-- more -->

Primeira coisa que devemos fazer é instalar essa dependência:

```cmd
yarn add react-input-mask
npm i react-input-mask
```

Com ele instalado, utilizar é a coisa mais simples!
Basta importarmos e transformar algum input nosso para `InputMask`:

```jsx
import React from 'react';
import InputMask from 'react-input-mask';
 
const Input = (props) => (
  <InputMask mask="99999-999" value={props.value} onChange={props.onChange} />
);

export default Input;
```

Pronto, com isso já temos um input de CEP!
O '9' significa que ele aceitará qualquer valor, de 0 a 9!
Caso quisesse fazer um do tipo `telefone`, a propriedade mask ficaria: `(xx) xxxx-xxxx`

Rápido!