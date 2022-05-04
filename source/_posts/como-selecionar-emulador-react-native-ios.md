---
title: Como selecionar qual emulador irá abrir no Mac/iOS - React Native
date: 2021-08-19 07:35:46
tags:
  - Front-end
  - Javascript
  - React Native
postKeywords: select simulator react native, ios mac emulator, alterar emulador ios, emulador, react native, mac, ios reac native
postDescription: Quando estamos desenvolvendo aplicações no mac, as vezes queremos rodar em outras versões de iphone. Neste post vou mostrar os comandos para rodar de acordo com cada dispositivo!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Desenvolver aplicações mobile é um trabalho muito detalhista
Precisamos nos preocupar como vai ficar nas mais diversas resoluções e dispositivos
Pensando nisso, veja a lista abaixo de como selecionar um determinado dispositivo para rodar no emulador do mac!

<!-- more -->

```cmd
npx react-native run-ios --simulator="iPhone 8"
npx react-native run-ios --simulator="iPhone 8 Plus"
npx react-native run-ios --simulator="iPhone 11"
npx react-native run-ios --simulator="iPhone 11 Pro"
npx react-native run-ios --simulator="iPhone 11 Pro Max"
npx react-native run-ios --simulator="iPhone SE (2nd generation)"
npx react-native run-ios --simulator="iPhone 12 mini"
npx react-native run-ios --simulator="iPhone 12"
npx react-native run-ios --simulator="iPhone 12 Pro"
npx react-native run-ios --simulator="iPhone 12 Pro Max"
npx react-native run-ios --simulator="iPod touch (7th generation)"
npx react-native run-ios --simulator="iPad Pro (9.7-inch)"
npx react-native run-ios --simulator="iPad Pro (11-inch) (2nd generation)"
npx react-native run-ios --simulator="iPad Pro (12.9-inch) (4th generation)"
npx react-native run-ios --simulator="iPad (8th generation)"
npx react-native run-ios --simulator="iPad Air (4th generation)"
```

Caso queira listar os dispositivos disponíveis no seu Mac, basta rodar:

```cmd
xcrun simctl list devices
```

Simples né?
