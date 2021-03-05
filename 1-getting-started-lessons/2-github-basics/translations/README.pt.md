# Introdução ao Github

Esta lição cobre os fundamentos do GitHub, uma plataforma para hospedar e gerenciar alterações em seu código.

![Intro ao GitHub](images/webdev101-github.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Lição
[Quiz Pré-Lição](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/3)

## Introduction

Nessa lição, vamos falar sobre:

- rastreando o trabalho que você faz em sua máquina
- trabalhando em projetos com outros
- como contribuir a software open source

### Pré-Requisitos

Antes de começar, você precisa checar se você tem Git instalado. Dentro do terminal, digite: 
`git --version`

Se o Git não estiver instalado, [baixe o git Git](https://git-scm.com/downloads). Em seguida, configure seu perfil Git local no terminal:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Para verificar se o Git já está configurado, você pode digitar:
`git config --list`

Você também precisará de uma conta do GitHub, um editor de código (como o Visual Studio Code) e abrir seu terminal (ou: command prompt).

Acesse [github.com](https://github.com/) e caso ainda não o tenha, crie uma conta, ou faça login e preencha o seu perfil. 

✅ O GitHub não é o único repositório de código do mundo; existem outros, mas o GitHub é o mais conhecido

### Preparação

Você precisará de uma pasta com um projeto de código em sua máquina local (laptop ou PC) e de um repositório público no GitHub, que servirá como um exemplo de como contribuir com os projetos de outras pessoas.

---

## Gerenciamento de código

Digamos que você tenha uma pasta localmente com algum projeto de código e deseja começar a monitorar seu progresso usando git - o sistema de controle de versão. Algumas pessoas comparam o uso do git a escrever uma carta de amor para o seu futuro eu. Lendo suas mensagens de commit dias, semanas ou meses depois, você será capaz de lembrar porque tomou uma decisão, ou "reverter" uma mudança - isto é, se você escreve boas "mensagens de commit".

### Tarefa: Crie um repositório e de commit no seu código

1. **Crie um repositório no GitHub**. Em GitHub.com, na aba de repositórios, ouda barra de navegação no topo direito, encontre o botão **new repo**.

   1. De um nome ao seu repositório (pasta)
   1. Selecione **create repository**.

1. **Navegue até sua pasta de trabalho**. Em seu terminal, mude para a pasta (também conhecida como diretório) que deseja iniciar o rastreamento. Digite:

   ```bash
   cd [nome da sua pasta]
   ```

1. **Initicialize o repositório do git**. No seu projeto, digite:

   ```bash
   git init
   ```

1. **Verifique o status**. Para verificar o status do seu repositório, digite:

   ```bash
   git status
   ```

   o terminal vai responder algo pareciso com isso:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Normalmente o comando `git status` informa a você coisas como quais arquivos estão prontos para serem _salvos_ no repo ou tem alterações que você pode querer manter.

1. **Adicionar todos os arquivos para rastreamento**
   Isso também é chmado de staging pastas/ adicionando pastas para a área de staging.

   ```bash
   git add .
   ```

   Esse `git add` mais o argumento `.` indica que todos os seus arquivos e modificações foram adicionados ao rastreamento.

1. **Adicionar arquivos selecionados para rastreamento**

   ```bash
   git add [nome do arquivo ou pasta]
   ```

 Isso nos ajuda a adicionar apenas os arquivos selecionados à área de staging quando não queremos enviar todos os arquivos de uma vez.

1. **Unstage todos os arquivos**

   ```bash
   git reset
   ```

   Esse comando nos ajuda a remover todos os arquivos de uma vez da área de staging.

1. **Unstage um artigo em particular**

   ```bash
   git reset [nome do arquivo ou pasta]
   ```

Este comando nos ajuda a unstage apenas um arquivo específico que não queremos incluir no próximo commit.

1. **Persistindo no seu trabalho**. Até agora você adicionou os arquivos na  _staging area_. Um lugar onde o Git está rastreando seus arquivos. Para tornar a mudança permanente, você precisa _commit_ os arquivos. Para fazer isso, você cria um _commit_ com o comando `git commit`. Um _commit_ representa um ponto de salvamento no histórico do seu repo. Digite o seguinte para criar um _commit_: 
   ```bash
   git commit -m "first commit"
   ```

Isso confirma todos os seus arquivos, adicionando a mensagem "first commit". Para mensagens de commit futuras, você desejará ser mais descritivo em sua mensagem, para transmitir que tipo de mudança você fez.

1. **Conect seu Git repo local ao GitHub**. Um repositório Git é bom em sua máquina, mas em algum momento você vai querer fazer backup de seus arquivos em algum lugar e também convidar outras pessoas para trabalhar com você em seu repositório. Um ótimo lugar para fazer isso é o GitHub. Lembre-se de que já criamos um repositório no GitHub, então a única coisa que precisamos fazer é conectar nosso repositório Git local ao GitHub. O comando `git remote add` fará exatamente isso. Digite o seguinte comando:
   > Nota: Antes de digitar o comando, vá para a página do repositório GitHub para encontrar o URL do repositório. Você o usará no comando abaixo. Substitua `repository_name` pelo URL do GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

  Isso cria um _remote_, ou conexão, chamada "origin" apontando para o repositório GitHub que você criou anteriormente.

1. **Enviando arquivos locais ao Github**. Até agora, você criou uma _conexão_ entre o repositório local e o repositório GitHub. Vamos enviar esses arquivos para o GitHub com o seguinte comando `git push`, assim:
   ```bash
   git push -u origin main
   ```

 Isso envia os commits seu "main" branch para o GitHub.

1. **Para adicionais mais modificações**. Se você quiser continuar fazendo alterações e enviando-as para o GitHub, você só precisará usar os três comandos a seguir:

   ```bash
   git add .
   git commit -m "digite sua mensagem de commit aqui"
   git push
   ```

   >Dica, você também pode adotar um arquivo `.gitignore` para evitar que arquivos que você não deseja rastrear apareçam no GitHub - como aquele arquivo de notas que você armazena na mesma pasta, mas não tem lugar em um repositório público. Você pode encontrar modelos para arquivos `.gitignore` em [modelos .gitignore](https://github.com/github/gitignore).

#### Mensagens de Commit

Uma ótima mensagem de Git commit completa a seguinte frase:
Se aplicado, este commit irá <sua linha de assunto aqui>

Para o sujeito use o tempo presente imperativo: "mudar" e não "mudou" nem "mudará". 
Assim como no sujeito, no corpo (opcional) também use o tempo presente imperativo. O corpo deve incluir a motivação para a mudança e contrastar isso com o comportamento anterior. Você está explicando o `porquê`, não o` como`.

✅ Reserve alguns minutos para navegar no GitHub. Você consegue encontrar uma mensagem de commit realmente boa? Você pode encontrar uma realmente básica? Quais informações você acha que são as mais importantes e úteis para transmitir em uma mensagem de commit?

### Tarefa: Colabore

O principal motivo para colocar coisas no GitHub é para possibilitar a colaboração com outras pessoas desenvolvedoras.

## Trabalhando em projetos com outros

No seu repositório, navegue para `Insights > Community` para ver como seu projeto se compara aos padrões recomendados para a comunidade .

Aqui estão algumas coisas que podem melhorar seu repositório GitHub:
   - **Descrição**. Você adicionou uma descrição para o seu projeto?
   - **README**. Você adicionou um README? O GitHub fornece orientação para escrever um [README](https://docs.github.com/articles/about-readmes/).
   - **Guia de Contribuição**. O seu projeto tem [um guia de contribuição](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Código de Conduta**. Um [Código de Conduta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Licença**. Talvez o mais importante, uma [licença](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Todos esses recursos irão beneficiar a integração de novos membros na equipe. Esses são normalmente o tipo de coisas que os novos colaboradores olham antes mesmo de ver seu código, para descobrir se o seu projeto é o lugar certo para eles passarem o tempo.

✅ Arquivos README, embora levem tempo para serem preparados, são freqüentemente negligenciados por mantenedores ocupados. Você pode encontrar um exemplo particularmente descritivo? Nota: existem alguns[ferramentas para ajudar a criar bons READMEs](https://www.makeareadme.com/) que você talvez você queira tentar.

### Tarefa: Merge algum código

Documentos contribuintes ajudam as pessoas a contribuir para o projeto. Eles explicam quais tipos de contribuições você está procurando e como funciona o processo. As pessoas interessadas em colabor precisarão seguir uma série de etapas para poder contribuir com seu repo no GitHub:


1. **Bifurque seu repo** Você provavelmente vai querer que as pessoas _bifurquem_ seu projeto. Bifurcar significa criar uma réplica de seu repositório no perfil GitHub da pessoa contribuindo.
1. **Clone**. A partir daí, eles clonarão o projeto em sua máquina local.
1. **Crie uma branch**. Você vai querer pedir a eles que criem um _branch_ para seu trabalho.
1. **Concentre a mudança delas em uma área**. Peça as pessoas colaboradoras para concentrarem suas contribuições em uma coisa de cada vez - dessa forma, as chances de você poder dar  _merge_ no trabalho delas são maiores. Imagine que elas escrevam uma correção de bug, adicionem um novo recurso e atualizem vários testes - e se você quiser ou só puder implementar 2 de 3, ou 1 de 3 alterações?

✅ Imagine uma situação em que os branches são particularmente importantrs para escrever e distribuir bons códigos. Em quais casos de uso você consegue pensar?

> Nota: Seja a mudança que você deseja ver no mundo e crie ramificações para o seu próprio trabalho também. Todos os commits que você fizer serão feitos no branch em que você está “check-out” no momento. Use `git status` para ver em qual branch esta.

Vamos analisar o fluxo de trabalho de uma pessoa colaboradora. Suponha que a pessoa já  _birfurcado_ e _clonado_ no repo então ela tem um repositório Git pronto para ser trabalhado, em sua máquina local:

1. **Crie um branch**. Use o comando `git branch` para criar um branch que conterá as mudanças que pretendem contribuir:

   ```bash
   git branch [nome-do-branch]
   ```

1. **Mude pata o novo branch**. Mude para o Branch especificado e atualize o diretorio com `git checkout`:

   ```bash
   git checkout [[nome-do-branch]
   ```

1. **Faça o trabalho**. Neste ponto, você deseja adicionar suas alterações. Não se esqueça de informar ao Git sobre isso com os seguintes comandos:

   ```bash
   git add .
   git commit -m "minhas mudanças"
   ```

Certifique-se de dar ao seu commit um bom nome, para seu bem e também para a pessoa mantendo o repo que você está ajudando.

1. **Combine seu trabalho com o branch `main`**. Em algum ponto, você concluiu o trabalho e deseja combinar seu trabalho com o do branch `main`. Entretanto, o branch `main` pode ter mudado, então certifique-se de primeiro atualizá-lo para o mais recente com os seguintes comandos:

   ```bash
   git checkout main
   git pull
   ```

Neste ponto, você quer ter certeza de que quaisquer _conflitos_, situações em que o Git não pode _combinar_ facilmente as mudanças aconteçam em seu branch de trabalho. Portanto, execute os seguintes comandos:

   ```bash
   git checkout [nome-do-branch]
   git merge main
   ```

Isso trará todas as mudanças do `main` em seu branch e com sorte você pode simplesmente continuar. Caso contrário, o VS Code dirá onde o Git está _confuso_ e você apenas alterará os arquivos afetados para dizer qual conteúdo é o mais preciso.

1. **Enviando seu trabalho para o GitHub**. Enviar seu trabalho para o GitHub significa duas coisas: 1. Enviando seu branch para o repo e, 2. em seguida, abrir um PR, Pull Request.

   ```bash
   git push --set-upstream origin [nome-do-branch]
   ```

  O comando acima cria o branch em seu repositório birfurcado.

1. **Abra um PR**. Em seguida, você vai abrir um PR. Você faz isso navegando até o repositório birfurcado no GitHub. Você verá uma indicação no GitHub onde pergunta se você deseja criar um novo PR, você clica nele e é levada a uma interface onde pode alterar o título da mensagem de commit, e digitar uma descrição mais adequada. Agora, a pessoa mantendo o repo que você bifurcou verá este PR e _dedos cruzados_, elas apreciarão e _mergirão_ seu PR. Agora você é um contribuidor, eba!!! :)

1. **Limpeza**. É considerado uma boa prática _limpar_ após mesclar um PR com sucesso. Você deseja limpar seu branch local e o branch que você enviou para o GitHub. Primeiro, vamos excluí-lo localmente com o seguinte comando:

   ```bash
   git branch -d [nome-do-branch]
   ```

Em seguida, vá para a página GitHub do repositório bifurcado e remova o branch remoto que você acabou de enviar para ele.

`Pull request` parece um termo bobo porque na verdade você deseja enviar(push) suas alterações para o projeto. Mas a pessoa mantendo o projeto (dona do projeto) ou equipe central, precisam considerar suas mudanças antes de fundi-lo com o branch "main" do projeto, então você está realmente solicitando uma decisão de mudança dessa pessoa.

Uma pull request é o lugar para comparar e discutir as diferenças introduzidas em um branch como revisões, comentários, testes integrados e muito mais. Uma boa pull request segue aproximadamente as mesmas regras de uma mensagem de commit. Você pode adicionar uma referência a um problema no rastreador de problemas, quando seu trabalho, por exemplo, corrige um problema. Isso é feito usando um `#` seguido pelo número do seu problema. Por exemplo `# 97`.

🤞Dedos cruzados para que todas as verificações sejam aprovadas e as pessoas proprietárias do projeto deem merge nas suas alterações no projeto🤞

Atualize seu branch de trabalho local com todos os novos commits do branch remoto correspondente no GitHub:
`git pull`

## Como contribuit para open source

Primeiramente, vamos encontrar um repositório - ou: repo - no GitHub, algo de seu interesse e para o qual você gostaria de contribuir com uma mudança. Você vai querer copiar o conteúdo de para sua máquina.

✅ Uma boa maneira de encontrar repositórios 'para iniciantes' é [procurar pela tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copie o repo localmente](images/clone_repo.png)

Existem várias maneiras de copiar o código. Uma maneira é "clonar" o conteúdo do repositório, usando HTTPS, SSH ou usando GitHub CLI (Command Line Interface).

Abra seu terminal e clone o repositório assim:
`git clone https://github.com/ProjectURL`

Para trabalhar no projeto, mude para a pasta certa:
`cd ProjectURL`

Você também pode abrir o projeto inteiro usando [Codespaces](https://github.com/features/codespaces), um editor de código incorporado / ambiente de desenvolvimento em nuvem do GitHub, ou o [GitHub Desktop](https://desktop.github.com/).

Por último, você pode baixar o código em uma pasta compactada.

### Mais algumas coisas interessantes sobre o GitHub

Você pode dar uma estrela, acompanhar e/ou "bifurcar" qualquer repositório público no GitHub. Você encontrará seus repositórios com estrela no menu suspenso no canto superior direito. É como marcar, mas para código.

Os projetos têm um rastreador de problemas, ou _issues_,  geralemente no GitHub na aba "Issues", onde as pessoas discutem problemas relacionados ao projeto. E a aba de Pull Requests é onde as pessoas discutem e revisam as mudanças que estão em andamento.

Os projetos também podem ter discussão em fóruns, listas de e-mail ou canais de bate-papo como Slack, Discord ou IRC.

✅ Dê uma olhada em seu novo repositório GitHub e tente algumas coisas, como editar configurações, adicionar informações a seu repositório e criar um projeto (como um quadro Kanban). Há muito que você pode fazer!

---

## 🚀 Desafio

Faça par com uma amiga para trabalhar no código uma da outra. Crie um projeto de forma colaborativa, bifurque o código, crie ramificações e mescle as alterações.

## Quiz Pós-aula
[Quiz Pós-aula](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/4)

## Revisão & Autoestudo

Leia mais sobre [contribuindo para open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Atalhos do Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratique, pratique, pratique. O GitHub tem ótimos caminhos de aprendizagem disponíveis via [lab.github.com](https://lab.github.com/):

- [Primeira semana no GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Você também encontrará laboratórios mais avançados.

## Lição de casa

Complete [a primeira semana no laboratório de treinamento GitHub](https://lab.github.com/githubtraining/first-week-on-github)
