<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:50:52+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "pt"
}
-->
## Noções Básicas de GIT para Iniciantes em Desenvolvimento Web 👶

## O que é `Git`?
1. Git é um sistema de controlo de versões distribuído.  
2. Todo o código e histórico estão disponíveis no computador de cada programador, o que permite uma fácil criação de ramificações (branches) e fusões (merges).  
3. É utilizado como Sistema de Controlo de Versões (VCS) para rastrear alterações em ficheiros de computador.  

* Controlo de versões distribuído  
* Coordena o trabalho entre vários programadores  
* Regista quem fez alterações e quando  
* Permite reverter alterações a qualquer momento  
* Repositórios locais e remotos  

## CONCEITOS DO GIT
* Mantém o histórico do código  
* Tira "instantâneos" (snapshots) dos seus ficheiros  
* Você decide quando tirar um instantâneo ao fazer um "commit"  
* Pode visitar qualquer instantâneo a qualquer momento  
* Pode preparar (staging) ficheiros antes de fazer o commit  

### Diferença Entre Git e GitHub

| Git | GitHub |
| ------- | ----------- |
| Git é um software | GitHub é um serviço na nuvem |
| Git é instalado localmente no sistema | GitHub está hospedado na web |
| É uma ferramenta de linha de comandos | É uma interface gráfica |
| Git é mantido pelo Linux | GitHub é mantido pela Microsoft |
| Focado no controlo de versões e partilha de código | Focado na hospedagem centralizada de código-fonte |
| Git é licenciado como open-source | GitHub inclui um plano gratuito e um plano pago |
| Git foi lançado em 2005 | GitHub foi lançado em 2008 |

## Instalação do GIT
* Linux (Debian)  
    `$sudo apt-get install git`  
* Linux (Fedora)  
    `$sudo yum install git`  
* [Descarregar](http://git-scm.com/download/mac) para Mac  
* [Descarregar](http://git-scm.com/download/win) para Windows  

### Passos do Processo de Instalação:  
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>  
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>  
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>  
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>  
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>  
6. E depois continue em Seguinte > Seguinte > Seguinte > <b>Instalar</b>  
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>  

### Após a Instalação, é necessário configurar o Git usando o Git Bash  
1. `git config --global user.name 'OSeuNome'`  
2. `git config --global user.email 'OSeuEmail'`  
___  

## Comandos Git
___  

### Obter e Criar Projetos

| Comando | Descrição |
| ------- | ----------- |
| `git init` | Inicializar um repositório Git local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Criar uma cópia local de um repositório remoto |

### Instantâneos Básicos

| Comando | Descrição |
| ------- | ----------- |
| `git status` | Verificar o estado |
| `git add [file-name.txt]` | Adicionar um ficheiro à área de preparação (staging) |
| `git add -A` | Adicionar todos os ficheiros novos e alterados à área de preparação |
| `git commit -m "[commit message]"` | Fazer commit das alterações |
| `git rm -r [file-name.txt]` | Remover um ficheiro (ou pasta) |
| `git push` | Enviar para o repositório remoto |
| `git pull` | Obter as alterações mais recentes do repositório remoto |

### Ramificação e Fusão

| Comando | Descrição |
| ------- | ----------- |
| `git branch` | Listar ramificações (o asterisco indica a ramificação atual) |
| `git branch -a` | Listar todas as ramificações (locais e remotas) |
| `git branch [branch name]` | Criar uma nova ramificação |
| `git branch -D [branch name]` | Eliminar uma ramificação |
| `git push origin --delete [branch name]` | Eliminar uma ramificação remota |
| `git checkout -b [branch name]` | Criar uma nova ramificação e mudar para ela |
| `git checkout -b [branch name] origin/[branch name]` | Clonar uma ramificação remota e mudar para ela |
| `git branch -m [old branch name] [new branch name]` | Renomear uma ramificação local |
| `git checkout [branch name]` | Mudar para uma ramificação |
| `git checkout -` | Mudar para a última ramificação utilizada |
| `git checkout -- [file-name.txt]` | Descartar alterações num ficheiro |
| `git merge [branch name]` | Fundir uma ramificação na ramificação ativa |
| `git merge [source branch] [target branch]` | Fundir uma ramificação numa ramificação alvo |
| `git stash` | Guardar alterações num diretório de trabalho sujo |
| `git stash clear` | Remover todas as entradas guardadas |

### Partilhar e Atualizar Projetos

| Comando | Descrição |
| ------- | ----------- |
| `git push origin [branch name]` | Enviar uma ramificação para o repositório remoto |
| `git push -u origin [branch name]` | Enviar alterações para o repositório remoto (e lembrar a ramificação) |
| `git push` | Enviar alterações para o repositório remoto (ramificação lembrada) |
| `git push origin --delete [branch name]` | Eliminar uma ramificação remota |
| `git pull` | Atualizar o repositório local para o commit mais recente |
| `git pull origin [branch name]` | Obter alterações do repositório remoto |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Adicionar um repositório remoto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Definir a ramificação de origem de um repositório para SSH |

### Inspeção e Comparação

| Comando | Descrição |
| ------- | ----------- |
| `git log` | Ver alterações |
| `git log --summary` | Ver alterações (detalhado) |
| `git log --oneline` | Ver alterações (resumido) |
| `git diff [source branch] [target branch]` | Pré-visualizar alterações antes de fundir |

---

**Aviso**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, é importante notar que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.