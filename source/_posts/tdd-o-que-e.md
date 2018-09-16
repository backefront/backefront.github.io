---
title: Test Driven Development - O que é TDD?
date: 2018-09-13 13:51:00
tags: 
- Testes
- SENAC
postKeywords: TDD, Test Driven Development, teste softwares, tipos de testes, o que é tdd, exemplo tdd, como fazer tdd, tdd na prática
postDescription: Com certeza você já ouviu (mas nunca tentou!) A ideia é antiga e tomou força em 2003 com o lançamento do famoso livro de TDD de Kent Beck, além de ser um dos pilares do Extreme Programming (XP) também.
author: Melanie Jordan
authorImg: melanie.jpg
authorDesc: Analista de testes senior na Ericsson e pós-graduando em Engenharia da Qualidade de Software pelo Senac

---

#### Desenvolvimento Guiado por Testes - TDD simples e prático!

Sim, tem como: desenvolver o software baseado em testes que são escritos antes do código de produção!
Com certeza você já ouviu (mas nunca tentou!) A ideia é antiga e tomou força em 2003 com o lançamento do famoso livro de TDD de Kent Beck, além de ser um dos pilares do Extreme Programming (XP) também.
Basicamente, o TDD se baseia em pequenos ciclos de repetições, onde para cada função, um teste é criado primeiro. Esse novo teste falha, visto que não temos nada implementado ainda, assim que implementado, o teste passa.

### Ciclo de desenvolvimento

Definido em 3 etapas -> Red, Green e Refactor. ou seja:
  - Escrevemos um teste que de início, não passa -> Red
  - Implementamos a funcionalidade
  - O teste inicial agora passa -> Green
  - Refatoramos o código da nova implementação -> Refactoring
  - Próximo teste!
 
<!-- more --> 
 
![Ciclo de Desenvolvimento](/posts/Figura1_CicloDeDesenvolvimento.jpg)

### Benefícios
  - Rápido feedback sobre a nova implementação e outras já existentes no sistema
  - Código limpo, uma vez que os códigos escritos são simples para o teste passar 
  - Com o refactoring, temos segurança porque conseguimos ver o que está afetando ou não
  - Maior eficácia na correção de bugs
  - Maior produtividade / menos bugs / menos tempo com depuradores
  - Modularização do código, para que sejam testáveis, mais flexíveis

### Testes pra que?
O objetivo é a criação de uma melhoria contínua de testes e consequentemente de software.
Nenhum teste, seja ele automatizado ou manual, tem a capacidade de eliminar 100% dos problemas, mesmo porque as pessoas que desenvolvem os códigos são as mesmas que criam os testes, e são seres humanos por isso são passíveis de erro.
A questão é fazer com que o uso dos testes automatizados reduza gradativamente os problemas, e assim, tornar este processo sustentável ao longo do tempo, melhorando cada vez mais o código.

### E a documentação?
Com tantas mudanças, a documentação em wikis, Word, papel fica desatualizada pois o custo é muito alto a cada refatoração/mudança de código. A melhor documentação e mais atualizada possível é a Suíte de Testes pois ela mostra de forma simples como está funcionando o sistema naquele exato momento. Se você percorrer os testes você entenderá o que o sistema realiza. 

### Hello World do TDD
Um exemplo bem trivial utilizando **Java** + **Eclipse** + **JUnit**! Nosso sisteminha será uma Calculadora com 4 operações básicas: Adição, Subtração, Multiplicação e Divisão.
Passos para a criação do projeto:
  - Crie um novo projeto no Eclipse com o nome de "ArtigoTDD";
  - Crie um pacote com o nome "artigotdd.calculadora.teste".

Com a estrutura criada, vamos criar nossa primeira classe: **CalculadoraTeste**! Sim, vamos fazer um teste em algo que ainda não foi implementado!
Agora, temos a classe CalculadoraTeste no pacote criado:
```java
package artigotdd.calculadora.teste;

public class CalculadoraTeste {

}
```
Para começar, vamos pensar na soma! Como podemos testar uma soma? Simples e trivial: dados dois valores, o resultado deve ser a soma deles.
Então, vamos criar um método que indique este teste; Para o **JUnit** entender que o método é "testável", temos a anotação "@Test" no método. Assim temos:
```java
public class CalculadoraTeste {
    @Test
    public void deveriaSomarDoisValoresDados() throws Exception {
    }
}
```
Agora que temos o método de teste, vamos mostrar a ele o que queremos. Vamos agora inserir duas variáveis e usar o método "assertEquals" do próprio **JUnit**.
```java
public class CalculadoraTeste {
    @Test
    public void deveriaSomarDoisValoresPassados() throws Exception {
        int valorA = 1;
        int valorB = 2;
        int soma = 0;
 
        assertEquals(3, soma);
    }
}
```
Feito! Queremos o resultado 3 para a soma das variáveis valorA e valorB. Acabamos de escrever o Teste e óbvio que ele não passa. Ao executar, temos a barra vermelha indicando que falhou! Mas já esperávamos pois este é o ciclo: Test->Red->Green->Refactor.

![Teste Falhou](/posts/Figura2_TesteFalhou.png)

No nosso Trace, o JUnit indica que esperava o valor 3 porém foi encontrado o valor 0.

![Trace](/posts/Figura3_Trace.png)

E agora o nosso objetivo é fazer o Teste passar! Colocamos agora a classe responsável pela implementação da funcionalidade:
```java
public class CalculadoraTeste {
    @Test
    public void deveriaSomarDoisValoresPassados() throws Exception {
        int valorA = 1;
        int valorB = 2;
        Calculadora calculadora = new Calculadora();
        int soma = calculadora.soma(valorA, valorB);
 
        assertEquals(3, soma);
    }
}
```
Mas esse código nem mesmo compila! Não criamos a classe pra depois usá-la e sim usamos a classe pra depois criá-la.
Criamos então a classe Calculadora e também o método "soma" nessa mesma classe, recebendo dois inteiros:

```java
public class Calculadora {
 
    public int soma(int valorA, int valorB) {
        return valorA + valorB;
    }
}
```
Rodando nosso teste: barra verde! Teste passou!

![Teste passou!](/posts/Figura4_TestePassou.png)

Agora, a última etapa do ciclo, a **refatoração**!
Seguindo os mesmos passos anteriores, vamos criar agora o teste para a divisão, adicionando o método de Teste à nossa classe de CalculadoraTeste:
```java
public class CalculadoraTeste {
    @Test
    public void deveriaDividirDoisValoresPassados() throws Exception {
        int valorA = 6;
        int valorB = 2;
        Calculadora calculadora = new Calculadora();
        int divisao = calculadora.divide(valorA, valorB);
 
        assertEquals(3, divisao);
    }
}
```
Método na classe Calculadora:
```java
public class  Calculadora {
 
    public int divide(int valorA, int valorB) {
        return valorA / valorB;
    }
}
```
Agora temos um Teste verde na nossa frente mesmo após a Refatoração!

![Teste passou, agora refatorado!](/posts/Figura5_TestePassouRefatoracao.png)

Finalizando esse post, o desenvolvedor de hoje realmente tem que dominar a técnica que, apesar de parecer nova, é desde os primórdios da civilização Inca! O seu software funciona? Sim? Mas não tem testes? Então você não tem garantia alguma que ele funciona!