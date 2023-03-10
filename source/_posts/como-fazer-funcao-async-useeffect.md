---
title: Como fazer função async useEffect
date: 2020-09-14 09:08:25
tags:
  - Front-end
  - React
postKeywords: useeffect async, como usar async useeffect, render, async react, useeffect, buscar ao renderizar, fetch useeffect
postDescription: Uma das coisas mais comuns enquanto desenvolvemos em React com Hooks é a utilização do `useEffect`. Basicamente, com ele podemos executar alguma função no momento em que estamos carregando a página ou quando ocorre alteração de alguma variável que estamos assistindo. Mas por padrão, o React não aceita que essa função useEffect seja do tipo `async`. Como podemos fazer então para realizar um fetch dentro do useEffect e aguardar o resultado?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das coisas mais comuns enquanto desenvolvemos em React com Hooks é a utilização do `useEffect`.
Basicamente, com ele podemos executar alguma função no momento em que estamos carregando a página ou quando ocorre alteração de alguma variável que estamos assistindo.

Mas por padrão, o React não aceita que essa função useEffect seja do tipo `async`.
Como podemos fazer então para realizar um fetch dentro do useEffect e aguardar o resultado?

<!-- more -->

### IIFE

Uma das maneiras que você pode fazer é usar uma IIFE (Immediately Invoked Function Expression):

```javascript
useEffect(() => {
  (async () => {
    const users = await getUsers();
    setUsers(users);
  })();
}, []);
```

### Função externa

Você pode criar uma função por fora do escopo da classe ou função do seu componente React:

```jsx

const fetchUsers = () => {
  // Código para buscar usuários
}
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    await fetchUsers();
    setUsers(users);
  }, []);
}
```

Seguindo uma dessas formas, você evita alguns problemas de looping e o ESLint também não reclama!
