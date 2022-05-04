---
title: Angular - Como acessar variável do componente filho no componente pai
date: 2020-06-29 08:00:28
tags:
  - Front-end
  - Angular
postKeywords: variavel pai filho angular, angular compartilhar variavel, compartilhar angular, shared variable angular, output angular, eventemitter angular, front-end
postDescription: Compartilhar variáveis entre componentes é uma atividade que frequentemente realizamos, principalmente quando desenvolvemos componentes com o intuito de serem reaproveitados por toda a aplicação. Compartilhar as variáveis do filho para o pai talvez não seja a coisa mais rápida de ser feita, mas é bem simples também!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Compartilhar variáveis entre componentes é uma atividade que frequentemente realizamos, principalmente quando desenvolvemos componentes com o intuito de serem reaproveitados por toda a aplicação.

Em uma primeira publicação, mostrei [como podemos fazer o compartilhamento de variáveis do componente **pai** para o componente **filho**](https://backefront.com.br/compartilhando-variaveis-angular/).

Mas e em um cenário ao contrário? Seria possível?
A resposta é SIM!

<!-- more -->

Compartilhar as variáveis do filho para o pai talvez não seja a coisa mais rápida de ser feita, mas é bem simples também!
Para isso, no Angular, vamos usar o `@Output()` e o `EventEmitter()` no componente filho!

> Atenção para quando for importar o EventEmitter para não importar essa mesma função do Protractor, iremos usar a do core do Angular
Então em nosso componente filho teremos algo assim:

```javascript
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-voto-card",
  template: ` <button type="button" (click)="counter()">Votar</button> `,
  styleUrls: ["./voto-card.component.scss"],
})
export class VotoCardComponent implements OnInit {
  @Output() counterEmitter = new EventEmitter();
  counter: number;
  constructor() {
    this.counter = 0;
  }
  ngOnInit() {}
  counter(): void {
    this.counterEmitter.emit(this.counter);
    this.counter += 1;
  }
}
```

Perfeito, com isso estaremos **emitindo** a variável `counter` para que outros componentes possam "ouvi-la".
Agora vamos ao pai, receber esse valor:

```javascript
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-parent",
  template: `
    <app-voto-card
      *ngFor="let user of usersOptions"
      [user]="user"
      class="col-12 col-md-4"
      (counterEmitter)="onCounter($event)"
    ></app-voto-card>
  `,
  styleUrls: ["./parent.component.scss"],
})
export class ParentComponent implements OnInit {
  amountCounter: number;
  constructor() {
    this.amountCounter = 0;
  }
  ngOnInit() {}

  onCounter(counter: number): void {
    this.amountCounter += counter;
  }
}
```

Note que no HTML do componente pai declaramos `(counter)`, que é exatamente a função que criamos no filho e em seguida passamos qual função do componente pai irá receber os valores enviados.

Este é um exemplo bem simples, mas com ele você pode criar o que for preciso!
