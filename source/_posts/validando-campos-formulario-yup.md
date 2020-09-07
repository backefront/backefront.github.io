---
title: Validação de formulário com Yup - React
date: 2020-09-07 08:56:26
tags:
- Front-end
- React
postKeywords: react yup, validar formulario, react validation form, yup como usar react, react com yup, validar um form, dados form react, front-end, react, yup 
postDescription: Você já precisou validar se os dados que estão sendo enviado pelo front-end realmente estão corretos? Realizar uma validação antes de enviar seus dados para sua API é de extrema importância, pois dessa forma evitamos erros e envio de informações erradas! Uma maneira fácil para validarmos nosso formulário é utilizando um cara chamado Yup
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou validar se os dados que estão sendo enviado pelo front-end realmente estão corretos?
Realizar uma validação antes de enviar seus dados para sua API é de extrema importância, pois dessa forma evitamos erros e envio de informações erradas!

Uma maneira fácil para validarmos nosso formulário é utilizando um cara chamado [Yup](https://github.com/jquense/yup)!

<!-- more -->

Primeiramente, vamos instalar ele:

```cmd
yarn add yup
```

O Yup faz validações de dados do tipo `string`, `integer`, `boolean`, `array`, `object` e `date`.
Então vamos criar uma validação da seguinte estrutura:

```js
{ 
  email: email  // obrigatório
  nome: string, // obrigatório
  endereco: string // obrigatório,
  numero: number // obrigatório
  complemento: string // não obrigatório
}
```

Agora vamos criar o nosso `Yup.object`: 

```js
const userSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  nome: yup
    .string()
    .required(),
  endereco: yup
    .string()
    .required(),
  numero: yup
    .number()
    .required()
    .positive()
    .integer(),
  complemento: yup
    .string()
    .notRequired(),
});
```

Legal! Agora como podemos validar um objeto com o que acabamos de criar com o Yup?
Com a lib, nós temos acesso à uma função chamada `isValid`, que é uma promise, então podemos fazer da seguinte forma:

```js
const submitForm = async () => {

  const userFormData = {
    email: 'victorjordan@gmail.com',
    nome: 'Victor Jordan',
    endereco: 'Rua teste, 123, jardim Oriente, São Paulo',
    numero: 123,
  }

  // Essa função retorna true/false
  const isValid = await userSchema.isValid(addressFormData);
  if(isValid) {
    // envio informações para o backend
  }
}
```

Fácil validar formulários assim, não é mesmo?