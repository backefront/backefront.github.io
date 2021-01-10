---
title: Como fazer um filtro em uma tabela com Angular
date: 2018-11-05 07:00:40
tags:
  - Front-end
  - Angular
postKeywords: filtro tabela angular, filter table angular, como fazer filtro angular, filtrar tabela no angular, filtro no grid angular, filtro, tabela angular
postDescription: Aprenda como fazer um filtro em uma tabela com o Angular através do ng2-search-filter!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Começando uma série de melhorias que podemos fazer para trazer uma melhor experiência para o usuário, irei demonstrar como podemos fazer um filtro pelo Angular(2+) em uma tabela, de forma rápida e eficiente!
Este filtro percorrerá todas as colunas da tabela, procurando pelo valor que inserido dentro do input e retornar todos os resultados que correspondem! Desta forma, se tivermos os mesmos valores em colunas diferentes, aparecerá igualmente!

Iremos utilizar o componente [ng2-search-filter](https://www.npmjs.com/package/ng2-search-filter), esta dependência funciona perfeitamente com Angular 2, 4+.

<!-- more -->

## Configurando a nova dependência

Em seu terminal, dentro da pasta do seu projeto, execute o comando para instalar sua dependência:

```javascript
npm i ng2-search-filter --save
```

Agora, precisamos importar dentro do nosso arquivo `app.module.ts` o novo módulo! Abra este arquivo, adicione-o dentro de imports e faça o import dele no começo do arquivo, como abaixo:

```javascript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Ng2SearchPipeModule } from "ng2-search-filter"; // Importação

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SearchPipeModule, // Nosso módulo recém instalado
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Alteração na tabela

Feito isso, podemos agora utilizar as funcionalidades desse módulo de filtro!
Adicione um `input` que será onde o usuário digitará o texto a ser procurado e no `tr`, onde contém seu **ngFor**, adicione o pipe **filter** com o mesmo nome que você definiu no **ngModel** do seu input!

```html
<nav class="navbar">
  <input class="form-control" type="text" name="search" [(ngModel)]="filter" />
  <!-- Input que deve ser adicionado -->
</nav>

<!-- ... Código da table ... -->
<tr *ngFor="let usuario of usuarios | filter:filter; let i = index">
  <td>{{i}}</td>
  <td>{{usuario.nome}}</td>
  <td>{{usuario.endereco}}</td>
</tr>
```

Agora você possui uma tabela com filtro em todas as colunas, de forma rápida!

Não deixe de conferir os outros posts sobre [como fazer ordenação na tabela do Angular](https://backefront.com.br/ordenacao-tabela-angular/) e [como criar paginação na tabela do Angular](https://backefront.com.br/criando-paginacao-tabela-angular/)!
