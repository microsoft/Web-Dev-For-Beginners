<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-22T23:08:37+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "br"
}
-->
# Projeto Terrário Parte 1: Introdução ao HTML

![Introdução ao HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.br.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, ou Linguagem de Marcação de Hipertexto, é a base de todos os sites que você já visitou. Pense no HTML como o esqueleto que dá estrutura às páginas da web – ele define onde o conteúdo vai, como está organizado e o que cada parte representa. Enquanto o CSS mais tarde "vestirá" seu HTML com cores e layouts, e o JavaScript dará vida com interatividade, o HTML fornece a estrutura essencial que torna tudo isso possível.

Nesta lição, você criará a estrutura HTML para uma interface de terrário virtual. Este projeto prático ensinará conceitos fundamentais de HTML enquanto você constrói algo visualmente envolvente. Você aprenderá a organizar conteúdo usando elementos semânticos, trabalhar com imagens e criar a base para um aplicativo web interativo.

Ao final desta lição, você terá uma página HTML funcional exibindo imagens de plantas organizadas em colunas, pronta para ser estilizada na próxima lição. Não se preocupe se parecer básico no início – é exatamente isso que o HTML deve fazer antes que o CSS adicione o toque visual.

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Assista e Aprenda**: Confira este vídeo explicativo útil
> 
> [![Vídeo sobre Fundamentos de HTML](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Configurando Seu Projeto

Antes de mergulharmos no código HTML, vamos configurar um espaço de trabalho adequado para o seu projeto de terrário. Criar uma estrutura de arquivos organizada desde o início é um hábito crucial que será útil ao longo de sua jornada de desenvolvimento web.

### Tarefa: Crie a Estrutura do Seu Projeto

Você criará uma pasta dedicada ao seu projeto de terrário e adicionará seu primeiro arquivo HTML. Aqui estão duas abordagens que você pode usar:

**Opção 1: Usando o Visual Studio Code**
1. Abra o Visual Studio Code
2. Clique em "File" → "Open Folder" ou use `Ctrl+K, Ctrl+O` (Windows/Linux) ou `Cmd+K, Cmd+O` (Mac)
3. Crie uma nova pasta chamada `terrarium` e selecione-a
4. No painel Explorer, clique no ícone "New File"
5. Nomeie seu arquivo como `index.html`

![Explorador do VS Code mostrando a criação de um novo arquivo](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.br.png)

**Opção 2: Usando Comandos no Terminal**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**O que esses comandos realizam:**
- **Cria** um novo diretório chamado `terrarium` para seu projeto
- **Navega** até o diretório do terrário
- **Cria** um arquivo vazio chamado `index.html`
- **Abre** o arquivo no Visual Studio Code para edição

> 💡 **Dica Pro**: O nome do arquivo `index.html` é especial no desenvolvimento web. Quando alguém visita um site, os navegadores automaticamente procuram por `index.html` como a página padrão para exibir. Isso significa que uma URL como `https://mysite.com/projects/` automaticamente servirá o arquivo `index.html` da pasta `projects` sem precisar especificar o nome do arquivo na URL.

## Entendendo a Estrutura de um Documento HTML

Todo documento HTML segue uma estrutura específica que os navegadores precisam entender e exibir corretamente. Pense nessa estrutura como uma carta formal – ela tem elementos obrigatórios em uma ordem específica que ajudam o destinatário (neste caso, o navegador) a processar o conteúdo corretamente.

Vamos começar adicionando a base essencial que todo documento HTML precisa.

### A Declaração DOCTYPE e o Elemento Raiz

As duas primeiras linhas de qualquer arquivo HTML servem como a "introdução" do documento ao navegador:

```html
<!DOCTYPE html>
<html></html>
```

**Entendendo o que este código faz:**
- **Declara** o tipo de documento como HTML5 usando `<!DOCTYPE html>`
- **Cria** o elemento raiz `<html>` que conterá todo o conteúdo da página
- **Estabelece** padrões modernos da web para renderização adequada no navegador
- **Garante** exibição consistente em diferentes navegadores e dispositivos

> 💡 **Dica do VS Code**: Passe o mouse sobre qualquer tag HTML no VS Code para ver informações úteis dos MDN Web Docs, incluindo exemplos de uso e detalhes de compatibilidade com navegadores.

> 📚 **Saiba Mais**: A declaração DOCTYPE impede que os navegadores entrem no "modo quirks", que era usado para suportar sites muito antigos. O desenvolvimento web moderno usa a simples declaração `<!DOCTYPE html>` para garantir [renderização compatível com os padrões](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Adicionando Metadados Essenciais ao Documento

A seção `<head>` de um documento HTML contém informações cruciais que os navegadores e mecanismos de busca precisam, mas que os visitantes não veem diretamente na página. Pense nela como as informações "nos bastidores" que ajudam sua página a funcionar corretamente e aparecer de forma adequada em diferentes dispositivos e plataformas.

Esses metadados dizem aos navegadores como exibir sua página, qual codificação de caracteres usar e como lidar com diferentes tamanhos de tela – tudo essencial para criar páginas web profissionais e acessíveis.

### Tarefa: Adicione o Cabeçalho do Documento

Insira esta seção `<head>` entre suas tags de abertura e fechamento `<html>`:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Desmembrando o que cada elemento realiza:**
- **Define** o título da página que aparece nas abas do navegador e nos resultados de busca
- **Especifica** a codificação de caracteres UTF-8 para exibição correta de texto em todo o mundo
- **Garante** compatibilidade com versões modernas do Internet Explorer
- **Configura** design responsivo ajustando o viewport à largura do dispositivo
- **Controla** o nível inicial de zoom para exibir o conteúdo no tamanho natural

> 🤔 **Pense Nisso**: O que aconteceria se você configurasse uma tag meta de viewport assim: `<meta name="viewport" content="width=600">`? Isso forçaria a página a ter sempre 600 pixels de largura, quebrando o design responsivo! Saiba mais sobre [configuração adequada de viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Construindo o Corpo do Documento

O elemento `<body>` contém todo o conteúdo visível da sua página – tudo o que os usuários verão e com o que interagirão. Enquanto a seção `<head>` forneceu instruções ao navegador, a seção `<body>` contém o conteúdo real: texto, imagens, botões e outros elementos que criam sua interface de usuário.

Vamos adicionar a estrutura do corpo e entender como as tags HTML trabalham juntas para criar conteúdo significativo.

### Entendendo a Estrutura das Tags HTML

O HTML usa tags emparelhadas para definir elementos. A maioria das tags tem uma tag de abertura como `<p>` e uma tag de fechamento como `</p>`, com conteúdo entre elas: `<p>Olá, mundo!</p>`. Isso cria um elemento de parágrafo contendo o texto "Olá, mundo!".

### Tarefa: Adicione o Elemento Body

Atualize seu arquivo HTML para incluir o elemento `<body>`:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**Aqui está o que essa estrutura completa fornece:**
- **Estabelece** a estrutura básica do documento HTML5
- **Inclui** metadados essenciais para renderização adequada no navegador
- **Cria** um corpo vazio pronto para seu conteúdo visível
- **Segue** as melhores práticas do desenvolvimento web moderno

Agora você está pronto para adicionar os elementos visíveis do seu terrário. Usaremos elementos `<div>` como contêineres para organizar diferentes seções de conteúdo e elementos `<img>` para exibir as imagens das plantas.

### Trabalhando com Imagens e Contêineres de Layout

Imagens são especiais no HTML porque usam tags "auto-fechadas". Diferente de elementos como `<p></p>` que envolvem conteúdo, a tag `<img>` contém todas as informações necessárias dentro da própria tag usando atributos como `src` para o caminho do arquivo de imagem e `alt` para acessibilidade.

Antes de adicionar imagens ao seu HTML, você precisará organizar seus arquivos de projeto corretamente criando uma pasta de imagens e adicionando os gráficos das plantas.

**Primeiro, configure suas imagens:**
1. Crie uma pasta chamada `images` dentro da pasta do projeto terrarium
2. Baixe as imagens das plantas da [pasta de solução](../../../../3-terrarium/solution/images) (14 imagens de plantas no total)
3. Copie todas as imagens das plantas para sua nova pasta `images`

### Tarefa: Crie o Layout de Exibição das Plantas

Agora adicione as imagens das plantas organizadas em duas colunas entre suas tags `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.br.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.br.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.br.png" />
		</div>
	</div>
</div>
```

**Passo a passo, aqui está o que está acontecendo neste código:**
- **Cria** um contêiner principal da página com `id="page"` para conter todo o conteúdo
- **Estabelece** dois contêineres de coluna: `left-container` e `right-container`
- **Organiza** 7 plantas na coluna esquerda e 7 plantas na coluna direita
- **Envolve** cada imagem de planta em um div `plant-holder` para posicionamento individual
- **Aplica** nomes de classe consistentes para estilização com CSS na próxima lição
- **Atribui** IDs únicos a cada imagem de planta para interação com JavaScript mais tarde
- **Inclui** caminhos de arquivo corretos apontando para a pasta de imagens

> 🤔 **Considere Isso**: Note que todas as imagens atualmente têm o mesmo texto alternativo "plant". Isso não é ideal para acessibilidade. Usuários de leitores de tela ouviriam "plant" repetido 14 vezes sem saber qual planta específica cada imagem mostra. Você consegue pensar em textos alternativos melhores e mais descritivos para cada imagem?

> 📝 **Tipos de Elementos HTML**: Elementos `<div>` são "em bloco" e ocupam toda a largura, enquanto elementos `<span>` são "em linha" e ocupam apenas a largura necessária. O que você acha que aconteceria se você mudasse todas essas tags `<div>` para tags `<span>`?

Com essa marcação adicionada, as plantas aparecerão na tela, embora ainda não pareçam polidas – é para isso que serve o CSS na próxima lição! Por enquanto, você tem uma base sólida de HTML que organiza seu conteúdo corretamente e segue as melhores práticas de acessibilidade.

## Usando HTML Semântico para Acessibilidade

HTML semântico significa escolher elementos HTML com base em seu significado e propósito, não apenas em sua aparência. Quando você usa marcação semântica, está comunicando a estrutura e o significado do seu conteúdo para navegadores, mecanismos de busca e tecnologias assistivas como leitores de tela.

Essa abordagem torna seus sites mais acessíveis para usuários com deficiências e ajuda os mecanismos de busca a entender melhor seu conteúdo. É um princípio fundamental do desenvolvimento web moderno que cria experiências melhores para todos.

### Adicionando um Título Semântico à Página

Vamos adicionar um título adequado à sua página de terrário. Insira esta linha logo após sua tag de abertura `<body>`:

```html
<h1>My Terrarium</h1>
```

**Por que a marcação semântica é importante:**
- **Ajuda** leitores de tela a navegar e entender a estrutura da página
- **Melhora** a otimização para mecanismos de busca (SEO) ao esclarecer a hierarquia do conteúdo
- **Aumenta** a acessibilidade para usuários com deficiências visuais ou diferenças cognitivas
- **Cria** melhores experiências de usuário em todos os dispositivos e plataformas
- **Segue** padrões da web e melhores práticas para desenvolvimento profissional

**Exemplos de escolhas semânticas vs. não semânticas:**

| Propósito         | ✅ Escolha Semântica         | ❌ Escolha Não Semântica         |
|-------------------|-----------------------------|----------------------------------|
| Título principal  | `<h1>Título</h1>`           | `<div class="big-text">Título</div>` |
| Navegação         | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Botão             | `<button>Clique aqui</button>` | `<span onclick="...">Clique aqui</span>` |
| Conteúdo do artigo| `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Veja em Ação**: Assista [como leitores de tela interagem com páginas web](https://www.youtube.com/watch?v=OUDV1gqs9GA) para entender por que a marcação semântica é crucial para acessibilidade. Note como a estrutura adequada do HTML ajuda os usuários a navegar eficientemente.

## Criando o Contêiner do Terrário

Agora vamos adicionar a estrutura HTML para o próprio terrário – o recipiente de vidro onde as plantas serão colocadas. Esta seção demonstra um conceito importante: o HTML fornece estrutura, mas sem a estilização do CSS, esses elementos ainda não serão visíveis.

A marcação do terrário usa nomes de classe descritivos que tornarão a estilização com CSS intuitiva e fácil de manter na próxima lição.

### Tarefa: Adicione a Estrutura do Terrário

Insira esta marcação acima da última tag `</div>` (antes da tag de fechamento do contêiner da página):

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**Entendendo esta estrutura do terrário:**
- **Cria** um contêiner principal do terrário com um ID único para estilização
- **Define** elementos separados para cada componente visual (topo, paredes, terra, fundo)
- **Inclui** elementos aninhados para efeitos de reflexão no vidro (elementos glossy)
- **Usa** nomes de classe descritivos que indicam claramente o propósito de cada elemento
- **Prepara** a estrutura para estilização com CSS que criará a aparência do terrário de vidro

> 🤔 **Percebeu Algo?**: Mesmo que você tenha adicionado essa marcação, nada novo aparece na página! Isso ilustra perfeitamente como o HTML fornece estrutura enquanto o CSS fornece aparência. Esses elementos `<div>` existem, mas ainda não têm estilização visual – isso será abordado na próxima lição!

---

## Desafio do Agente GitHub Copilot

Use o modo Agent para completar o seguinte desafio:

**Descrição:** Crie uma estrutura HTML semântica para uma seção de guia de cuidados com plantas que pode ser adicionada ao projeto do terrário.
**Prompt:** Crie uma seção HTML semântica que inclua um título principal "Guia de Cuidados com Plantas", três subseções com os títulos "Rega", "Requisitos de Luz" e "Cuidados com o Solo", cada uma contendo um parágrafo com informações sobre cuidados com plantas. Use tags HTML semânticas adequadas como `<section>`, `<h2>`, `<h3>` e `<p>` para estruturar o conteúdo corretamente.

Saiba mais sobre [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## Desafio de História do HTML

**Aprendendo sobre a evolução da web**

O HTML evoluiu significativamente desde que Tim Berners-Lee criou o primeiro navegador da web no CERN em 1990. Algumas tags mais antigas, como `<marquee>`, agora estão obsoletas porque não funcionam bem com os padrões modernos de acessibilidade e princípios de design responsivo.

**Experimente:**
1. Envolva temporariamente o título `<h1>` em uma tag `<marquee>`: `<marquee><h1>Meu Terrário</h1></marquee>`
2. Abra sua página em um navegador e observe o efeito de rolagem
3. Considere por que essa tag foi descontinuada (dica: pense na experiência do usuário e na acessibilidade)
4. Remova a tag `<marquee>` e volte à marcação semântica

**Perguntas para reflexão:**
- Como um título rolando pode afetar usuários com deficiências visuais ou sensibilidade ao movimento?
- Quais técnicas modernas de CSS poderiam alcançar efeitos visuais semelhantes de forma mais acessível?
- Por que é importante usar padrões web atuais em vez de elementos obsoletos?

Explore mais sobre [elementos HTML obsoletos e descontinuados](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) para entender como os padrões da web evoluem para melhorar a experiência do usuário.


## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/16)

## Revisão e Autoestudo

**Aprofunde seu conhecimento em HTML**

O HTML tem sido a base da web por mais de 30 anos, evoluindo de uma linguagem simples de marcação de documentos para uma plataforma sofisticada para construir aplicações interativas. Compreender essa evolução ajuda você a valorizar os padrões modernos da web e tomar melhores decisões de desenvolvimento.

**Caminhos de aprendizado recomendados:**

1. **História e Evolução do HTML**
   - Pesquise a linha do tempo do HTML 1.0 ao HTML5
   - Explore por que certas tags foram descontinuadas (acessibilidade, compatibilidade com dispositivos móveis, manutenção)
   - Investigue recursos emergentes do HTML e propostas futuras

2. **Imersão em HTML Semântico**
   - Estude a lista completa de [elementos semânticos do HTML5](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Pratique identificar quando usar `<article>`, `<section>`, `<aside>` e `<main>`
   - Aprenda sobre atributos ARIA para melhorar a acessibilidade

3. **Desenvolvimento Web Moderno**
   - Explore [como construir sites responsivos](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) no Microsoft Learn
   - Entenda como o HTML se integra com CSS e JavaScript
   - Aprenda sobre desempenho na web e melhores práticas de SEO

**Perguntas para reflexão:**
- Quais tags HTML obsoletas você descobriu e por que foram removidas?
- Quais novos recursos do HTML estão sendo propostos para versões futuras?
- Como o HTML semântico contribui para a acessibilidade na web e para o SEO?


## Tarefa

[Pratique seu HTML: Crie um modelo de blog](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.