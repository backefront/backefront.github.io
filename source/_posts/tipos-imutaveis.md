---
title: Tipos imutáveis
date: 2018-05-12 19:46:09
tags: 
- Java
- Back-end
author: Igor Venturelli
authorImg: igor.png
authorDesc: Desenvolvedor back-end na Mult-e Engenharia Digital e admirador de Java, Python, Go e DevOps!
authorLinkedin: igorventurelli
authorGithub: igorventurelli
authorStackoverflow: 5963/igor-venturelli
---

Se você já programa em Java há algum tempo, provavelmente deve ter se deparado com a frase: _Strings são imutáveis_.  
Beleza, mas o que isso significa?

Um tipo imutável não permite a alteração do estado de um objeto criado a partir dele de forma _desautorizada_.

Vamos ver um tipo "normal" (mutável):
<!-- more -->
    public class Pessoa {

        private String nome;

        public Pessoa() { }

        public Pessoa(String nome) {
            this.nome = nome;
        }

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }
    }

Até aqui nada demais.  
Agora vamos trabalhar com essa clsse:

    public static void main(String[] args) {
        Pessoa p1 = new Pessoa();
        Pessoa p2 = new Pessoa("Igor");

        p1.setNome("Victor");
        p2.setNome("João");

        System.out.println(p1.getNome() + ", " + p2.getNome());
    }

> Saída:
> `Victor, João`

Podemos perceber que o objeto `p1` foi criado sem informar o nome da pessoa, dessa forma, o atributo `nome` deveria ser nulo, mas é `Victor`.  
Já o objeto `p2` foi criado com o nome Igor, mas seu nome atual é `João`.   
Bom, até onde sei, são extremamente raros os casos onde uma pessoa muda de nome... Então por que permitir uma alteração desse tipo?

Nesse caso, não faz sentido permitir que o tipo `Pessoa` seja mutável.  
Pois então, como torná-lo **imutável**? Vamos lá:

Primeiramente, precisamos declarar seu atributo como `final`.  
A palavra reservada `final` diz que essa variável/atributo receberá uma atribuição apenas uma única vez. Normalmente essa atribuição acontece na declaração. Ex:

    final String nome = "Igor";

Isso funciona, mas não faz sentido no nosso caso, pois não queremos que todas as instâncias de `Pessoa` se chamem Igor.  
Então? Como fazemos?  
Podemos declarar o atributo como `final`, sem inicializá-lo como o exemplo acima, mas inicializá-lo pelo construtor:

    private final String nome;

    public Pessoa(String nome) {
        this.nome = nome;
    }

Pronto. Assim bloqueamos qualquer outra atribuição que o atributo `nome` poderia sofrer.  
Mas e o construtor sem argumentos, como fica? Bom, nesse caso, não tem muito o que fazer:

    private final String nome;

    public Pessoa() {
        nome = null;
    }

Não importa se o construtor tem ou não argumentos. O importante aqui é que todos os atributos marcados como `final` sejam inicializados em todos os construtores.

Ótimo! Temos um atributo final e depois de criada uma instância sabemos que o nome nunca será alterado, mas tem coisa errada aí.  
O método setter de `nome`.

Nessa altura do campeonato ele já não compila mais jutamente pelo fato de fazer:

    this.nome = nome;

Uma vez que o atributo `nome` é `final`, qualquer tentativa de atribuição gera um erro de compilação.

E agora? Devemos remover o método? Sim!  
Essa é uma outra característica de tipos imutáveis: não possuir métodos setter.

-------

Aqui estamos exemplificando um tipo onde queremos que seja 100% imutável, mas é bem comum encontrarmos situaçãoes onde só alguns atributos queremos que sejam imutáveis e os demais não.  
Não tem nenhum problema com isso, basta colocar os atributos que deseja ser imutável como `final`, inicialiá-los pelos construtores (todos) e remover seu método setter.

Podemos citar como exemplo caso o tipo `Pessoa` tivesse um atributo `idade`.  
Não faria nenhum sentido deixar esse atributo como `final`, justamente por que nós envelhecemos e nossa idade muda.

