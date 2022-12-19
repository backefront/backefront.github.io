---
title: O que é HOC - ReactJS
date: 2022-12-20 08:06:58
tags:
  - Front-end
  - React
postKeywords: Reutilização de código, Encapsulamento, Composição, Wrapper component, Função de ordem superior, Hooks, Props, Estado, Modularização, Desacoplamento de código, Abstração,  Padrões de projeto de software
postDescription: HOC (High Order Component) é uma técnica de programação em React que permite a criação de componentes reutilizáveis. Um HOC é uma função que toma um componente como parâmetro e retorna um novo componente que encapsula o componente original.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

HOC (High Order Component) é uma técnica de programação em React que permite a criação de componentes reutilizáveis. Um HOC é uma função que toma um componente como parâmetro e retorna um novo componente que encapsula o componente original.

Por exemplo, imagine que você tenha um componente que exibe uma lista de itens e deseja adicionar a funcionalidade de paginação a esse componente. Em vez de modificar o componente original para adicionar essa funcionalidade, você pode criar um HOC que aceita o componente original como parâmetro e retorna um novo componente que já possui a funcionalidade de paginação. Dessa forma, você pode reutilizar o HOC em outros componentes sem precisar duplicar o código.

Aqui está um exemplo de como um HOC poderia ser criado em React:

<!-- more -->

```jsx
import React from 'react';

// O HOC aceita um componente como parâmetro e retorna um novo componente
const withPagination = (Component) => {
  return class extends React.Component {
    state = {
      currentPage: 1,
    };

    handlePageChange = (page) => {
      this.setState({ currentPage: page });
    }

    render() {
      // O HOC passa todas as props para o componente original
      return (
        <Component
          {...this.props}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      );
    }
  }
}

// O componente original
class ItemList extends React.Component {
  render() {
    return (
      <div>
        {/* Exibe a lista de itens aqui */}
        {/* Exibe os controles de paginação aqui */}
      </div>
    );
  }
}

// O componente com a funcionalidade de paginação
const PagedItemList = withPagination(ItemList);

```

O HOC é muito útil para evitar a duplicação de código e para adicionar funcionalidades adicionais a componentes sem modificar o código original. No entanto, é importante lembrar que HOCs podem aumentar a complexidade do código e torná-lo mais difícil de entender, portanto é importante usá-los de forma moderada.


Aqui está um exemplo de como um HOC poderia ser criado usando os hooks do React: 

```jsx
import React, { useState } from 'react';

// O HOC aceita um componente como parâmetro e retorna um novo componente
const withPagination = (Component) => {
  return (props) => {
    // Usamos o hook useState para gerenciar o estado do componente
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    }

    // O HOC passa todas as props para o componente original
    return (
      <Component
        {...props}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  }
}

// O componente original
const ItemList = (props) => {
  return (
    <div>
      {/* Exibe a lista de itens aqui */}
      {/* Exibe os controles de paginação aqui */}
    </div>
  );
}

// O componente com a funcionalidade de paginação
const PagedItemList = withPagination(ItemList);

```

Neste exemplo, o HOC withPagination toma o componente ItemList como parâmetro e retorna um novo componente que gerencia o estado da página atual usando o hook useState. Ele também passa a página atual e uma função de gerenciamento da página para o componente original através de props.