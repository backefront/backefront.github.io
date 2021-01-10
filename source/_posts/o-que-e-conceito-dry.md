---
title: O que é conceito DRY
date: 2020-05-25 07:41:17
tags:
  - Front-end
  - Engenharia de Software
postKeywords: dry, o que é dry, dry js, javascript, export funcao, evitar repeticao js, codigo compartilhado js, front-end
postDescription: Você já ouviu falar sobre um tal de DRY? DRY é uma sigla para Don't Repeat Yourself, que significa Não Se Repita! Este princípio tem como intuito a redução de código repetidos em toda sua aplicação. Mas porque é tão importante evitarmos isso?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já ouviu falar sobre um tal de DRY? DRY é uma sigla para _Don't Repeat Yourself_, que significa **Não Se Repita**!
Este princípio tem como intuito a redução de código repetidos em toda sua aplicação.
Mas porque é tão importante evitarmos isso?

<!-- more -->

Primeiramente, devemos ter em mente que não faz sentido ter um mesmo trecho de código em diversos lugares diferentes, isso é ambiguidade!
Isso acaba por deixar o seu sistema maior do que realmente necessário! Não faz sentido isso, certo?

E se precisarmos fazer a correção de uma função que, por algum motivo, se repete em diversos lugares, vamos ter que alterar o mesmo código N vezes, afim de manter sua compatibilidade. Isso é horrível quando pensamos em manutenção de código, mais um motivo para evitarmos a repetição desnecessária de código!

### Como podemos melhorar nossa estrutura?

Uma das formas que podemos seguir afim de evitar tal redundância é criarmos um arquivo específico para essas funções compartilhadas.
Em meus projetos, quando me deparo com funções desse tipo, eu as deixo separadas, dentro de uma pasta chamada **Utils**.

Dentro dessa pasta, crio minhas funções exportando-as, para que eu possa reutilizá-las livremente por todo meu software! E caso precise fazer alguma correção, faço em um lugar apenas!

Exemplo de função compartilhada:

```javascript
// utils/formValidator.js

/**
 * Return if the email
 * is a valid one
 * @param {String} email The user's email
 */
export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

/**
 * Returns if the lenght of the
 * fullname is more than 8 characters
 * @param {String} fullname The user's Fullname
 */
export const validateFullname = (fullname) => fullname.length >= 8;
```

Com isso, onde quer que eu precise utilizar essas funções, eu preciso apenas importá-las!
Muito mais simples e prático, não é?
