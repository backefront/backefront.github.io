---
title: Validação personalizada no Angular 8
date: 2020-10-28 09:42:13
tags:
  - Front-end
  - Angular
postKeywords: custom validation angular, angular validacao, react form validation, como customizar validacao angular, angular, validacao, campos valido
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou fazer validações em formulários com Angular, correto?
Por padrão, quando vamos construir um form reativo, podemos passar algumas validações que o Angular já possui, como por exemplo, verificar se ele é obrigatório, se está preenchido, etc.

Mas você já precisou fazer uma verificação personalizada? Como por exemplo, verificar se a data inserida é válida?
Veja como é fácil fazer isso!

<!-- more -->

Primeiro, vamos criar um novo FormGroup e vamos criar o campo birthdate, sendo como obrigatório:

```javascript
this.formData = new FormGroup({
  birthdate: new FormControl("", [Validators.required]),
});
```

Agora queremos fazer a nossa validação customizada, para isso, vamos criar um método chamado validateDate:

```javascript
isValidDate(c: FormControl): ValidationErrors {
  let result: ValidationErrors = null;
  const isValid = moment(c.value, 'DD/MM/YYYY').isValid();
  if (!isValid) {
      result = { invalidDate: 'Invalid date' };
  }
  return result;
}
```

Esse método recebe como parâmetro nosso campo, que no caso é a data.
Com a ajuda do `moment`, verificamos se o valor informado está no formato correto e se é válido.
Caso não seja, retorna um objeto contendo erro, do contrário, retornará `null`.

Agora vamos adicionar essa validação no nosso FormControl:

```javascript
this.formData = new FormGroup({
  birthdate: new FormControl("", [
    Validators.required,
    this.isValidDate, // inserimos nosso novo método
  ]),
});
```

E agora, basta usarmos do jeito que quisermos no HTML, como por exemplo:

```html
<div class="form-group">
  <label>Data Nascimento</label>
  <input
    type="text"
    formControlName="birthdate"
    class="form-control"
    [ngClass]="{ 'is-invalid': controls.birthdate.touched && controls.birthdate.errors }"
  />
  <div *ngIf="submitted && f.birthdate.errors" class="invalid-feedback">
    <div *ngIf="f.birthdate.errors.required">
      Data de nascimento é obrigatória
    </div>
    <div *ngIf="f.birthdate.errors.isValidDate">Data inválida!</div>
  </div>
</div>
```
