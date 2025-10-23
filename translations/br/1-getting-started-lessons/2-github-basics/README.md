<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-22T23:04:10+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "br"
}
-->
# Introdução ao GitHub

Olá, futuro desenvolvedor! 👋 Pronto para se juntar a milhões de programadores ao redor do mundo? Estou genuinamente empolgado para te apresentar ao GitHub – pense nele como uma rede social para programadores, mas em vez de compartilhar fotos do seu almoço, compartilhamos código e construímos coisas incríveis juntos!

Aqui está algo que me deixa impressionado: todos os aplicativos no seu celular, todos os sites que você visita e a maioria das ferramentas que você aprenderá a usar foram criados por equipes de desenvolvedores colaborando em plataformas como o GitHub. Aquele app de música que você adora? Alguém como você contribuiu para ele. Aquele jogo que você não consegue largar? Sim, provavelmente foi construído com colaboração no GitHub. E agora VOCÊ vai aprender como fazer parte dessa comunidade incrível!

Eu sei que isso pode parecer muita coisa no começo – eu mesmo lembro de olhar para minha primeira página no GitHub e pensar "O que tudo isso significa?". Mas aqui está o segredo: todo desenvolvedor começou exatamente onde você está agora. Até o final desta lição, você terá seu próprio repositório no GitHub (pense nele como sua vitrine pessoal de projetos na nuvem) e saberá como salvar seu trabalho, compartilhá-lo com outros e até contribuir para projetos que milhões de pessoas usam.

Vamos embarcar nessa jornada juntos, passo a passo. Sem pressa, sem pressão – apenas você, eu e algumas ferramentas muito legais que estão prestes a se tornar suas melhores amigas!

