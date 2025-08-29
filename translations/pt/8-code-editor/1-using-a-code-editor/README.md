<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1ba61d96a11309a2a6ea507496dcf7e5",
  "translation_date": "2025-08-29T16:17:16+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "pt"
}
-->
# Usar um editor de código

Esta lição aborda os conceitos básicos de utilização do [VSCode.dev](https://vscode.dev), um editor de código baseado na web, para que possa fazer alterações no seu código e contribuir para um projeto sem instalar nada no seu computador.

## Objetivos de aprendizagem

Nesta lição, irá aprender a:

- Utilizar um editor de código num projeto de programação
- Acompanhar alterações com controlo de versão
- Personalizar o editor para desenvolvimento

### Pré-requisitos

Antes de começar, precisará de criar uma conta no [GitHub](https://github.com). Navegue até [GitHub](https://github.com/) e crie uma conta, caso ainda não tenha uma.

### Introdução

Um editor de código é uma ferramenta essencial para escrever programas e colaborar em projetos de programação existentes. Assim que compreender os conceitos básicos de um editor e como utilizar as suas funcionalidades, poderá aplicá-los ao escrever código.

## Começar com o VSCode.dev

[VSCode.dev](https://vscode.dev) é um editor de código na web. Não precisa de instalar nada para utilizá-lo, tal como abrir qualquer outro site. Para começar a usar o editor, abra o seguinte link: [https://vscode.dev](https://vscode.dev). Se não estiver autenticado no [GitHub](https://github.com/), siga as instruções para iniciar sessão ou criar uma nova conta e, em seguida, autentique-se.

Depois de carregar, deverá parecer-se com esta imagem:

![VSCode.dev padrão](../../../../translated_images/default-vscode-dev.5d06881d65c1b3234ce50cd9ed3b0028e6031ad5f5b441bcbed96bfa6311f6d0.pt.png)

Existem três secções principais, começando pela esquerda e movendo-se para a direita:

1. A _barra de atividades_, que inclui alguns ícones, como a lupa 🔎, a engrenagem ⚙️ e outros.
2. A barra de atividades expandida, que por padrão é o _Explorador_, chamada de _barra lateral_.
3. E, finalmente, a área de código à direita.

Clique em cada um dos ícones para exibir um menu diferente. Quando terminar, clique no _Explorador_ para voltar ao ponto de partida.

Quando começar a criar ou modificar código existente, isso acontecerá na maior área à direita. Utilizará esta área para visualizar código existente também, o que fará a seguir.

## Abrir um repositório GitHub

A primeira coisa que precisará é abrir um repositório GitHub. Existem várias formas de abrir um repositório. Nesta secção, verá duas maneiras diferentes de abrir um repositório para começar a trabalhar nas alterações.

### 1. Com o editor

Utilize o próprio editor para abrir um repositório remoto. Se for ao [VSCode.dev](https://vscode.dev), verá um botão _"Open Remote Repository"_:

![Abrir repositório remoto](../../../../translated_images/open-remote-repository.bd9c2598b8949e7fc283cdfc8f4050c6205a7c7c6d3f78c4b135115d037d6fa2.pt.png)

Também pode usar o _command palette_. O _command palette_ é uma caixa de entrada onde pode digitar qualquer palavra que faça parte de um comando ou ação para encontrar o comando certo a executar. Utilize o menu no canto superior esquerdo, selecione _View_ e, em seguida, escolha _Command Palette_, ou utilize o seguinte atalho de teclado: Ctrl-Shift-P (no MacOS seria Command-Shift-P).

![Menu do Palette](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.pt.png)

Quando o menu abrir, digite _open remote repository_ e selecione a primeira opção. Vários repositórios dos quais faz parte ou que abriu recentemente aparecerão. Também pode usar um URL completo do GitHub para selecionar um. Utilize o seguinte URL e cole na caixa:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Se for bem-sucedido, verá todos os ficheiros deste repositório carregados no editor de texto.

### 2. Usando o URL

Também pode usar diretamente um URL para carregar um repositório. Por exemplo, o URL completo do repositório atual é [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), mas pode substituir o domínio do GitHub por `VSCode.dev/github` e carregar o repositório diretamente. O URL resultante seria [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).

## Editar ficheiros

Depois de abrir o repositório no navegador/VSCode.dev, o próximo passo será fazer atualizações ou alterações no projeto.

### 1. Criar um novo ficheiro

Pode criar um ficheiro dentro de uma pasta existente ou na diretoria/pasta raiz. Para criar um novo ficheiro, abra um local/diretoria onde deseja que o ficheiro seja guardado e selecione o ícone _'New file ...'_ na barra de atividades _(à esquerda)_, dê-lhe um nome e pressione Enter.

![Criar um novo ficheiro](../../../../translated_images/create-new-file.2814e609c2af9aeb6c6fd53156c503ac91c3d538f9cac63073b2dd4a7631f183.pt.png)

### 2. Editar e guardar um ficheiro no repositório

Usar o VSCode.dev é útil sempre que quiser fazer atualizações rápidas ao seu projeto sem precisar de carregar qualquer software localmente.  
Para atualizar o seu código, clique no ícone 'Explorer', também localizado na barra de atividades, para visualizar os ficheiros e pastas no repositório.  
Selecione um ficheiro para abri-lo na área de código, faça as alterações e guarde.

![Editar um ficheiro](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.pt.png)

Depois de terminar de atualizar o seu projeto, selecione o ícone _`source control`_, que contém todas as novas alterações feitas ao repositório.

Para visualizar as alterações feitas ao projeto, selecione os ficheiros na pasta `Changes` na barra de atividades expandida. Isso abrirá um 'Working Tree' para que possa ver visualmente as alterações feitas ao ficheiro. Vermelho indica uma omissão no projeto, enquanto verde indica uma adição.

![Visualizar alterações](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.pt.png)

Se estiver satisfeito com as alterações feitas, passe o cursor sobre a pasta `Changes` e clique no botão `+` para preparar as alterações. Preparar significa simplesmente preparar as alterações para serem enviadas ao GitHub.

Se, no entanto, não estiver confortável com algumas alterações e quiser descartá-las, passe o cursor sobre a pasta `Changes` e selecione o ícone `undo`.

Depois, escreva uma `commit message` _(uma descrição das alterações feitas ao projeto)_, clique no ícone de verificação para confirmar e enviar as alterações.

Quando terminar de trabalhar no projeto, selecione o ícone do menu hambúrguer no canto superior esquerdo para voltar ao repositório no github.com.

![Preparar e confirmar alterações](../../../../8-code-editor/images/edit-vscode.dev.gif)

## Usar extensões

Instalar extensões no VSCode permite adicionar novas funcionalidades e opções de personalização ao ambiente de desenvolvimento no editor, melhorando o fluxo de trabalho. Estas extensões também ajudam a adicionar suporte para várias linguagens de programação e são frequentemente extensões genéricas ou baseadas em linguagens.

Para navegar pela lista de todas as extensões disponíveis, clique no ícone _`Extensions`_ na barra de atividades e comece a digitar o nome da extensão no campo de texto rotulado _'Search Extensions in Marketplace'_.  
Verá uma lista de extensões, cada uma contendo **o nome da extensão, o nome do editor, uma descrição de uma frase, número de downloads** e **uma classificação por estrelas**.

![Detalhes da extensão](../../../../translated_images/extension-details.9f8f1fd4e9eb2de5069ae413119eb8ee43172776383ebe2f7cf640e11df2e106.pt.png)

Também pode visualizar todas as extensões previamente instaladas expandindo a pasta _`Installed`_, extensões populares usadas pela maioria dos programadores na pasta _`Popular`_ e extensões recomendadas para si, seja por utilizadores no mesmo espaço de trabalho ou com base nos ficheiros recentemente abertos, na pasta _`Recommended`_.

![Visualizar extensões](../../../../translated_images/extensions.eca0e0c7f59a10b5c88be7fe24b3e32cca6b6058b35a49026c3a9d80b1813b7c.pt.png)

### 1. Instalar extensões

Para instalar uma extensão, digite o nome da extensão no campo de pesquisa e clique nela para visualizar informações adicionais sobre a extensão na área de código, assim que aparecer na barra de atividades expandida.

Pode clicar no _botão azul de instalação_ na barra de atividades expandida para instalar ou usar o botão de instalação que aparece na área de código ao selecionar a extensão para carregar informações adicionais.

![Instalar extensões](../../../../8-code-editor/images/install-extension.gif)

### 2. Personalizar extensões

Depois de instalar a extensão, pode precisar de modificar o seu comportamento e personalizá-la com base nas suas preferências. Para fazer isso, selecione o ícone Extensions e, desta vez, a sua extensão aparecerá na pasta _Installed_. Clique no _**ícone de engrenagem**_ e navegue até _Extensions Setting_.

![Modificar configurações da extensão](../../../../translated_images/extension-settings.21c752ae4f4cdb78a867f140ccd0680e04619d0c44bb4afb26373e54b829d934.pt.png)

### 3. Gerir extensões

Depois de instalar e usar a sua extensão, o VSCode.dev oferece opções para gerir a extensão com base em diferentes necessidades. Por exemplo, pode optar por:

- **Desativar:** _(Desative temporariamente uma extensão quando não precisar dela, mas não quer desinstalá-la completamente)_

    Selecione a extensão instalada na barra de atividades expandida > clique no ícone de engrenagem > selecione 'Disable' ou 'Disable (Workspace)' **OU** abra a extensão na área de código e clique no botão azul Disable.

- **Desinstalar:** Selecione a extensão instalada na barra de atividades expandida > clique no ícone de engrenagem > selecione 'Uninstall' **OU** abra a extensão na área de código e clique no botão azul Uninstall.

---

## Tarefa

[Crie um site de currículo usando vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

## Revisão e estudo autónomo

Leia mais sobre [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) e algumas das suas outras funcionalidades.

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.