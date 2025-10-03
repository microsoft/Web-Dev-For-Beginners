<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T09:31:00+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "pt"
}
-->
***

# Utilizar um Editor de Código: Dominar o [VSCode.dev](https://vscode.dev)

**Bem-vindo!**  
Esta lição leva-o desde os conceitos básicos até ao uso avançado do [VSCode.dev](https://vscode.dev)—o poderoso editor de código baseado na web. Vai aprender a editar código com confiança, gerir projetos, acompanhar alterações, instalar extensões e colaborar como um profissional—tudo diretamente no seu navegador, sem necessidade de instalação.

***

## Objetivos de Aprendizagem

No final desta lição, será capaz de:

- Utilizar eficientemente um editor de código em qualquer projeto, em qualquer lugar
- Acompanhar o seu trabalho de forma integrada com controlo de versão
- Personalizar e melhorar o seu fluxo de trabalho de desenvolvimento com personalizações e extensões do editor

***

## Pré-requisitos

Para começar, **crie uma conta gratuita no [GitHub](https://github.com)**, que lhe permitirá gerir repositórios de código e colaborar globalmente. Se ainda não tem uma conta, [crie uma aqui](https://github.com/).

***

## Porquê Utilizar um Editor de Código Baseado na Web?

Um **editor de código** como o VSCode.dev é o seu centro de comando para escrever, editar e gerir código. Com uma interface intuitiva, inúmeras funcionalidades e acesso imediato via navegador, pode:

- Editar projetos em qualquer dispositivo
- Evitar complicações de instalações
- Colaborar e contribuir instantaneamente

Quando estiver confortável com o VSCode.dev, estará preparado para enfrentar tarefas de programação em qualquer lugar, a qualquer momento.

***

## Começar com o VSCode.dev

Aceda a **[VSCode.dev](https://vscode.dev)**—sem instalação, sem downloads. Ao iniciar sessão com o GitHub, desbloqueia acesso total, incluindo sincronização de definições, extensões e repositórios. Se solicitado, conecte a sua conta GitHub.

Depois de carregar, o seu espaço de trabalho terá este aspeto:

![VSCode.dev padrão](../images/default-vscode-dev tem três secções principais da esquerda para a direita:
- **Barra de Atividades:** Ícones como 🔎 (Pesquisa), ⚙️ (Definições), ficheiros, controlo de origem, etc.
- **Barra Lateral:** Altera o contexto com base no ícone selecionado na barra de atividades (por padrão, mostra o *Explorador* para exibir ficheiros).
- **Área de Código/Editor:** A maior secção à direita—onde realmente edita e visualiza o código.

Clique nos ícones para explorar funcionalidades, mas volte ao _Explorador_ para manter o seu lugar.

***

## Abrir um Repositório GitHub

### Método 1: A partir do Editor

1. Aceda a [VSCode.dev](https://vscode.dev). Clique em **"Open Remote Repository."**

   ![Abrir repositório remoto](../../../../8-code-editor/images/open-remote-repository utilize o _Command Palette_ (Ctrl-Shift-P, ou Cmd-Shift-P no Mac).

   ![Menu Palette](../images/palette-menu.pngopen remote repository.”
   - Selecione a opção.
   - Cole o URL do seu repositório GitHub (ex.: `https://github.com/microsoft/Web-Dev-For-Beginners`) e pressione Enter.

Se for bem-sucedido, verá o projeto completo carregado e pronto para editar!

***

### Método 2: Diretamente via URL

Transforme qualquer URL de repositório GitHub para abrir diretamente no VSCode.dev substituindo `github.com` por `vscode.dev/github`.  
Ex.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Esta funcionalidade acelera o acesso rápido a QUALQUER projeto.

***

## Editar Ficheiros no Seu Projeto

Depois de abrir o seu repositório, pode:

### 1. **Criar um Novo Ficheiro**
- Na barra lateral *Explorador*, navegue até à pasta desejada ou utilize a raiz.
- Clique no ícone _‘New file ...’_.
- Nomeie o ficheiro, pressione **Enter**, e o ficheiro aparece instantaneamente.

![Criar um novo ficheiro](../images/create-new-file 2. **Editar e Guardar Ficheiros**

- Clique num ficheiro no *Explorador* para abri-lo na área de código.
- Faça as alterações necessárias.
- O VSCode.dev guarda automaticamente as suas alterações, mas pode pressionar Ctrl+S para guardar manualmente.

![Editar um ficheiro](../images/edit-a-file.png. **Acompanhar & Confirmar Alterações com Controlo de Versão**

O VSCode.dev tem **Git** integrado para controlo de versão!

- Clique no ícone _'Source Control'_ para ver todas as alterações feitas.
- Os ficheiros na pasta `Changes` mostram adições (verde) e eliminações (vermelho).  
  ![Ver alterações](../images/working-tree.png alterações clicando no `+` ao lado dos ficheiros para preparar para commit.
- **Descartar** alterações indesejadas clicando no ícone de desfazer.
- Escreva uma mensagem clara de commit e clique no visto para confirmar e enviar.

Para voltar ao seu repositório no GitHub, selecione o menu hambúrguer no canto superior esquerdo.

![Preparar & confirmar alterações](../images/edit-vscode.dev Com Extensões

As extensões permitem adicionar linguagens, temas, depuradores e ferramentas de produtividade ao VSCode.dev—tornando a sua vida de programação mais fácil e divertida.

### Navegar e Gerir Extensões

- Clique no **ícone de Extensões** na barra de atividades.
- Procure uma extensão na caixa _'Search Extensions in Marketplace'_.

  ![Detalhes da extensão](../images/extension-details:
  - **Installed**: Todas as extensões que adicionou
  - **Popular**: Favoritas da indústria
  - **Recommended**: Adaptadas ao seu fluxo de trabalho

  ![Ver extensões](

  

***

### 1. **Instalar Extensões**

- Insira o nome da extensão na pesquisa, clique nela e reveja os detalhes no editor.
- Clique no **botão azul Install** na barra lateral _ou_ na área principal de código.

  ![Instalar extensões](../images/install-extension 2. **Personalizar Extensões**

- Encontre a extensão instalada.
- Clique no **ícone de engrenagem** → selecione _Extension Settings_ para ajustar os comportamentos ao seu gosto.

  ![Modificar definições da extensão](../images/extension-settings 3. **Gerir Extensões**
Pode:

- **Desativar:** Desligar temporariamente uma extensão mantendo-a instalada
- **Desinstalar:** Remover permanentemente se já não for necessária

  Encontre a extensão, clique no ícone de engrenagem e selecione ‘Disable’ ou ‘Uninstall,’ ou utilize os botões azuis na área de código.

***

## Tarefa

Teste as suas competências: [Crie um site de currículo utilizando vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Exploração Adicional e Autoestudo

- Aprofunde-se com [a documentação oficial do VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Explore funcionalidades avançadas do espaço de trabalho, atalhos de teclado e definições.

***

**Agora está pronto para programar, criar e colaborar—de qualquer lugar, em qualquer dispositivo, utilizando o VSCode.dev!**

---

**Aviso**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante notar que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.