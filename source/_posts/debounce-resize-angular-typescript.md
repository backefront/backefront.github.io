---
title: Como fazer debounce com Angular
date: 2021-02-23 07:25:54
tags:
  - Front-end
  - Angular
  - Javascript
postKeywords: debounce js, debounce typescript, angular debounce, watch resize page, escutar alteracao tamanho pagina, debounce angular size page
postDescription: Neste post, irei mostrar como podemos fazer debounce com Angular para ficar escutando alterações no tamanho da página!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Recentemente em um projeto específico tive a necessidade de adicionar um listener para que ficasse escutando o redimensionamento da tela, e quando tal ocorresse, devia redimensionar o tamanho do gráfico, para que sempre ficasse na melhor proporção, sem quebrar nenhum dado.

Entretanto, eu não poderia ficar disparando uma função de redimensionamento toda vez que esse evento ocorresse pois se o usuário ficasse redimensionando, poderia trazer problemas performáticos para a aplicação.

Uma solução encontrada foi realizar uma espécie de [debounce, que já vimos como fazer com Javascript puro](https://backefront.com.br/executar-funcao-apos-terminar-digitar-javascript/). Mas e com Angular, você sabe como fazer isso?

<!-- more -->

Fazer esta tarefa com o Angular me rendeu algum tempo pesquisando.
Algumas soluções encontradas na internet não faziam mais sentido nas versões mais novas.
Outras eram muito específicas em soluções voltadas para digitação.

Então como resolver, um redimensionamento de tela, com Angular?
O código abaixo mostra a solução feita, explicada linha a linha de como foi resolvido este problema:

```typescript
// Os imports necessários
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { fromEvent, Observable, Subscription, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit, OnDestroy {
  // variáveis que devemos criar
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  // Ao inicializar o componente
  // inicializará o método de resize
  ngOnInit(): void {
    this.resizeChart();
  }

  // Não podemos esquecer de remover
  // o subscribe quando sairmos do componente
  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe();
  }

  // Método que ficará escutando alterações
  resizeChart(): void {
    // Observable que escuta alteração de tela
    this.resizeObservable$ = fromEvent(window, "resize");

    // Aqui acontence o debounce realmente
    this.resizeSubscription$ = this.resizeObservable$
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.loadChart();
      });
  }
}
```
