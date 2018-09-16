---
title: post
date: 2018-09-16 16:13:07
tags: 
- Front-end
postKeywords: 
postDescription: 
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Com o passar do tempo, começamos a desenvolver sites e aplicações mais ricas e poderosas, que possuem uma interface cheia de funcionalidades maneiras e lindas! Como todos sabem, __Nada pode ser obtido sem sacrifício. Para se obter algo é preciso oferecer algo em troca de igual valor__. Mas o que quer dizer isso? Significa que cada vez mais utilizamos recursos, importamos novas bibliotecas para auxiliar em nosso desenvolvimento, com intuíto de produzir a melhor aplicação possível e consequentemente deixamos nosso produto um pouco mais pesado. Isso pode transformar em um grave problema de **performance**.


## Performance te ajuda a manter um usuário

De acordo com uma pesquisa realizada pelo Google, sites que demoraram **até** 5 segundos para carregar, possuiram sessões mais duradouras e rentáveis. Afinal, performance também diz muito sobre melhorar suas conversões!
Afinal, quem nunca desistiu de entrar em um site que demorava muito para carregar? É pensando nisso que será demonstrado nest post **N Técnicas para otimizar seu site**

## 1 - Encontre o principal causador da demora

Através do **devtools** do seu navegador, na aba **network**, você consegue visualizar o que seu site está carregando e quanto tempo demora para que seja concluído. Isso é, todos os seus arquivos (CSS, JS, HTML) são necessários serem baixados quando alguém entra em seu site, então o tamanho que eles pesam, impacta diretamente na usabilidade! Quanto menor o tamanho dos arquivos, consequentemente mais rápido será o carregamento da sua página, além de que pode ter algum arquivo que não está sendo encontrado e está impactando no tempo de demora para carregar e graças ao devtools, você consegue identificar o que está acontecendo!

![Aba network no DevTools do Google Chrome](/posts/otimizar-site-console.png)

## 2 - Minifique seu CSS, Javascript e HTML

Sabe quando você baixa uma lib e tem dois arquivos, um chamado lib.js e outro lib.min.js? Então, esse `min` significa que aquele arquivo é a versão minificada! Minificar é arrancar os espaços desnecessários, tabulações, comentários, etc, tornando o seu arquivo bem menor comparado com ao "original". Existem diversas ferramentas que você pode utilizar para minificar seus arquivos, você pode utilizar o Gulp, Grunt ou até mesmo minificar através de sites, como por exemplo os sites: [Uglifycss](https://www.uglifycss.com/), [Uglifyjs](https://www.uglifyjs.net/).

## 3 - Diminua a quantidade de requisições HTTP

>"A melhor requisição é aquela que não existe"

Requisição é aquilo em que seu site faz para buscar os arquivos dependentes, como por exemplo: imagens, css, js. Quanto mais requisições você tiver, mais seu site demorará para carregar! Essa informação de quantas requisições existem em sua aplicação aparece também na **network** do Devtools!

![Quantidade de requests realizadas](/posts/otimizar-site-requests.png)

Para diminuir, você pode combinar/juntar arquivos CSS e JS em arquivos únicos! Desta forma, você fará apenas uma requisição ao invés de várias para buscar todos os recursos. Com o Gulp e Grunt, você consegue criar uma forma automatizada de juntar seus arquivos desta forma!

## 4 - Use compressão no servidor

Compressão no server-side é como se você pegasse uma série de arquivos, fizesse o famoso **zip** deles e enviasse para algum amigo e esse amigo descompacta e consegue visualizar esses arquivos normalmente mas de uma forma muito mais leve. Mudando para o cenário de seu site, o que está fazendo é basicamente o mesmo, compactando e quando um usuário acessa, ele "descompacta".
Existem alguns métodos de compressão, como por exemplo **brotli**, **gzip**, **xz**, **bz2**, para utilizar, você precisa habilitar em seu servidor esta opção, escolhendo o método desejado!

![Arquivo CSS com método de compressão Brotli](/posts/otimizar-site-compressao.png)

## 5 - Utilize cache

Quando o cache está habilitado, o sistema verifica se o usuário quando acessou seu site possui uma cópia dos arquivos da página, caso exista, a cópia desses arquivos são entregues e o usuário consegue visualizar a página mais rapidamente, pois leva menos tempo para o servidor retornar as informações que estão sendo solicitadas!

## 6 - Use lazyload

Lazyload é uma técnica de carregar as informações que estão abaixo da primeira dobra de renderização, isto é, aquela primeira tela vista quando acessado um site. Está técnica consiste em priorizar as informações que o usuário vai ver primeiramente e carregar depois o restante das informações na medida que o utilizador for descendo a página. Com isso, o site carrega mais rápido e só irá carregar o restante do conteúdo caso seja **necessário**

Estas são só algumas dicas que quando usadas, melhoram o desempenho e consequentemente ajuda no seu SEO! 
Sentiu falta de alguma técnica ou você utiliza alguma diferente? Comenta aí para sabermos como podemos otimizar ainda mais nossos sistemas!
