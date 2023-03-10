---
title: O que é teste unitário
date: 2020-04-06 07:52:00
tags:
  - Testes
postKeywords: teste unitario, teste unidade, o que é teste, teste, unidade, jest, teste front-end, teste de modulo, unit test
postDescription: Quem nunca ouviu falar sobre teste unitário? Se o seu projeto possui testes de unidades? É uma fala muito comum na vida cotidiana de um desenvolvedor! Mas afinal, que raios é esse tal de teste unitário?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quem nunca ouviu falar sobre teste unitário? Se o seu projeto possui testes de unidades?
É uma fala muito comum na vida cotidiana de um desenvolvedor!
Mas afinal, que raios é esse tal de teste unitário?

<!-- more -->

Um teste de unidade basicamente é o **menor** componente **testável** de um software, podendo ser esse componente uma função, procedimento, método, classe, objeto, etc.
Esse teste também conhecido como teste de componente, teste de módulo ou teste de programa.

Vamos dizer que você está programando em Javascript e está fazendo seu front-end em React, nesse caso, a menor parte testável do seu código possivelmente será uma função! Caso estivesse usando uma linguagem orientada a objetos, um teste unitário seria um método de um objeto.

Vamos supor que temos a seguinte função:

```javascript
const soma = (a, b) => a + b;
```

Uma função simples que assim como diz o nome, tem como objetivo somar dois números!
Agora iremos fazer o teste unitário:

```
test('1 + 2 igual 3', () => {
  expect(soma(1, 2)).toBe(3);
});
```

Neste caso, estamos usando Jest para fazer o teste, caso tenha interesse em ler mais sobre o Jest, (em um post anterior falei sobre ele!)[https://backefront.com.br/criando-teste-com-jest/]

### Qual a serventia de teste unitário?

Seu principal objetivo é garantir que cada unidade funcione de acordo com sua especificação, onde podemos incluir casos funcionais e não-funcionais.
Podemos destacar que não servem **apenas** para testar uma função específica e sim para termos a garantia que todas as funcionalidades antes desenvolvidas e testadas continuem funcionando depois de fazer alguma alteração em alguma parte do seu código.

### Tarefas de preparação para testes de unidade

Não basta simplesmente criarmos um teste, temos que ter um planejamento prévio, que podem ser divididos nos seguintes passos:

- **Planejar** a abordagem geral dos testes de unidade
- **Projetar** os casos de testes e os procedimentos de teste
- **Definir** relações entre os testes (algum dele tem dependência de outros testes)
- **Preparar** o código auxiliar necessário para o teste
