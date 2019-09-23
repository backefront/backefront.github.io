---
title: Engenharia de Software - Requisitos Funcionais x Não-funcionais
date: 2019-09-23 12:19:07
tags:
- Engenharia de Software
postKeywords: RNF x RF, requisitos funcionas diferença, requisitos não-funcionais, nao-funcionais, engenharia de software, qual diferenca requisitos
postDescription: Você conhece e sabe quais são os requisitos existentes em Engenharia de Software? Todo desenvolvimento de algum software necessita de um conjunto de requisitos. Sendo que estes requisitos, quando mal definidos, acabam em sistemas que não são adequados para os clientes. Podemos afirmar então, que todos os requisitos levantados formam a base para o desenvolvimento e também a manutenção futuro.
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você conhece e sabe quais são os requisitos existentes em Engenharia de Software? Todo desenvolvimento de algum software necessita de um conjunto de requisitos. Sendo que estes requisitos, quando mal definidos, acabam em sistemas que não são adequados para os clientes. Podemos afirmar então, que todos os requisitos levantados formam a base para o desenvolvimento e também a manutenção futuro.

Algumas outras definições para Requisitos:

- Definem o que é solicitado ao sistema fazer e com quais limitações ele é requisitado a operar
- Requisitos são as funções e restrições que estabelecem exatamente o que o software deve ou não fazer.

<!-- more -->

Em Engenharia de Software, temos três tipos de requisitos, sendo eles:
	- Requisitos Funcionais (RF)
	- Requisitos Não-funcionais (RNF)
	- Requisitos de Negócio (RN)

### Requisito Funcional

Requisitos funcionais são aqueles que nos falam o que o cliente, usuário gostariam de fazer ou querem que sejam realizadas pelo sistema, como por exemplo:

- O software deve calcular a média de um aluno e exibir em cor verde se aprovado.
- O software deve enviar uma mensagem notificando caso tenha ocorrido alguma alteração.

Podemos ter diversos requisitos funcionais dentro de uma mesma funcionalidade, tudo vai depender da necessidade do cliente e o que foi pedido para ser desenvolvido.

### Requisito Não-Funcional

Se nos requisitos funcionais tínhamos uma abordagem relacionado as necessidades do cliente, em requisitos não-funcionais temos a relação quanto ao processo e a tecnlogia, bem quanto a arquitetura que será utilizada no desenvolvimento
.
Estes requisitos são necessários serem considerados na fase inicial do projeto de desenvolvimento pois uma alteração tardia em sua arquitetura poderá acarretar em atrasos e até mesmo perca de dinheiro.

Exemplos de requisitos não-funcionais:

- a base de dados deve ser acessada apenas por usuários autenticados
- o tempo de resposta do sistema não deve ser maior do que 30 segundos

São críticos para o sucesso de sistemas de software, isto quer dizer que estes requisitos estão diretamente relacionados com a satisfação dos usuários. 
Também não adianta o software atender todas as especificações mas fornecer uma experiência que impossibilite a utilização do sistema. 
Por isso devemos sempre nos atentar a manter uma boa experiência de usuário (UX).

### Requisitos de Negócio

São requisitos do Negócio em si, isto é, que o sistema computacional deve ter como suporte. 
Deve-se atentar que requisitos de negócios não são as necessidades dos interessados pelo software.

Os requisitos de domínio estão relacionadas a toda área do software:

    - O sistema não deve permitir que menores de 13 anos façam cadastro.

Já os requisitos de negócio estão diretamente relacionados a um negócio em particular **dentro** do domínio:
    
    - O sistema da biblioteca permite que cada leitor empreste no máximo 2 livros por vez.
