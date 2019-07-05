---
title: tratar-imagem-erro-html5
date: 2019-07-05 08:11:07
tags:
postKeywords: img error html, handle img broken, tratar imagem quebrada html, onerror img html, imagem padrao html, substituir imagem quando quebrar
postDescription: Neste post, irei mostrar como tratar uma imagem quebrada com o Javascript, substituindo por uma imagem padrão, evitando que seu layout se quebre!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando estamos desenvolvendo, devemos nos preocupar em como a informação será apresentada na tela
Nossos sistemas normalmente contém algumas imagens, seja elas estáticas (aquela que nós mesmo inserimos o endereço da foto)
Quanto também imagens que foram enviadas pelo próprio usuário (foto de perfil, por exemplo)
E obviamente, não queremos que nosso layout fique quebrado por um erro na imagem, certo?

Pensando nisso, você sabia que a tag `img` aceita um evento chamado **onerror**? 

<!-- more -->

Com essa propriedade, você consegue tratar o erro no momento de carregamento de uma imagem
Sendo assim, no momento que a imagem "quebrar", você pode substituir essa imagem por uma genérica!

Basta adicionar, em sua tag img:

```hmtl
<img src="logo.png" onerror="handleError(this)">
<!--
    Usamos o this para passar como parâmetro
    para que o Javascript tenha acesso as
    propriedades da nossa tag img.
-->
```

E tratar esse erro no Javascript:

```javascript
function handleError(image) {
    image.onerror = "";
    image.src = "/img/img-default.png";
    return true;
}
```

Assim, conseguimos evitar imagens quebradas na nossa aplicação
Evitando que nosso layout também fique comprometido com problemas!