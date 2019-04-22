---
title: Como funciona a hierarquia do CSS
date: 2019-04-22 07:10:02
tags: 
- CSS
postKeywords: hierarquia css, importancia css, estilo in-line como funciona, css pontos, id ou classe css, id css, classe css
postDescription: Você sabe qual a diferença entre escrever um estilo no CSS usando ID ou Classe? E você sabe o porque falamos que para escrever estilos você deve usar sempre classes? Chega aí pra entender como funciona o CSS! 
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você sabe qual a diferença entre escrever um estilo no CSS usando ID ou Classe? E você sabe o porque falamos que para escrever estilos você deve usar sempre classes? Chega aí pra entender como funciona o CSS! 

<!-- more -->

O CSS possui uma hierarquia de estilos, isto é, depenendendo do que você usar para criar seu estilo, ele pode acabar sobrescrevendo algum outro estilo! Tudo isso pois o CSS possui uma contagem para saber qual o estilo é mais importante, olha como funciona a especificidade:

Começando pelo a estilização mais específica, onde você define o estilo do seu elemento diretamente no HTML, chamamos de estilo in-line, de forma que sobrescreve todos os outros estilos que podem estar sendo aplicados naquele elemento, usamos ele da seguinte forma:

```html
    <p style="color: #ff0000">Parágrafo</p>
```

Agora falando através de seletores, podemos estilizar com IDs, Classes e próprias tags, vamos analisar cada uma delas!

ID é o seletor mais específico, por ser exigido que só exista um por página HTML, então utilizar ID para criar estilos é uma má prática, pois você acaba não conseguindo reutilizar em outros lugares da sua página.

```css
#footer {
    background-color: #424242;
}
```

Classes é o segundo seletor seguido de ID, mas por poder ser repetido quantas vezes quisermos na nossa página, normalmente construímos nossos estilos usando classe, visando o reaproveitamento de código! 

```css
.card {
    border-radius: 5px;
}
```

Mas estas não são as únicas opções para estilização, podemos usar também as próprias tags HTML, de forma que se apliquem a todos os elementos das tags que selecionamos, está é a forma mais genérica de criar um estilo!

Para finalizar, temos mais uma forma de adicionar um estilo, que sobrescreve as outras marcações, que é usando o !important que sobrescreve qualquer outro elemento do CSS:

```css
.classe {
    color: #ff0000!important;
}
```

Quando utilizamos diversos seletores para estilizar, temos uma fórmula para encontrar qual CSS será utilizado, isto é, que possui maior importância, cada atributo possuí um valor determinado, abaixo está a tabela mostrando o valor de cada:

Elemento                                | Valor
---------                               | ------
Estilo In-line                          | 1000
Id                                      | 100
classes, pseudo-classes e atributos     | 10
HTML Tags                               | 1

Então com isso, conseguimos definir o valor de cada CSS! Vamos ver um exemplo?

```css
#paragrafo p {
    color: red;
}

.paragrafo p {
    color: blue;
}
```

Temos estes dois estilos aplicando estilo em todos os parágrafos, qual cor será aplicado? Para descobrir isso, vamos contar de acordo com a regra:

**Estilo 1** - Temos um ID e uma tag HTML, então o valor desse CSS é: 100 (ID) + 1 (Tag) = 101.
**Estilo 2** - Temos uma classe uma tag HTML, então o valor desse CSS é: 10(classe) + 1(Tag) = 11.

Com isso, podemos concluir que o primeiro CSS tem um "peso" maior, que é o que será utilizado, então a resposta para a pergunta é: **Será utilizada a cor vermelha**.
