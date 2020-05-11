---
title: Exibindo notificações com React Toastify
date: 2020-05-11 08:22:09
tags:~
- Front-end
- Javascript
postKeywords: react toastify, react notifications, exibir notificação react, react, front-end, javascript, show notification
postDescription: Neste post, irei ensinar como podemos usar o React Toastify, uma biblioteca para exibição de notificações, com o intuito de tornar nossa aplicação mais rica em detalhes e com uma usabilidade melhor!
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Frequentemente, enquanto estamos desenvolvendo nossas aplicações, desejamos informar ao usuário mensagens de sucesso ou erro após alguma ação tomada.
Nativamente pelo próprio Javascript, poderíamos exibir através do `window.alert`, mas convenhamos, não é a maneira mais elegante a ser seguida!

Pensando nisso, existem diversas bibliotecas a qual nos ajudam nesta simples tarefa e hoje vamos falar de uma desenvolvida para React, chamada [React-tostify](https://github.com/fkhadra/react-toastify)!

<!-- more -->

React Toastify é uma biblioteca open-source desenvolvida e mantida pela comunidade Javascript!
Para instalarmos, é necessário usar o **Yarn** ou **NPM**:

```javascript
// Usando NPM
npm install --save react-toastify

// Usando Yarn
yarn add react-toastify
```

Após instalarmos, precisamos importar o CSS do Toastify.
Você pode fazer isso importando em seu `GlobalStyle` ou diretamente em seu `App.js`
Neste exemplo, iremos importar em **app.js**:


```javascript
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify' // Importamos o Toastify

import Header from './components/Header';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css'; // O estilo do Toastify

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
```

Agora feito isso, podemos utilizar o notificador de alertas por toda nossa aplicação, sem nenhum problema!
Vejamos como podemos exibir então um alerta em um componente qualquer:

```javascript
  import React from 'react';

  import { toast } from 'react-toastify';

  function showAlert(){
    
    const notify = (status) => {
      if (status === 200) {
        toast.success("Sucesso!")
      } else {
        toast.error("Erro!")
      }
    };

    return (
      <div>
        <button onClick={notify(200)}>Notify !</button>
      </div>
    );
  }
```

Neste simples exemplo, estamos exibindo um alerta de sucesso, já que passamos o valor de status como 200.
O toastify possui além de success e error, mais algumas outras opções, sendo essas:

- info
- success
- warning
- error
- default

Você pode consultar mais sobre a documentação através [deste link](https://fkhadra.github.io/react-toastify/introduction)

🏡