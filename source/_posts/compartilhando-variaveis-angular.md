---
title: Como compartilhar variáveis no Angular
date: 2019-02-04 07:30:59
tags:
- Angular
- Front-end
postKeywords: shared variables angular, variaveis compartilhadas Angular, como passar variaveis no angular, compartilhar variaveis no angular, reutilizar variaveis angular, reutilizacao angular
postDescription: No desenvolvimento diário de componentes reutilizáveis no Angular, nos deparamos com situações em que desejamos compartilhar variáveis, que estão no "componente pai" e queremos que de alguma forma, seja feita essa conexão entre os componentes. 
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

No desenvolvimento diário de componentes reutilizáveis no Angular, nos deparamos com situações em que desejamos compartilhar variáveis, que estão no "componente pai" e queremos que de alguma forma, seja feita essa conexão entre os componentes. 

O compartilhamento de variáveis, com o Angular, é muito mais fácil do que parece! 

<!-- more -->

### Configurando nossos componentes

Vamos considerar o cenário onde temos o componente pai `MainComponent`, onde realizamos o GET de usuários e desejamos enviar para o componente `UsersComponent`, o resultado do GET de usuários realizado no pai.

Para isto, primeiramente no HTML do **MainComponent** devemos passar como "parâmetro" esta variável, da seguinte forma:

```html
<app-users [users]="users"></app-users>
```

Note que o que estamos passando dentro das aspas, deve ser o mesmo nome de variável que temos em nosso arquivo Typescript!

Feito isso, devemos apenas criar `users` dentro de nosso `UsersComponent`, mas com uma pequena diferença:

```javascript
// users.component.ts

import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
})

export class TeamModalComponent {
    // Com este @Input(), dizemos que
    // esta variável está associada ao
    // componente pai, MainComponent
    @Input() users;
}
```

Com isto feito, você terá acesso à variável que foi criada no componente pai e poderá manipulá-la normalmente dentro do seu componente filho!