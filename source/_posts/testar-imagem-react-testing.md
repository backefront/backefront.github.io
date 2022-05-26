---
title: Como fazer teste para verificar imagem - React Testing
date: 2022-05-26 08:26:06
tags:
  - Javascript
  - Front-end
  - Testes
postKeywords: teste imagem react testing, teste, react, react testing, como testar imagem presente
postDescription: Fazer um simples teste para verificar se a imagem foi renderizada ou não, no React Testing Library, é uma atividade bem simples, mas podemos acabar nos enrolando com coisa boba. Veja como é fácil criar esse teste!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Fazer um simples teste para verificar se a imagem foi renderizada ou não, no React Testing Library, é uma atividade bem simples, mas podemos acabar nos enrolando com coisa boba.

Então sem enrolação, um exemplo de teste básico:

<!-- more -->

Componente React de imagem 
```javascript
const Logo = ({ src }) => {

  if(!src) {
    return null
  }
  
  return (
    <img src={src} alt="Logo" className="img-logo" />
  );
};

export default Logo;
```

Agora vamos testar:

#### Caso 1 - Deve renderizar
```
import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Logo', () => {
  it('should render <Cucarda>', async () => {

    const { container } = render(<Cucarda src='img.png' />);
    const cucardaImg = container.querySelector('.img-logo');
    expect(cucardaImg).not.toBeNull();
  });
});
```

#### Caso 2 - Não deve renderizar
```
import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Logo', () => {
  it('should render <Cucarda>', async () => {

    const { container } = render(<Cucarda src='' />);
    const cucardaImg = container.querySelector('.img-logo');
    expect(cucardaImg).toBeNull();
  });
});
```

Agora é só rodar no terminal o seu comando de teste e comemorar!
