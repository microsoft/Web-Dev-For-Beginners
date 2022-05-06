# Introdução ao GitHub

Esta lição cobre os fundamentos do GitHub, uma plataforma para hospedar e gerenciar alterações em seu código.

![Intro ao GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz Pré-Aula](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/3)

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

✅ O GitHub não é o único repositório de código do mundo; existem outros, mas o GitHub é o mais conhecido.

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

### Tarefa: Dar merge em algum código

Documentos contribuintes ajudam as pessoas a contribuir para o projeto. Ele explica quais tipos de contribuições você está procurando e como funciona o processo. As pessoas colaboradoras precisarão seguir uma série de etapas para poder contribuir com seu repo no GitHub:


 1. **Bifurcando seu repo** Você provavelmente vai querer que as pessoas _fork_ seu projeto. Bifurcação significa criar uma réplica de seu repositório em seu perfil GitHub.
1. **Clone**. A partir daí, elas clonarão o projeto em sua máquina local.
1. **Crie um branch**. Você vai querer pedir a elas que criem um _branch_ para seu trabalho.
1. **Concentre sua mudança em uma área**. Peça aos colaboradores para concentrarem suas contribuições em uma coisa de cada vez - dessa forma, as chances de você se _mergir_ no trabalho delas são maiores. Imagine que elas escrevam uma correção de bug, adicionem um novo recurso e atualizem vários testes - e se você quiser ou só puder implementar 2 de 3, ou 1 de 3 alterações?

✅ Imagine uma situação em que os branches são particularmente críticos para escrever e distribuir bons códigos. Em quais casos de uso você consegue pensar?

> Nota, seja a mudança que você deseja ver no mundo e crie ramificações para o seu próprio trabalho também. Todos os commits que você fizer serão feitos no branch em que você está atualmente “check-out”. Use `git status` para ver qual branch é.

Vamos analisar o fluxo de trabalho de uma pessoa colaboradora. Suponha que ela já _forked_ e _cloned_ o repo para que ela tenha um repositório Git pronto para ser trabalhado, em sua máquina local:

1. **Crie um brancj**. Use o comando `git branch` para criar um branch que conterá as mudanças que pretendem contribuir:

   ```bash
   git branch [branch-name]
   ```

1. **Mudar para o branch de trabalho**. Mude para o branch especificado e atualize o diretório de trabalho com `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Trabalhe**. Neste ponto, você deseja adicionar suas alterações. Não se esqueça de contar ao Git sobre isso com os seguintes comandos:

   ```bash
   git add .
   git commit -m "minhas mudancas"
   ```

   Certifique-se de dar ao seu commit um bom nome, para seu bem e também para os mantenedores do repo no qual você está ajudando.

1. **Combine seu trabalho com o branch `main`**. Em algum ponto, você concluiu o trabalho e deseja combinar seu trabalho com o do branch `principal`. O branch `main` pode ter mudado enquanto isso, certifique-se de primeiro atualizá-lo para o mais recente com os seguintes comandos:

   ```bash
   git switch main
   git pull
   ```

   Neste ponto, você quer ter certeza de que quaisquer _conflitos_, situações em que o Git não pode _combinar_ facilmente as mudanças aconteçam em seu branch de trabalho. Portanto, execute os seguintes comandos:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Isso trará todas as mudanças de `main` em seu branch e esperançosamente você pode simplesmente continuar. Caso contrário, o VS Code dirá onde o Git está _confundido_ e você apenas alterará os arquivos afetados para dizer qual conteúdo é o mais preciso.

1. **Envie seu trabalho para o GitHub**. Enviar seu trabalho para o GitHub significa duas coisas. Enviando seu branch para o repo e, em seguida, abra um PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

    O comando acima cria o branch em seu repositório bifurcado.

1. **Abra um PR**. Em seguida, você deseja abrir um PR. Você faz isso navegando até o repositório bifurcado no GitHub. Você verá uma indicação no GitHub onde pergunta se você deseja criar um novo PR, você clica nele e é levado a uma interface onde pode alterar o título da mensagem de commit, dê-lhe uma descrição mais adequada. Agora, a mantenedora do repo que você bifurcou verá este PR e _dedos cruzados_, eles apreciarão e _mergirão_ seu PR. Agora você é uma pessoa contribuidora, eba :)

1. **Limpeza**. É considerado uma boa prática _limpar_ após mesclar com sucesso um PR. Você deseja limpar seu branch local e o branch que você enviou para o GitHub. Primeiro, vamos excluí-lo localmente com o seguinte comando:

   ```bash
   git branch -d [branch-name]
   ```

   Em seguida, vá para a página GitHub do repositório bifurcado e remova o branch remoto que você acabou de enviar para ele.

`Pull request` parece um termo bobo porque na verdade você deseja enviar suas alterações para o projeto. Mas a pessoa mantendo o repo ou equipe central precisa considerar suas mudanças antes de fundi-las com o branch "principal" do projeto, então você está realmente solicitando uma decisão de mudança de uma pessoa mantenedora. 

Uma PR é o lugar para comparar e discutir as diferenças introduzidas em um branch com revisões, comentários, testes integrados e muito mais. Uma boa PR segue aproximadamente as mesmas regras de uma mensagem de commit. Você pode adicionar uma referência a um problema no rastreador de problemas, quando seu trabalho, por exemplo, corrige um problema. Isso é feito usando um `#` seguido pelo número do seu problema. Por exemplo `# 97`.

