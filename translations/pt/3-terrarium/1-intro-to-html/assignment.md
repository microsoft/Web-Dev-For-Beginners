<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T18:22:25+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "pt"
}
-->
# Trabalho Prático de HTML: Construir um Modelo de Blog

## Objectivos de Aprendizagem

Aplique os seus conhecimentos de HTML ao desenhar e codificar uma estrutura completa para a página inicial de um blog. Este trabalho prático reforçará conceitos de HTML semântico, melhores práticas de acessibilidade e competências de organização profissional de código que usará ao longo da sua jornada no desenvolvimento web.

**Ao completar este trabalho, irá:**
- Praticar o planeamento de layouts de websites antes de programar
- Aplicar elementos HTML semânticos de forma adequada
- Criar marcação acessível e bem estruturada
- Desenvolver hábitos profissionais de codificação com comentários e organização

## Requisitos do Projeto

### Parte 1: Planeamento do Design (Modelo Visual)

**Crie um modelo visual da página inicial do seu blog que inclua:**
- Cabeçalho com o título do site e navegação
- Área principal com pelo menos 2-3 pré-visualizações de publicações do blog
- Barra lateral com informação adicional (secção sobre, publicações recentes, categorias)
- Rodapé com informação de contacto ou links

**Opções para criação do modelo:**
- **Esboço feito à mão**: Use papel e lápis, e depois fotografe ou digitalize o seu desenho
- **Ferramentas digitais**: Figma, Adobe XD, Canva, PowerPoint ou qualquer aplicação de desenho
- **Ferramentas de wireframe**: Balsamiq, MockFlow ou software similar para wireframing

**Identifique as secções do seu modelo** com os elementos HTML que planeia usar (ex.: "Cabeçalho - `<header>`", "Publicações do Blog - `<article>`").

### Parte 2: Planeamento dos Elementos HTML

**Crie uma lista que associe cada secção do seu modelo a elementos HTML específicos:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Elementos Obrigatórios a Incluir:**
O seu HTML deve conter pelo menos 10 elementos semânticos diferentes desta lista:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Parte 3: Implementação em HTML

**Codifique a sua página inicial do blog seguindo estes padrões:**

1. **Estrutura do Documento**: Inclua DOCTYPE, html, head e body corretamente
2. **Marcação Semântica**: Use elementos HTML para os seus fins próprios
3. **Acessibilidade**: Inclua texto alt adequado para imagens e texto significativo para links
4. **Qualidade do Código**: Use indentação consistente e comentários úteis
5. **Conteúdo**: Inclua conteúdo realista do blog (pode usar texto fictício)

**Estrutura HTML de exemplo:**
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

**Escreva uma breve reflexão (3-5 frases) respondendo a:**
- Quais elementos HTML usou com mais confiança?
- Que desafios encontrou no planeamento ou na codificação?
- Como o HTML semântico ajudou a organizar o seu conteúdo?
- O que faria de diferente no seu próximo projeto HTML?

## Lista de Verificação para Entrega

**Antes de submeter, certifique-se de que tem:**
- [ ] Modelo visual com os elementos HTML identificados
- [ ] Ficheiro HTML completo com estrutura correta do documento
- [ ] Pelo menos 10 elementos HTML semânticos diferentes usados apropriadamente
- [ ] Comentários significativos que expliquem a estrutura do seu código
- [ ] Sintaxe HTML válida (teste num navegador)
- [ ] Reflexão escrita respondendo às perguntas do enunciado

## Rubrica de Avaliação

| Critérios | Exemplar (4) | Proficiente (3) | Em Desenvolvimento (2) | Iniciante (1) |
|----------|---------------|----------------|----------------|---------------|
| **Planeamento & Design** | Modelo detalhado e bem identificado, mostrando compreensão clara do layout e da estrutura semântica HTML | Modelo claro com a maioria das secções identificadas corretamente | Modelo básico com alguma identificação, mostra compreensão geral | Modelo mínimo ou pouco claro, falta identificação adequada das secções |
| **Uso de HTML Semântico** | Usa 10+ elementos semânticos correcta e apropriadamente, demonstra profundo entendimento da estrutura HTML e acessibilidade | Usa 8-9 elementos semânticos correctamente, mostra bom entendimento da marcação semântica | Usa 6-7 elementos semânticos, alguma confusão no uso adequado | Usa menos de 6 elementos ou faz mau uso dos elementos semânticos |
| **Qualidade & Organização do Código** | Código excecionalmente bem organizado, com indentação correta, comentários abrangentes e sintaxe HTML perfeita | Código bem organizado com boa indentação, comentários úteis e sintaxe válida | Código maioritariamente organizado com alguns comentários, problemas menores de sintaxe | Pouca organização, comentários mínimos, múltiplos erros de sintaxe |
| **Acessibilidade & Melhores Práticas** | Excelentes considerações de acessibilidade, texto alt significativo, hierarquia correta de títulos, segue todas as melhores práticas modernas de HTML | Boas características de acessibilidade, uso apropriado de títulos e texto alt, segue a maioria das boas práticas | Algumas considerações de acessibilidade, texto alt básico e estrutura básica de títulos | Acessibilidade limitada, má estrutura de títulos, não segue boas práticas |
| **Reflexão & Aprendizagem** | Reflexão perspicaz mostrando profundo entendimento dos conceitos HTML e análise ponderada do processo de aprendizagem | Boa reflexão mostrando compreensão dos conceitos chave e algum autoconhecimento no processo de aprendizagem | Reflexão básica com visão limitada sobre conceitos HTML ou processo de aprendizagem | Reflexão mínima ou ausente, mostra pouco entendimento dos conceitos aprendidos |

## Recursos de Aprendizagem

**Referências Essenciais:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Guia completo de todos os elementos HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Compreender a marcação semântica
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Criar conteúdos web acessíveis
- [HTML Validator](https://validator.w3.org/) - Verifique a sintaxe do seu HTML

**Dicas Profissionais para o Sucesso:**
- Comece pelo seu modelo antes de escrever qualquer código
- Use as ferramentas de desenvolvimento do navegador para inspecionar a estrutura do seu HTML
- Teste a sua página com diferentes tamanhos de ecrã (mesmo sem CSS)
- Leia o seu HTML em voz alta para verificar se a estrutura faz sentido lógico
- Considere como um leitor de ecrãs interpretaria a estrutura da sua página

> 💡 **Lembre-se**: Este trabalho foca-se na estrutura e semântica do HTML. Não se preocupe com o estilo visual – para isso é o CSS! A sua página pode parecer simples, mas deve ser bem estruturada e significativa.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, pedimos que tenha em conta que traduções automatizadas podem conter erros ou imprecisões. O documento original, na sua língua nativa, deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->