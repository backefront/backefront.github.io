---
title: Como fazer between com Sequelize 
date: 2020-07-27 08:17:50
tags:
- Front-end
- Javascript
- Sequelize
postKeywords: Sequelize between, sequelize op, como fazer between sequelize, nodejs sequelize, javascript, front-end
postDescription: Neste post, irei mostrar o quão simples é realizar uma consulta usando o between entre duas datas com o Sequelize!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O uso de operadores do Sequelize são comuns em nosso desenvolvimento, principalmente quando precisamos fazer algum tipo de relação entre tabelas, consultas mais avançadas.

Um desses operadores que frequentemente utilizamos é o `between`.

Você já precisou utilizar ele em seu desenvolvimento?

<!-- more -->

Sua utilização é muito simples!
Conforme a própria documentação nos orienta, devemos fazer isso através da importação de `Op`, do próprio Sequelize.

No exemplo abaixo, buscaremos registros da coluna start entre duas datas e que o status seja igual a **AGENDADO**, sendo elas:

1- O primeiro dia do mês de Julho;
2- O último dia do mês de Julho
 
```js
import Appointment from '../models/Appointment';

// -- Caso esteja utilizando a síntaxe antiga.
// const { Op } = require("sequelize");
import { Op } from 'sequelize';

  const appointments = await Appointment.findAll({
    where: {
      status: 'AGENDADO',
      start: {
        [Op.between]: [
          new Date('Jul 01 2020'),
          new Date('Jul 31 2020'),
        ],
      },
    },
  });
```

Dessa forma, retornaremos todos os registros que corresponderem a essa busca!
Bem simples, não é?

E você, usa também o Sequelize em seus projetos?