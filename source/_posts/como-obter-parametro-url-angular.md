---
title: Obtendo parâmetros da URL com Angular
date: 2019-07-15 07:15:39
tags:
- Front-end
- Angular
postKeywords: parameter url angular, parametro url angular, como pegar atributo url angular, angular url variavel, get variable url
postDescription: Neste post, explicarei como acessar um parâmetro passado pela URL com o Angular, tornando seu desenvolvimento mais ágil e inteligente!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em nosso desenvolvimento web, é comum precisarmos passar parâmetros de uma página para outra.
Uma das formas de fazermos isso, é passando diretamente pela URL algum ID
Com o Angular, conseguimos fazer isso de uma maneira muito simples!

Primeiramente, precisaremos editar nosso arquivo de rotas:

<!-- more -->
Vamos supor que estamos criando uma aplicação de listagem de alunos
O sistema basicamente vai ser composto por duas telas
A tela com todos os Alunos, chamada `AlunosComponent`
E a tela onde teremos toda as informações sobre um aluno em específico, `PerfilAlunoComponent`

```javascript
const routes: Routes = [
  { path: '', component: AlunosComponent },
  { path: 'aluno/:id', component: PerfilAlunoComponent}
];
```

Quando colocamos esse `:id` em nosso path, dizemos que o próximo valor após a barra será um valor variável
E que essa nossa variável será chamada **id**. 
É muito importante que entenda que da mesma forma que você definir o nome aqui,
Será usado para acessar essa informação mais tarde!

Agora, vamos em nosso arquivo `PerfilAlunoComponent`
Onde queremos obter esse ID para trazer as informações sobre esse aluno.

Para obter esse valor pela URL, usaremos o `ActivatedRoute`.
Para isso, no **constructor**, adicione as seguintes linhas:

```javascript
    public userId;
    
    constructor( private route: ActivatedRoute ) {
        this.route.params.subscribe(params => this.userId = params['id']);
    }
```

Com isso adicionado, conseguimos obter todos os parâmetros da URL
Buscando pela variável que configuramos anteriormente no arquivo de rotas.

E pronto! Temos em mãos o ID que queríamos, simples não é?