🤞 Dedos cruzados para que todas as verificações sejam aprovadas e as pessoas proprietárias do projeto deem merge nas suas alterações no projeto 🤞

Atualize seu branch de trabalho local atual com todos os novos commits do branch remoto correspondente no GitHub:

`git pull`

## Como contribuir com Open Source

Primeiramente, vamos encontrar um repositório (ou **repo**) no GitHub de interesse para você e para o qual você gostaria de contribuir. Você vai querer copiar o conteúdo desse repo para a sua máquina.

✅ Uma boa maneira de encontrar repos 'iniciantes' é [buscar usando a tag  'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copiar um repo localmente](../images/clone_repo.png)

Existem várias maneiras de copiar códigos. Uma maneira é "clonar" o conteúdo do repositório, usando HTTPS, SSH ou usando o GitHub CLI (Command Line Interface). 

Abra seu terminal e clone o repositório assim:
`git clone https://github.com/ProjectURL`

Para trabalhar no projeto, mude para a pasta certa:
`cd ProjectURL`

Você também pode abrir todo o projeto usando [Codespaces](https://github.com/features/codespaces), O editor de código incorporado do GitHub/ ambiente de desenvolvimento em nuvem, ou o [GitHub Desktop](https://desktop.github.com/).

Por último, você pode baixar o código em uma pasta como .zip.

###  Mais algumas coisas interessantes sobre o GitHub

Você pode dar uma estrela, assistir e/ou "bifurcação" em qualquer repositório público no GitHub. Você pode encontrar seus repositórios estrelados no menu suspenso de cima para a direita. É como marcar, mas para código. 

Os projetos têm um rastreador de problemas, no GitHub na aba "Problemas", a menos que indicado o contrário, onde as pessoas discutem questões relacionadas ao projeto. E a aba de Pull Requests é onde as pessoas discutem e analisam as mudanças que estão em andamento.

Os projetos também podem ter discussão em fóruns, listas de discussão ou canais de bate-papo como Slack, Discord ou IRC.

✅ Dê uma olhada no seu novo GitHub repo e experimente algumas coisas, como editar configurações, adicionar informações ao seu repo e criar um projeto (como uma placa Kanban). Há muita coisa que você pode fazer!

---

## 🚀 Desafio 

Parear com uma amiga para trabalhar no código uma da outra. Crie um projeto de forma colaborativa, de fork no código, crie branches e de merge mudanças.

## Quiz pós-aula
[Quiz pós-aula](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/4)

## Revisão & Auto estudo

Leia mais sobre [contribuindo para o software de código aberto](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratique, pratique, pratique. GitHub tem ótimos caminhos de aprendizagem disponíveis via [lab.github.com](https://lab.github.com/):

- [Primeira semana no GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Você também encontrará laboratórios mais avançados.

## Lição de casa

Complete [o lab a Primeira Semana gitHub](https://lab.github.com/githubtraining/first-week-on-github)