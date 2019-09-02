---
title: Como alterar o layout de um input com CSS
date: 2019-06-10 07:00:22
tags:
- Front-end
- CSS
postKeywords: css input, alterar input html, input layout, modificar aparencia input, layout css html input, file css layout
postDescription: Veja como é fácil alterar o layout de um input no HTML utilizando CSS para deixar seus inputs iguais aos botões de sua aplicação!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você sabia que você consegue alterar o estilo de um input, podendo adicionar o estilo que quiser, mas mantendo as propriedades de um input?
Como por exemplo, um input do tipo `file`, ter a forma de um botão com uma imagem/ícone.

Desta forma, conseguimos manter o estilo da nossa página e conseguimos manter o comportamento padrão do componente! 

<!-- more -->

O GIF abaixo demonstra um exemplo, onde temos um **input file** com layout de um botão comum:

![Input File com CSS de botão](/posts/layout-button.gif)

Para fazermos isso, basicamente usamos ... coisas do HTML:

- Input type file com ID e display none
- Label com propriedade FOR
- Imagem, para deixar bonito o botão!

Então, nosso HTML ficaria: 

```HTML

<input id="uploadPhoto" type="file" accept="image/*" style="display: none" />
<label for="uploadPhoto" class="btn-cta">
    Upload picture
    <img src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/action-upload-alt-512.png" style="width: 20px" />
</label> 
```

É muito importante adicionarmos o display none no input.
Pois precisamos esconder esse input da nossa exibição padrão, e deixar o comportamento seja guiado pelo nosso label!

E apenas para estilizar este nosso label, vamos adicionar o seguinte CSS:

```css
.btn-cta {
    background: #fff;
    border: 2px solid #424242;
    border-radius: 50px;
    color: #424242;
    cursor: pointer;
    font-weight: bold;
    padding: 6px 16px;
    width: 100%;
}
```

[Neste link](https://codepen.io/victorjordan95/pen/EebmOV) você encontra o código feito neste post.
Esta dica funciona para outros tipos de inputs, solte sua criatividade para personalizar os inputs que você quiser!