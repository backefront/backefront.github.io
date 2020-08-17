---
title: Enviando parâmetros através do History push - ReactJS
date: 2020-08-17 08:13:25
tags:
- Front-end
- React
postKeywords: props history push, enviar parametro react router dom, enviar dado rotas, rotas push, send data via history, acessar propriedades do pai, reactjs, react router dom, react push history
postDescription: Enquanto estamos desenvolvendo aplicações com React, é comum usarmos o react-router-dom para navegação entre rotas. Ele serve para quando necessitamos mudar de página, seja renderizado a nova página sem recarregar toda nossa aplicação! Um dos benefícios que podemos extrair dessa lib é a capacidade de enviar dados através rotas para que o nosso outro componente tenha acesso! Você já precisou passar parâmetros com o history.push?
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Enquanto estamos desenvolvendo aplicações com React, é comum usarmos o `react-router-dom` para navegação entre rotas.
Ele serve para quando necessitamos mudar de página, seja renderizado a nova página sem recarregar toda nossa aplicação!
Um dos benefícios que podemos extrair dessa lib é a capacidade de enviar dados através rotas para que o nosso outro componente tenha acesso!

Você já precisou passar parâmetros com o `history.push`?

<!-- more -->

Passar parâmetros pelo history é uma atividade muito simples a ser realizada!
Primeiramente, em nosso componente devemos instanciar o hook do history, de acordo com a nova versão da API:

```jsx
import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const Employees = () => {

  // Instanciamos o hook history
  const history = useHistory();

  const handleRequest = string => {
    history.push({
      pathname: `/funcionario/`,
      state: { text: 'texto para enviar' }
    });
  };

  return <button
    type="button"
    onClick={() => handleRequest('Dado a ser enviado')}
    >
    Enviar dado
  </button>

}

export default Employees;
```

Com isso, temos toda nossa estrutura do componente que irá enviar os dados para o outro.
A função `handleRequest` envia para a rota "funcionario" e juntamente ao pathname (a rota que queremos ser redirecionados) enviamos juntamente a propriedade `state`, que recebe a informação que desejamos acessar do outro lado!

### Como receber o valor do outro lado

Para recebermos esse valor do outro lado, basta acessar via props!

```jsx
import React, { useEffect, useState } from 'react';

const Employee = props => {
  const [textInfo, setTextInfo] = useState('');

  useEffect(() => {
    // Aqui recebemos a informação.
    // Acessamos com o mesmo nome que
    // setamos no componente anterior
    setTextInfo(props.location.state.text)
  }, []);

  return <p>Texto enviado: {textInfo}</p>
}

export default Employee;
```

Bem simples, não é mesmo?