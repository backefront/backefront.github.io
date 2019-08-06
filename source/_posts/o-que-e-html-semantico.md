---
title: O que é HTML semântico
date: 2019-08-06 08:00:23
tags:
- Front-end
- HTML
postKeywords: html semantico, semantic html, melhorar seo, codigo html melhor, como escrever melhor o html, melhor, html, seo
postDescription: Você já ouviu falar sobre HTML semântico? Você sabia que com ele, você pode melhorar o seu código e consequentemente, também melhorar o SEO da sua página?
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já ouviu falar sobre HTML semântico? 
Ou marcação semântica?

Atualmente, com a evolução do HTML, tornou-se frequente ouvirmos falar
sobre desenvolvimento de `HTML semântico`. 

Isto significa que passamos a usar `elementos HTML` pelo o que eles **são**
e deixamos de lado a construção das tags pensando apenas no lado visual.

<!-- more -->

### HTML semântico

O HTML semântico nos leva a produzir uma página web
que tenha um real significado e que não seja feita
apenas para apresentação bonita!

Um elemento semântico ele nos diz claramente o seu significado,
seja para o navegador quanto para o desenvolvedor no qual está 
fazendo o código.

Temos por exemplo a tag `div`.
div é uma tag **não-semântica**, pois ela não nos diz nada
sobre seu conteúdo! Ela sozinha, não representa nada para nós

Agora, por outro lado, temos a tag `table`
Table é uma tag **semântica** pois mesmo sem conteúdo,
nós sabemos que ela é uma tabela, e nos diz isso claramente.

Observe este exemplo, onde primeiro temos um código não-semântico: 

```html
<html>
    <head>
        <title>Exemplo de página</title>
    </head>
    <body>
        <div id="header">
            Cabeçalho da página
        </div>
        <div id="main">
            Conteúdo principal do site
        </div>
        <div id="footer">
            Rodapé
        </div>
    </body>
</html>
```

Agora, se formos escrever esse mesmo pedaço de código
utilizando as [novas tags do HTML5](https://www.w3schools.com/html/html5_semantic_elements.asp):

```html
<html>
    <head>
        <title>Exemplo de página</title>
    </head>
    <body>
        <header>
            Cabeçalho da página
        </header>
        <main>
            Conteúdo principal do site
        </main>
        <footer>
            Rodapé
        </footer>
    </body>
</html>
```

### HTML Semântico e SEO

O desenvolvimento utilizando essas práticas de 
construção de páginas pensando nas tags corretas
tem como benefício também a melhoria no seu SEO.

Isso porque os robôs de buscas conseguirão entender
melhor o que seu site está passando para eles,
com conteúdos organizados e claros!

O site [html5 Doctor](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png) criou uma imagem muito legal para nos ajudar 
a entender qual tag HTML podemos usar para construção:

![html5 Doctor - Gráfico de Fluxo sobre qual tag utilizar](/posts/qual-tag-usar-html.png)