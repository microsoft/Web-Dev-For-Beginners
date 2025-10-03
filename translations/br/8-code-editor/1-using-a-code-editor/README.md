<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T09:33:56+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "br"
}
-->
***

# Usando um Editor de Código: Dominando o [VSCode.dev](https://vscode.dev)

**Bem-vindo!**  
Esta lição vai te levar do básico ao uso avançado do [VSCode.dev](https://vscode.dev)—o poderoso editor de código baseado na web. Você aprenderá a editar código com confiança, gerenciar projetos, rastrear alterações, instalar extensões e colaborar como um profissional—tudo diretamente do navegador, sem necessidade de instalação.

***

## Objetivos de Aprendizagem

Ao final desta lição, você será capaz de:

- Usar eficientemente um editor de código em qualquer projeto, em qualquer lugar
- Rastrear seu trabalho de forma integrada com controle de versão embutido
- Personalizar e otimizar seu fluxo de desenvolvimento com customizações e extensões do editor

***

## Pré-requisitos

Para começar, **crie uma conta gratuita no [GitHub](https://github.com)**, que permite gerenciar repositórios de código e colaborar globalmente. Se você ainda não tem uma conta, [crie uma aqui](https://github.com/).

***

## Por que usar um editor de código baseado na web?

Um **editor de código** como o VSCode.dev é seu centro de comando para escrever, editar e gerenciar código. Com uma interface intuitiva, inúmeros recursos e acesso imediato via navegador, você pode:

- Editar projetos em qualquer dispositivo
- Evitar complicações com instalações
- Colaborar e contribuir instantaneamente

Depois de se familiarizar com o VSCode.dev, você estará preparado para lidar com tarefas de programação de qualquer lugar, a qualquer momento.

***

## Começando com o VSCode.dev

Acesse **[VSCode.dev](https://vscode.dev)**—sem instalação, sem downloads. Fazer login com o GitHub desbloqueia acesso completo, incluindo sincronização de suas configurações, extensões e repositórios. Se solicitado, conecte sua conta do GitHub.

Após carregar, seu espaço de trabalho terá esta aparência:

![VSCode.dev padrão](../images/default-vscode-dev tem três seções principais da esquerda para a direita:
- **Barra de atividades:** Ícones como 🔎 (Pesquisar), ⚙️ (Configurações), arquivos, controle de versão, etc.
- **Barra lateral:** Muda de contexto com base no ícone selecionado na barra de atividades (por padrão, *Explorer* para mostrar arquivos).
- **Área de edição/código:** A maior seção à direita—onde você realmente edita e visualiza o código.

Clique nos ícones para explorar os recursos, mas volte ao _Explorer_ para manter seu lugar.

***

## Abrindo um Repositório do GitHub

### Método 1: Pelo Editor

1. Acesse [VSCode.dev](https://vscode.dev). Clique em **"Open Remote Repository."**

   ![Abrir repositório remoto](../../../../8-code-editor/images/open-remote-repository use o _Command Palette_ (Ctrl-Shift-P ou Cmd-Shift-P no Mac).

   ![Menu da Paleta](../images/palette-menu.pngopen remote repository.”
   - Selecione a opção.
   - Cole a URL do seu repositório GitHub (ex.: `https://github.com/microsoft/Web-Dev-For-Beginners`) e pressione Enter.

Se tudo der certo, você verá o projeto inteiro carregado e pronto para edição!

***

### Método 2: Diretamente via URL

Transforme qualquer URL de repositório GitHub para abrir diretamente no VSCode.dev substituindo `github.com` por `vscode.dev/github`.  
Ex.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Este recurso acelera o acesso rápido a QUALQUER projeto.

***

## Editando Arquivos no Seu Projeto

Depois de abrir seu repositório, você pode:

### 1. **Criar um Novo Arquivo**
- Na barra lateral *Explorer*, navegue até a pasta desejada ou use a raiz.
- Clique no ícone _‘New file ...’_.
- Nomeie seu arquivo, pressione **Enter**, e ele aparecerá instantaneamente.

![Criar um novo arquivo](../images/create-new-file 2. **Editar e Salvar Arquivos**

- Clique em um arquivo no *Explorer* para abri-lo na área de código.
- Faça as alterações necessárias.
- O VSCode.dev salva automaticamente suas alterações, mas você pode pressionar Ctrl+S para salvar manualmente.

![Editar um arquivo](../images/edit-a-file.png. **Rastrear e Confirmar Alterações com Controle de Versão**

O VSCode.dev possui controle de versão **Git** integrado!

- Clique no ícone _'Source Control'_ para visualizar todas as alterações feitas.
- Arquivos na pasta `Changes` mostram adições (verde) e exclusões (vermelho).  
  ![Visualizar alterações](../images/working-tree.png alterações clicando no `+` ao lado dos arquivos para preparar para commit.
- **Descartar** alterações indesejadas clicando no ícone de desfazer.
- Digite uma mensagem clara de commit e clique no check para confirmar e enviar.

Para retornar ao seu repositório no GitHub, selecione o menu hambúrguer no canto superior esquerdo.

![Preparar e confirmar alterações](../images/edit-vscode.dev Up com Extensões

As extensões permitem adicionar linguagens, temas, depuradores e ferramentas de produtividade ao VSCode.dev—facilitando e tornando sua vida de programador mais divertida.

### Navegando e Gerenciando Extensões

- Clique no **ícone de Extensões** na barra de atividades.
- Pesquise uma extensão na caixa _'Search Extensions in Marketplace'_.

  ![Detalhes da extensão](../images/extension-details:
  - **Installed**: Todas as extensões que você adicionou
  - **Popular**: Favoritas da indústria
  - **Recommended**: Personalizadas para seu fluxo de trabalho

  ![Visualizar extensões](

  

***

### 1. **Instalar Extensões**

- Digite o nome da extensão na busca, clique nela e revise os detalhes no editor.
- Clique no **botão azul de Instalar** na barra lateral _ou_ na área principal de código.

  ![Instalar extensões](../images/install-extension 2. **Personalizar Extensões**

- Encontre sua extensão instalada.
- Clique no **ícone de engrenagem** → selecione _Extension Settings_ para ajustar os comportamentos ao seu gosto.

  ![Modificar configurações da extensão](../images/extension-settings 3. **Gerenciar Extensões**
Você pode:

- **Desativar:** Desligar temporariamente uma extensão enquanto mantém ela instalada
- **Desinstalar:** Remover permanentemente se não for mais necessária

  Encontre a extensão, clique no ícone de engrenagem e selecione ‘Disable’ ou ‘Uninstall,’ ou use os botões azuis na área de código.

***

## Tarefa

Teste suas habilidades: [Crie um site de currículo usando vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Exploração Adicional e Autoestudo

- Aprofunde-se com [a documentação oficial do VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Explore recursos avançados de espaço de trabalho, atalhos de teclado e configurações.

***

**Agora você está pronto para codificar, criar e colaborar—de qualquer lugar, em qualquer dispositivo, usando o VSCode.dev!**

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.