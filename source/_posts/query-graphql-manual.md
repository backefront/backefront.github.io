---
title: Como executar uma query manualmente com React Apollo
date: 2019-04-29 07:01:39
tags:
- GraphQL
postKeywords: manually query grapql, query manual, executar ao clique graphql, react apollo, react graphql
postDescription: Neste post, mostrarei como podemos executar uma query manualmente com o React Apollo, de forma que você possa executar em alguma ação, sem ser apenas no momento de carregamento da página.
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

GraphQL cada vez mais está crescendo e se tornando popular no desenvolvimento, é uma linguagem de consulta de dados que foi escrita e é usada pela equipe do Facebook e tem como objetivo entregar somente aquilo que é requisitado pelo client.

Desenvolvendo uma aplicação em React com [Apollo](https://www.apollographql.com/), podemos fazer uma consulta usando a tag **Query**, como no exemplo dado na própria documentação: 

<!-- more -->

```javascript
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <select name="dog" onChange={onDogSelected}>
          {data.dogs.map(dog => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);
```

Esta é uma das formas, mas e se quisermos rodar manualmente uma query, em um determinado momento? Para isso, podemos utilizar uma função do **ApolloClient**

### Utilizando ApolloClient

Quando iniciamos um projeto com Apollo, devemos inicializar o ApolloClient em nossa aplicação, que é algo parecido com o seguinte código:

```javascript
const client = new ApolloClient({uri:"https://seulinkbackend.com/graphql"});
```

Com esta variável client, conseguimos então criar consultas manuais, usando o método **query**, então nosso código ficaria algo parecido com:

```javascript
const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

function _login() {
    client.query({
        query: GET_DOGS
    }).then(result => {
        // Código quando obter
        // os dados da query
    }).catch(err => {
        console.log('Erro!');
    });
}
```

Desta forma, a Query nos retorna uma `Promise` e assim conseguimos executar essa função quando quisermos!
Mas e se quisermos passar variáveis dentro da consulta? Fazemos a mesma coisa, passando apenas um parâmetro a mais, ficando da seguinte forma:

```javascript
const LOGIN_QUERY = gql`
    query login($userName: String! $password: String!) {
        login(userName:$userName,password:$password ) {
            token
        }
    }
`;
function _login(userName: string, password: string) {
    client.query({
        query: LOGIN_QUERY,
        variables: {
            userName,
            password
        }
    }).then(result => {
        const { ssoToken } = result.data.login.ssoToken;
    }).catch(err => {
        console.log('Error')
    });
}
```

Assim, conseguimos executar nossas Queries no momento de carregamento com Query ou executar em um determinado momento!
