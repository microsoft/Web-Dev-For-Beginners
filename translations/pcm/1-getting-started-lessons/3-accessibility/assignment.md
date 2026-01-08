<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2026-01-08T19:49:09+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "pcm"
}
-->
# Comprehensive Website Accessibility Audit

## Instructions

For dis assignment, you go carry out professional level accessibility audit for real website, apply the principles and techniques wey you don learn. Dis hands-on experience go deepen your understanding of accessibility barriers and solutions.

Choose website wey get accessibility issues—dis one go give you more learning chance than to analyze website wey don perfect already. Good options na old websites, complex web applications, or sites wey get plenty multimedia content.

### Phase 1: Strategic manual evaluation

Before you start to use automated tools, do thorough manual assessment first. Dis human-centered way dey show issues wey tools fit miss and e go help you understand how real users dey experience am.

**🔍 Important evaluation criteria:**

**Navigation and Structure:**
- You fit navigate whole site use keyboard only (Tab, Shift+Tab, Enter, Space, Arrow keys)?
- Focus indicators dey clear for all interactive elements?
- Heading structure (H1-H6) dey create logical content outline?
- E get skip links to jump go main content?

**Visual Accessibility:**
- Color contrast everywhere for site dey enough (minimum 4.5:1 for normal text)?
- Site dey use only color to show important information?
- All images get correct alternative text?
- Layout still dey functional when you zoom to 200%?

**Content and Communication:**
- E get "click here" or unclear link texts?
- You fit understand content and how e work without visual aid?
- Form fields properly labeled and grouped?
- Error messages clear and helpful?

**Interactive Elements:**
- All buttons and form controls dey work with keyboard alone?
- Dynamic content changes dey announce to screen readers?
- Modal dialogs and complex widgets dey follow proper accessibility patterns?

📝 **Write down your findings** with example them, screenshots, and page URLs. Mention both issues and good things.

### Phase 2: Comprehensive automated testing

Now, check and expand your manual findings with top-level accessibility testing tools. Each tool get different strength, so use multiple tools to cover everything.

**🛠️ Testing tools wey you go need:**

1. **Lighthouse Accessibility Audit** (inside Chrome/Edge DevTools)
   - Run audit for multiple pages
   - Focus on certain metrics and tips
   - Note your accessibility score and issues

2. **axe DevTools** (browser extension - industry standard)
   - More detailed issue detection than Lighthouse
   - Give specific code examples for fixes
   - Test against WCAG 2.1 standards

3. **WAVE Web Accessibility Evaluator** (browser extension)
   - Visual display of accessibility features
   - Highlights errors and positive features
   - Good for understanding page structure

4. **Color Contrast Analyzers**
   - WebAIM Contrast Checker for specific color pairs
   - Browser extensions for whole page analysis
   - Test against WCAG AA and AAA standards

**🎧 Real assistive technology testing:**
- **Screen reader testing**: Use NVDA (Windows), VoiceOver (Mac), or TalkBack (Android)
- **Keyboard-only navigation**: Unplug mouse, navigate whole site with keyboard only
- **Zoom testing**: Test for 200% and 400% zoom levels
- **Voice control testing**: If available, try voice navigation tools

**📊 Organize your results** by creating big spreadsheet with:
- Issue description and place
- Severity level (Critical/High/Medium/Low)
- WCAG criteria wey get problem
- Tool wey find issue
- Screenshots and proofs

### Phase 3: Comprehensive findings documentation

Make professional accessibility audit report wey show say you understand technical issues and how e affect people.

**📋 Report sections wey you need:**

1. **Executive Summary** (1 page)
   - Website URL and short description
   - Overall accessibility level
   - Top 3 most important issues
   - Estimated effect for users wey get disabilities

2. **Methodology** (½ page)
   - Testing approach and tools wey you use
   - Pages checked and device/browser used
   - Standards checked against (WCAG 2.1 AA)

3. **Detailed Findings** (2-3 pages)
   - Issues grouped by WCAG principle (Perceivable, Operable, Understandable, Robust)
   - Add screenshots and specific examples
   - Note positive accessibility features you find
   - Cross-check with automated tool results

4. **User Impact Assessment** (1 page)
   - How your issues affect users with different disabilities
   - Scenarios wey talk about real user experience
   - Business impact (legal risk, SEO, user growth)

**📸 Evidence collection:**
- Screenshots of violations
- Screen recordings of problem user flows
- Tool reports (save as PDFs)
- Code examples of issues

### Phase 4: Professional remediation plan

Make strategic, prioritized plan to fix accessibility problems. Dis one go show say you sabi think like professional web developer wey dey solve real business wahala.

**🎯 Create detailed improvement recommendations (minimum 10 issues):**

**For each issue, provide:**

- **Issue Description**: Clear talk wetin wrong and why e be problem
- **WCAG Reference**: Specific criteria wey you break (e.g., "2.4.4 Link Purpose (In Context) - Level A")
- **User Impact**: How e affect people with different disabilities
- **Solution**: Specific code change, design change, or process fix
- **Priority Level**: Critical (blocks basic use) / High (big barrier) / Medium (usability problem) / Low (improvement)
- **Implementation Effort**: Time or complexity estimate (Quick win / Moderate effort / Major refactor)
- **Testing Verification**: How to check say the fix dey work

**Example improvement entry:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strategic implementation phases:**

- **Phase 1 (0-2 weeks)**: Critical issues wey block basic function
- **Phase 2 (1-2 months)**: High priority improvements for better user experience
- **Phase 3 (3-6 months)**: Medium priority enhancements and process improvements
- **Phase 4 (Ongoing)**: Continuous monitoring and enhancement

## Evaluation Rubric

Your accessibility audit go get rating for both technical correctness and professional presentation:

