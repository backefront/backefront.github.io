---
title: Como matar um processo em execução pelo CMD do Windows
date: 2019-04-15 07:00:23
tags:
- SO
postKeywords: kill pid process, como matar processo execução, encerrar processo, matar processo
postDescription: Você já precisou executar algum serviço em uma determinada porta mas reparou que nesta mesma porta, já existia este mesmo processo sendo executado? Você já precisou "matar" um serviço de uma determinada porta mas não sabe como fazer isso? No windows, em seu terminal, conseguimos fazer isso em apenas dois comandos!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Gauge e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Você já precisou executar algum serviço em uma determinada porta mas reparou que nesta mesma porta, já existia este mesmo processo sendo executado? Você já precisou "matar" um serviço de uma determinada porta mas não sabe como fazer isso?

No windows, em seu terminal, conseguimos fazer isso em apenas **dois** comandos!

Veja como matar um processo de uma determinada porta, pelo Windows!

<!-- more -->

Primeiramente, iremos procurar o PID (Process ID), usando o seguinte comando:

```bash
netstat -a -o -n
```

Neste comando, passamos três parâmetros juntos (-a -o -n), que servem para **mostrar todas as conexões e portas**, **mostrar o PID de cada conexão** e **Mostrar o endereço e porta em numeral**, respectivamente.

Feito isso, temos uma listagem de vários processos e PIDs, basta agora entrarmos a porta que queremos liberar e eliminar este processo usando seu PID, com o seguinte comando:

```bash
taskkill /F /PID 16568
```

Sendo este último número, o PID do serviço específico que você estava procurando!
Fácil não é mesmo?