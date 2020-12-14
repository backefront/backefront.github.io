---
title: Como remover parâmetros dos queries parameters
date: 2020-12-14 18:38:56
tags:
- Front-end
- Javascript
postKeywords: remover query parameter url, remover item query param, javascript, remove query parameter, how to remove query param js, front-end
postDescription: Neste post irei mostrar um método que você pode usar para remover um parâmetro da sua URL, do query parameter!
author: Victor Jordan
authorImg: victor.png
authorDesc: Desenvolvedor front-end na Accenture e pós-graduando em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Em um post anterior, ensinava como você conseguia [obter parâmetros da URL pelo Javascript](https://backefront.com.br/como-obter-parametros-url-javascript/), lembra?
Mas, e se em um determinado cenário, você precisasse fazer o oposto, como por exemplo, remover um parâmetro de uma URL e retornar ela?
Com o seguinte método, conseguimos realizar essa atividade sem dificuldades!

<!-- more -->

```javascript
  /**
   * Remove um parâmetro dos query parameters
   * @param url String - URL que deseja fazer a remoção
   * @param parameter String - Nome do parâmetro que deseja remover
  */
  removeURLParameter(url, parameter) {
    const urlparts = url.split("?");
    if (urlparts.length >= 2) {
      const prefix = encodeURIComponent(parameter) + "=";
      const pars = urlparts[1].split(/[&;]/g);

      for (let i = pars.length; i-- > 0; ) {
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }

      return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
    }
    return url;
  }
```

Bem simples e fácil né?
Espero que ajude!