---
title: Como acessar galeria de fotos e exibir - React Native
date: 2020-06-29 08:00:28
tags:
  - Front-end
  - React Native
postKeywords: react native, gallery photos react native, fotos album react native, react, js, fotos, photos, native
postDescription: Você já precisou enviar uma foto da galeria de fotos do celular, em uma aplicação React Native? Fazer isso pode parecer chato, mas é bem mais simples do que parece! Neste post, irei mostrar como podemos exibir fotos com o React Native
author: Victor Jordan
authorImg: victor.png
authorDesc: Engenheiro Front-end na FITec e pós-graduado em Engenharia de Software pela PUC-MG e formado em Banco de Dados pela Fatec, apaixonado por usabilidade, performance e UX!
authorLinkedin: victorjordan95
authorGithub: victorjordan95
---

Recentemente, em um projeto mobile, precisei adicionar no formulário um input onde o usuário inserisse fotos.
O usuário deveria ser capaz de inserir uma foto que já está salva no celular dele dentro de um formulário.

Para fazer isso, usei a lib [react-native-image-picker](https://www.npmjs.com/package/react-native-image-picker)

<!-- more -->

Para instalar:

```cmd
npm i react-native-image-picker
```
OU
```cmd
yarn add react-native-image-picker
```

Com a lib instalada, podemos dar prosseguimento na nossa atividade.

Precisamos de um botão, que chame o método que vai abrir a galeria:

```javascript
<Button
  onPress={handleChoosePhoto}
  title="Abrir câmera"
  color="#841584"
/>
```

Agora vamos implementar o método `handleChoosePhoto`:

```javascript
  // Import da lib
  import { launchImageLibrary } from 'react-native-image-picker';
  
  export function PhotoComponent() {
     // Nosso estado de arquivos
    const [file, setFile] = useState();

    const handleChoosePhoto = () => {
      const options = {
        noData: true,
        title: 'Foto de avaliação',
        takePhotoButtonTitle: 'Escolha uma foto',
        chooseFromLibraryButtonTitle: 'Selecione da galeria uma foto',
        selectionLimit: 1, // Se deixar 1, será permitido apenas uma foto e 0 várias 
      };

      launchImageLibrary(options, async (response) => {
        if (response.didCancel) {
          console.log('Usuário cancelou a seleção');
        } else if (response.error) {
          console.log('Ocorreu um erro.');
        } else {
          const photoFile = {
            uri: asset.uri,
            name: asset.fileName,
            type: 'image/jpeg',
          };

          setFile(photoFile);
        }
      });
    };
  }
```
Pronto, se tudo ocorreu bem, você já pode exibir a imagem no seu aplicativo!

Basta acessar seu state:

```javascript
<Image source={{ uri: photoFile.uri }} />
```

Simples, não é?

Uma observação, no iOS, em específico no emulador, a foto **não** aparece.

Mas isso não é bug e nem problema de implementação, para exibir realmente precisa ser feito em um dispositivo real! ;)

