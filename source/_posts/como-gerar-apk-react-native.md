---
title: Como gerar APK com React Native
date: 2021-04-10 08:00:28
tags:
  - React
  - React Native
  - Front-end
postKeywords: react native, generate apk, gerar app react native, android react native, aplicativo, apk, react native, como gerar teste react native
postDescription: Neste post, irei mostrar como você pode gerar o apk do seu aplicativo com react native em 3 passos!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você está desenvolvendo em React Native e quer gerar um apk para instalar em seu celular.
Mas você não quer mandar esse app ainda para uma store para poder baixar.

Para gerar o apk, é muito simples com o react native, se liga só!

<!-- more -->

#### Pre-requisito:

react-native version > 0.57

#### Passo 1

Na raiz do seu projeto, rode o seguinte comando no seu terminal:

```cmd
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

#### Passo 2

Acesse a pasta Android:

```cmd
cd android
```

#### Passo 3

Agora dentro da sua pasta Android, execute o comando:

```cmd
./gradlew assembleDebug
```

E pronto! Seu apk será gerado no caminho:

`seuProjeto/android/app/build/outputs/apk/debug/app-debug.apk`
