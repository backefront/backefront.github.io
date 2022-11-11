---
title: Como reutilizar CSS com Styled Components
date: 2022-11-11 07:16:00
tags:
  - Front-end
  - Javascript
postKeywords: reutilizar css styled components, css comum, como reutilizar css, styled components
postDescription: Você sabia que podemos criar CSS comuns com Styled Components para reutilizar em nossa aplicação?
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Seguindo o conceito de [DRY](https://backefront.com.br/o-que-e-conceito-dry/), devemos evitar reescrever códigos repetidos
E o mesmo se aplica em CSS! Pensando em um cenário onde podemos ter um CSS que se aplica em vários lugares e precisamos alterar, teríamos que alterar em todos os lugares que fizemos a chamada.

E é por isso que é sempre bom termos esse tipo de código em um só lugar!

Mas você sabia que é possível criar regras CSS comuns com o Styled-components?

<!-- more -->

Para criar um estilo comum com Styled é muito simples:

Primeiro criamos nosso arquivo comum:

```javascript
import { css } from 'styled-components';

const CommonStyles = css`
  background-color: #c9c9c9;
  color: #000;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export default CommonStyles;
```

Agora que temos nosso CSS criado, basta usarmos em qualquer styled nosso:

```javascript
import styled from 'styled-components';
import CommonStyles from '../../../styles/CommonStyles'; // importamos ele

export const Container = styled.section`
  ${CommonStyles}; 
  height: 100vh;
  display: flex;
  ...
`;

```

Muito simples e fácil criar um arquivo reutilizável de CSS, não é?