<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T13:52:46+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "pt"
}
-->
# Introdução ao GitHub

Esta lição aborda os fundamentos do GitHub, uma plataforma para hospedar e gerir alterações no seu código.

![Introdução ao GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.pt.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Lição
[Questionário pré-lição](https://ff-quizzes.netlify.app)

## Introdução

Nesta lição, vamos abordar:

- como acompanhar o trabalho que faz na sua máquina
- como trabalhar em projetos com outras pessoas
- como contribuir para software de código aberto

### Pré-requisitos

Antes de começar, verifique se o Git está instalado. No terminal, digite: 
`git --version`

Se o Git não estiver instalado, [faça o download do Git](https://git-scm.com/downloads). Depois, configure o seu perfil local do Git no terminal:
* `git config --global user.name "seu-nome"`
* `git config --global user.email "seu-email"`

Para verificar se o Git já está configurado, pode digitar:
`git config --list`

Também precisará de uma conta no GitHub, um editor de código (como o Visual Studio Code) e de abrir o seu terminal (ou prompt de comando).

Acesse [github.com](https://github.com/) e crie uma conta, caso ainda não tenha uma, ou faça login e preencha o seu perfil.

✅ O GitHub não é o único repositório de código no mundo; existem outros, mas o GitHub é o mais conhecido.

### Preparação

Vai precisar de uma pasta com um projeto de código na sua máquina local (portátil ou PC) e de um repositório público no GitHub, que servirá como exemplo de como contribuir para os projetos de outras pessoas.

---

## Gestão de código

Imagine que tem uma pasta local com um projeto de código e quer começar a acompanhar o seu progresso usando o Git - o sistema de controlo de versões. Algumas pessoas comparam usar o Git a escrever uma carta de amor para o seu "eu" futuro. Ao ler as mensagens de commit dias, semanas ou meses depois, será capaz de recordar por que tomou uma decisão ou "reverter" uma alteração - isto é, quando escreve boas "mensagens de commit".

### Tarefa: Criar um repositório e fazer commit de código  

> Veja o vídeo
> 
> [![Vídeo sobre os fundamentos do Git e GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Criar um repositório no GitHub**. No GitHub.com, na aba de repositórios ou na barra de navegação no canto superior direito, encontre o botão **novo repositório**.

   1. Dê um nome ao seu repositório (pasta).
   1. Selecione **criar repositório**.

1. **Navegar até à sua pasta de trabalho**. No terminal, mude para a pasta (também conhecida como diretório) que deseja começar a acompanhar. Digite:

   ```bash
   cd [name of your folder]
   ```

1. **Inicializar um repositório Git**. No seu projeto, digite:

   ```bash
   git init
   ```

1. **Verificar o estado**. Para verificar o estado do seu repositório, digite:

   ```bash
   git status
   ```

   A saída pode ser algo como isto:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Normalmente, o comando `git status` informa coisas como quais ficheiros estão prontos para serem _salvos_ no repositório ou têm alterações que talvez queira persistir.

1. **Adicionar todos os ficheiros para acompanhamento**
   Isto também é chamado de "staging files" ou adicionar ficheiros à área de staging.

   ```bash
   git add .
   ```

   O comando `git add` com o argumento `.` indica que todos os seus ficheiros e alterações serão acompanhados.

1. **Adicionar ficheiros selecionados para acompanhamento**

   ```bash
   git add [file or folder name]
   ```

   Isto ajuda a adicionar apenas ficheiros selecionados à área de staging quando não quer fazer commit de todos os ficheiros de uma vez.

1. **Remover todos os ficheiros da área de staging**

   ```bash
   git reset
   ```

   Este comando ajuda a remover todos os ficheiros da área de staging de uma vez.

1. **Remover um ficheiro específico da área de staging**

   ```bash
   git reset [file or folder name]
   ```

   Este comando ajuda a remover apenas um ficheiro específico da área de staging que não quer incluir no próximo commit.

1. **Persistir o seu trabalho**. Neste ponto, já adicionou os ficheiros a uma área chamada _staging area_. Um local onde o Git está a acompanhar os seus ficheiros. Para tornar a alteração permanente, precisa de _fazer commit_ dos ficheiros. Para isso, crie um _commit_ com o comando `git commit`. Um _commit_ representa um ponto de salvamento na história do seu repositório. Digite o seguinte para criar um _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Isto faz commit de todos os seus ficheiros, adicionando a mensagem "primeiro commit". Para mensagens de commit futuras, será melhor ser mais descritivo na sua descrição para transmitir que tipo de alteração fez.

1. **Conectar o seu repositório Git local ao GitHub**. Um repositório Git é útil na sua máquina, mas em algum momento vai querer ter um backup dos seus ficheiros noutro lugar e também convidar outras pessoas para trabalhar consigo no repositório. Um ótimo lugar para isso é o GitHub. Lembre-se de que já criámos um repositório no GitHub, então só precisamos de conectar o repositório Git local ao GitHub. O comando `git remote add` fará isso. Digite o seguinte comando:

   > Nota: Antes de digitar o comando, vá à página do seu repositório no GitHub para encontrar o URL do repositório. Vai usá-lo no comando abaixo. Substitua ```https://github.com/username/repository_name.git``` pelo URL do seu GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Isto cria um _remote_, ou conexão, chamado "origin", apontando para o repositório GitHub que criou anteriormente.

1. **Enviar ficheiros locais para o GitHub**. Até agora, criou uma _conexão_ entre o repositório local e o repositório GitHub. Vamos enviar estes ficheiros para o GitHub com o seguinte comando `git push`, assim:

   > Nota: O nome da sua branch pode ser diferente por padrão de ```main```.

   ```bash
   git push -u origin main
   ```

   Isto envia os seus commits na branch "main" para o GitHub. Definir a branch `upstream`, incluindo `-u` no comando, estabelece um link entre a sua branch local e a branch remota, para que possa simplesmente usar git push ou git pull sem especificar o nome da branch no futuro. O Git usará automaticamente a branch upstream e não precisará de especificar o nome da branch explicitamente em comandos futuros.

2. **Adicionar mais alterações**. Se quiser continuar a fazer alterações e enviá-las para o GitHub, só precisará de usar os seguintes três comandos:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Dica: Também pode querer adotar um ficheiro `.gitignore` para evitar que ficheiros que não quer acompanhar apareçam no GitHub - como aquele ficheiro de notas que guarda na mesma pasta, mas que não tem lugar num repositório público. Pode encontrar modelos para ficheiros `.gitignore` em [.gitignore templates](https://github.com/github/gitignore).

#### Mensagens de commit

Uma ótima linha de assunto para um commit do Git completa a seguinte frase:
Se aplicado, este commit irá <aqui a sua linha de assunto>

Para o assunto, use o imperativo no presente: "alterar" em vez de "alterado" ou "altera". 
Tal como no assunto, no corpo (opcional) também use o imperativo no presente. O corpo deve incluir a motivação para a alteração e contrastá-la com o comportamento anterior. Está a explicar o `porquê`, não o `como`.

✅ Dedique alguns minutos a explorar o GitHub. Consegue encontrar uma mensagem de commit realmente boa? Consegue encontrar uma muito minimalista? Que informações acha que são mais importantes e úteis de transmitir numa mensagem de commit?

### Tarefa: Colaborar

A principal razão para colocar coisas no GitHub foi tornar possível colaborar com outros programadores.

## Trabalhar em projetos com outras pessoas

> Veja o vídeo
>
> [![Vídeo sobre os fundamentos do Git e GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

No seu repositório, navegue até `Insights > Community` para ver como o seu projeto se compara aos padrões recomendados para a comunidade.

   Aqui estão algumas coisas que podem melhorar o seu repositório GitHub:
   - **Descrição**. Adicionou uma descrição ao seu projeto?
   - **README**. Adicionou um README? O GitHub fornece orientações para escrever um [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Diretrizes de contribuição**. O seu projeto tem [diretrizes de contribuição](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Código de Conduta**. Um [Código de Conduta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/).
   - **Licença**. Talvez o mais importante, uma [licença](https://docs.github.com/articles/adding-a-license-to-a-repository/).

Todos estes recursos beneficiarão a integração de novos membros da equipa. E são tipicamente o tipo de coisas que novos contribuidores olham antes mesmo de ver o seu código, para descobrir se o seu projeto é o lugar certo para eles dedicarem o seu tempo.

✅ Ficheiros README, embora levem tempo a preparar, são frequentemente negligenciados por mantenedores ocupados. Consegue encontrar um exemplo de um particularmente descritivo? Nota: existem algumas [ferramentas para ajudar a criar bons READMEs](https://www.makeareadme.com/) que pode querer experimentar.

### Tarefa: Fazer merge de algum código

Documentos de contribuição ajudam as pessoas a contribuir para o projeto. Explicam que tipos de contribuições está a procurar e como funciona o processo. Os contribuidores precisarão de passar por uma série de etapas para poderem contribuir para o seu repositório no GitHub:

1. **Fazer fork do seu repositório**. Provavelmente vai querer que as pessoas _façam fork_ do seu projeto. Fazer fork significa criar uma réplica do seu repositório no perfil GitHub delas.
1. **Clonar**. A partir daí, vão clonar o projeto para a máquina local delas.
1. **Criar uma branch**. Vai querer pedir-lhes que criem uma _branch_ para o trabalho delas.
1. **Focar a alteração numa área**. Peça aos contribuidores para concentrarem as contribuições deles numa coisa de cada vez - assim, as chances de conseguir _fazer merge_ do trabalho deles são maiores. Imagine que escrevem uma correção de bug, adicionam uma nova funcionalidade e atualizam vários testes - e se quiser implementar apenas 2 de 3 ou 1 de 3 alterações?

✅ Imagine uma situação em que as branches são particularmente críticas para escrever e enviar bom código. Que casos de uso consegue imaginar?

> Nota: Seja a mudança que quer ver no mundo e crie branches para o seu próprio trabalho também. Qualquer commit que fizer será feito na branch em que está atualmente "checkout". Use `git status` para ver em que branch está.

Vamos passar por um fluxo de trabalho de contribuidores. Assuma que o contribuidor já fez _fork_ e _clone_ do repositório, então tem um repositório Git pronto para trabalhar na máquina local:

1. **Criar uma branch**. Use o comando `git branch` para criar uma branch que conterá as alterações que pretende contribuir:

   ```bash
   git branch [branch-name]
   ```

1. **Mudar para a branch de trabalho**. Mude para a branch especificada e atualize o diretório de trabalho com `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Fazer alterações**. Neste ponto, quer adicionar as suas alterações. Não se esqueça de informar o Git com os seguintes comandos:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Certifique-se de dar um bom nome ao seu commit, para seu benefício e para o mantenedor do repositório que está a ajudar.

1. **Combinar o seu trabalho com a branch `main`**. Em algum momento, termina o trabalho e quer combinar o seu trabalho com o da branch `main`. A branch `main` pode ter mudado entretanto, então certifique-se de primeiro atualizá-la para a versão mais recente com os seguintes comandos:

   ```bash
   git switch main
   git pull
   ```

   Neste ponto, quer garantir que quaisquer _conflitos_, situações em que o Git não consegue facilmente _combinar_ as alterações, aconteçam na sua branch de trabalho. Portanto, execute os seguintes comandos:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   O comando `git merge main` trará todas as alterações da `main` para a sua branch. Esperemos que possa simplesmente continuar. Caso contrário, o VS Code dirá onde o Git está _confuso_ e só precisa de alterar os ficheiros afetados para indicar qual conteúdo é o mais preciso.

   Para mudar para uma branch diferente, use o comando moderno `git switch`:
   ```bash
   git switch [branch_name]


1. **Enviar o seu trabalho para o GitHub**. Enviar o seu trabalho para o GitHub significa duas coisas: enviar a sua branch para o seu repositório e depois abrir um PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   O comando acima cria a branch no seu repositório com fork.
1. **Abrir um PR**. O próximo passo é abrir um PR. Para isso, navegue até o repositório que foi bifurcado no GitHub. No GitHub, verá uma indicação perguntando se deseja criar um novo PR. Clique nessa opção e será levado para uma interface onde pode alterar o título da mensagem de commit e adicionar uma descrição mais adequada. Agora, o mantenedor do repositório que bifurcou verá este PR e, _dedos cruzados_, irá apreciar e _fazer merge_ do seu PR. Parabéns, agora é um colaborador, yay :)

1. **Limpar**. É considerado uma boa prática _limpar_ depois de conseguir fazer merge de um PR. Deve limpar tanto a sua branch local como a branch que enviou para o GitHub. Primeiro, vamos eliminá-la localmente com o seguinte comando:

   ```bash
   git branch -d [branch-name]
   ```
  
   Certifique-se de ir à página do GitHub do repositório bifurcado e remover a branch remota que acabou de enviar.

`Pull request` parece um termo estranho porque, na verdade, quer enviar as suas alterações para o projeto. Mas o mantenedor (proprietário do projeto) ou a equipa principal precisa considerar as suas alterações antes de fazer merge com a branch "main" do projeto. Portanto, está realmente a solicitar uma decisão de alteração ao mantenedor.

Um pull request é o local onde se comparam e discutem as diferenças introduzidas numa branch, com revisões, comentários, testes integrados e mais. Um bom pull request segue aproximadamente as mesmas regras de uma mensagem de commit. Pode adicionar uma referência a um problema no rastreador de problemas, por exemplo, quando o seu trabalho resolve um problema. Isto é feito usando um `#` seguido do número do problema. Por exemplo, `#97`.

🤞Dedos cruzados para que todos os testes passem e o(s) proprietário(s) do projeto façam merge das suas alterações no projeto🤞

Atualize a sua branch local de trabalho com todos os novos commits da branch remota correspondente no GitHub:

`git pull`

## Como contribuir para open source

Primeiro, vamos encontrar um repositório (ou **repo**) no GitHub que seja do seu interesse e ao qual gostaria de contribuir com uma alteração. Deve copiar o conteúdo para a sua máquina.

✅ Uma boa forma de encontrar repositórios 'amigáveis para iniciantes' é [procurar pela tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copiar um repositório localmente](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.pt.png)

Existem várias formas de copiar código. Uma delas é "clonar" o conteúdo do repositório, usando HTTPS, SSH ou o GitHub CLI (Interface de Linha de Comando).

Abra o terminal e clone o repositório assim:  
`git clone https://github.com/ProjectURL`

Para trabalhar no projeto, mude para a pasta correta:  
`cd ProjectURL`

Também pode abrir o projeto inteiro usando [Codespaces](https://github.com/features/codespaces), o editor de código integrado / ambiente de desenvolvimento na nuvem do GitHub, ou [GitHub Desktop](https://desktop.github.com/).

Por fim, pode fazer o download do código num ficheiro zipado.

### Algumas coisas interessantes sobre o GitHub

Pode marcar com estrela, seguir e/ou "bifurcar" qualquer repositório público no GitHub. Pode encontrar os seus repositórios marcados com estrela no menu suspenso no canto superior direito. É como guardar nos favoritos, mas para código.

Os projetos têm um rastreador de problemas, geralmente no GitHub na aba "Issues", salvo indicação em contrário, onde as pessoas discutem problemas relacionados ao projeto. E a aba Pull Requests é onde as pessoas discutem e revisam alterações que estão em progresso.

Os projetos também podem ter discussões em fóruns, listas de e-mails ou canais de chat como Slack, Discord ou IRC.

✅ Explore o seu novo repositório no GitHub e experimente algumas coisas, como editar configurações, adicionar informações ao repositório e criar um projeto (como um quadro Kanban). Há muito que pode fazer!

---

## 🚀 Desafio

Trabalhe em parceria com um amigo no código um do outro. Criem um projeto colaborativo, bifurquem o código, criem branches e façam merge das alterações.

## Questionário Pós-Aula  
[Questionário pós-aula](https://ff-quizzes.netlify.app/web/en/)

## Revisão & Autoestudo

Leia mais sobre [como contribuir para software open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Cheatsheet de Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratique, pratique, pratique. O GitHub tem ótimos percursos de aprendizagem disponíveis em [skills.github.com](https://skills.github.com):

- [Primeira Semana no GitHub](https://skills.github.com/#first-week-on-github)

Também encontrará cursos mais avançados.

## Tarefa

Complete o curso [Primeira Semana no GitHub](https://skills.github.com/#first-week-on-github)

---

**Aviso**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, é importante notar que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.