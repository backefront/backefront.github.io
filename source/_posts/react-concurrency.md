---
title: Aumentando a Eficiência no Frontend com React Concurrency - Utilizando o Suspense e Hooks Assíncronos
date: 2023-05-28 07:16:00
tags:
  - Front-end
  - Javascript
postKeywords: React Concurrency, Suspense, Hooks Assíncronos, Performance frontend, Desenvolvimento frontend, Renderização assíncrona, Gerenciamento de estado, Otimização de desempenho, React 18
postDescription: Aprenda como utilizar o React Concurrency para otimizar o desempenho e a responsividade das suas aplicações frontend. Explore o uso do Suspense e hooks assíncronos para lidar com renderização assíncrona, gerenciamento de estado e melhorar a eficiência do seu código. Descubra como essa nova funcionalidade do React 18 pode impulsionar a performance do seu projeto frontend.
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end no Mercado Livre e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

O React Concurrency é uma nova funcionalidade do React que foi introduzida como parte da versão 18. 
Ele permite que os desenvolvedores escrevam componentes assíncronos de forma mais simples e eficiente, melhorando o desempenho e a responsividade de suas aplicações.

### Principais pontos do React Concurrency:

<!-- more -->

1. Suspense: O React Concurrency introduz o conceito de "Suspense", que é uma forma de lidar com a renderização assíncrona de componentes. Com o Suspense, podemos adiar o carregamento de partes da interface do usuário que dependem de dados assíncronos, exibindo um indicador de carregamento ou uma tela de fallback enquanto os dados estão sendo buscados.

```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>Meu App</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

Neste exemplo, estamos usando o `React.lazy` juntamente com o Suspense para carregar assincronamente o componente `LazyComponent`. Enquanto o componente está sendo carregado, exibimos uma mensagem de "Carregando...". Isso permite que a interface do usuário continue respondendo enquanto aguarda o carregamento dos dados.

2. Hooks assíncronos: O React Concurrency também traz consigo hooks assíncronos, como o useAsync, que facilitam a realização de operações assíncronas dentro dos componentes. Esses hooks fornecem uma maneira mais intuitiva e declarativa de lidar com fluxos assíncronos, permitindo que os desenvolvedores organizem seu código de maneira mais eficiente.

```javascript
import React, { useState, useEffect } from 'react';

function useAsync(asyncFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await asyncFunction();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [asyncFunction]);

  return { data, loading, error };
}

// Exemplo de uso do useAsync
function App() {
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const jsonData = await response.json();
    return jsonData;
  };

  const { data, loading, error } = useAsync(fetchData);

  return (
    <div>
      <h1>Meu App</h1>
      {loading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div>Ocorreu um erro: {error.message}</div>
      ) : (
        <div>Dados: {data}</div>
      )}
    </div>
  );
}

export default App;

```

Neste exemplo, criamos o hook `useAsync` que recebe uma função assíncrona como parâmetro e lida com o estado de data, loading e error durante a execução dessa função assíncrona. O hook é responsável por chamar a função assíncrona, atualizar o estado de acordo com o resultado e tratar erros caso ocorram.

Em seguida, utilizamos o hook `useAsync` no componente App. Nele, definimos a função fetchData que faz uma requisição assíncrona para buscar os dados da API. Ao utilizar o `useAsync(fetchData)`, o hook lida automaticamente com o carregamento, exibindo a mensagem "Carregando..." enquanto os dados estão sendo buscados. Além disso, também trata possíveis erros e exibe uma mensagem de erro caso ocorra algum problema. Quando os dados são recebidos com sucesso, eles são exibidos na tela.

3. Concurrent Mode: O Concurrent Mode é uma melhoria significativa no algoritmo de reconciliação do React, que permite que as atualizações de componentes ocorram de maneira mais eficiente e priorizada. Com o `Concurrent Mode`, é possível evitar bloqueios de interface do usuário durante operações intensivas e permitir que a aplicação continue respondendo de forma suave e fluida.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Meu App</h1>
      <p>Conteúdo do aplicativo...</p>
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <React.unstable_ConcurrentMode>
      <App />
    </React.unstable_ConcurrentMode>
  </React.StrictMode>
);
```

Neste exemplo, estamos utilizando o `ReactDOM.createRoot` para criar a raiz da renderização assíncrona no elemento com o ID "root". Em seguida, utilizamos o `React.unstable_ConcurrentMode` para envolver o componente App, indicando que queremos utilizar o Concurrent Mode.

O Concurrent Mode permite que o React priorize e agende as atualizações de componentes de forma mais eficiente, melhorando a responsividade e performance da aplicação, especialmente em casos de renderização de grande escala ou com operações assíncronas intensivas.

É importante ressaltar que o `React.unstable_ConcurrentMode` ainda é marcado como "unstable" e pode estar sujeito a mudanças na API. Certifique-se de verificar a documentação oficial do React para obter as informações mais atualizadas sobre o Concurrent Mode.

Lembre-se também de importar as bibliotecas corretas (react e react-dom) e configurar seu ambiente de desenvolvimento adequadamente para suportar o Concurrent Mode.

4. Resolução de promessas: O React Concurrency também oferece uma sintaxe mais limpa e simples para a resolução de promessas. Agora, podemos usar a palavra-chave await diretamente em nossos componentes para esperar a conclusão de uma operação assíncrona, eliminando a necessidade de usar then e catch repetidamente.

```javascript
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Meu App</h1>
      <button onClick={fetchData}>Buscar Dados</button>
      {loading ? (
        <div>Carregando...</div>
      ) : data ? (
        <div>Dados: {data}</div>
      ) : null}
    </div>
  );
}

export default App;
```

Neste exemplo, temos um componente `App` que possui um botão "Buscar Dados" que, ao ser clicado, chama a função assíncrona `fetchData`.

Dentro da função `fetchData`, utilizamos a palavra-chave `await` para esperar a resolução da promessa retornada por `fetch`. Em seguida, transformamos a resposta em formato JSON utilizando `response.json()`. Os dados resultantes são armazenados no estado data por meio da função `setData`.

Durante o processo de busca, a variável `loading` é atualizada para `true`, permitindo exibir uma mensagem de "Carregando...". Ao finalizar a busca e obter os dados com sucesso, a mensagem de "Carregando..." é substituída pelos dados retornados.

Caso ocorra algum erro durante a busca, a mensagem de erro é registrada no console.

Essa é uma maneira de utilizar a resolução de promessas de forma simples e direta no React, aproveitando a sintaxe limpa e legível proporcionada pelo `await`.


### Benefícios do React Concurrency:

1. Melhor desempenho: O React Concurrency permite que as aplicações sejam mais responsivas, evitando bloqueios de interface do usuário e tornando as atualizações mais rápidas e eficientes.

2. Maior escalabilidade: Com o Suspense e os hooks assíncronos, podemos lidar com operações assíncronas de maneira mais organizada e escalável, facilitando o gerenciamento de estados complexos em nossos componentes.

3. Código mais legível: A sintaxe simplificada e declarativa fornecida pelo React Concurrency torna o código mais limpo e legível, facilitando a compreensão e a manutenção do código ao longo do tempo.


O React Concurrency é uma adição empolgante ao ecossistema do React, trazendo melhorias significativas no desempenho e na eficiência das aplicações frontend. Com recursos como o Suspense, os hooks assíncronos e o Concurrent Mode, os desenvolvedores