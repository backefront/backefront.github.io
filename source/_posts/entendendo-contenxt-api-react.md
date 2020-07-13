---
title: Entendendo o context API - ReactJS
date: 2020-07-13 08:59:00
tags:
- Front-end
- Javascript
- Front-end
postKeywords: context api react, front-end, react context, como usar context, api context, storage react, shared context, compartilhar react
postDescription: Segundo a documentação do React, Context provê uma forma de passar dados através da árvore de componentes sem a necessidade de passar esses dados através das props por cada nível desejado. O que isto significa? Significa que usando o context, você tem um ponto focal de acesso a informação. Se você quiser acessar determinada informação, basta apontar diretamente para o context! Com ele, conseguimos facilitar em muito nosso desenvolvimento!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Segundo a documentação do React, Context provê uma forma de passar dados através da árvore de componentes sem a necessidade de passar esses dados através das props por cada nível desejado.

O que isto significa? Significa que usando o context, você tem um ponto focal de acesso a informação. Se você quiser acessar determinada informação, basta apontar diretamente para o context!

Com ele, conseguimos facilitar em muito nosso desenvolvimento!

<-- more -->

Vamos imaginar que queremos criar um context de informação do usuário logado. 

Essa informação usaremos através de toda a aplicação, então queremos mante-la em um ponto.

Começamos criando o arquivo `UserContext.js`:

```jsx
import React from 'react';

const userContext = React.createContext({});
export default userContext;
```

Legal, agora como utilizamos ele?

Primeiramente, temos que pensar em dois momentos de nossa aplicação.

1 - Quando o usuário acessar a tela de login, o context deve estar vazio

2 - Quando o usuário realizar o login, devemos alterar o valor do context

Com isso em mente, vamos adicionar ele no nosso arquivo `App.js` pois é nele que toda nossa aplicação está englobada:

```jsx
import React, { useState, useEffect } from 'react';

import Login from './pages/Login/Login.page';
import Register from './pages/Register/Register.page';

import userContext from './store/UserContext';

function App() {
  return (
    <userContext.Provider>
      <Router>
				<BrowserRouter>
		      <Switch>
		        <Route path="/" exact component={Login} />
		        <Route path="/cadastro" component={Register} />
		        <Route path="/dashboard" component={Dashboard} />
		      </Switch>
		    </BrowserRouter>
      </Router>
    </userContext.Provider>
  );
}

export default App;
```

Adicionamos o `userContext.Provider`, encapsulando toda nossa aplicação. Note que esse userContext é o nosso arquivo que acabamos de criar!

Agora, precisamos passar um `value` dentro dele, pois é esse valor que teremos acesso pela aplicação:

```jsx
import React, { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Login from './pages/Login/Login.page';
import Register from './pages/Register/Register.page';

import userContext from './store/UserContext';

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [contextValue, setContextValue] = useState({});

  const logout = () => {
    setLoggedUser({});
  };

  const handleUserContext = user => {
    setLoggedUser(user);
  };

  useEffect(() => {
    setContextValue({
      user: loggedUser,
      logout,
      handleUserContext,
    });
  }, [loggedUser]);

  return (
    <userContext.Provider value={contextValue}>
      <Router>
				<BrowserRouter>
		      <Switch>
		        <Route path="/" exact component={Login} />
		        <Route path="/cadastro" component={Register} />
		        <Route path="/dashboard" component={Dashboard} />
		      </Switch>
		    </BrowserRouter>
      </Router>
    </userContext.Provider>
  );
}

export default App;
```

Aqui está a grande sacada do context! Não necessariamente precisamos passar APENAS valores dentro dele, podemos passar também FUNÇÕES! 

Então, no nosso caso, vamos passar duas funções que queremos que sejam lidadas dentro de `App.js`, a função de logout e a função para lidar com login, chamada `handleUserContext`

Dessa maneira, nosso context tem acesso a essas funções e ao estado do usuário! 

Agora que temos isso, conseguimos fazer a chamada de login em nosso componente de login e atualizar o nosso estado, que nos retorna o usuário logado!
Vamos então nesse componente importar nosso context:

```jsx
// Outros imports
import React, { useState, useContext } from 'react';
import userContext from './store/UserContext';

function Login(props) {
  // Criamos a variável currentlyUser 
  // com o valor do context
  const currentlyUser = useContext(userContext);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Realizamos o login no back-end
      const loggedUser = await api.post('/session', formValues);
      const usarData = await api.get(`/users/${loggedUser.data.user.id}`);

      // Acessamos a função criada previamente
      // e usamos o context para atualizar o valor
      currentlyUser.handleUserContext(usarData.data);
    } catch (err) {
      toast.error(err?.response?.data?.error);
    }
  };
}

```

Viu como é fácil usar o context? Além de ajudar muito nosso desenvolvimento, é muito prático!
