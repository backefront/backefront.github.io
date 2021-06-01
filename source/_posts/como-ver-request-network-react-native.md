---
title: Como ver requisições network - React Native
date: 2019-01-24 07:35:46
tags: 
- Front-end
- Javascript
- React Native
postKeywords: react native, debugger react native, network inspect, request react native, requisicao react, native, react, mobile, axios react native
postDescription: O debugger do próprio React Native não apresenta as requisições que são feitas pela aplicação, pensando nisso, neste post, irei te apresentar o React Native Debugger
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O React Native Debugger veio da necessidade de trazer tudo aquilo que já estamos acostumados em nosso desenvolvimento web dentro do React Native!
Neste post, vou mostrar como você pode habilitar, facilmente, o inspecionar requisições em seu debugger!
<!-- more -->

Seguindo a resposta do [Kashish Grover](https://stackoverflow.com/users/5449850/kashish-grover), [neste link](https://stackoverflow.com/questions/33997443/how-can-i-view-network-requests-for-debugging-in-react-native)

A primeira coisa que devemos é baixar o React Native Debugger: 

[Download React Debugger](https://github.com/jhen0409/react-native-debugger)

Feito isso, basta seguir os passos: 

1 - Abra o Debugger
2 - Feche o chrome (debugger padrão, caso esteja aberto)
3 - Botão direito do mouse e selecione "Enable Network Inspect"

![Enable Network Inspect](https://i.stack.imgur.com/eVT7L.png)

![Enable Network Inspect](https://i.stack.imgur.com/QQbJ8.png)

E pronto, você estará recebendo em seu debugger todas as requisições!

