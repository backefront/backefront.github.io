---
title: Como usar ícones no React
date: 2020-03-30 08:31:07
tags:
- Front-end
- React
postKeywords: icon react, import icon react, como adicionar icone react, icone react, react, icone, font awesome react, material design icon react, front-end
postDescription: Quem nunca precisou utilizar ícones em seu desenvolvimento que atire a primeira pedra! Ícones além de deixar nossa aplicação mais elegante (quando bem escolhido), nos permite cumprir no mínimo duas das dez heurísticas criadas por Nielsen. Nielsen fala que nosso sistema deve ter uma compatibilidade com o mundo real (Heurística número 2) e que Consistência e Padronização (Heurística número 4) é essencial para que não seja necessário que o usuário fique pensando muito quando abrir a tela do seu software.
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quem nunca precisou utilizar ícones em seu desenvolvimento que atire a primeira pedra!
Ícones além de deixar nossa aplicação mais elegante (quando bem escolhido), nos permite cumprir no mínimo duas das dez heurísticas criadas por Nielsen.

Nielsen fala que nosso sistema deve ter uma compatibilidade com o mundo real (Heurística número 2) e que Consistência e Padronização (Heurística número 4) é essencial para que não seja necessário que o usuário fique pensando muito quando abrir a tela do seu software.

Afinal, quem não entende que aquele símbolo de setinha para esquerda significa __voltar__ e a seta para direita de __ir para frente__?

Por isso, a utilização de ícones em nossa aplicação é de suma importância!
Vamos então ver como podemos adicionar as melhores bibliotecas de iconologia em nosso projeto?

<!-- more -->

Para isso, vamos utilizar uma lib chamada [react-icons](https://www.npmjs.com/package/react-icons)

**Yarn**
```cmd
yarn add react-icons
```

**NPM**
```cmd
npm install react-icons --save
```

Com o React-icons instalado, a sua utilização é muito simples! 
Precisamos apenas importar o ícone que queremos utilizar e de qual iconologia queremos!

Neste exemplo, vamos importar o ícone para salvar, do [Font Awesome](https://react-icons.netlify.com/#/icons/fa)

```javascript
import { FaSave } from 'react-icons/fa';
 
class Question extends React.Component {
    render() {
        return <button type="submit">Save <FaSave /><button>
    }
}
```

Além disso, o ícone aceita algumas propriedades por padrão! 
Onde podemos definir: `color`, `size`, `className`, `style` e `attr`

### Exemplo

```javascript
import { FaSave } from 'react-icons/fa';
 
class Question extends React.Component {
    render() {
        return (
          <button type="submit">
            Save
            <FaSave 
              size={16}
              color="#fff"
            />
          <button>
        )
    }
}
```

### Bibliotecas contidas no react-icons

Abaixo, podemos ver quais são as bibliotecas de ícones contidas em react-icons

| Icon Library     |
|------------------|
| Ant Design Icons |
| Bootstrap Icons  |
| Devicon          |
| Feather          |
| Font Awesome     |
| Game Icons       |
| Github Octicons  |
| Ionicons         |
| Material Design  |
| Remix Icon       |
| Typicons         |
| Weather Icons    |

### Documentação

Para ter acesso a documentação completa e consequentemente, o nome dos ícones, modo de importação correto, você deve acessar a (documentação oficial do react-icons)[https://react-icons.netlify.com/#/]
