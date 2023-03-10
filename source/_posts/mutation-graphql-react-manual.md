---
title: Como executar uma mutation manualmente com React Apollo
date: 2019-05-06 07:01:39
tags:
- GraphQL
postKeywords: manually mutation grapql, mutation manual, executar ao clique graphql, react apollo, react graphql
postDescription: Neste post, irei mostrar como podemos fazer uma mutation ser executada no momento em que desejamos, usando o Apollo com React, para criar uma mutation no GraphQL.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em outro post, escrevi como podemos fazer uma Query do GraphQL com o React Apollo, rodando a query dentro de uma função desejada, neste post, irei mostrar como podemos fazer uma mutation ser executada no momento em que desejamos!

Segundo a documentação, temos a seguinte mutation para seguir como exemplo:  

<!-- more -->

```javascript
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const AddTodo = () => {
  let input;

  return (
    <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { type: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
```

No exemplo que está sendo dado, executamos a mutation no momento que executamos o _submit_, mas da mesma forma que fizemos anteriormente, podemos executar essa mutation utilizando o **ApolloClient**

### Utilizando ApolloClient

Quando iniciamos um projeto com Apollo, devemos inicializar o ApolloClient em nossa aplicação, que é algo parecido com o seguinte código:

```javascript
const client = new ApolloClient({uri:"https://seulinkbackend.com/graphql"});
```

Com esta variável **client**, conseguimos então executar mutation manuais, usando o método **mutation**, então nosso código ficaria algo parecido com:

```javascript
const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function _submit(type: string) {
    client.mutation({
        mutation: ADD_TODO,
        variables: {
          type
        }
    }).then(result => {
        // Código quando obter
        // os dados da query
    }).catch(err => {
        console.log('Erro!');
    });
};
```

Chamamos esta função `_submit()` no momento de `onSubmit` e passamos o parâmetro type, que é o que a mutation **ADD_TODO** exige e adicionamos em variables! Com isto, conseguimos chamar essa mutation dentro de uma função sem problemas nenhum!