Eu, particularmente, ao invés de criar um método setter para esse atributo, criaria algo como:

    public void fazAniversario() {
        idade++;
    }

Pois num método setter, alugém poderia _setar_ uma idade que antes era `15` para `25` e isso não faz sentido.

Mas estamos fugindo um pouco do foco... Voltando:  

Afinal, quais são as vantagens de usar um tipo imutável?

De cabeça lembro de duas principais:

- Concorrência:
    Nada pior do que um cenário com múltiplas threads mexendo num mesmo objeto :(. Com um tipo imutável você garante que o seu objeto estará sempre _bonitinho_.

- Segurança:
    Você sabe exatamente o que tem no seu objeto!

-----

Show, mas até agora exemplificamos um tipo imutável com atributos de tipos imutáveis também.  
Como fazemos com atributos de tipos não imutáveis?

Vamos supôr que a classe `Pessoa` tenha um atirbuto do tipo `Endereco`, que é mutável:

    public class Endereco {

        private String rua;
        private Integer numero;

        public Endereco(String rua, Integer numero) {
            this.rua = rua;
            this.numero = numero;
        }

        public String getRua() {
            return rua;
        }

        public void setRua(String rua) {
            this.rua = rua;
        }

        public Integer getNumero() {
            return numero;
        }

        public void setNumero(Integer numero) {
            this.numero = numero;
        }
    }

    public class Pessoa {

        private final String nome;
        private final Endereco endereco;

        public Pessoa() {
            nome = null;
            endereco = null;
         }

        public Pessoa(String nome, Endereco endereco) {
            this.nome = nome;
            this.endereco = endereco;
        }

        public String getNome() {
            return nome;
        }

        public Endereco getEndereco() {
            return endereco;
        }
    }

Legal, o atributo `endereco` está `final`, mas isso não garante nada pois `Endereco` não é imutável. Vejamos:
Caso alguém invoque o método getter de `endereco`, essa pessoa pode alterar tanto a rua quanto o número:

    public static void main(String[] args) {
        Endereco e = new Endereco("Av. Paulista", 10);
        Pessoa p = new Pessoa("Igor", e);

        Endereco enderecoModificado = p.getEndereco();
        enderecoModificado.setRua("Av. Liberdade");
        enderecoModificado.setNumero(200);

        System.out.println(p.getEndereco().getRua());
    }

> Saída:
> `Av. Liberdade`

Nesse caso, devemos criar uma cópia do objeto que queremos retornar, para que seja devolvida uma nova referência, deiferente da referência ao objeto original:

    public Endereco getEndereco() {
        return new Endereco(endereco.getRua(), endereco.getNumero());
    }

Ao implementarmos o getter dessa forma, temos o mesmo exemplo de execução que retornou `Av. Liberdade` agora retornando `Av. Paulista`.

Por último, temos os casos de listas.  
Escrever métodos de cópias de listas é algo _bixeira_. Para isso devemos usar o método estático `Collections.unmodifiableList(list)`:

    import java.util.Collections;   
    import java.util.List; 
    import java.util.ArrayList;   
    
    public class Pessoa {

        private final String nome;
        private final List<Endereco> enderecos;

        public Pessoa() {
            nome = null;
            enderecos = null;
         }

        public Pessoa(String nome, List<Endereco> enderecos) {
            this.nome = nome;
            this.enderecos = enderecos;
        }

        public String getNome() {
            return nome;
        }

        public List<Endereco> getEnderecos() {
            return Collections.unmodifiableList(enderecos);
        }
    }

Ao tentarmos executar o código abaixo:

    public static void main(String[] args) {
        List<Endereco> es = new ArrayList<>();
        es.add(new Endereco("Rua 1", 10));
        es.add(new Endereco("Rua 2", 20));

        Pessoa p = new Pessoa("Igor", es);

        List<Endereco> listNaoModif = p.getEnderecos();
        listNaoModif.add(new Endereco("Rua 3", 30));
    }

Recebemos a Exception `java.lang.UnsupportedOperationException`, pois a lista retornada pelo `unmodifiableList(list)`, como o nome já diz, não pode ser modificada.

Dessa forma conseguimos garantir o estado dos nossos objetos!