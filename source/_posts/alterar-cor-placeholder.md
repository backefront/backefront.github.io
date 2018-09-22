---
title: Alterando a cor do texto do placeholder
date: 2018-09-22 10:33:49
tags:
- CSS
- Front-end
postKeywords: cor placeholder, alterar cor placeholder, cor do input, texto input, como alterar css placeholder, css placeholder
postDescription: Como alterar a cor do placeholder de um input de uma maneira fácil e rápida!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Esses dias, estava construindo um input com background-color transparente e o conteúdo que estava atrás era justamente a mesma cor que o texto do placeholder! Obviamente, não seria legal deixar assim, afinal, não dava para ler nada! Mas, como alterar a cor do placeholder de um input? Pesquisando sobre isso, me deparei com o pseudo-elemento `::placeholder`! Neste post, vou mostrar como usar esta propriedade de forma rápida e sem enrolação!

<!-- more --> 

## Definição

O ::placeholder permite que você personalize o texto que fica dentro do input, da forma que quiser! Para utilizar, basta adicionar o CSS desejado, semelhante a forma que você estiliza quando deseja altear o `hover`!

```css
/* Chrome/Opera/Safari */
::-webkit-input-placeholder { 
  color: green;
}
/* Firefox 19+ */
::-moz-placeholder { 
  color: green;
}
/* IE 10+ */
:-ms-input-placeholder { 
  color: green;
}
/* Firefox 18- */
:-moz-placeholder { 
  color: green;
}
```

### Estilizações suportadas

* propriedades de fonte
* color
* propriedades de background
* word-spacing
* letter-spacing
* text-decoration
* vertical-align
* text-transform
* line-height
* text-indent
* opacity