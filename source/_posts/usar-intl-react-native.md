---
title: Como usar INTL no React Native
date: 2021-04-22 08:00:28
tags:
  - Front-end
  - React Native
postKeywords: Cant find variable Intl, variable intl, intl react native, como usar intl, adicionar intl, react native, react, android
postDescription: Neste post, vou mostrar como corrigir o erro de variável não encontrada do Intl, para o react native!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Estava desenvolvendo um aplicativo com React Native e em determinado momento, precisava fazer a conversão de um valor para real (dinheiro, R$)
Como estou acostumado em desenvolver web, logo pensei no Intl, fazendo o seguinte:

<!-- more -->

```javascript
export const convertPriceForReal = (number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};
```

Quando fui testar no aplicativo, o que acontece? Tomo um erro que antes não tinha visto:

> Can't find variable Intl

Para resolver esse erro, basta fazer os passos (considerando que você está no React Native v0.60+):

No seu arquivo: `app/build.gradle`, alterar de `org.webkit:android-jsc:+` para:

```java
  def jscFlavor = 'org.webkit:android-jsc-intl:+'
```

E verifica, neste mesmo arquivo, se está implementado em suas dependências, como mostro abaixo:

```java
dependencies {
    ...
    if (enableHermes) {
        ...
    } else {
        implementation jscFlavor
    }
}
```

Com isso, é para funcionar tudo certinho! :)
