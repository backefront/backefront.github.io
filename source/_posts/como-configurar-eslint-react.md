---
title: Como configurar ESLint no React
date: 2020-03-16 08:00:54
tags:
- Front-end
- React
postKeywords: eslint react, configurar eslint, padrao projeto react, javascript eslint, melhores praticas javascript, react, front-end, eslint
postDescription: Você conhece o ESLint? ESLint é uma poderosa ferramenta que nos permite trabalhar melhor em nossos códigos, de forma que conseguimos codificar seguindo as práticas impostas através de uma style guide! Neste post, irei ensinar como você pode configurar o ESLint em um projeto React, do zero!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em nosso desenvolvimento diário, saber programar apenas não é o suficiente para sermos de fato um bom programador.
Existem padrões de projetos, boas práticas e alguns padrões que se seguirmos, nos torna muito melhor, bem como o nosso próprio código!

Uma coisa que devemos ter em mente é que, um código para ser considerado **realmente bom** é aquele código que fazemos de forma que um outro ser humano possa entender!

Pensando nisso, uma boa prática é utilizarmos o `eslint`!

<!-- more -->

ESLint é um plugin desenhado para permitir que desenvolvedores encontrem problemas em seu Javascript sem a necessidade de executar ele.
Ele é usado para encontrar problemas de padrões de projeto ou algum código que não se encaixe em algum determinado  style guidelines

O ESlint é uma biblioteca open source, escrita originalmente por Nicholas C. Zakas em Junho de 2013.

### Instalando o ESLint

Para começarmos utilizar o ESLint, devemos instalar ele através do `npm` ou `yarn`.
Instalaremos ele como uma dependência de Dev:

```cmd
npm install eslint --save-dev

// ou

yarn add eslint --dev
```

Agora com o ESLint devidamente instalado, devemos inicializar o arquivo `eslintrc.json`.
É neste arquivo onde iremos adicionar as instruções, as regras que queremos que seguir

Então podemos usar o terminal rodando o seguinte comando:

```cmd
npx eslint --init
```

Assim que rodamos este comando, nos deparamos com as seguintes opções:
![Opções para criação do arquivo ESLint](/posts/ESLint - configuration.png)

Neste post, iremos selecionar a opção **To check syntax, find problems, and enforce code style**

E vamos selecionar as próximas escolhas na seguinte ordem:

- JavaScript modules (import/export)
- React
- Does your project use TypeScript? (y/N): N
- (*) Browser
- Use a popular style guide
- Airbnb
- Javascript
- Would you like to install them now with npm? Yes

Por que selecionamos Airbnb? 
A style guide do Airbnb é uma das mais completas e cobre praticamente todas as principais práticas para Javascript.
Caso seja do seu interesse, você pode ver o [repositório no GitHub do Airbnb](https://github.com/airbnb/javascript)

Nosso arquivo **eslintrc.json** deve ter ficado da seguinte forma:

```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
```
Para ficar melhor ainda, vamos adicionar mais uma dependência, chamada `prettier`:

```cmd 
npm install prettier --save-dev

// ou

yarn add prettier --dev
```

Com ela instalada, vamos alterar nosso arquivo **eslintrc.json**, vamos fazer uma pequena modificação:

```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier' // Adicionando prettier como plugin
  ],
  // Modificamos as regras
  // para que o prettier nos avise
  // de erros na formtação
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off'
  },
};
```

Agora com toda essa configuração feita, ao salvarmos nossos arquivos, eles são formatados para se adequar ao melhor padrão bem como também temos agora notificações de Javascript, para tornar os nossos códigos ainda mais legíveis, utilizando as melhores práticas!