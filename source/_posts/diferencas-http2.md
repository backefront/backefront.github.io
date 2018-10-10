---
title: HTTP/2 - Quais são as principais diferenças
date: 2018-10-10 11:06:29
tags:
postKeywords: diferença http/1 x http/2, o que é http2, novidades http2, o que é http2, quais as diferenças entre http/1 e http/2, vantagens do http2
postDescription: Entenda quais são as principais diferenças entre o HTTP/1 e o HTTP/2!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na FITec e formando em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Basicamente, HTTP é um conjunto de padrões que permite que um usuário da internet possa trocar informações com o site. Desde sua primeira versão, em 1991, contamos com quatro tipos de interações HTTP, que são: GET, HEAD, PUT e POST. 

O HTTP/1.1 é a terceira versão e ficou sem nova atualização por quase duas décadas, até que em 2015, com os avanços dos sites, cada vez ficando mais complexos e o surgimento de aplicações web mais poderosas, foi lançado uma nova versão, o HTTP/2, que teve foi uma evolução do protocolo SPDY. Epa, Perai! Não estávamos falando de HTTP? Que raios é esse tal de SPDY?

<!-- more --> 

SPDY (pronuncia speedy, acho que isso já diz muita coisa né?) foi um protocolo criado pelo Google em 2010, que visava melhorar como HTTP lidava com requests e responses. Seu principal foco era reduzir a latência via TCP pipelining, que é uma técnica onde várias requisições HTTPs são enviadas em uma única conexão TCP, sem ficar esperando pela respostas correspondente. E também, provia uma compressão obrigatória, que por design era GZip ou Deflate.

![Timeline de Evolução do HTTP](/posts/http2-timeline.png)

## O que tinha de errado com HTTP/1?
O HTTP/1 era limitado a processar apenas uma solicitação por conexão TCP, forçando os navegadores a utilizarem multiplas conexões TCP para processar múltiplas requisições simultaneamente. 

However, using too many TCP connections in parallel leads to TCP congestion that causes unfair monopolization of network resources. Web browsers using multiple connections to process additional requests occupy a greater share of the available network resources, hence downgrading network performance for other users.

## Características do HTTP/2

Tendo em vista que o HTTP/2 foi modelado após o SPDY, algumas features dele foram incluídas, como por exemplo, um header fixo de algoritmo de compressão (Content-Encoding) como por exemplo: gzip, compress, deflate, identity, br.

A nova versão do protocolo melhorou (e muito!) a velocidade de entrega de conteúdo e consequentemente, a experiência do usuário dentro da aplicação, podemos citar:

**Protocolos Binários**
Protocolos binários consomem menores quantidades de banda, são analisados de maneira mais eficiente e são menos propenso a erros, comparado com sua primeira versão do protocolo HTTP.

**Multiplexing**
Isso quer dizer que o HTTP/2 consegue lidar com múltiplas requisições em paralelo em uma única conexão TCP(igual ao SPDY). Como resultado, as páginas renderizam seus elementos de forma mais eficiente, rápida e elimina o problema que existia no HTTP/1 em que um elemento acabava bloqueando o outro de ser transmitido, como demonstrado na imagem abaixo.

![Conceito de Multiplexing - Comparação entre as duas versões do protocolo HTTP](/posts/http2-lidando-requisicoes.jpg)

Graças a este conceito, alguns "*hacks* de otimização" utilizados no HTTP/1 se tornaram desnecessárias, como por exemplo, imagens sprites, concatenação e domain sharding, que consistia em dividir seus recursos em outros domínios para que o navegador baixasse mais recursos simultaneamente. 

**Compressão no Header**
O HTTP utiliza compressão no header afim de reduzir o tamanho dos arquivos e reduzir consequentemente a sobrecarga causada pelo TCP, no início do seu carregamento, semelhante ao SPDY, porém no header você diz qual tipo de algoritmo de compressão será usado.

**Server push**
O Server Push tem como objetivo reduzir ainda mais as requisições, isto é, quando o usuário requisitar o HTML por exemplo, podemos enviar a resposta do CSS junto mesmo antes de ele requisitar. A explicação do Sérgio Lopes [neste post sobre server push](http://blog.caelum.com.br/http2-server-push-na-pratica/) explica perfeitamente com poucas palavras:

>Com uma única requisição, no HTTP/2, podem ser enviadas múltiplas respostas. Sem precisar fazer inline, sem matar o cache e de forma bastante simples.

**Aumento de Segurança**
Os navegadores só conseguem trabalhar com HTTP/2 através de conexões criptografadas, aumentando então a segurança do usuário e da aplicação.

**Priorização de Fluxo**
O HTTP/2 permite que o cliente escolha qual a preferência de um fluxo de dados específico. Apesar do servidor não esteja vinculado para seguir essas informações, este mecanimos permite que o servidor otimize a alocação de recursos de rede com base nos requisitos do usuário.

## Suporte dos Navegadores

![Suporte do HTTP/2 nos Navegadores](/posts/http2-suporte-navegadores.png)