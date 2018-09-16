---
title: Como centralizar uma div no meio da página
date: 2018-09-07 10:23:08
tags: 
- CSS
- Front-end
postKeywords: Flexbox, alinhar div no meio, centralizar conteudo, alinhar conteudo no meio da div, centralizar div
postDescription: Centralizar um conteúdo no centro de um elemento é uma situação comum de acontecer. Existem diversas formas de fazer isso, mas nesta publicação, mostrarei como centralizar uma div utilizando o `flexbox`!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Centralizar um conteúdo no centro de um elemento é uma situação comum de acontecer. Existem diversas formas de fazer isso, mas nesta publicação, mostrarei como centralizar uma div utilizando o `flexbox`!

Flexbox é uma propriedade introduzida no CSS3 que tem como objetivo organizar os elementos de uma forma ágil. Esta propriedade trabalha com uma dimensão por vez, isto é, a propriedade atua como **linha** ou como **coluna**

<!-- more --> 

## Aplicação

Para centralizar uma div ao meio de uma página usando flexbox, você precisa basicamente de dois elementos: um elemento **pai** e um elemento **filho**. Isso significa que o conteúdo que você deseja centralizar no meio, deve estar dentro de outro elemento. Vamos mostrar um exemplo na prática

```html
<main class="pai">
    <p class="filho">
      Olá! Tudo bem?
    </p>
</main>
```

A classe **pai** recebe as propriedades do `flexbox`, onde é configurado que o display em questão será do tipo **flex** e que queremos que este elemento seja tratado como uma linha, na propriedade `flex-flow` e alinhamos ao centro com `justify-content: center;`

```css
.pai {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
}

.filho {
  align-self: center;
}
```

A mágica de alinhar no centro verticalmente, está na propriedade **align-self: center** pois é uma propriedade usada em elementos que são filhos de outro elemento que seja flex. Com o `align-self` conseguimos alinhar o filho da forma desejada. Poderiamos usar **align-self: flex-end;** ou **align-self: flex-start;** em conjunto a esta propriedade!

Caso queira brincar um pouco, [neste link](https://codepen.io/victorjordan95/pen/EebmOV) eu criei um Codepen com o conteúdo alinhado ao meio, para demonstrar melhor!