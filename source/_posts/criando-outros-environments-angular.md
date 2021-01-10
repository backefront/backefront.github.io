---
title: Como criar environments no Angular
date: 2018-10-08 07:57:41
tags:
  - Front-end
  - Angular
postKeywords: Diferentes environments angular, criar ambiente de dev e teste angular, ambiente teste angular, environments angular, angular 6 novo environment, angular 6 ambiente dev, ambiente teste angular 6
postDescription: Neste post, iremos abordar com você consegue criar diferentes environments no Angular 6!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou testar sua aplicação em ambientes diferentes, com bases diferentes mas com o mesmo front, no Angular? Você poderia alterar a URL base para que sua aplicação conecte-se em outras bases, mas isso seria viável? Com isso, você poderia esquecer de voltar a variável e acabaria commitando ou cansaria de trocar a todo momento. Pensando nisso, porque não criar _environments_ diferentes no Angular, um para cada tipo de base ou ambiente?

## Criando um novo ambiente

Primeiramente, é necessário alterar seu arquivo **angular.json**, que fica dentro da raiz do seu projeto, adicionando algumas configurações do novo environment que você está configurando.
Dentro do seu JSON, procure por **configurations** e em cima de **production**:

<!-- more -->

![Onde adicionar o JSON do Environment - 2018](/posts/environments-diferentes-onde-add.png)

Adicione um novo objeto, que é do nosso ambiente de **DEV**:

```javascript
"dev": {
  "fileReplacements": [
	{
	  "replace": "src/environments/environment.prod.ts",
	  "with": "src/environments/environment.ts"
	}
  ],
  "optimization": false,
  "outputHashing": "all",
  "sourceMap": false,
  "extractCss": true,
  "namedChunks": false,
  "aot": false,
  "extractLicenses": true,
  "vendorChunk": false,
  "buildOptimizer": false,
  "serviceWorker": true
},
```

Todas estas opções definidas como `true` ou `false`, são configurações de build do Angular, onde permite que seus arquivos sejam minificados, otimizados, etc. [Neste link](https://github.com/angular/angular-cli/wiki/stories-application-environments), há uma explicação mais detalhada sobre as opções de configurações de ambientes.

Feito isso, modifique a seção onde está o _serve_, adicionando uma nova configuração, apontando esse dev criado como um novo build:

```javascript
"serve":
  "configurations": {
	"dev": {
	  "browserTarget": "projectName:build:dev"
	}
	// ... restante do código
```

Agora que está tudo certo, você está apto a rodar o comando para inicializar o server com o ambiente desejado! Para isto, basta rodar o comando: **ng s -c dev** ou **ng s --configuration=dev**
