---
title: Botão disponível apenas quando todos campos do form estiverem preenchidos - Angular
date: 2019-05-09 08:07:15
tags: 
- Front-end
- Angular
postKeywords: botao desabilitado formulario angular, botao habilitado form valido, form angular, disabled form
postDescription: Veja como é fácil e rápido de deixar o botão desabilitado caso seu formulário esteja com algum campo inválido ou vazio, com o Angular, que nos permite fazer isto nativamente e sem várias linhas de código!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você está desenvolvendo uma aplicação web com o Angular (2+) e em determinado momento, está construindo um formulário onde o usuário deve preencher **todos** os campos. Até aí, tudo bem fácil e tranquilo certo? Mas seu cliente solicitou que o botão para **enviar** as informações só pode estar habilitado quando os campos estarem preenchidos! E agora? Com Javascript já é bem sossegado de fazer isso e com o Angular, não seria diferente, é ainda mais fácil! Vamos ver?

<!-- more -->

Temos então o seguinte form:

```html
    <form #f="ngForm" autocomplete="off" (ngSubmit)="onSubmit(f)">

        <div class="form-group">
            <label>Nome Status</label>
            <input  
                autocomplete="false" 
                type="text"
                class="form-control" 
                placeholder="Nome do Status" 
                [(ngModel)]="status.nome" 
                name="nome"
            >
        </div>
        
        <button type="submit" class="btn btn-success">Salvar</button>

    </form>
```

Um `form` básico, de um campo só. Para deixar o botão desabilitado, nós temos uma propriedade do HTML chamada **disabled**, com ela podemos deixar um botão, input, desabilitados. Porém, desejamos **apenas** quando o formulário estiver preenchido de **forma errada** certo? 
Afinal, se o usuário não digitar um valor, que é esperado, podemos dizer que aquele formulário, de certa forma, está preenchido incorretamente. Mas como indicamos qual campo do formulário é necessário? Com a propriedade **required**! 
Vamos então fazer essas alterações?

### Adicionando as novas propriedades no formulário


```html
    <form #f="ngForm" autocomplete="off" (ngSubmit)="onSubmit(f)">

        <div class="form-group">
            <label>Nome Status</label>
            <input  
                autocomplete="false" 
                type="text"
                class="form-control" 
                placeholder="Nome do Status" 
                [(ngModel)]="status.nome" 
                name="nome"
                required 
            >
            <!-- adicionando a propriedade required no input -->
        </div>
        
        <!-- Adicionamos a propriedade disabled no button -->
        <button type="submit" class="btn btn-success" disabled>Salvar</button>

    </form>
```

Pronto! Mas peraí, agora o botão está desabilitado sempre! Não era isso que foi pedido! 
Agora é que o Angular entra em ação! Vamos alterar novamente, agora passando o **estado** do formulário, se ele está válido ou não, da seguinte forma:

```html
    <form #f="ngForm" autocomplete="off" (ngSubmit)="onSubmit(f)">

        <div class="form-group">
            <label>Nome Status</label>
            <input  
                autocomplete="false" 
                type="text"
                class="form-control" 
                placeholder="Nome do Status" 
                [(ngModel)]="status.nome" 
                name="nome"
                required 
            >
        </div>
        
        <!-- Adicionamos a verificação do formulário -->
        <button type="submit" class="btn btn-success" [disabled]="!f.valid" >Salvar</button>

    </form>
```

Legal! Mas de onde saiu esse `f.valid`? 
O `f` é o nome que demos ao nosso formulário, como pode ser visto na tag **form** declaramos `#f="ngForm"` indicando que aquele nosso formulário será "apelidado" de `f`. E por ser um formulário, o Angular nos fornece essa opção para verificar se ele está válido ou não, de forma nativa dele! Simples não é?
