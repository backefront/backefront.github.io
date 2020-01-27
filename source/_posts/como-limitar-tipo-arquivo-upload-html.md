---
title: Como limitar o usuário a escolher um tipo de arquivo no HTML
date: 2020-01-27 09:30:09
tags:
- Front-end
- HTML
postKeywords: input limit, limitar extensao html, html, permitir apenas um tipo de arquivo, permitir extensao html, permitir upload html
postDescription: Neste post, irei mostrar como podemos limitar a nossa interface para permitir que o usuário possa fazer upload de apenas um tipo de extensão de arquivo, através do input file!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em nosso dia a dia de desenvolvimento, as vezes precisamos fazer upload de arquivos, como imagens, PDFs, etc.
Esses arquivos, muitas das vezes, queremos que seja apenas de um determinado tipo, apenas um tipo de arquivo! 
Você sabe como limitar extensão de um arquivo, pelo HTML?

<!-- more -->

Para limitarmos o tipo de arquivo que será aceito pela nossa interface, basta alterarmos uma propriedade no nosso `input file`:


### Limitando apenas imagens
```html
<input type="file" multiple accept='image/*'>
```

### Limitando apenas PDFs
```html
<input type="file" multiple accept='application/pdf'>
```

### Limitando apenas arquivos de texto
```html
<input type="file" multiple accept='application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'>
```

Com isso, podemos limitar que o usuário veja apenas um tipo de extensão de arquivo, através de nossa interface!
O ideal é que mesmo limitando isso, ainda verificarmos se é realmente aquele tipo pelo Javascript e se possível, verificar no back-end também!
