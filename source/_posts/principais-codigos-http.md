---
title: Principais códigos HTTP que você precisa conhecer!
date: 2018-11-19 07:30:20
tags:
- HTTP
postKeywords: erros http, o que significa 404, erro 404 o que é, códigos http, categorias codigos http, http codigos, retorno http
postDescription: Todo desenvolvedor web com certeza já esbarrou no famoso HTTP, seja implementando uma nova API ou consumindo uma. A necessidade de conhecer, no mínimo, o básico sobre o protocolo HTTP, é obrigatório! Utilizamos praticamente em todo momento algo envolvendo o HTTP, e entender seu funcionamento e como trabalhar da melhor forma, é o que difere profissionais!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Todo desenvolvedor web com certeza já esbarrou no famoso HTTP, seja implementando uma nova API ou consumindo uma. A necessidade de conhecer, no mínimo, o básico sobre o protocolo HTTP, é obrigatório! Utilizamos praticamente em todo momento algo envolvendo o HTTP, e entender seu funcionamento e como trabalhar da melhor forma, é o que difere profissionais!

Para isso, devemos entender o funcionamento, o significado dos códigos de retorno, entender qual verbo certo utilizar em um determinado momento do desenvolvimento! Alguns posts atrás, falei um pouco sobre as principais [diferenças entre o HTTP1 x HTTP2](https://backefront.com.br/diferencas-http2/), se você ainda não leu, depois confere lá! 

<!-- more -->

Basicamente, HTTP é um conjunto de padrões que permite que um usuário da internet possa trocar informações com o site. HTTP significa HyperText Transfer Protocol (Protocolo de Transferência de Hipertexto). O HTTP é composto basicamente por um código de status e um motivo, isto é, um significado que aquele código significa!

## Código de Status e Razão (Status Code and Reason Phrase)

Os códigos de retorno do protocolo (Status-Code) são basicamente um algarismo de três dígitos que é o resultado de uma tentativa de entendimento de uma requisição, isto é, sempre que você interage via HTTP, você obtém um código de retorno! O primeiro algarismo significa em qual **classificação** o código está contido e os últimos dois dígitos não possuem nenhuma categorização específica, servindo para diferenciar entre si o significado de cada um. 

No primeiro dígito, temos cinco opções de valores, que são:

- 1xx: Informativo – Informa que a solicitação foi aceita ou o processo continua em andamento;
- 2xx: Confirmação – A ação foi concluída ou entendida;
- 3xx: Redirecionamento – Indica que algo mais precisa ser feito ou precisou ser feito para completar a solicitação;
- 4xx: Erro do cliente- Indica que a solicitação não pode ser concluída ou contém a sintaxe incorreta;
- 5xx: Erro no servidor – O servidor falhou ao concluir a solicitação.

Abaixo, temos a lista dos principais código HTTP e suas respectivas explicações!

| Código Status HTTP | Significado do código HTTP | Explicação |
|----------|:-------------:|------:|
| 100 |  Continue | O usuário **deve** continuar com sua requisição.
| 200 | OK | A requisição foi concluída com sucesso!
| 201 | Created | A requisição foi concluída e um novo recurso foi criado com sucesso!
| 202 | Accepted | A solicitação foi aceita para processamento, mas o processamento não foi concluído.
| 203 | Non-Authoritative Information | O metadado retornado no header da entidade não é o conjunto definitivo disponível no servidor de origem, mas é coletada de uma cópia local ou de terceiros.
| 204 | No Content | O servidor concluiu a solicitação, mas não precisa retornar uma entidade e pode querer retornar um metadado atualizado.
| 301 | Moved Permanently | O recurso solicitado foi atribuído a um novo URI permanente e quaisquer referências futuras a este recurso DEVERÁ usar um dos URIs retornados.
| 305 | Use Proxy | O recurso **deve** ser acessado através de um proxy.
| 400 | Bad Request | A requisição não pôde ser entendida pelo servidor devido à sintaxe malformada.
| 401 | Unauthorized | A requisição requer uma autenticação de usuário;
| 403 | Forbidden | O servidor entendeu a requisição, mas está se recusando a atendê-lo
| 404 | Not Found | O servidor não encontrou nada que corresponda a solicitação.
| 405 | Method Not Allowed | O método especificado na requisição não é permitido para o recurso identificado.
| 500 | Internal Server Error | O servidor encontrou uma condição inesperada que impediu de concluir a solicitação.
| 503 | Service Unavailable | O servidor está indisponível para lidar com a requisição devido a uma manutenção ou sobrecarga no servidor.
