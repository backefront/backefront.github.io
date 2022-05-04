---
title: Diferença entre class component e functional component - React
date: 2021-09-17 07:46:00
tags:
  - Front-end
  - Javascript
  - React
postKeywords: class component, functional component, diferença class e function, hooks ciclo de vida, react, javascript, diferenças react metodos
postDescription: Você saberia dizer, qual é a diferença entre um componente funcional e um componente de classe, no react? Neste post, irei mostrar as principais diferenças entre um e outros
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Desde a implementação dos Hooks no React, usamos com mais frequência componentes funcionais em nossos projetos do que componentes de classes

Mas afinal, qual é a diferença entre `Functional Components` e `Class Components`?

<!-- more -->

### Functional Components

São os componentes que encontraremos com maior frequência enquanto estivermos trabalhando com React. Basicamente são funções Javascript. Apenas.

```javascript
import React, { useState } from "react";

export function CounterFunction {
  const[count , setCount] = useState(0);

  const increase = () => {
    setCount(count+1);
  }

    return (
      <div>
        <h1>Bem-vindo ao contador Back&Front!</h1>
        <h2>{count}</h2>
        <button onClick={increase}>Adidcionar</button>
      </div>
    )

}
```

### Class Components

Os componentes são escritos usando classes, sendo necessário estender `React.Component` e é necessário ter um método `render()` para retornar as informações em tela

```javascript
import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Bem-vindo ao contador Back&Front!</h1>
        <h2> {this.state.count}</h2>
        <button onClick={this.increase}>Adidcionar</button>
      </div>
    );
  }
}

export default ClassComponent;
```

Agora, resumidamente, as principais diferenças:

| **Functional Components**                                                                                           | **Class Components**                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Uma simples função que aceita props como argumento e retorna um elemento React;                                     | Componente por classe exige que você estenda de React.Component                            |
| Não existe método `render()` para exibir os elementos                                                               | É obrigatório que tenha o método `render` retornando HTML                                  |
| Também conhecido como `Componentes Stateless`, por simplesmente aceitar um dado, sem necessidade de ter lógica nele | Conhecido também como Stateful Components, visto que é implementado lógica e estados       |
| São usados os Hooks para seu ciclo de vida (useEffect) e useState para estados                                      | São usados seus métodos para manipular o ciclo de vida, como por exemplo componentDidMount |
