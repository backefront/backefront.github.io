---
title: Pare de usar index em seu map e use randomUUID!
date: 2023-03-10 10:00:00
tags:
  - React
  - Front-end
  - Javascript
postKeywords: map javascript, retornar novo array, iterar array e retornar novo, iterar array, como usar map js, metodo de iteraçao js, percorrer array js, randomUUID, chave única, gerar chaves, criptografia
postDescription: Como usar crypto.randomUUID() para gerar chaves em um array usando o método map() do JavaScript - Aprenda a usar o método map() do JavaScript junto com a função randomUUID() da biblioteca crypto para gerar chaves únicas para cada item em um array. Com esta técnica, você pode criar uma interface de usuário mais rápida e responsiva sem usar índices como chaves para os elementos da sua lista.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Se você está desenvolvendo um aplicativo React que precisa exibir uma lista de itens, é provável que você tenha usado o método map() para percorrer cada elemento e exibir na tela. 

Mas você já se perguntou se há uma maneira melhor de gerar chaves únicas para cada elemento em vez de usar index? 
A resposta é *sim*, e neste post eu vou mostrar como usar a função `randomUUID()`.

Antes de começar, é importante lembrar que as chaves em um objeto em JavaScript devem ser exclusivas. 
Usar o índice do array como chave pode causar problemas em algumas situações, como quando os elementos são adicionados ou removidos da lista.

<!-- more -->

```javascript
function Component({ itens }) {

  return (
    <div>
      {itens.map(item => (
        <Item 
          key={crypto.randomUUID()} 
          {...item} 
        />
      ))}
    </div>
  );
}
```

Neste exemplo, estamos percorrendo cada item em `itens` usando a função map().

Para cada um, estamos gerando uma chave única usando a função `randomUUID()` de `crypto` e passando essa chave para o atributo key do componente Item. 
Dessa forma, garantimos que cada item tenha uma chave exclusiva e evitamos problemas com elementos duplicados ou removidos da lista.

Note que o atributo key é necessário para o React identificar cada elemento da lista e realizar atualizações eficientes na interface. 
Sem ele, o React precisaria atualizar todos os elementos da lista sempre que houvesse uma alteração, o que pode prejudicar a performance do aplicativo.

Em resumo, usar a função `randomUUID()` da biblioteca crypto é uma ótima maneira de gerar chaves exclusivas para cada elemento em uma lista no React. 
Assim garantimos que nossa aplicação seja mais rápida evitando problemas com elementos duplicados ou removidos da lista.

Espero que este post tenha sido útil para você. 
Se tiver alguma dúvida ou sugestão, deixe um comentário abaixo. Obrigado por ler!



