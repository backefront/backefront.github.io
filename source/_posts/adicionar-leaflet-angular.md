---
title: Como adicionar mapa Leaflet no Angular
date: 2020-10-19 08:58:21
tags:
- Front-end
- Angular
postKeywords: leaflet angular, mapa angular, how to add angular map, adicionar leaflet mapa angular, angular, front-end, leaflet
postDescription: Neste post, irei ensinar uma maneira fácil de como adicionar o Leaflet em um projeto Angular, sem muitas voltas e sem dor de cabeça!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95:
---

Adicionar um mapa em nossas aplicações é uma atividade não tão comum, mas algo muito fácil de ser feito.
Temos algumas opções open-source que podemos usar quando precisamos fazer algo do tipo, como por exemplo:

- Leafletjs
- Openlayers
- Mapbox
- Datamaps
- Bing Maps
- Kartograph
  Entre outros!

Neste post, irei ensinar uma maneira fácil de como adicionar o Leaflet em um projeto Angular!

<!-- more -->

A primeira coisa que devemos fazer é adicionar ao projeto o Leaflet:

```sh
npm i leaflet
```

Feito isso, devemos fazer algumas alterações no `angular.json`, adicionando o CSS e o JS do Leaflet

```json
// Outros trechos do Angular.json
"styles": [
  "./node_modules/leaflet/dist/leaflet.css", // nosso CSS
  "src/styles.scss"
],
"scripts": [
  "./node_modules/leaflet/dist/leaflet.js", // nosso Leaflet
]
```

Agora que importamos as dependências, podemos utilizá-las em nosso componente!

```js
import { Component, OnInit, ViewChild } from '@angular/core';
declare let L; // Declaramos essa variável

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.scss'],
    providers: [AngularFireDatabase, AngularFireAuth],
})
export class MapaComponent implements OnInit {

  public map: any;

  constructor() {}

  ngOnInit() {
    // Esse 'map' é o ID que
    // colocaremos no HTML
    this.map = L.map('map', {
      scrollWheelZoom: false,
    }).setView([-23.175477, -45.878163], 15);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
```

Agora vamos ver como fica nosso HTML:

```html
<section class="content">
  <header class="content__title">
    <h1>Mapa</h1>
  </header>
  <div id="map"></div>
</section>
```

Com isso, nosso mapa já está funcionando!
Simples né?
