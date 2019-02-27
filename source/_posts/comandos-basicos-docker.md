---
title: Comandos básicos do Docker
date: 2019-03-18 07:17:52
tags:
postKeywords: commands docker, lista comandos docker, comandos, docker, docker ps, remover docker, terminal docker
postDescription: Você conhece Docker? Neste post, falarei rapidamente sobre o Docker e seus comandos básicos, que te ajudarão na criação, visualização de containers e muito mais!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor Front-end e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Docker é um gerenciador de Containers que encapsula toda a sua aplicação dentro dele, de forma que independentemente de onde você estiver rodando este container, ele irá funcionar sempre igual! Sendo assim, evitamos problemas de incompatibilidade ou inconsistência, pois o Docker nos **garante** que o que está sendo executado no container será igual tanto para um usuário quanto para outro!

Mas o que seria um Container? Um container é uma unidade padrão de software que empacota o código e todas as suas dependências, para que o aplicativo seja executado de maneira rápida e confiável de um ambiente para outro. Uma imagem container do Docker é um pacote de software leve, autônomo e executável que inclui tudo o que é necessário para executar um aplicativo: código, tempo de execução, ferramentas do sistema, bibliotecas do sistema e configurações.

### Comandos básicos

Para facilitar, abaixo estão os comandos básicos para te ajudar na hora que estiver usando o Docker!

<!-- more -->

#### Comandos de informações
| Comando                                                       |   Descrição                                                  |
| -------------                                                 |  :-------------:                                             |
| docker version                                                |   Exibe a versão do docker instalada                         |
| docker inspect ID_CONTAINER                                   |   Exibe informações sobre o container                        |
| docker ps                                                     |   Exibe todos os containers em execução                      |
| docker ps -a                                                  |   Exibe todos os containers criados                          |


#### Comandos de execução
| Comando                                                       |   Descrição                                                                                       |
| -------------                                                 |  :-------------:                                                                                  |
| docker run -it NOME_IMAGEM                                    |  Conecta o terminal que estamos utilizando com o do container                                     |
| docker start ID_CONTAINER                                     |  Inicia o container com id informado                                                              |
| docker start -a -i ID_CONTAINER                               |  Inicia o container com id informado e integra os terminais, permitindo a interação entre ambos   |
| docker stop ID_CONTAINER                                      |  Interrompe o container com id em questão.                                                        | 

#### Comandos de remoção
| Comando                                                       |   Descrição                                                                                       |
| -------------                                                 |  :-------------:                                                                                  |
| docker rm ID_CONTAINER                                        |  Remove o container com id passado                                                                |
| docker container prune                                        |  Remove todos os containers que estão parados                                                     |
| docker rmi NOME_DA_IMAGEM                                     |  Remove a imagem passada como parâmetro.                                                          |