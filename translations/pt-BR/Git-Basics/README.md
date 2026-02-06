## Noções básicas de GIT para iniciantes em desenvolvimento web 👶

## O que é `Git`?
1. Git é um sistema de controle de versão distribuído.
2. Todo o código e histórico estão disponíveis no computador de cada desenvolvedor, o que facilita a criação de ramificações e fusões.
3. É usado como Sistema de Controle de Versão (VCS) para rastrear alterações em arquivos de computador.

* Controle de versão distribuído  
* Coordena o trabalho entre vários desenvolvedores  
* Quem fez quais alterações e quando  
* Reverter alterações a qualquer momento  
* Repositórios locais e remotos  

## CONCEITOS DO GIT
* Mantém o histórico do código  
* Tira "instantâneos" dos seus arquivos  
* Você decide quando tirar um instantâneo ao fazer um "commit"  
* Você pode visitar qualquer instantâneo a qualquer momento  
* Você pode preparar arquivos antes de fazer o commit  

### Diferença entre Git e GitHub

| Git | GitHub |
| ------- | ----------- |
| Git é um software | GitHub é um serviço na nuvem |
| Git é instalado localmente no sistema | GitHub é hospedado na web |
| É uma ferramenta de linha de comando | É uma interface gráfica |
| Git é mantido pelo Linux | GitHub é mantido pela Microsoft |
| Focado em controle de versão e compartilhamento de código | Focado em hospedagem centralizada de código-fonte |
| Git tem licença de código aberto | GitHub inclui um plano gratuito e um plano pago |
| Git foi lançado em 2005 | GitHub foi lançado em 2008 |

## Instalação do GIT
* Linux (Debian)  
    `$sudo apt-get install git`  
* Linux (Fedora)  
    `$sudo yum install git`  
* [Download](http://git-scm.com/download/mac) para Mac  
* [Download](http://git-scm.com/download/win) para Windows  

### Etapas do Processo de Instalação:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. E então continue clicando em Próximo > Próximo > Próximo > <b>Instalar</b>  
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Após a instalação, precisamos configurar o Git usando o Git Bash
1. `git config --global user.name 'SeuNome'`  
2. `git config --global user.email 'SeuEmail'`  
___

## Comandos do Git
___

### Obtendo e Criando Projetos

| Comando | Descrição |
| ------- | ----------- |
| `git init` | Inicializa um repositório Git local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Cria uma cópia local de um repositório remoto |

### Instantâneos Básicos

| Comando | Descrição |
| ------- | ----------- |
| `git status` | Verifica o status |
| `git add [file-name.txt]` | Adiciona um arquivo à área de preparação |
| `git add -A` | Adiciona todos os arquivos novos e alterados à área de preparação |
| `git commit -m "[commit message]"` | Faz o commit das alterações |
| `git rm -r [file-name.txt]` | Remove um arquivo (ou pasta) |
| `git push` | Envia para o repositório remoto |
| `git pull` | Puxa as alterações mais recentes do repositório remoto |

### Ramificação e Fusão

| Comando | Descrição |
| ------- | ----------- |
| `git branch` | Lista as ramificações (o asterisco indica a ramificação atual) |
| `git branch -a` | Lista todas as ramificações (locais e remotas) |
| `git branch [branch name]` | Cria uma nova ramificação |
| `git branch -D [branch name]` | Exclui uma ramificação |
| `git push origin --delete [branch name]` | Exclui uma ramificação remota |
| `git checkout -b [branch name]` | Cria uma nova ramificação e muda para ela |
| `git checkout -b [branch name] origin/[branch name]` | Clona uma ramificação remota e muda para ela |
| `git branch -m [old branch name] [new branch name]` | Renomeia uma ramificação local |
| `git checkout [branch name]` | Muda para uma ramificação |
| `git checkout -` | Volta para a última ramificação acessada |
| `git checkout -- [file-name.txt]` | Desfaz alterações em um arquivo |
| `git merge [branch name]` | Faz a fusão de uma ramificação na ramificação ativa |
| `git merge [source branch] [target branch]` | Faz a fusão de uma ramificação em uma ramificação alvo |
| `git stash` | Armazena alterações em um diretório de trabalho sujo |
| `git stash clear` | Remove todas as entradas armazenadas |

### Compartilhando e Atualizando Projetos

| Comando | Descrição |
| ------- | ----------- |
| `git push origin [branch name]` | Envia uma ramificação para o repositório remoto |
| `git push -u origin [branch name]` | Envia alterações para o repositório remoto (e lembra a ramificação) |
| `git push` | Envia alterações para o repositório remoto (ramificação lembrada) |
| `git push origin --delete [branch name]` | Exclui uma ramificação remota |
| `git pull` | Atualiza o repositório local para o commit mais recente |
| `git pull origin [branch name]` | Puxa alterações do repositório remoto |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Adiciona um repositório remoto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Define a ramificação de origem de um repositório para SSH |

### Inspeção e Comparação

| Comando | Descrição |
| ------- | ----------- |
| `git log` | Visualiza alterações |
| `git log --summary` | Visualiza alterações (detalhado) |
| `git log --oneline` | Visualiza alterações (resumido) |
| `git diff [source branch] [target branch]` | Visualiza alterações antes de fazer a fusão |

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.