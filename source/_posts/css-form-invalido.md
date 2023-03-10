---
title: CSS - Adicionando estilo em um formulário invalido
date: 2019-07-29 08:08:52
tags:
- Front-end
- CSS
postKeywords: css invalid input, alterar css form, form css, css invalido formulario, alterar cor invalido, css, input, invalido, UX, UI
postDescription: Neste post, irei mostrar como você pode adicionar nativamente um comportamento em um input inválido, alterando a cor dele, deixando mais intuitivo, de maneira nativa com CSS
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Uma das coisas mais poderosas e enriquecedora que podemos fazer em nossas
aplicações web é adicionar validações em nossos formulários. 
De forma com que o utilizador do sistema consiga identificar
rapidamente o que está fazendo de errado ou o que está faltando.

Para isso, podemos fazer algumas modificações em nosso CSS, 
aplicando estilos para quando os formulários possuem algum **erro**.

Neste exemplo, vamos mostrar como aplicar um estilo em um input obrigatório,
alterando sua cor quando não preenchido!

<!-- more -->

```html
<form>
    <input name="usuario" type="text" required />
</form>
```

Agora que temos um campo que é obrigatório podemos adicionar
o nosso maravilhoso CSS!

Adicionaremos o seletor `:invalid` 
Com esse seletor, conseguimos selecionar todos os inputs
que não estiverem de acordo com nossas regras,
alterando alguma propriedade de nossos 
elementos, da seguinte forma:

```css
input:invalid {
  border-color: red;
}
```

Bem simples não é?
Dessa forma, você consegue adicionar algumas validações em seu CSS
De maneira nativa, sem ficar se em fazer tudo com Javascript!

