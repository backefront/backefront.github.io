---
title: Qual a diferença entre a tag <b> e <strong>
date: 2019-01-16 07:30:44
tags:
- HTML
- Acessibilidade
postKeywords: diferenca b e strong, difference b and strong, quando usar strong e b, significado strong e b html, html strong b
postDescription: Apesar de serem visualmente iguais, você sabia que há uma grande diferença entre as tags <b> e <strong>? Visualmente, ambas deixam a palavra em negrito mas semânticamente elas tem um peso diferente! No SEO, há um impacto diferente dependendo de qual tag você utilizar. Você sabe qual?
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Apesar de serem visualmente iguais, você sabia que há uma grande diferença entre as tags `<b>` e `<strong>`? Visualmente, ambas deixam a palavra em **negrito** mas semânticamente elas tem um **peso** diferente! No SEO, há um impacto diferente dependendo de qual tag você utilizar. Você sabe qual?

<!-- more -->

### Entendendo a diferença

Veja como está explicado o elemento **b** pelo [w3](https://www.w3.org/TR/html5/text-level-semantics.html#the-b-element):
> "A tag `<b>` representa um intervalo de texto onde a inteção está sendo traçada para fim estéticos, sem transmitir necessariamente alguma importância extra ao texto e sem implicação de uma voz ou humor alternativo."

Em compensação, o elemento `strong` tem por definição:

> "A tag `strong` representa forte importância, seriedade ou urgência para o seu conteúdo"

Então, para utlizar corretamente a tag strong, devemos representar, pelo menos, uma das três situações:

**Importância**
O elemento strong pode ser usado em um título, legenda ou parágrafo para distinguir a parte que realmente importa de outras partes que podem ser mais detalhadas, mais joviais ou meramente padronizadas.

**Seriedade**
O elemento strong pode ser usado para marcar um aviso ou um alerta de cuidado

**Urgência**
O elemento strong pode ser usado para denotar conteúdos que o usuário precisa ver antes de outras partes do documento.

### Por que devemos ter essa separação?
O uso correto das tags HTML nos ajudam a construir um código mais semântico, tornando-o mais legível, não apenas para humanos mas principalmente máquinas. Como exemplo, o robô do Google que faz a leitura de seu site, reconhece o padrão e isso conta pontos em sua colocação de rankeamento na busca feito por estes buscadores (Google, Yahoo, etc)