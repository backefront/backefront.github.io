---
title: Como fazer upload de arquivos pelo React
date: 2020-02-03 07:42:23
tags:
  - Front-end
  - React
postKeywords: react upload file, file react, formdata react, formdata, javascript, subir arquivo react, input file, html, javascript, react
postDescription: Neste post, irei demonstrar como podemos criar um formulário que permita fazer o upload de arquivos através do react
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Quando desenvolvemos formulários em nossos sistemas, as vezes nos deparamos com situações em que precisamos fazer anexos de arquivos.

Dessa forma, devemos criar um `input type=file` e permitir que o nosso usuário consiga subir o que tiver que subir!

Mas como podemos fazer isso, no React?

<!-- more -->

Primeiramente, vamos criar no input:

```javascript
<div>
  <label className="form-label">File</label>
  <input type="file" accept="application/pdf" />
</div>
```

Feito isso, devemos agora criar a nossa função que vai detectar quando adicionarmos algum arquivo:

```javascript
// Usamos hooks para controlar o estado
const [cardFile, setCardFile] = useState();

const handleUploadFile = (e: any) => setCardFile(e.target.files[0]);

<div>
  <label className="form-label">File</label>
  <input type="file" onChange={handleUploadFile} accept="application/pdf" />
</div>;
```

Perfeito! Agora temos o arquivo em nossas mãos, podemos enviar para o nosso back-end!

Vamos agora trabalhar com FormData, que é uma forma de construirmos facilmente um conjunto de pares de chave/valor.

```javascript
const addNewCard = async () => {
  setSaving(true);
  const data = new FormData();
  data.append("card", cardFile);

  // ...
  // Inserimos aqui nossa chamada POST/PUT
  // para enviarmos nosso arquivo.
};
```

Dessa forma, conseguimos enviar arquivos pelo nosso front para o back!

Caso você precise validar um tipo de extensão específica, [neste post](https://backefront.com.br/como-limitar-tipo-arquivo-upload-html/) demonstrei como podemos fazer isso também pelo HTML!
