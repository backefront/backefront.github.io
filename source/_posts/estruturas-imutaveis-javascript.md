---
title: Estruturas imutáveis no Javascript
date: 2020-03-03 13:22:15
tags:
postKeywords: imutabilidade js, javascript, front-end, tipos imutaveis javascript
author: Igor Venturelli
authorImg: igor.png
authorDesc: Desenvolvedor back-end, admirador de Java, Python, Go e DevOps!
authorLinkedin: igorventurelli
authorGithub: igorventurelli
authorStackoverflow: 5963/igor-venturelli
---

Ao falar sobre imutabilidade o pensamento que nos vem a cabeça é: _simples, é só fazer cópia das variáveis ao invés de manipular a mesma_.  
De fato, a cópia ao invés do reúso dos objetos é um dos pilares da imutabilidade. Mas ao trabalharmos dessa forma, resolveremos o problema de mutação, mas criaremos outro: consumo de memória e processamento excessivos.

Considerando o primeiro cenário (cópia), é possível trabalhar da seguinte maneira:

```javascript
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const arr2 = [...arr]
arr2[0] = 'x'
// arr2 => ['x', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
```

Ao fazer isso, internamente são criados dois arrays completamente diferentes, porém com alguns valores em comum.  
Não seria mais interessante se fosse possível fazer o que aparentemente fazemos com esse código: criar o `arr2` "baseado" em `arr`, dessa forma otimizando memória?

Com certeza.  

Uma forma "simples" de fazer isso é dividindo o nosso array em pequenos arrays e dessa forma, juntar as partes necessárias.

```javascript
const ab = ['a', 'b']
const cd = ['c', 'd']
const ef = ['e', 'f']
const gh = ['g', 'h']

const arr2 = ['x', 'b', ...cd, ...ef, ...gh]
// arr2 => ['x', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
```

_Voilà_: temos agora o `arr2` construído sem precisarmos sobrecarregar a memória.

A solução funciona, mas dá um baita trabalho, não?

Por sorte, alguém já parou para pensar em uma solução para situações como essas (e com manipulação de objetos também!)

Em JavaScript existe uma lib chamada [Mori](https://swannodette.github.io/mori) que nos ajuda exatamente com isso.  
Ela faz diversas operações em arrays e objetos, mantendo a imutabilidade sem forçar memória ou processamento.  
Vamos ver o mesmo código que os anteriores, mas utilizando o mori:

```javascript
const mori = require('mori')

const arr = mori.vector('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')
const arr2 = mori.assoc(arr, 0, 'x')
// arr2 => ['x' 'b' 'c' 'd' 'e' 'f' 'g' 'h']
```


Legal, né?  
Mas.. qual é a mágica por trás dessa lib?
Bom, a solução é bem complexa, mas de uma maneira bem simplista, podemos pensar no acesso a cada posição do array através de árvore, organizada pelos hashs dos elementos. 

Um ponto interessante é que se repararmos bem, `arr2` não é mais um "array" normal do JS.  
Note que não tem vírgulas entre os elementos (não, não foi falha de digitação :p).  
Isso ocorre pois o Mori não trabalha com os arrays em sua forma "natural". Na verdade, é bem diferente. Se fizermos um `console.log(arr2)` teremos:

```javascript
W {
  k: null,
  g: 8,
  shift: 5,
  root: ef {
    u: null,
    e: [
      null, null, null, null, null,
      null, null, null, null, null,
      null, null, null, null, null,
      null, null, null, null, null,
      null, null, null, null, null,
      null, null, null, null, null,
      null, null
    ]
  },
  W: [
    'x', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h'
  ],
  p: null,
  j: 167668511,
  q: 8196
}
```

Doido né?  
Mas acredite, o Mori foi criado, desde o começo, visando performance e otimização de memória e processamento.  
Dessa forma, é preferivel trabalhar com a lib ao invés de manipular arrays na mão.

Aqui foi colocado um exemplo bem simples do Mori, mas vale dar uma olhada na documentação da lib pois tem várias funções maneiras para trabalhar com objetos e arrays, bem como a explicação mais detalhada de como a lib em si funciona.

Para fazer esse post, eu me baseei nesse vídeo da [Anjana Vakil](https://twitter.com/anjanavakil) na [jsconf.eu 2019](https://jsconf.eu) onde ela explica o esquema de acesso aos atributos por árvore, hashs e conversão desses hashs em binário. Ela mostra também exemplos com o Mori e com uma lib do Facebook chamada [ImmutableJS](https://immutable-js.github.io/immutable-js/) para cenários de imutabilidade com esse acabamos de analisar. 

{% video 
<iframe width="798" height="449" src="https://www.youtube.com/embed/Wo0qiGPSV-s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
%}

## Gostou desse post?

Você pode encontrar ele e outros em https://igventurelli.me