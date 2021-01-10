---
title: Convertendo imagem para base64 e exibindo no front-end
date: 2020-07-20 07:35:19
tags:
  - Front-end
  - Javascript
  - React
postKeywords: base64 img, input file convert img, image to base64, exibir imagem input file, exibir imagem carregada, javascript imagem, base64 javascript
postDescription: Neste artigo, irei mostrar como podemos exibir em nosso front-end a imagem que está sendo enviada pelo usuário através do input="file", convertendo o arquivo em base64 para exibição em tempo real!
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Recentemente me deparei com uma situação onde devia exibir a foto que estava sendo enviada pelo usuário através do input `file` do HTML, isto é, assim que ele carregasse a foto pelo seletor de arquivos, devia exibir como uma prévia.

Nesta aplicação, estava usando React com Hooks mas essa mesma solução pode ser aplicada com Javascript puro!

Então veja como podemos visualizar a imagem que está sendo enviada, na nossa página HTML

<!-- more -->

Vamos assumir que temos a seguinte estrutura em nosso HTML:

```jsx
const ProfilePhoto = () => {
  const [newPicture, setNewPicture] = "";

  const handleProfile = (e) => {
    // Função que vamos implementar
  };

  return (
    <input
      type="file"
      name="profile"
      accept="image/*"
      onChange={(e) => handleProfile(e)}
    />
  );
};
```

Legal, vamos trabalhar em cima desse input.

A primeira coisa que queremos fazer é selecionar o arquivo que está sendo enviado e construir um `FileReader`.

O objeto FileReader permite-nos ler o conteúdo dos arquivos que estão armazenados no computador do usuário de maneira assíncrona, utilizando os objetos `File`ou `Blob` para especificar o arquivo ou o dado a ser lido!

Mas como? A explicação acima parece muito mais complicada do que realmente é!
Vamos converter isso em código:

```jsx
const ProfilePhoto = () => {
  const [newPicture, setNewPicture] = "";

  const handleProfile = (e) => {
    // Selecionando o arquivo
    const file = e.target.files[0];

    // Criando um objeto FileReader
    const reader = new FileReader();

    // Adicionamos um evento para
    // escutar o Reader
    reader.addEventListener(
      "load",
      () => {
        //  Quando carregado,
        // reader.result retornará
        // o objeto convertido em Base64
        setNewPicture(reader.result);
      },
      false
    );

    // Caso file esteja populado
    // dispara a função.
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <input
      type="file"
      name="profile"
      accept="image/*"
      onChange={(e) => handleProfile(e)}
    />
  );
};
```

Bem mais simples olhando a implementação, não é mesmo?
