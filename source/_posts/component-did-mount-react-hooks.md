---
title: Como fazer componentDidMount com React Hook
date: 2019-09-16 10:44:35
tags: 
- Front-end
- React
postKeywords: componentDidMount react hook, acionar funcao carregamento react hook, useEffect, react hooks, hooks didmount
postDescription:
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O react introduziu em sua versão 16.7.0 os Hooks, que tem como objetivo trabalhar os estados e outras funcionalidades sem precisar criar uma classe!
E com a chegada dos Hooks, uma pergunta que pode ser frequente é, como podemos chamar os eventos do componente, como o `componentDidMount` dentro de um
componente stateful?

<!-- more -->

Para acionarmos uma função, que no momento que estamos carregando o componente (igual ao componentDidMount), 
devemos usar um hook chamado `useEffect()`.

Então, nosso código deve ficar da seguinte forma: 

```javascript
import { useEffect } from "react"
const nossoComponent = () => {

    useEffect(() => {
        // Lógica para quando carregar
        // o componente.
    }, [])
}
```

O useEffect é um React hook onde podemos utilizar quando precisamos pegar dados do servidor, por exemplo.

O primeiro argumento é um callback, que será acionado após o navegador e o layout da página aparecerem.

O segundo argumento é um array de valores, quando passado vazio ele é acionado sempre a cada renderização, similar ao componentDidMount
