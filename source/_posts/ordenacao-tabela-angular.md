---
title: Como fazer ordenação em uma tabela com Angular
date: 2019-05-08 08:10:25
tags: 
- Front-end
- Angular
postKeywords: ordenacao tabela angular, ordenar campos angular, tabela ordenacao, otimizacao tabela angular, tabela css, tabela angular
postDescription: Hoje abordarei um item fundamental, que ajuda muito o usuário quando está fazendo uma consulta, a ordenação. A ordenação permite organizar a forma de exibição dos dados de uma determinada tabela, seja em ordem crescente, decrescente, etc.. Para isto, usaremos o ngx-order-pipe.
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Continuando a série de melhorias de UX no Angular 2 (ou superior), hoje abordarei um item fundamental, que ajuda muito o usuário quando está fazendo uma consulta, a **ordenação**. 
A ordenação permite organizar a forma de exibição dos dados de uma determinada tabela, seja em ordem crescente, decrescente, etc.

Para fazer nossa ordenação, usaremos o [ngx-order-pipe](https://www.npmjs.com/package/ngx-order-pipe), então em seu terminal, na pasta do seu projeto Angular, execute o comando: 

```javascript
npm install ngx-order-pipe --save
```

<!-- more -->

Assim como fizemos no post sobre [como fazer filtro na tabela do Angular](https://backefront.com.br/filtro-tabela-angular/) e [como criar paginação na tabela do Angular](https://backefront.com.br/criando-paginacao-tabela-angular/), devemos adicionar os módulos desta dependência dentro do nosso arquivo `app.module`, então nosso arquivo ficaria algo parecido com:

```javascript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';  // Módulo da dependência de paginação

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        OrderModule // Nosso módulo recém instalado
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Alteração na tabela

Feito isso, podemos agora utilizar as funcionalidades do módulo da ordenação!
Vamos precisar alterar nossas tags `tr` e `td`. Primeiramente, iremos adicionar o pipe **orderBy** no **tr**, da seguinte forma:

```html
<!-- ... Código da table ... -->
<tr *ngFor="let usuario of usuarios | orderBy: key : reverse; let i = index">
    <th>{{i}}</th>
    <th>{{usuario.nome}}</th>
    <th>{{usuario.endereco}}</th>
</tr>
```

Mas só isso ainda não funcionará, precisamos agora adicionar no nosso arquivo typescript do componente as opções de ordenação:

```javascript
export class AppComponent {
    // Código do seu componente
    
    // Configuração da ordenação
    key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
    reverse: boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}
```

Agora voltando ao nosso HTML, iremos adicionar a opção para o usuário clicar, então iremos adicionar uma nova configuração no **header** da nossa tabela, isto é, onde temos o título das colunas, como nome, endereço, etc.

```html
<!-- ... Código da table ... -->
<thead>
    <tr>
        <th>#</th>
        <th (click)="sort('nome')">Nome</th>
        <th (click)="sort('endereco')">Endereço</th>
    </tr>
</thead>
```

Feito isso, já está funcionando, mas falta um pequeno detalhe, como o usuário vai saber se está ordenado e de qual forma está? Precisamos adicionar indicadores na tabela para isso! 
Vamos adicionar com um simples caractere, mas você pode alterar para algum ícone de alguma biblioteca, fica a seu gosto!

```html
<thead>
    <tr>
        <th>#</th>
        <th (click)="sort('nome')">
            Nome
            <span *ngIf="key =='nome'">{reverse ? ▲ : ▼}</span>
        </th>
        <th (click)="sort('endereco')">
            Endereço
            <span *ngIf="key =='endereco'">{reverse ? ▲ : ▼}</span>
        </th>
    </tr>
</thead>
```

E para finalizar, vamos alterar o estilo do nosso ponteiro, para quando o usuário passar o mouse em cima da `th` aparecer a famosa mãozinha! :P

Para isto, só adicionar o seguinte CSS:

```CSS
    thead>tr>th {
        cursor: pointer;
    }
```

Com este post, terminamos a série de otimização na experiência de usuário em nossas tabelas!
Não deixe de conferir os outros posts sobre [como fazer filtro na tabela do Angular](https://backefront.com.br/filtro-tabela-angular/) e [como criar paginação na tabela do Angular](https://backefront.com.br/criando-paginacao-tabela-angular/)!