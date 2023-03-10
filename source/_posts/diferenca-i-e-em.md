---
title: Diferença entre a tag i e a tag em
date: 2019-03-27 16:07:40
tags:
- HTML
- Acessibilidade
postKeywords: diferenca i e em, difference i and em, quando usar i e em, significado i e em html, html i em
postDescription: Apesar de serem visualmente iguais, você sabia que há uma grande diferença entre as tags <i> e <em>? Visualmente, ambas deixam a palavra em itálico mas semânticamente elas tem um significado diferente! Você sabe qual?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Semelhante ao post sobre a [diferença entre as tags b e strong](https://backefront.com.br/diferenca-entre-b-strong/), neste post irei falar sobre a diferença entre as tags **i** e **em**, que apesar de ambas terem um estilo em itálico, semânticamente elas são diferentes! 

Como definição dada pela [MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/i), a tag **i** é definida como: 

<!-- more -->

> O elemento HTML **i**  representa uma parte do texto que é destacada do restante por algum motivo, por exemplo, termos técnicos, expressões de outros idiomas ou pensamentos de personagens fictícios. Normalmente, é apresentado com o uso do tipo "itálico".

E a [definição](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/em) da tag **em**:

> O elemento HTML **em** marca o texto que tem ênfase. O elemento **em** pode ser aninhado, com cada nível de aninhamento indicando um grau maior de ênfase.

A tag **i** pode representar uma parte do texto com uma diferença semântica, na qual a representação é **itálico**. Isso significa que os navegadores continuarão a apresentar o conteúdo em itálico.

A tag **em** representa ênfase importante no texto que está sendo escrito, enquanto que a tag **i** representa o texto que é iniciado de uma prosa, como uma palavra estrangeira, pensamentos de um personagem ficcional, ou quando o texto se refere a definição de uma palavra em vez de representar seu significado semântico.

Um exemplo bem legal da MDN, novamente, é:

> Um exemplo para **em** poderia ser: "Apenas já faça isso!", ou: "Nós temos que fazer algo acerca disso". Uma pessoa ou software lendo o texto pronunciaria as palavras em itálico com uma ênfase.

> Um exemplo para **i** poderia ser: "A Rainha Mary velejou na noite passada". Aqui, não é adicionada ênfase ou importância na palavra "Rainha Mary". É meramente indicado que o objeto em questão não é uma rainha chamada Mary, mas um navio chamado Rainha Mary. Outro exemplo para **i** poderia ser: "A palavra o é um artigo".

Quando um leitor de site for ler o que está escrito no nosso site, ele interpretará de forma diferente, de acordo com a tag que utilizamos, e isto faz muita diferença para alguém que tenha a necessidade de utilizar softwares para leitura, como pessoas com deficiências visuais!