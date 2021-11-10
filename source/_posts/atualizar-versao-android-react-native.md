---
title: Como atualizar nova versão do app Android - React Native
date: 2021-11-10 08:58:21
tags:
  - Front-end
  - React Native
  - Javascript
postKeywords: build android react native, versao errada apk, versao apk, atualizar versao android, react, native, android, versao, apk, gerar, novo, wrong, version, react native
postDescription: Você já tentou gerar uma nova versão do seu aplicativo no Android, com React Native e a versão não atualizava? Neste post, irei mostrar uma possível solução para seu problema! 
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Trabalhar com desenvolvimento mobile envolve algumas preocupações, como dispositivos que usarão, tamanhos, modelo, se é iOS ou Android
E durante nosso trabalho, frequentemente precisamos atualizar versões e subir novas para as lojas, com novas features e melhorias
Enquanto estava atualizando a versão para `Android` notei que algumas vezes não atualizava o código certo, parecia manter uma espécie de cache

Pesquisando, encontrei uma forma e um porque!

<!-- more -->

Isso acontece pois o nosso arquivo `index.android.bundle` está em uma versão antiga e precisamos atualizar ele.
Para isso, rodamos o seguinte comando em nosso terminal, na pasta raiz do projeto:

```cmd
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

e após o término:

```cmd
cd android && ./gradlew clean assembleDebug
```

Feito isso, pode gerar seu APP diretamente pelo Android Studio que é para pegar normalmente a nova versão!

Para facilitar, você pode criar um comando para realizar esse processo, dentro do seu `package.json`:

```javascript
  "scripts": {
    "android": "react-native run-android",
    "android-ios": "source ~/.bash_profile&&react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "bundle-android": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && cd android && ./gradlew assembleDebug && cd ..",
  },
```

