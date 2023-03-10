---
title: Como criar linha em título com Before e After
date: 2020-05-04 09:25:30
tags:
  - Front-end
  - CSS
postKeywords: before css, after css, line title css, linha titulo css, linha before after, como criar linha no cabeçalho css, linha css
postDescription: Neste post, irei ensinar como criar uma linha em um título, utilizando o after e before do CSS!
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Muitas vezes vemos, nos mais diversos sites, linhas que ficam entre um título, um cabeçalho, da seguinte maneira:

![Linha entre o cabeçalho](/posts/linha-after-before.png)

Você sabe criar essa linha, com CSS, usando `before` e `after`?

<!-- more -->

Criar essa linha é uma atividade bem simples, que com CSS puro conseguimos resolver!
Vamos criar então a estrutura do nosso HTML:

```html
<h1 class="blog-title">Back & Front</h1>
```

Com nosso título criado, vamos agora estilizar ele, adicionando nossas linhas à ele com os pseudo-elementos `before` e `after`:

```css
/* Aqui podemos configurar
   a estilização do título
*/
.blog-title {
  overflow: hidden;
  text-align: center;
}

/* Aqui criamos o estilo
   da linha esquerda (before)
   e linha direita (after) 
*/
.blog-title:before,
.blog-title:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

/* Aqui configuramos o estilo
   da linha esquerda (before)
*/
.blog-title:before {
  right: 0.5em;
  margin-left: -50%;
}

/* Aqui configuramos o estilo
   da linha direita (after)
*/
.blog-title:after {
  left: 0.5em;
  margin-right: -50%;
}
```

Você pode alterar a linha e usar sua imaginação para fazer o que quiser, o `before` e `after` são bem legais para brincarmos!

🏡
