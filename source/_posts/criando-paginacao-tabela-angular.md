---
title: Como criar uma paginação na tabela com Angular
date: 2019-03-04 07:30:50
tags: 
- Front-end
- Angular
postKeywords: paginação angular 7, paginacao angular, pagination angular table, table pagination, tabela paginacao, angular tabela paginacao, paginacao, angular, tabela, ngx-pagination
postDescription: Hoje irei falar sobre um item muito importante quando construimos uma tabela de registros, a paginação! A paginação permite que as informações sejam quebradas entre páginas, com o intuíto de evitar uma enorme quantidade de dados e ter uma página enorme, cheia de registros. Para isto, usaremos o ngx-pagination.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Continuando a série de melhorias de UX no Angular 2 (ou superior), hoje irei falar sobre um item muito importante quando construimos uma tabela de registros, a **paginação**! 
A paginação permite que as informações sejam quebradas entre páginas, com o intuíto de evitar uma enorme quantidade de dados e ter uma página enorme, cheia de registros.

Para fazer nossa paginação, usaremos o [ngx-pagination](https://github.com/michaelbromley/ngx-pagination), então em seu terminal, na pasta do seu projeto Angular, execute o comando: 

```javascript
npm install ngx-pagination --save
```

<!-- more -->

Assim como fizemos no post sobre [como fazer filtro na tabela do Angular](https://backefront.com.br/filtro-tabela-angular/), devemos adicionar os módulos desta dependência dentro do nosso arquivo `app.module`, então nosso arquivo ficaria algo parecido com:

```javascript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination'; // Módulo da dependência de paginação

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxPaginationModule // Nosso módulo recém instalado
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

```

Este `ngx` nos fornece um pipe no qual podemos utilizar no nosso código `table` e também nos fornece o componente `pagination-controls`, que nada mais é que um componente onde irá conter os números das páginas e os controles de página (Próxima/Anterior).

Adicione em sua tabela o pipe `paginate` e adicione no final o seu controlador de páginas, da seguinte maneira: 

```html
<!-- Começo do código da tabela -->
<tbody>
    <tr *ngFor="let usuario of usuarios | paginate: { itemsPerPage: 5, currentPage: paginaAtual }; let i = index">
        <td>{{i}}</td>
        <td>{{usuario.nome}}</td>
        <td>{{usuario.endereco}}</td>
    </tr>
</tbody>
<pagination-controls (pageChange)="paginaAtual = $event"></pagination-controls>
<!-- Restante do código -->
```

E agora dentro do nosso arquivo `app.component.ts` (ou o arquivo .component no qual você está trabalhando), devemos inicializar a variável `paginaAtual`:

```javascript
export class AppComponent {

    public paginaAtual = 1; // Dizemos que queremos que o componente quando carregar, inicialize na página 1.
}
```

Agora temos um componente de paginação totalmente funcional! Mas será que faz sentido deixar os nossos navegadores de páginas em inglês? Talvez até faça, mas o **ngx-pagination** possui uma enorme quantidade de parâmetros opcionais no qual podemos passar! Para alterar o label de "Previous/Next", podemos fazer da seguinte forma:

```html
<!-- Começo do código da tabela -->
<tbody>
    <tr *ngFor="let usuario of usuarios | paginate: { itemsPerPage: 5, currentPage: paginaAtual }; let i = index">
        <td>{{i}}</td>
        <td>{{usuario.nome}}</td>
        <td>{{usuario.endereco}}</td>
    </tr>
</tbody>
<pagination-controls (pageChange)="paginaAtual = $event" previousLabel="Anterior" nextLabel="Próximo"></pagination-controls>
<!-- Restante do código -->
```

Existem outros parâmetros no qual você pode adicionar em sua paginação, no [Github do componente](https://github.com/michaelbromley/ngx-pagination) você consegue ver quais outras opções podem ser passadas!

Não deixe de conferir os outros posts sobre [como fazer ordenação na tabela do Angular](https://backefront.com.br/ordenacao-tabela-angular/) e [como fazer filtro na tabela do Angular](https://backefront.com.br/filtro-tabela-angular/)!