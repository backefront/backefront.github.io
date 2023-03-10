---
title: Como usar operador ternário no style no React
date: 2019-10-14 10:35:14
tags:
  - Front-end
  - React
postKeywords: ternary operator css react, react css condição, condição ternário style, css, react, ternary css, operator in css, react ternary
postDescription: Veja como é fácil adicionar uma condição ternária na propriedade style dentro de uma tag, no React!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Alguma vez você já precisou adicionar um estilo em algum elemento baseado em uma condição?
Você sabe como adicionar um operador ternário no estilo, no React?
É muito simples, só precisamos nos atentar na quantidade de chaves `{}`!

<!-- more -->

Vamos imaginar um cenário onde queremos que a cor onde está escrita a nota do aluno seja diferente de acordo com a situação dele.
Caso a nota seja maior que 6, deve exibir a nota em `azul`.
Caso a nota seja menor que 6, deve exibir a nota em `vermelho`
Então, para fazermos essa condição, usaremos o operador ternário no react, no elemento `p`, da seguinte forma:

```javascript
<p style={notaAluno > 6 ? { color: "blue" } : { color: "red" }}>{notaAluno}</p>
```

Ou também podemos fazer:

```javascript
<p style={{ color: notaAluno > 6 ? "blue" : "red" }}>{notaAluno}</p>
```

Particularmente, eu prefiro essa última opção, mas você pode usar a que achar que fica mais legível, entendível!
