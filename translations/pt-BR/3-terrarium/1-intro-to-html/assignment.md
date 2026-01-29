# Prática de HTML: Construção de um Modelo de Blog

## Objetivos de Aprendizagem

Aplique seus conhecimentos de HTML projetando e codificando a estrutura completa de uma página inicial de blog. Esta atividade prática reforçará conceitos de HTML semântico, melhores práticas de acessibilidade e habilidades de organização de código profissional que você usará ao longo de sua jornada de desenvolvimento web.

**Ao concluir esta atividade, você irá:**
- Praticar o planejamento de layouts de sites antes de codificar
- Aplicar elementos semânticos de HTML de forma adequada
- Criar marcações acessíveis e bem estruturadas
- Desenvolver hábitos profissionais de codificação com comentários e organização

## Requisitos do Projeto

### Parte 1: Planejamento do Design (Modelo Visual)

**Crie um modelo visual da página inicial do seu blog que inclua:**
- Cabeçalho com título do site e navegação
- Área de conteúdo principal com pelo menos 2-3 prévias de postagens do blog
- Barra lateral com informações adicionais (seção sobre, postagens recentes, categorias)
- Rodapé com informações de contato ou links

**Opções para criar o modelo:**
- **Esboço à mão**: Use papel e lápis, depois fotografe ou escaneie seu design
- **Ferramentas digitais**: Figma, Adobe XD, Canva, PowerPoint ou qualquer aplicativo de desenho
- **Ferramentas de wireframe**: Balsamiq, MockFlow ou softwares similares

**Rotule as seções do seu modelo** com os elementos HTML que você planeja usar (ex.: "Cabeçalho - `<header>`", "Postagens do Blog - `<article>`").

### Parte 2: Planejamento dos Elementos HTML

**Crie uma lista mapeando cada seção do seu modelo para elementos HTML específicos:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Elementos Obrigatórios:**
Seu HTML deve conter pelo menos 10 elementos semânticos diferentes desta lista:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Parte 3: Implementação em HTML

**Codifique a página inicial do seu blog seguindo estes padrões:**

1. **Estrutura do Documento**: Inclua DOCTYPE, html, head e body corretamente
2. **Marcação Semântica**: Use elementos HTML para seus propósitos específicos
3. **Acessibilidade**: Inclua texto alternativo adequado para imagens e texto significativo para links
4. **Qualidade do Código**: Use indentação consistente e comentários significativos
5. **Conteúdo**: Inclua conteúdo realista para o blog (você pode usar texto de preenchimento)

**Exemplo de Estrutura HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Parte 4: Reflexão

**Escreva uma breve reflexão (3-5 frases) abordando:**
- Quais elementos HTML você utilizou com mais confiança?
- Quais desafios você encontrou ao planejar ou codificar?
- Como o HTML semântico ajudou a organizar seu conteúdo?
- O que você faria diferente no seu próximo projeto em HTML?

## Lista de Verificação para Envio

**Antes de enviar, certifique-se de que você tem:**
- [ ] Modelo visual com os elementos HTML rotulados
- [ ] Arquivo HTML completo com estrutura de documento adequada
- [ ] Pelo menos 10 elementos semânticos diferentes usados corretamente
- [ ] Comentários significativos explicando a estrutura do código
- [ ] Sintaxe HTML válida (teste em um navegador)
- [ ] Reflexão escrita abordando as perguntas do enunciado

## Rubrica de Avaliação

| Critério | Exemplar (4) | Proficiente (3) | Em Desenvolvimento (2) | Inicial (1) |
|----------|---------------|-----------------|--------------------------|-------------|
| **Planejamento e Design** | Modelo detalhado e bem rotulado mostrando clara compreensão do layout e da estrutura semântica do HTML | Modelo claro com a maioria das seções rotuladas adequadamente | Modelo básico com alguns rótulos, demonstra compreensão geral | Modelo mínimo ou pouco claro, falta identificação adequada das seções |
| **Uso de HTML Semântico** | Usa 10+ elementos semânticos de forma adequada, demonstra profundo entendimento da estrutura e acessibilidade do HTML | Usa 8-9 elementos semânticos corretamente, demonstra bom entendimento da marcação semântica | Usa 6-7 elementos semânticos, com alguma confusão sobre o uso adequado | Usa menos de 6 elementos ou utiliza elementos semânticos de forma incorreta |
| **Qualidade e Organização do Código** | Código excepcionalmente bem organizado, com indentação adequada, comentários abrangentes e sintaxe HTML perfeita | Código bem organizado com boa indentação, comentários úteis e sintaxe válida | Código em sua maioria organizado, com alguns comentários e pequenos problemas de sintaxe | Organização ruim, poucos comentários, múltiplos erros de sintaxe |
| **Acessibilidade e Melhores Práticas** | Excelentes considerações de acessibilidade, texto alternativo significativo, hierarquia de cabeçalhos adequada, segue todas as melhores práticas modernas de HTML | Boas características de acessibilidade, uso apropriado de cabeçalhos e texto alternativo, segue a maioria das melhores práticas | Algumas considerações de acessibilidade, texto alternativo básico e estrutura de cabeçalhos simples | Poucas características de acessibilidade, estrutura de cabeçalhos ruim, não segue as melhores práticas |
| **Reflexão e Aprendizado** | Reflexão perspicaz demonstrando profundo entendimento dos conceitos de HTML e análise reflexiva do processo de aprendizado | Boa reflexão mostrando entendimento dos conceitos principais e alguma autocrítica sobre o aprendizado | Reflexão básica com pouca percepção sobre os conceitos de HTML ou processo de aprendizado | Reflexão mínima ou ausente, demonstra pouco entendimento dos conceitos aprendidos |

## Recursos de Aprendizado

**Referências Essenciais:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Guia completo de todos os elementos HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Entendendo a marcação semântica
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Criando conteúdo web acessível
- [HTML Validator](https://validator.w3.org/) - Verifique a sintaxe do seu HTML

**Dicas para Sucesso:**
- Comece com seu modelo antes de escrever qualquer código
- Use as ferramentas de desenvolvedor do navegador para inspecionar a estrutura do seu HTML
- Teste sua página em diferentes tamanhos de tela (mesmo sem CSS)
- Leia seu HTML em voz alta para verificar se a estrutura faz sentido lógico
- Considere como um leitor de tela interpretaria a estrutura da sua página

> 💡 **Lembre-se**: Esta atividade foca na estrutura e semântica do HTML. Não se preocupe com o estilo visual – isso é trabalho do CSS! Sua página pode parecer simples, mas deve ser bem estruturada e significativa.

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.