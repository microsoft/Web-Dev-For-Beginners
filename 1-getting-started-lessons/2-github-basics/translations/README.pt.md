# Introdução ao GitHub

Esta lição cobre os fundamentos do GitHub, uma plataforma para hospedar e gerenciar alterações em seu código.

![Intro ao Github](images/webdev101-github.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz Pré-Aula](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/3)

## Introdução

Nesta lição vamos falar sobre:

- rastreando o trabalho que você faz em sua máquina
- trabalhando em projetos com outros
- como contribuir com software de código aberto

### Pré-requisitos

Antes de começar, você precisará verificar se o Git está instalado. No terminal, digite: 
`git --version`

Se o Git não estiver instalado, [baixe o Git aqui](https://git-scm.com/downloads). Em seguida, configure seu perfil Git local no terminal:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Para verificar se o Git já está configurado, você pode digitar:
`git config --list`

Você também precisará de uma conta do GitHub, um editor de código (como o Visual Studio Code) e abrir seu terminal (ou: prompt de comando).

Navegue para [github.com](https://github.com/) e crie uma conta, caso ainda não o tenha feito, ou faça login e preencha o seu perfil. 

✅ O GitHub não é o único repositório de código do mundo; existem outros, mas o GitHub é o mais conhecido

### Preparação

Você precisará de uma pasta com um projeto de código em sua máquina local (laptop ou PC) e de um repositório público no GitHub, que servirá como um exemplo de como contribuir com os projetos de outras pessoas. 

---

## Gerenciamento de código

Digamos que você tenha uma pasta localmente com algum projeto de código e deseja começar a monitorar seu progresso usando git - o sistema de controle de versão. Algumas pessoas comparam o uso do git a escrever uma carta de amor para o seu futuro eu. Lendo suas mensagens de commit dias, semanas ou meses depois, você será capaz de se lembrar por que tomou uma decisão, ou "reverter" uma mudança - isto é, quando você escreve boas "mensagens de commit".

### Tarefa: Faça um repositório e conmmit o código

1. **Crie um repositório no GitHub**. No GitHub.com, na guia de repositórios ou na barra de navegação superior direita, encontre o botão **new repo** .

   1. Dê um nome ao seu repositório (pasta) 
   1. Selecione **create repository**.

1. **Navegue até sua pasta de trabalho**. Em seu terminal, mude para a pasta (também conhecida como diretório) que deseja iniciar o rastreamento. Digite:

   ```bash
   cd [nome da sua pasta]
   ```

1. **Inicialize um repositório git**. No seu projeto, digite:

   ```bash
   git init
   ```

1. **Cheque status**. Para checar o status de seu repositório, digite:

   ```bash
   git status
   ```

   a saída pode ser parecida com esta:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Geralmente o comando `git status` diz a você coisas como quais arquivos estão prontos para serem _salvos_ para o repo ou tem alterações que você pode querer persistir.

1. **Adicionar todos os arquivos para rastreamento**
   Isso também é chamado de arquivos de teste / adição de arquivos à área de teste.

   ```bash
   git add .
   ```

   O argumento `git add` plus `.` indiciona todos os seus arquivos e alterações para rastreamento. 

1. **Adicionar arquivos selecionados para rastreamento**

   ```bash
   git add [nome do arquivo ou pasta]
   ```

Isso nos ajuda a adicionar apenas os arquivos selecionados à área de teste quando não queremos enviar todos os arquivos de uma vez.

1. **Unstage todos os arquivos**

   ```bash
   git reset
   ```
   Este comando nos ajuda a unstage todos os arquivos de uma vez.

1. **Unstage um arquivo em particular**

   ```bash
   git reset [nome do arquivo ou pasta]
   ```

   Este comando nos ajuda a remover stage de apenas um arquivo específico de uma vez que não queremos incluir no próximo commit.

1. **Persistindo no seu trabalho**. Neste ponto, você adicionou os arquivos a um local chamado _staging area_. Um lugar onde o Git está rastreando seus arquivos. Para tornar a mudança permanente, você precisa _committar_ os arquivos. Para fazer isso, crie um _commit_ com o comando `git commit`. Um _commit_ representa um ponto na história do seu repo sendo salvo. Digite o seguinte para criar um _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Isso confirma todos os seus arquivos, adicionando a mensagem "first commit" (primeiro commit). Para mensagens de commit futuras, você desejará ser mais descritiva em sua descrição para transmitir que tipo de mudança você fez.

1. **Conecte seu repositório Git local com GitHub**. Um repositório Git é bom em sua máquina, mas em algum momento você vai querer fazer backup de seus arquivos em algum lugar e também convidar outras pessoas para trabalhar com você em seu repositório. Um ótimo lugar para fazer isso é o GitHub. Lembre-se de que já criamos um repositório no GitHub, então a única coisa que precisamos fazer é conectar nosso repositório Git local ao GitHub. O comando `git remote add` fará exatamente isso. Digite o seguinte comando:

   > Antes de digitar o comando, vá para a página do repositório GitHub para encontrar o URL do repositório. Você o usará no comando abaixo. Substitua `repository_name` pelo seu URL do GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Isso cria um _remote_, ou conexão, chamada "origin" apontando para o repositório GitHub que você criou anteriormente.

1. **Envie arquivos locais para GitHub**. Até agora, você criou uma _conexão_ entre o repositório local e o repositório GitHub. Vamos enviar esses arquivos para o GitHub com o seguinte comando `git push`, assim: 

   ```bash
   git push -u origin main
   ```

   Isso envia seus commits em seu branch "principal" para o GitHub.

1. **Para adicionar mais mudanças**. Se quiser continuar fazendo alterações e enviando-as para o GitHub, você só precisará usar os três comandos a seguir:

   ```bash
   git add .
   git commit -m "digite sua mensagem de commit aqui"
   git push
   ```

   > Dica, você também pode adotar um arquivo `.gitignore` para evitar que arquivos que você não deseja rastrear apareçam no GitHub - como aquele arquivo de notas que você armazena na mesma pasta, mas não tem lugar em um repositório público. Você pode encontrar modelos para arquivos `.gitignore` em [modelos .gitignore](https://github.com/github/gitignore).

#### Mensagens de Commit 

Uma ótima mensagem de Git commit completa a seguinte frase:
Se aplicado, este commit irá <sua mensagem de commit aqui>

Para o assunto use o tempo presente imperativo: "mudar" e não "mudou" nem "muda".
Assim como no sujeito, no corpo (opcional) também use o tempo presente imperativo. O corpo deve incluir a motivação para a mudança e contrastar isso com o comportamento anterior. Você está explicando o `porquê`, não o` como`.

✅ Reserve alguns minutos para navegar no GitHub. Você consegue encontrar uma mensagem de commit realmente ótima? Você pode encontrar uma ruim? Quais informações você acha que são as mais importantes e úteis para transmitir em uma mensagem de commit?

### Tarefa: Colabore

O principal motivo para colocar coisas no GitHub foi possibilitar a colaboração com outros desenvolvedores.

## Trabalhando em projetos com outras pessoas

Em seu repositório, navegue até `Insights> Community` para ver como seu projeto se compara aos padrões recomendados da comunidade.

   Aqui estão algumas coisas que podem melhorar seu repositório GitHub: 
   - **Descrição**. Você adicionou uma descrição para o seu projeto?
   - **README**. Você adicionou um README? O GitHub fornece orientação para escrever um [README](https://docs.github.com/articles/about-readmes/).
   - **Guia de Contribuição**. Seu projeto tem um [guia para contribuição](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Código de Conduta**. Um [Código de Conduta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Licença**. Talvez o mais importante, a [licença](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Todos esses recursos irão beneficiar a integração de novos membros da equipe. E esses são normalmente o tipo de coisas que os novas pessoas colaboradoras olham antes mesmo de olhar para o seu código, para descobrir se o seu projeto é o lugar certo para elas passarem o tempo.

✅ Arquivos README, embora levem tempo para serem preparados, são freqüentemente negligenciados por pessoas mantenedores ocupadas. Você pode encontrar um exemplo particularmente descritivo? Nota: existem algumas [ferramentas para ajudar a criar bons READMEs](https://www.makeareadme.com/) que você pode querer experimentar.

### Task: Merge some code

Contributing docs help people contribute to the project. It explains what types of contributions you're looking for and how the process works. Contributors will need to go through a series of steps to be able to contribute to your repo on GitHub:


1. **Forking your repo** You will probably want people to _fork_ your project. Forking means creating a replica of your repository on their GitHub profile.
1. **Clone**. From there they will clone the project to their local machine. 
1. **Create a branch**. You will want to ask them to create a _branch_ for their work. 
1. **Focus their change on one area**. Ask contributors to concentrate their contributions on one thing at a time - that way the chances that you can _merge_ in their work is higher. Imagine they write a bug fix, add a new feature, and update several tests - what if you want to, or can only implement 2 out of 3, or 1 out of 3 changes?

✅ Imagine a situation where branches are particularly critical to writing and shipping good code. What use cases can you think of?

> Note, be the change you want to see in the world, and create branches for your own work as well. Any commits you make will be made on the branch you’re currently “checked out” to. Use `git status` to see which branch that is.

Let's go through a contributor workflow. Assume the contributor has already _forked_ and _cloned_ the repo so they have a Git repo ready to be worked on, on their local machine:

1. **Create a branch**. Use the command `git branch` to create a branch that will contain the changes they mean to contribute:

   ```bash
   git branch [branch-name]
   ```

1. **Switch to working branch**. Switch to the specified branch and update the working directory with `git checkout`:

   ```bash
   git checkout [branch-name]
   ```

1. **Do work**. At this point you want to add your changes. Don't forget to tell Git about it with the following commands:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Ensure you give your commit a good name, for your sake as well as the maintainer of the repo you are helping on.

1. **Combine your work with the `main` branch**. At some point you are done working and you want to combine your work with that of the `main` branch. The `main` branch might have changed meanwhile so make sure you first update it to the latest with the following commands:

   ```bash
   git checkout main
   git pull
   ```

   At this point you want to make sure that any _conflicts_, situations where Git can't easily _combine_ the changes happens in your working branch. Therefore run the following commands:

   ```bash
   git checkout [branch_name]
   git merge main
   ```

   This will bring in all changes from `main` into your branch and hopefully you can just continue. If not, VS Code will tell you where Git is _confused_ and you just alter the affected files to say which content is the most accurate.

1. **Send your work to GitHub**. Sending your work to GitHub means two things. Pushing your branch to your repo and then open up a PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   The above command creates the branch on your forked repo.

1. **Open a PR**. Next, you want to open up a PR. You do that by navigating to the forked repo on GitHub. You will see an indication on GitHub where it asks whether you want to create a new PR, you click that and you are taken to an interface where you can change commit message title, give it a more suitable description. Now the maintainer of the repo you forked will see this PR and _fingers crossed_ they will appreciate and _merge_ your PR. You are now a contributor, yay :)

1. **Clean up**. It's considered good practice to _clean up_ after you successfully merge a PR. You want to clean up both your local branch and the branch you pushed to GitHub. First let's delete it locally with the following command: 

   ```bash
   git branch -d [branch-name]
   ```

   Ensure you go the GitHub page for the forked repo next and remove the remote branch you just pushed to it.

`Pull request` seems like a silly term because really you want to push your changes to the project. But the maintainer (project owner) or core team needs to consider your changes before merging it with the project's "main" branch, so you're really requesting a change decision from a maintainer.  

A pull request is the place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more. A good pull request follows roughly the same rules as a commit message. You can add a reference to an issue in the issue tracker, when your work for instance fixes an issue. This is done using a `#` followed by the number of your issue. For example `#97`.

🤞Fingers crossed that all checks pass and the project owner(s) merge your changes into the project🤞

Update your current local working branch with all new commits from the corresponding remote branch on GitHub:

`git pull`

## How to contribute to open source

First, let's find a repository (or **repo**) on GitHub of interest to you and to which you'd like to contribute a change. You will want to copy its contents to your machine.

✅ A good way to find 'beginner-friendly' repos is to [search by the tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copy a repo locally](images/clone_repo.png)

There are several ways of copying code. One way is to "clone" the contents of the repository, using HTTPS, SSH, or using the GitHub CLI (Command Line Interface). 

Open your terminal and clone the repository like so:
`git clone https://github.com/ProjectURL`

To work on the project, switch to the right folder:
`cd ProjectURL`

You can also open the entire project using [Codespaces](https://github.com/features/codespaces), GitHub's embedded code editor / cloud development environment, or [GitHub Desktop](https://desktop.github.com/).

Lastly, you can download the code in a zipped folder. 

### A few more interesting things about GitHub

You can star, watch and/or "fork" any public repository on GitHub. You can find your starred repositories in the top-right drop-down menu. It's like bookmarking, but for code. 

Projects have an issue tracker, mostly on GitHub in the "Issues" tab unless indicated otherwise, where people discuss issues related to the project. And the Pull Requests tab is where people discuss and review changes that are in progress.

Projects might also have discussion in forums, mailing lists, or chat channels like Slack, Discord or IRC.

✅ Take a look around your new GitHub repo and try a few things, like editing settings, adding information to your repo, and creating a project (like a Kanban board). There's a lot you can do!

---

## 🚀 Challenge 

Pair with a friend to work on each other's code. Create a project collaboratively, fork code, create branches, and merge changes.

## Post-Lecture Quiz
[Post-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/4)

## Review & Self Study

Read more about [contributing to open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Practice, practice, practice. GitHub has great learning paths available via [lab.github.com](https://lab.github.com/):

- [First Week on GitHub](https://lab.github.com/githubtraining/first-week-on-github)

You'll also find more advanced labs. 

## Assignment 

Complete [the First Week on GitHub training lab](https://lab.github.com/githubtraining/first-week-on-github)