![Introdução ao GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.br.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz pré-aula](https://ff-quizzes.netlify.app)

## Introdução

Antes de mergulharmos nas partes realmente empolgantes, vamos preparar seu computador para a mágica do GitHub! Pense nisso como organizar seus materiais de arte antes de criar uma obra-prima – ter as ferramentas certas prontas torna tudo muito mais fácil e divertido.

Vou te guiar por cada etapa da configuração pessoalmente, e prometo que não é tão intimidador quanto parece à primeira vista. Se algo não fizer sentido de imediato, isso é completamente normal! Eu lembro de configurar meu primeiro ambiente de desenvolvimento e sentir como se estivesse tentando decifrar hieróglifos antigos. Todo desenvolvedor já esteve exatamente onde você está agora, se perguntando se está fazendo certo. Spoiler: se você está aqui aprendendo, já está fazendo certo! 🌟

Nesta lição, vamos abordar:

- como rastrear o trabalho que você faz no seu computador
- como trabalhar em projetos com outras pessoas
- como contribuir para software de código aberto

### Pré-requisitos

Vamos preparar seu computador para a mágica do GitHub! Não se preocupe – essa configuração é algo que você só precisa fazer uma vez, e depois estará pronto para toda a sua jornada de programação.

Tudo bem, vamos começar com a base! Primeiro, precisamos verificar se o Git já está instalado no seu computador. O Git é basicamente como ter um assistente superinteligente que lembra de cada mudança que você faz no seu código – muito melhor do que apertar Ctrl+S freneticamente a cada dois segundos (quem nunca?).

Vamos ver se o Git já está instalado digitando este comando mágico no seu terminal:
`git --version`

Se o Git ainda não estiver lá, sem problemas! Basta acessar [download Git](https://git-scm.com/downloads) e baixá-lo. Depois de instalá-lo, precisamos apresentar o Git a você de forma adequada:

> 💡 **Configuração Inicial**: Esses comandos dizem ao Git quem você é. Essas informações serão anexadas a cada commit que você fizer, então escolha um nome e e-mail com os quais você se sinta confortável em compartilhar publicamente.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Para verificar se o Git já está configurado, você pode digitar:
```bash
git config --list
```

Você também precisará de uma conta no GitHub, um editor de código (como o Visual Studio Code) e abrir seu terminal (ou prompt de comando).

Acesse [github.com](https://github.com/) e crie uma conta, se ainda não tiver uma, ou faça login e preencha seu perfil.

💡 **Dica moderna**: Considere configurar [chaves SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) ou usar o [GitHub CLI](https://cli.github.com/) para facilitar a autenticação sem senhas.

✅ O GitHub não é o único repositório de código no mundo; existem outros, mas o GitHub é o mais conhecido.

### Preparação

Você precisará de uma pasta com um projeto de código no seu computador (laptop ou PC) e de um repositório público no GitHub, que servirá como exemplo de como contribuir para os projetos de outras pessoas.

### Mantendo Seu Código Seguro

Vamos falar sobre segurança por um momento – mas não se preocupe, não vamos te sobrecarregar com coisas assustadoras! Pense nessas práticas de segurança como trancar seu carro ou sua casa. São hábitos simples que se tornam naturais e mantêm seu trabalho protegido.

Vamos te mostrar as formas modernas e seguras de trabalhar com o GitHub desde o início. Assim, você desenvolverá bons hábitos que te servirão bem ao longo da sua carreira de programação.

Ao trabalhar com o GitHub, é importante seguir as melhores práticas de segurança:

| Área de Segurança | Melhor Prática | Por Que É Importante |
|-------------------|----------------|-----------------------|
| **Autenticação** | Use chaves SSH ou Tokens de Acesso Pessoal | Senhas são menos seguras e estão sendo descontinuadas |
| **Autenticação em Dois Fatores** | Ative 2FA na sua conta do GitHub | Adiciona uma camada extra de proteção à conta |
| **Segurança do Repositório** | Nunca faça commit de informações sensíveis | Chaves de API e senhas nunca devem estar em repositórios públicos |
| **Gerenciamento de Dependências** | Ative o Dependabot para atualizações | Mantém suas dependências seguras e atualizadas |

> ⚠️ **Lembrete Crítico de Segurança**: Nunca faça commit de chaves de API, senhas ou outras informações sensíveis em qualquer repositório. Use variáveis de ambiente e arquivos `.gitignore` para proteger dados sensíveis.

**Configuração Moderna de Autenticação:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Dica Pro**: Chaves SSH eliminam a necessidade de digitar senhas repetidamente e são mais seguras do que métodos tradicionais de autenticação.

---

## Gerenciando Seu Código Como um Profissional

Ok, AGORA é onde as coisas ficam realmente empolgantes! 🎉 Vamos aprender como rastrear e gerenciar seu código como os profissionais fazem, e honestamente, essa é uma das minhas coisas favoritas de ensinar porque é uma mudança de jogo.

Imagine isso: você está escrevendo uma história incrível e quer acompanhar cada rascunho, cada edição brilhante e cada momento de "espera, isso é genial!" ao longo do caminho. É exatamente isso que o Git faz pelo seu código! É como ter o caderno mais incrível que viaja no tempo e lembra de TUDO – cada tecla pressionada, cada mudança, cada momento de "ops, isso quebrou tudo" que você pode desfazer instantaneamente.

Vou ser honesto – isso pode parecer esmagador no começo. Quando comecei, pensei "Por que não posso simplesmente salvar meus arquivos como sempre?". Mas confie em mim: uma vez que o Git fizer sentido para você (e vai!), você terá um daqueles momentos de iluminação em que pensa "Como eu CONSEGUI programar sem isso?". É como descobrir que você pode voar quando esteve andando por aí a vida toda!

Digamos que você tenha uma pasta local com algum projeto de código e queira começar a rastrear seu progresso usando o Git – o sistema de controle de versão. Algumas pessoas comparam usar o Git a escrever uma carta de amor para seu futuro eu. Ao ler suas mensagens de commit dias, semanas ou meses depois, você será capaz de lembrar por que tomou uma decisão ou "reverter" uma mudança – isso, claro, quando você escreve boas mensagens de commit.

### Tarefa: Crie Seu Primeiro Repositório!

> 🎯 **Sua Missão (e estou tão empolgado por você!)**: Vamos criar seu primeiro repositório no GitHub juntos! Quando terminarmos aqui, você terá seu próprio cantinho na internet onde seu código vive, e terá feito seu primeiro "commit" (que é como os desenvolvedores chamam o ato de salvar seu trabalho de forma muito inteligente).
>
> Este é, honestamente, um momento muito especial – você está prestes a se juntar oficialmente à comunidade global de desenvolvedores! Eu ainda lembro da emoção de criar meu primeiro repositório e pensar "Uau, eu realmente estou fazendo isso!"

Vamos passar por essa aventura juntos, passo a passo. Vá com calma em cada parte – não há prêmio por correr, e prometo que cada etapa fará sentido. Lembre-se, todo desenvolvedor que você admira já esteve exatamente onde você está, prestes a criar seu primeiro repositório. Que incrível, não é?

> Assista ao vídeo
> 
> [![Vídeo básico sobre Git e GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Vamos Fazer Isso Juntos:**

1. **Crie seu repositório no GitHub**. Acesse GitHub.com e procure aquele botão verde brilhante **New** (ou o sinal de **+** no canto superior direito). Clique nele e selecione **New repository**.

   Aqui está o que fazer:
   1. Dê um nome ao seu repositório – escolha algo que seja significativo para você!
   1. Adicione uma descrição, se quiser (isso ajuda os outros a entenderem sobre o que é seu projeto)
   1. Decida se quer que ele seja público (todos podem ver) ou privado (somente você)
   1. Recomendo marcar a caixa para adicionar um arquivo README – é como a página inicial do seu projeto
   1. Clique em **Create repository** e comemore – você acabou de criar seu primeiro repositório! 🎉

2. **Navegue até sua pasta de projeto**. Agora vamos abrir seu terminal (não se preocupe, não é tão assustador quanto parece!). Precisamos dizer ao seu computador onde estão os arquivos do seu projeto. Digite este comando:

   ```bash
   cd [name of your folder]
   ```

   **O que estamos fazendo aqui:**
   - Basicamente estamos dizendo "Ei, computador, me leve até minha pasta de projeto"
   - É como abrir uma pasta específica na sua área de trabalho, mas estamos fazendo isso com comandos de texto
   - Substitua `[nome da sua pasta]` pelo nome real da sua pasta de projeto

3. **Transforme sua pasta em um repositório Git**. Aqui é onde a mágica acontece! Digite:

   ```bash
   git init
   ```

   **Aqui está o que acabou de acontecer (coisas bem legais!):**
   - O Git acabou de criar uma pasta oculta `.git` no seu projeto – você não vai vê-la, mas ela está lá!
   - Sua pasta normal agora é um "repositório" que pode rastrear todas as mudanças que você fizer
   - Pense nisso como dar superpoderes à sua pasta para lembrar de tudo

4. **Verifique o que está acontecendo**. Vamos ver o que o Git acha do seu projeto agora:

   ```bash
   git status
   ```

   **Entendendo o que o Git está te dizendo:**
   
   Você pode ver algo que se parece com isso:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Não entre em pânico! Aqui está o que isso significa:**
   - Arquivos em **vermelho** são arquivos que têm mudanças, mas ainda não estão prontos para serem salvos
   - Arquivos em **verde** (quando você os vê) estão prontos para serem salvos
   - O Git está sendo útil ao te dizer exatamente o que você pode fazer a seguir

   > 💡 **Dica Pro**: O comando `git status` é seu melhor amigo! Use-o sempre que estiver confuso sobre o que está acontecendo. É como perguntar ao Git "Ei, qual é a situação agora?"

5. **Prepare seus arquivos para salvar** (isso é chamado de "staging"):

   ```bash
   git add .
   ```

   **O que acabamos de fazer:**
   - Dissemos ao Git "Ei, quero incluir TODOS os meus arquivos no próximo salvamento"
   - O `.` é como dizer "tudo nesta pasta"
   - Agora seus arquivos estão "preparados" e prontos para o próximo passo

   **Quer ser mais seletivo?** Você pode adicionar apenas arquivos específicos:

   ```bash
   git add [file or folder name]
   ```

   **Por que você pode querer fazer isso?**
   - Às vezes você quer salvar mudanças relacionadas juntas
   - Isso ajuda a organizar seu trabalho em partes lógicas
   - Facilita entender o que mudou e quando

   **Mudou de ideia?** Sem problemas! Você pode remover arquivos da preparação assim:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Não se preocupe – isso não apaga seu trabalho, apenas tira os arquivos da "pilha pronta para salvar".

6. **Salve seu trabalho permanentemente** (fazendo seu primeiro commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Parabéns! Você acabou de fazer seu primeiro commit!**
   
   **Aqui está o que acabou de acontecer:**
   - O Git tirou um "instantâneo" de todos os arquivos preparados neste exato momento
   - Sua mensagem de commit "first commit" explica sobre o que é esse ponto de salvamento
   - O Git deu a esse instantâneo um ID único para que você sempre possa encontrá-lo depois
   - Você oficialmente começou a rastrear o histórico do seu projeto!

   > 💡 **Mensagens de commit futuras**: Para seus próximos commits, seja mais descritivo! Em vez de "atualizei coisas", tente "Adicionei formulário de contato à página inicial" ou "Corrigi bug no menu de navegação". Seu futuro eu vai te agradecer!

7. **Conecte seu projeto local ao GitHub**. Agora, seu projeto existe apenas no seu computador. Vamos conectá-lo ao seu repositório no GitHub para que você possa compartilhá-lo com o mundo!

   Primeiro, vá até a página do seu repositório no GitHub e copie a URL. Depois, volte aqui e digite:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Substitua essa URL pela URL real do seu repositório!)

   **O que acabamos de fazer:**
   - Criamos uma conexão entre seu projeto local e seu repositório no GitHub.
   - "Origin" é apenas um apelido para seu repositório no GitHub – é como adicionar um contato no seu celular.
   - Agora seu Git local sabe para onde enviar seu código quando você estiver pronto para compartilhá-lo.

   💡 **Forma mais fácil**: Se você tiver o GitHub CLI instalado, pode fazer isso com um único comando:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

8. **Envie seu código para o GitHub** (o grande momento!):

   ```bash
   git push -u origin main
   ```

   **🚀 É isso! Você está enviando seu código para o GitHub!**
   
   **O que está acontecendo:**
   - Seus commits estão viajando do seu computador para o GitHub.
   - A flag `-u` configura uma conexão permanente para que futuros envios sejam mais fáceis.
   - "main" é o nome da sua branch principal (como a pasta principal).
   - Depois disso, você pode simplesmente digitar `git push` para futuros uploads!

   💡 **Nota rápida**: Se sua branch tiver outro nome (como "master"), use esse nome. Você pode verificar com `git branch --show-current`.

9. **Seu novo ritmo diário de codificação** (é aqui que fica viciante!):

   A partir de agora, sempre que fizer alterações no seu projeto, você terá essa dança simples de três passos:

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```

   **Isso se torna o coração da sua codificação:**
   - Faça alterações incríveis no seu código ✨
   - Prepare-as com `git add` ("Ei Git, preste atenção nessas mudanças!")
   - Salve-as com `git commit` e uma mensagem descritiva (seu futuro eu vai te agradecer!)
   - Compartilhe com o mundo usando `git push` 🚀
   - Repita – sério, isso se torna tão natural quanto respirar!

   Eu amo esse fluxo de trabalho porque é como ter vários pontos de salvamento em um videogame. Fez uma alteração que você adorou? Faça um commit! Quer tentar algo arriscado? Sem problemas – você sempre pode voltar ao seu último commit se algo der errado!

   > 💡 **Dica**: Você também pode querer adotar um arquivo `.gitignore` para evitar que arquivos que você não quer rastrear apareçam no GitHub - como aquele arquivo de notas que você guarda na mesma pasta, mas que não tem lugar em um repositório público. Você pode encontrar modelos de arquivos `.gitignore` em [.gitignore templates](https://github.com/github/gitignore) ou criar um usando [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Fluxos de trabalho modernos com Git

Considere adotar estas práticas modernas:

- **Commits Convencionais**: Use um formato padronizado para mensagens de commit, como `feat:`, `fix:`, `docs:`, etc. Saiba mais em [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Commits atômicos**: Faça cada commit representar uma única alteração lógica.
- **Commits frequentes**: Faça commits frequentemente com mensagens descritivas, em vez de grandes commits infrequentes.

#### Mensagens de commit

Uma ótima linha de assunto para um commit no Git completa a seguinte frase:
Se aplicado, este commit irá <sua linha de assunto aqui>

Para o assunto, use o tempo presente e imperativo: "alterar" e não "alterado" nem "altera". 
Assim como no assunto, no corpo (opcional) também use o tempo presente e imperativo. O corpo deve incluir a motivação para a alteração e contrastar isso com o comportamento anterior. Você está explicando o `porquê`, não o `como`.

✅ Reserve alguns minutos para explorar o GitHub. Consegue encontrar uma mensagem de commit realmente boa? Consegue encontrar uma bem simples? Quais informações você acha que são as mais importantes e úteis para transmitir em uma mensagem de commit?

## Trabalhando com outros (A parte divertida!)

Segure o chapéu porque É AGORA que o GitHub se torna absolutamente mágico! 🪄 Você já dominou a gestão do seu próprio código, mas agora vamos mergulhar na minha parte favorita – colaborar com pessoas incríveis de todo o mundo.

Imagine isso: você acorda amanhã e descobre que alguém em Tóquio melhorou seu código enquanto você dormia. Então alguém em Berlim corrige um bug que você estava tentando resolver. À tarde, um desenvolvedor em São Paulo adiciona uma funcionalidade que você nem tinha pensado. Isso não é ficção científica – é só mais um dia no universo do GitHub!

O que realmente me empolga é que as habilidades de colaboração que você está prestes a aprender? São exatamente os mesmos fluxos de trabalho que equipes no Google, Microsoft e suas startups favoritas usam todos os dias. Você não está apenas aprendendo uma ferramenta legal – está aprendendo a linguagem secreta que faz o mundo inteiro do software trabalhar junto.

Sério, uma vez que você experimenta a emoção de ter alguém aceitando seu primeiro pull request, você entende por que os desenvolvedores são tão apaixonados por código aberto. É como fazer parte do maior e mais criativo projeto de equipe do mundo!

> Assista ao vídeo
>
> [![Vídeo básico sobre Git e GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

O principal motivo para colocar coisas no GitHub era tornar possível colaborar com outros desenvolvedores.

No seu repositório, navegue até `Insights > Community` para ver como seu projeto se compara aos padrões recomendados pela comunidade.

Quer fazer seu repositório parecer profissional e acolhedor? Vá até seu repositório e clique em `Insights > Community`. Esse recurso incrível mostra como seu projeto se compara ao que a comunidade do GitHub considera "boas práticas de repositório".

> 🎯 **Fazendo seu projeto brilhar**: Um repositório bem organizado com boa documentação é como ter uma loja limpa e acolhedora. Isso mostra que você se importa com seu trabalho e faz com que outros queiram contribuir!

**O que torna um repositório incrível:**

| O que adicionar | Por que é importante | O que faz por você |
|------------------|----------------------|--------------------|
| **Descrição** | A primeira impressão importa! | As pessoas sabem instantaneamente o que seu projeto faz |
| **README** | A página inicial do seu projeto | Como um guia amigável para novos visitantes |
| **Diretrizes de Contribuição** | Mostra que você aceita ajuda | As pessoas sabem exatamente como podem ajudar você |
| **Código de Conduta** | Cria um espaço amigável | Todos se sentem bem-vindos para participar |
| **Licença** | Clareza legal | Outros sabem como podem usar seu código |
| **Política de Segurança** | Mostra que você é responsável | Demonstra práticas profissionais |

> 💡 **Dica profissional**: O GitHub fornece modelos para todos esses arquivos. Ao criar um novo repositório, marque as caixas para gerar esses arquivos automaticamente.

**Recursos modernos do GitHub para explorar:**

🤖 **Automação & CI/CD:**
- **GitHub Actions** para testes e deploy automáticos.
- **Dependabot** para atualizações automáticas de dependências.

💬 **Comunidade & Gerenciamento de Projetos:**
- **GitHub Discussions** para conversas comunitárias além de issues.
- **GitHub Projects** para gerenciamento de projetos estilo kanban.
- **Regras de proteção de branch** para impor padrões de qualidade de código.

Todos esses recursos serão úteis para integrar novos membros à equipe. E essas são geralmente as coisas que novos contribuidores olham antes mesmo de ver seu código, para descobrir se seu projeto é o lugar certo para eles investirem seu tempo.

✅ Arquivos README, embora levem tempo para serem preparados, são frequentemente negligenciados por mantenedores ocupados. Consegue encontrar um exemplo de um README particularmente descritivo? Nota: existem algumas [ferramentas para ajudar a criar bons READMEs](https://www.makeareadme.com/) que você pode querer experimentar.

### Tarefa: Mesclar algum código

Documentos de contribuição ajudam as pessoas a contribuir com o projeto. Eles explicam quais tipos de contribuições você está procurando e como o processo funciona. Os contribuidores precisarão passar por uma série de etapas para poder contribuir com seu repositório no GitHub:

1. **Fazer um fork do seu repositório**. Você provavelmente vai querer que as pessoas _façam um fork_ do seu projeto. Fazer um fork significa criar uma réplica do seu repositório no perfil do GitHub delas.
1. **Clonar**. A partir daí, elas irão clonar o projeto para sua máquina local.
1. **Criar uma branch**. Você vai querer pedir que elas criem uma _branch_ para o trabalho delas.
1. **Focar a alteração em uma área**. Peça aos contribuidores para concentrarem suas contribuições em uma coisa de cada vez – assim, as chances de você conseguir _mesclar_ o trabalho deles são maiores. Imagine que eles escrevem uma correção de bug, adicionam uma nova funcionalidade e atualizam vários testes – e se você quiser ou puder implementar apenas 2 de 3, ou 1 de 3 alterações?

✅ Imagine uma situação em que as branches são particularmente críticas para escrever e enviar um bom código. Quais casos de uso você consegue pensar?

> Nota: Seja a mudança que você quer ver no mundo e crie branches para seu próprio trabalho também. Qualquer commit que você fizer será feito na branch em que você está atualmente "checado". Use `git status` para ver em qual branch você está.

Vamos passar por um fluxo de trabalho de contribuidores. Assuma que o contribuidor já fez o _fork_ e o _clone_ do repositório, então ele tem um repositório Git pronto para ser trabalhado, na máquina local:

1. **Criar uma branch**. Use o comando `git branch` para criar uma branch que conterá as alterações que ele pretende contribuir:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Abordagem moderna**: Você também pode criar e alternar para a nova branch em um único comando:
   ```bash
   git switch -c [branch-name]
   ```

1. **Alternar para a branch de trabalho**. Alterne para a branch especificada e atualize o diretório de trabalho com `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Nota moderna**: `git switch` é a substituição moderna para `git checkout` ao mudar de branch. É mais claro e seguro para iniciantes.

1. **Fazer o trabalho**. Neste ponto, você quer adicionar suas alterações. Não se esqueça de informar ao Git sobre isso com os seguintes comandos:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Qualidade da mensagem de commit**: Certifique-se de dar um bom nome ao seu commit, tanto para seu benefício quanto para o mantenedor do repositório que você está ajudando. Seja específico sobre o que você alterou!

1. **Combinar seu trabalho com a branch `main`**. Em algum momento, você termina o trabalho e quer combiná-lo com o da branch `main`. A branch `main` pode ter mudado nesse meio tempo, então certifique-se de atualizá-la primeiro com os seguintes comandos:

   ```bash
   git switch main
   git pull
   ```

   Neste ponto, você quer garantir que quaisquer _conflitos_, situações em que o Git não consegue facilmente _combinar_ as alterações, ocorram na sua branch de trabalho. Portanto, execute os seguintes comandos:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   O comando `git merge main` trará todas as alterações da `main` para sua branch. Com sorte, você pode simplesmente continuar. Caso contrário, o VS Code mostrará onde o Git está _confuso_ e você apenas altera os arquivos afetados para indicar qual conteúdo é mais preciso.

   💡 **Alternativa moderna**: Considere usar `git rebase` para um histórico mais limpo:
   ```bash
   git rebase main
   ```
   Isso reproduz seus commits no topo da última branch main, criando um histórico linear.

1. **Envie seu trabalho para o GitHub**. Enviar seu trabalho para o GitHub significa duas coisas. Enviar sua branch para seu repositório e, em seguida, abrir um PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   O comando acima cria a branch no seu repositório com fork.

1. **Abrir um PR**. Em seguida, você quer abrir um PR. Para isso, navegue até o repositório com fork no GitHub. Você verá uma indicação no GitHub perguntando se deseja criar um novo PR, clique nisso e será levado a uma interface onde poderá alterar o título da mensagem de commit, dar uma descrição mais adequada. Agora o mantenedor do repositório que você fez o fork verá este PR e _dedos cruzados_ ele irá apreciar e _mesclar_ seu PR. Agora você é um contribuidor, yay :)

   💡 **Dica moderna**: Você também pode criar PRs usando o GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Melhores práticas para PRs**:
   - Vincule a problemas relacionados usando palavras-chave como "Fixes #123".
   - Adicione capturas de tela para alterações na interface.
   - Solicite revisores específicos.
   - Use PRs de rascunho para trabalhos em andamento.
   - Certifique-se de que todas as verificações de CI sejam aprovadas antes de solicitar revisão.

1. **Limpeza**. É considerado uma boa prática _limpar_ após você mesclar com sucesso um PR. Você quer limpar tanto sua branch local quanto a branch que você enviou para o GitHub. Primeiro, vamos excluí-la localmente com o seguinte comando:

   ```bash
   git branch -d [branch-name]
   ```

   Certifique-se de ir à página do repositório com fork no GitHub e remover a branch remota que você acabou de enviar.

`Pull request` parece um termo estranho porque, na verdade, você quer enviar suas alterações para o projeto. Mas o mantenedor (dono do projeto) ou a equipe principal precisa considerar suas alterações antes de mesclá-las com a branch "main" do projeto, então você está realmente solicitando uma decisão de alteração de um mantenedor.  

Um pull request é o lugar para comparar e discutir as diferenças introduzidas em uma branch com revisões, comentários, testes integrados e mais. Um bom pull request segue aproximadamente as mesmas regras de uma mensagem de commit. Você pode adicionar uma referência a um problema no rastreador de problemas, quando seu trabalho, por exemplo, resolve um problema. Isso é feito usando um `#` seguido pelo número do seu problema. Por exemplo, `#97`.
🤞Dedos cruzados para que todas as verificações sejam aprovadas e os responsáveis pelo projeto integrem suas alterações ao projeto🤞

Atualize sua branch local de trabalho com todos os novos commits da branch correspondente no GitHub:

`git pull`

## Contribuindo para o Open Source (Sua Chance de Fazer a Diferença!)

Está pronto para algo que vai explodir sua mente? 🤯 Vamos falar sobre contribuir para projetos de código aberto – e só de pensar em compartilhar isso com você já fico arrepiado!

Essa é sua chance de fazer parte de algo verdadeiramente extraordinário. Imagine melhorar as ferramentas que milhões de desenvolvedores usam todos os dias ou corrigir um bug em um aplicativo que seus amigos adoram. Isso não é apenas um sonho – é exatamente o que significa contribuir para o código aberto!

Aqui está o que me dá arrepios toda vez que penso nisso: cada ferramenta que você tem aprendido – seu editor de código, os frameworks que exploraremos, até mesmo o navegador que você está usando para ler isso – começou com alguém exatamente como você fazendo sua primeira contribuição. Aquele desenvolvedor brilhante que criou sua extensão favorita do VS Code? Ele também foi um iniciante clicando em "criar pull request" com as mãos trêmulas, exatamente como você está prestes a fazer.

E aqui está a parte mais bonita: a comunidade de código aberto é como o maior abraço coletivo da internet. A maioria dos projetos procura ativamente por novos colaboradores e tem problemas marcados como "good first issue" especificamente para pessoas como você! Os mantenedores realmente ficam empolgados quando veem novos colaboradores porque se lembram de seus próprios primeiros passos.

Você não está apenas aprendendo a programar aqui – está se preparando para se juntar a uma família global de criadores que acordam todos os dias pensando "Como podemos tornar o mundo digital um pouco melhor?" Bem-vindo ao clube! 🌟

Primeiro, vamos encontrar um repositório (ou **repo**) no GitHub que seja do seu interesse e ao qual você gostaria de contribuir com alguma alteração. Você vai querer copiar o conteúdo dele para sua máquina.

✅ Uma boa maneira de encontrar repositórios 'amigáveis para iniciantes' é [buscar pela tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copiar um repositório localmente](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.br.png)

Existem várias maneiras de copiar código. Uma delas é "clonar" o conteúdo do repositório, usando HTTPS, SSH ou o GitHub CLI (Interface de Linha de Comando).

Abra seu terminal e clone o repositório assim:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Para trabalhar no projeto, mude para a pasta correta:
`cd ProjectURL`

Você também pode abrir o projeto inteiro usando:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - Ambiente de desenvolvimento na nuvem do GitHub com VS Code no navegador
- **[GitHub Desktop](https://desktop.github.com/)** - Um aplicativo GUI para operações do Git  
- **[GitHub.dev](https://github.dev)** - Pressione a tecla `.` em qualquer repositório do GitHub para abrir o VS Code no navegador
- **VS Code** com a extensão GitHub Pull Requests

Por fim, você pode baixar o código em uma pasta compactada.

### Algumas coisas interessantes sobre o GitHub

Você pode dar estrela, seguir e/ou "forkar" qualquer repositório público no GitHub. Você pode encontrar seus repositórios estrelados no menu suspenso no canto superior direito. É como salvar nos favoritos, mas para código.

Os projetos têm um rastreador de problemas, geralmente no GitHub na aba "Issues", a menos que indicado de outra forma, onde as pessoas discutem problemas relacionados ao projeto. E a aba Pull Requests é onde as pessoas discutem e revisam alterações que estão em andamento.

Os projetos também podem ter discussões em fóruns, listas de e-mails ou canais de chat como Slack, Discord ou IRC.

🔧 **Recursos modernos do GitHub**:
- **GitHub Discussions** - Fórum integrado para conversas da comunidade
- **GitHub Sponsors** - Apoie financeiramente os mantenedores  
- **Aba de Segurança** - Relatórios de vulnerabilidades e avisos de segurança
- **Aba de Ações** - Veja fluxos de trabalho automatizados e pipelines CI/CD
- **Aba de Insights** - Análises sobre colaboradores, commits e saúde do projeto
- **Aba de Projetos** - Ferramentas de gerenciamento de projetos integradas ao GitHub

✅ Explore seu novo repositório no GitHub e experimente algumas coisas, como editar configurações, adicionar informações ao repositório, criar um projeto (como um quadro Kanban) e configurar GitHub Actions para automação. Há muito o que fazer!

---

## 🚀 Desafio 

Certo, é hora de colocar seus novos superpoderes do GitHub à prova! 🚀 Aqui está um desafio que vai fazer tudo se encaixar de forma incrivelmente satisfatória:

Chame um amigo (ou aquele membro da família que sempre pergunta o que você está fazendo com "essas coisas de computador") e embarque juntos em uma aventura de codificação colaborativa! É aqui que a mágica acontece – crie um projeto, deixe eles fazerem um fork, criem algumas branches e mesclem alterações como os profissionais que vocês estão se tornando.

Não vou mentir – vocês provavelmente vão rir em algum momento (especialmente quando ambos tentarem alterar a mesma linha), talvez coçar a cabeça em confusão, mas definitivamente terão aqueles momentos incríveis de "aha!" que fazem todo o aprendizado valer a pena. Além disso, há algo especial em compartilhar aquela primeira mesclagem bem-sucedida com outra pessoa – é como uma pequena celebração de quão longe vocês chegaram!

Ainda não tem um parceiro de codificação? Sem problemas! A comunidade do GitHub está cheia de pessoas incrivelmente acolhedoras que se lembram de como era ser novo. Procure repositórios com etiquetas "good first issue" – eles basicamente estão dizendo "Ei iniciantes, venham aprender conosco!" Que incrível é isso?

## Quiz Pós-Aula
[Quiz pós-aula](https://ff-quizzes.netlify.app/web/en/)

## Revisão & Continue Aprendendo

Ufa! 🎉 Olha só você – acabou de dominar os fundamentos do GitHub como um verdadeiro campeão! Se sua cabeça está um pouco cheia agora, isso é completamente normal e, honestamente, um bom sinal. Você acabou de aprender ferramentas que levaram semanas para eu me sentir confortável quando comecei.

Git e GitHub são incrivelmente poderosos (tipo, muito poderosos), e todo desenvolvedor que conheço – incluindo aqueles que parecem magos agora – teve que praticar e tropeçar um pouco antes de tudo fazer sentido. O fato de você ter concluído esta lição significa que já está no caminho para dominar algumas das ferramentas mais importantes no kit de ferramentas de um desenvolvedor.

Aqui estão alguns recursos absolutamente fantásticos para ajudar você a praticar e se tornar ainda mais incrível:

- [Guia para contribuir com software de código aberto](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Seu roteiro para fazer a diferença
- [Guia rápido de Git](https://training.github.com/downloads/github-git-cheat-sheet/) – Tenha isso à mão para consulta rápida!

E lembre-se: prática leva ao progresso, não à perfeição! Quanto mais você usar Git e GitHub, mais natural isso se torna. O GitHub criou alguns cursos interativos incríveis que permitem que você pratique em um ambiente seguro:

- [Introdução ao GitHub](https://github.com/skills/introduction-to-github)
- [Comunique-se usando Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Gerenciando conflitos de mesclagem](https://github.com/skills/resolve-merge-conflicts)

**Sentindo-se aventureiro? Confira essas ferramentas modernas:**
- [Documentação do GitHub CLI](https://cli.github.com/manual/) – Para quando você quiser se sentir como um mago da linha de comando
- [Documentação do GitHub Codespaces](https://docs.github.com/en/codespaces) – Codifique na nuvem!
- [Documentação do GitHub Actions](https://docs.github.com/en/actions) – Automatize tudo
- [Melhores práticas de Git](https://www.atlassian.com/git/tutorials/comparing-workflows) – Eleve seu jogo de fluxo de trabalho 

## Desafio do Agente GitHub Copilot 🚀

Use o modo Agente para completar o seguinte desafio:

**Descrição:** Crie um projeto colaborativo de desenvolvimento web que demonstre o fluxo completo do GitHub que você aprendeu nesta lição. Este desafio ajudará você a praticar criação de repositórios, recursos de colaboração e fluxos de trabalho modernos do Git em um cenário real.

**Prompt:** Crie um novo repositório público no GitHub para um projeto simples de "Recursos de Desenvolvimento Web". O repositório deve incluir um arquivo README.md bem estruturado listando ferramentas e recursos úteis de desenvolvimento web, organizados por categorias (HTML, CSS, JavaScript, etc.). Configure o repositório com padrões adequados de comunidade, incluindo uma licença, diretrizes de contribuição e um código de conduta. Crie pelo menos duas branches de recursos: uma para adicionar recursos de CSS e outra para recursos de JavaScript. Faça commits em cada branch com mensagens descritivas, depois crie pull requests para mesclar as alterações de volta para a main. Ative recursos do GitHub como Issues, Discussions e configure um fluxo de trabalho básico do GitHub Actions para verificações automatizadas.

## Tarefa 

Sua missão, caso decida aceitá-la: Complete o curso [Introdução ao GitHub](https://github.com/skills/introduction-to-github) no GitHub Skills. Este curso interativo permitirá que você pratique tudo o que aprendeu em um ambiente seguro e guiado. Além disso, você ganhará um badge legal ao terminar! 🏅

**Sentindo-se pronto para mais desafios?**
- Configure autenticação SSH para sua conta do GitHub (nada de senhas!)
- Experimente usar o GitHub CLI para suas operações diárias com Git
- Crie um repositório com um fluxo de trabalho do GitHub Actions
- Explore o GitHub Codespaces abrindo este mesmo repositório em um editor baseado na nuvem

Lembre-se: todo especialista já foi um iniciante. Você consegue! 💪

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.