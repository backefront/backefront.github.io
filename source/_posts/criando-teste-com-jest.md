---
title: Como criar um teste com Jest
date: 2019-11-25 07:10:24
tags:
- Front-end
- Javascript
- Testes
postKeywords: test jest, jest babel, jest import function, jest export, como importar funcao jest, jest ES6, jest new js, jest react, test jest react
postDescription: Entenda como criar um teste com o Jest, utilizando Babel e ES6, de uma maneira simples e sem dor de cabeça!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou criar alguma função no Javascript e no momento em que estava desenvolvendo, tudo funcionava perfeitamente!

Mas em um determinado momento de seu projeto, você reparou que o retorno daquela função, estava diferente do que esperado!
Você agora precisa corrigir e entender onde quebrou e o porquê! 

Você conseguiria evitar isso, caso tivesse coberto aquele caso de uso, com um teste!

Você sabe como fazer teste de uma função com o Jest? Vou ensinar como é fácil fazer um teste básico com Jest!

<!-- more -->

### Instalações necessárias

Antes de começarmos a mexer no nosso teste em si, devemos instalar algumas dependências, que são:

- Jest
- babel-jest

Então, em seu terminal, execute o comando:

```javascript
yarn add --dev jest
```

```javascript
yarn add --dev babel-jest @babel/core @babel/preset-env
```

### Criação e alteração de arquivos para o teste

Primeiramente, devemos criar o arquivo `babel.config.js`, na raiz do projeto, com a seguinte configuração:

```javascript
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

E agora, devemos adicionar nosso script de teste, no arquivo `package.json`
Dentro de seção **script**, adicionamos nosso "test":

```javascript
{
  "scripts": {
    "test": "jest"
  }
}
```

Feito toda essa configuração, vamos agora criar um teste onde queremos verificar a soma de dois números.
Criemos então o arquivo `soma.js`, que é onde está a nossa função que desejamos testar:

```javascript
const soma = (a, b) => a + b;

export { 
    soma
}
```

E agora iremos criar o nosso teste em si mesmo!
Crie um arquivo chamado `soma.test.js` 

```javascript
import {
    soma
} from './soma.js'

describe('Cálculo de dois numero', () => {
    test('1 + 2 igual 3', () => {
        expect(soma(1, 2)).toBe(3);
    });
})
```

Pronto! Seu teste está pronto para ser testado! 
Vamos testar então o nosso primeiro teste com Jest?

### Executando o seu teste

Em seu terminal, execute o comando `yarn test` ou `npm run test`, e deve retornar a seguinte mensagem:

```javascript
PASS  ./sum.test.js
Cálculo de dois numero
✓ adds 1 + 2 to equal 3 (5ms)
```

Perfeito! Seu teste está rodando e melhor, passou!

Quer entender mais sobre o que é teste de software? [Neste post](https://backefront.com.br/fundamentos-teste-software/) falamos sobre esse assunto tão importante!
