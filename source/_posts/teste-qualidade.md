---
title: Fundamentos do Teste de Software - Teste & Qualidade e Quanto testar?
date: 2018-09-26 15:40:00
tags: 
- Testes
postKeywords: Fundamentos do Teste software, origem teste software, o que é erro teste software, defeito teste software, falha no teste software, testes software, conceito de teste de software
postDescription:  Softwares estão presentes em quase todos os lugares, na padaria de bairro até grandes e poderosos estabelecimentos como aeroportos, bancos. E todos nós já passamos por algum tipo de falha de software como insdisponibilidade de software e sites, lentidão, etc.
author: Melanie Jordan
authorImg: melanie.jpg
authorDesc: Analista de testes senior na Ericsson e pós-graduando em Engenharia da Qualidade de Software pelo Senac

---

Teste é sinônimo de qualidade? Se testarmos o software, teremos qualidade?
Vamos tomar a definição de qualidade:
> **Qualidade**: é o grau até o qual um componente, sistema ou processo, atende aos requisitos especificados e/ou às necessidades e expectativas do usuário ou consumidor.

Tendo essa definição, podemos dizer:
* O teste por si só não constrói a qualidade do software
* Tem a função de ajudar a medir a qualidade
* Pode fornecer confiança na qualidade
* Testes bem desenhados e executados reduzem os riscos de falhas

### Avaliando a qualidade

**Podemos afirmar que quanto menos defeitos encontrados, melhor será a qualidade do software?**
<!-- more -->
Não! Pois uma vez que encontramos poucos defeitos, isso pode sinificar três coisas:
* O software é realmente bom
* O teste é fraco
* O teste é fraco e o software também!
Sem realmente saber a qualidade dos testes, não é possível tirar conclusões claras sobre a qualidade do software!

![Avaliando a Qualidade](/posts/Figura1_AvaliandoQualidade.jpg)

**A qualidade custa menos!**

![Custa menos](/posts/Figura2_CustaMenos.jpg)

A partir do momento em que realizamos as atividades com mais qualidade, reduzimos drasticamente o retrabalho, o custo de manutenção e chamados de suporte e obtemos um software bem estruturado que facilita novos projetos.

> Na maioria dos casos, os projetos que alcançaram as menores taxas de defeitos são também os que alcançaram os prazos mais curtos.
> Portanto, ter qualidade é mais barato do que não ter!

### Quanto testar?
Quando sabemos que foi o necessário, que testamos o que era preciso? Devemos testar tudo, todos os cenários e casos de teste?
Na verdade, não funciona assim. Não devemos testar **tudo**. Isso não existe! Quer ver?

![Quanto testar](/posts/Figura3_QuantoTestar.jpg)

### Teste exaustível
É a abordagem na qual a suíte de teste abrange todas as combinações de valores e precondições de entrada.
É impraticável porque requer muitos recursos (pessoas), muito caro, muito tempo!

> Testadores exaustos você encontrará, testes exaustivos não!

### Quanto testar então?

Necessitamos de uma alternativa pragmática, acessível, rápida e que forneça resultados: **priorização dos testes**.
Além da avaliação de riscos nos auxiliar a definir o que testar e o que não testar, ela nos auxilia a decidir onde iniciar os testes e onde a maior carga de testes é necessária: Dessa forma, sempre tenha a seguinte regra:
> Priorizar o teste de modo que, se for necessário pará-lo, você tenha certeza de que realizou o melhor teste no tempo disponível.
> Não comece pelos mais fáceis ou de forma aleatória e sim por onde houver um risco maior.
