---
title: Como usar o behavior subject no Angular
date: 2020-11-09 09:06:37
tags:
  - Angular
  - Front-end
postKeywords: behavior subject, singleton angular, angular redux, como usar behavior, como compartilhar dado angular, angular service, angular tips, dicas angular, front-end, angular, javascript
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O Angular, ao contrário do React, por exemplo, não possui um padrão definido de gerenciamento de estado.
O Rxjs possui _observers_ (que são a nossa interface para consumir dados) e _observables_ (nossa interface para submeter dados).
Então, hoje vamos ver como podemos utilizar o BehaviorSubject, um Subject que permite emitir o valor atual!

<!-- more -->

A primeira coisa que devemos fazer então é criar o nosso Service:

```javascript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface IUser {
  name: string;
  lastName: string;
  age: number;
}

@Injectable()
export class UserService {

  private userData = new BehaviorSubject<IUser>(undefined);

  constructor() { }

  setUser(user: IUser): void {
    this.userData.next(user);
  }

  getUser(): Observable<IUser> {
    return this.userData.asObservable();
  }
}
```

Dessa forma agora temos o nosso getter/setter de usuário, em um ponto centralizado!
Agora como podemos utilizar esse serviço?

Chamamos o service para isso:

```javascript
//injetamos o service
...

UserService.getUser.subscribe(user => {
  // Recebemos as informações
  // do usuário dentro do subscribe
})
...
// Atualizamos as informações
// do usuário
UserService.setUser(newUser);
```

Bem tranquilo de usar, não é mesmo?
