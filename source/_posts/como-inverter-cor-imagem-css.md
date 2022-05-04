---
title: Como inverter a cor de uma imagem com CSS
date: 2019-12-23 07:30:04
tags:
  - CSS
  - Front-end
postKeywords: invert css, alterar cor css, img css, filter css, filter, css, front-end, como alterar a cor com css
postDescription: Você alguma vez já precisou alterar a cor de uma imagem mas não queria alterar propriamente a imagem? Com o CSS, conseguimos fazer algumas alterações na imagem diretamente, como por exemplo, inverter a cor dela!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Esses dias estava desenvolvendo uma aplicação para um de nossos clientes, onde pegamos o protótipo da tela, feito no [Marvel](https://marvelapp.com/) por um de nossos UI Designers (User Interface Designers).

Todas as imagens e icones já estavam recortados e prontos para serem usados. Porém, em uma determinada página, estava sendo usado um ícone com o símbolo "+", em branco, porém, a versão que eu tinha recortada era em preto, e eu não conseguiria conversar com o UI naquele momento, eu precisava me virar com o que eu tinha em mãos! Como poderia fazer isso?

Graças ao CSS, conseguimos fazer algumas modificações em nossas imagens, sem a necessidade de alterar para uma outra imagem!
Você conhece a propriedade `filter`?

<!-- more -->

No CSS3 temos uma propriedade chamada filter, com ela definir efeitos visuais em um elemento!
Então, conhecendo essa propriedade, como eu contornei o problema de alterar a cor da imagem?

O ícone que eu estava utilizando era de cor preta e em uma determinada página que o fundo também era preto, eu precisava daquele mesmo ícone em cor branca!

A solução foi simples:

```css
.icone-branco {
  filter: invert(1);
}
```

Com isso, invertemos a cor atual da imagem!
Simples não é mesmo?

A propriedade filter possui outras opções, como blur(), brightness(), contrast(), drop-shadow(), grayscale(), hue-rotate(), invert(), opacity(), saturate(), sepia(), url().
Fique a vontade de brincar com essa propriedade super legal e muito útil!