| Criteria | Excellent (90-100%) | Good (80-89%) | Satisfactory (70-79%) | Needs Improvement (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Manual Testing Depth** | Deep evaluation covering all POUR principles with detailed notes and user examples | Good coverage for most accessibility areas with clear findings and some user impact | Basic evaluation covering important areas with enough notes | Limited testing with shallow notes and little user impact thought |
| **Tool Utilization & Analysis** | Uses all required tools well, cross-checks findings, includes proof, analyzes tool limits | Uses most tools well with good notes, some cross-checking, and enough proof | Uses required tools with basic notes and some proof | Small tool use, poor notes, or missing proof |
| **Issue Identification & Categorization** | Finds 15+ specific issues for all WCAG principles, correctly categorizes by severity, shows deep understanding | Finds 10-14 issues across most WCAG principles, good categorization, solid understanding | Finds 7-9 issues with enough WCAG coverage and basic category work | Finds less than 7 issues with limited scope or poor categorization |
| **Solution Quality & Feasibility** | 10+ detailed and actionable solutions with exact WCAG references, real implementation timelines, and verification | 8-9 well-made solutions with mostly exact references and good implementation plans | 6-7 basic solutions with some detail and mostly real plans | Less than 6 solutions or missing detail, unrealistic plans |
| **Professional Communication** | Report well organized, clear, includes executive summary, uses proper technical language, business style | Good organization with good writing, includes most required sections, proper tone | Okay organization with acceptable writing, basic required sections | Bad organization, unclear writing, or missing main sections |
| **Real-World Application** | Shows understanding of business impact, legal stuff, user variety, real implementation challenges | Shows good understanding of practical use with some business context | Basic understanding of real-world use | Little connection to practical use |

## Advanced Challenge Options

**🚀 For students wey want extra challenge:**

- **Comparative Analysis**: Audit 2-3 competing websites and compare their accessibility levels
- **Mobile Accessibility Focus**: Deep check mobile-specific accessibility issues using Android TalkBack or iOS VoiceOver
- **International Perspective**: Research and apply accessibility standards from different countries (EN 301 549, Section 508, ADA)
- **Accessibility Statement Review**: Check website existing accessibility statement (if any) against your findings

## Deliverables

Submit professional accessibility audit report wey show your top-level analysis and practical plan:

**📄 Final Report Requirements:**

1. **Executive Summary** (1 page)
   - Website overview and accessibility level assessment
   - Key findings summary with business impact
   - Recommended priority actions

2. **Methodology and Scope** (1 page)
   - Testing approach, tools used, and evaluation criteria
   - Pages/sections evaluated and any limits
   - Standards compliance framework (WCAG 2.1 AA)

3. **Detailed Findings Report** (3-4 pages)
   - Manual testing notes with user examples
   - Automated tool results with cross-checking
   - Issues grouped by WCAG principles with proof
   - Positive accessibility features found

4. **Strategic Remediation Plan** (3-4 pages)
   - Prioritized improvement recommendations (minimum 10)
   - Implementation timeline with effort estimates
   - Success metrics and verification ways
   - Long term accessibility maintenance plan

5. **Supporting Evidence** (Appendices)
   - Screenshots of accessibility breaks and testing tools
   - Code examples showing issues and fixes
   - Tool reports and audit summaries
   - Screen reader testing notes or recordings

**📊 Format Requirements:**
- **Document format**: PDF (professional look)
- **Word count**: 2,500-3,500 words (no counting appendices or screenshots)
- **Visual elements**: Add screenshots, diagrams, and examples everywhere
- **Citations**: Show WCAG guidelines and accessibility resources properly

**💡 Pro Tips for Excellence:**
- Use professional report formatting with consistent headings and style
- Add table of contents for easy navigation
- Balance technical correctness with clear, business-appropriate language
- Show understanding of both technical work and user impact

## Learning Outcomes

After finishing dis comprehensive accessibility audit, you go gain important professional skills:

**🎯 Technical Competencies:**
- **Accessibility Testing Mastery**: Pro skill with manual and automated testing methods wey industry uses
- **WCAG Application**: Real experience applying Web Content Accessibility Guidelines for real situations
- **Assistive Technology Understanding**: Hands-on with screen readers and keyboard navigation
- **Problem-Solution Mapping**: Fit identify accessibility barriers and develop specific, actionable fix plans

**💼 Professional Skills:**
- **Technical Communication**: Experience writing professional accessibility reports for different stakeholders
- **Strategic Planning**: Fit prioritize accessibility improvements based on user impact and implementation ease
- **Quality Assurance**: Understand accessibility testing as part of development lifecycle
- **Risk Assessment**: Appreciation of legal, business, and ethical sides of accessibility compliance

**🌍 Inclusive Design Mindset:**
- **User Empathy**: Deep understanding of different user needs and assistive technology interaction
- **Universal Design Principles**: Know say accessible design benefits all users, no be only people wey get disabilities
- **Continuous Improvement**: Framework for ongoing accessibility check and enhancement
- **Advocacy Skills**: Confidence to promote accessibility best practice for future projects and team

**🚀 Career Preparation:**
Dis assignment na like real-world accessibility consulting project, e go give you portfolio-worthy experience wey show:
- Systematic problem-solving approach
- Attention to both technical details and business impact
- Clear communication of complex technical things
- Understanding of legal and ethical responsibilities for web development

Once you finish am, you go ready to sabi contribute wella to accessibility work inside any web development role and champion inclusive design practice for your career.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we try make everything correct, abeg sabi say automated translations fit get error or wahala. Di original document for im own language na di correct one wey you suppose trust. If na important matter, e better make human expert translate am. We no go take responsibility if person no understand or if person use dis translation wrong.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->