<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2025-10-24T16:20:46+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "my"
}
-->
# Comprehensive Website Accessibility Audit

## လမ်းညွှန်ချက်များ

ဒီအလုပ်မှာ သင်တစ်ခုတည်းသော website ကို အဆင့်မြင့် accessibility audit လုပ်ဆောင်ရမည်ဖြစ်ပြီး သင်လေ့လာခဲ့သော အခြေခံအချက်များနှင့်နည်းလမ်းများကို အသုံးချရမည်ဖြစ်သည်။ ဒီလက်တွေ့အတွေ့အကြုံက accessibility အခက်အခဲများနှင့် ဖြေရှင်းနည်းများကို နက်နက်ရှိုင်းရှိုင်းနားလည်စေပါမည်။

Accessibility အခက်အခဲများရှိနေသည်ဟု ထင်ရသော website တစ်ခုကို ရွေးချယ်ပါ—ဒါက အဆင်ပြေပြီးသား site ကို လေ့လာတာထက် သင်ယူမှုအခွင့်အလမ်းများ ပိုမိုရရှိစေပါမည်။ ရွေးချယ်ရန်ကောင်းသော site များမှာ ရှေးဟောင်း website များ၊ ရှုပ်ထွေးသော web application များ၊ သို့မဟုတ် rich multimedia content ပါဝင်သော site များဖြစ်နိုင်သည်။

### အဆင့် ၁: မျက်စိဖြင့် စနစ်တကျ သုံးသပ်ခြင်း

Automated tools မသုံးမီ Comprehensive manual assessment လုပ်ဆောင်ပါ။ ဒီလူ့အခြေခံနည်းလမ်းက tools မဖြစ်နိုင်သော အခက်အခဲများကို ရှာဖွေစေပြီး အမှန်တကယ် user experience ကို နားလည်စေပါသည်။

**🔍 အရေးကြီးသော သုံးသပ်မှု criteria:**

**Navigation နှင့် Structure:**
- Keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys) သုံးပြီး site အားလုံးကို navigation လုပ်နိုင်ပါသလား။
- Interactive elements အားလုံးတွင် focus indicators များရှင်းလင်းစွာမြင်နိုင်ပါသလား။
- Heading structure (H1-H6) က logical content outline တစ်ခုကို ဖန်တီးပါသလား။
- Main content သို့ jump လုပ်ရန် skip links ရှိပါသလား။

**Visual Accessibility:**
- Site အနှံ့တွင် color contrast လုံလောက်ပါသလား (normal text အတွက် အနည်းဆုံး 4.5:1)။
- အရေးကြီးသော အချက်အလက်များကို ဖော်ပြရန် color ကိုသာမူတည်ပါသလား။
- Image အားလုံးတွင် သင့်တော်သော alternative text ရှိပါသလား။
- Layout ကို 200% zoom လုပ်သောအခါ functional ဖြစ်နေပါသလား။

**Content နှင့် Communication:**
- "click here" သို့မဟုတ် မရှင်းလင်းသော link text များရှိပါသလား။
- Visual cues မပါဘဲ content နှင့် functionality ကို နားလည်နိုင်ပါသလား။
- Form fields များကို သင့်တော်စွာ label လုပ်ထားပြီး grouped လုပ်ထားပါသလား။
- Error messages များရှင်းလင်းပြီး အသုံးဝင်ပါသလား။

**Interactive Elements:**
- Button နှင့် form controls အားလုံးကို keyboard သုံးပြီး အလုပ်လုပ်နိုင်ပါသလား။
- Dynamic content changes များကို screen readers သို့ အသိပေးထားပါသလား။
- Modal dialogs နှင့် ရှုပ်ထွေးသော widgets များသည် accessibility patterns ကို လိုက်နာပါသလား။

📝 **သင့်ရဲ့ ရလဒ်များကို မှတ်တမ်းတင်ပါ** - အထူးသက်သေများ၊ screenshots နှင့် page URLs ပါဝင်စေပါ။ အခက်အခဲများနှင့် ကောင်းစွာလုပ်ဆောင်ထားသော အချက်များကို မှတ်တမ်းတင်ပါ။

### အဆင့် ၂: Comprehensive automated testing

Manual findings များကို အတည်ပြုပြီး industry-standard accessibility testing tools များကို အသုံးပြု၍ findings များကို တိုးချဲ့ပါ။ Tool တစ်ခုချင်းစီမှာ အားသာချက်များရှိပြီး၊ tools များစွာကို အသုံးပြုခြင်းက coverage အပြည့်အဝရရှိစေပါသည်။

**🛠️ လိုအပ်သော testing tools:**

1. **Lighthouse Accessibility Audit** (Chrome/Edge DevTools တွင် built-in)
   - များစွာသော pages တွင် audit run လုပ်ပါ
   - အထူး metrics နှင့် recommendations များကို အာရုံစိုက်ပါ
   - Accessibility score နှင့် specific violations ကို မှတ်တမ်းတင်ပါ

2. **axe DevTools** (browser extension - industry standard)
   - Lighthouse ထက်ပိုမိုအသေးစိတ် issue detection
   - Fixes အတွက် specific code examples ပေးသည်
   - WCAG 2.1 criteria အတိုင်း စမ်းသပ်သည်

3. **WAVE Web Accessibility Evaluator** (browser extension)
   - Accessibility features များ၏ visual representation
   - Errors နှင့် အကောင်းသော features များကို ဖော်ပြသည်
   - Page structure ကို နားလည်ရန် အကောင်းဆုံး

4. **Color Contrast Analyzers**
   - WebAIM Contrast Checker ကို specific color pairs အတွက် အသုံးပြုပါ
   - Page-wide analysis အတွက် browser extensions
   - WCAG AA နှင့် AAA standards နှစ်ခုစလုံးအတိုင်း စမ်းသပ်ပါ

**🎧 Real assistive technology testing:**
- **Screen reader testing**: NVDA (Windows), VoiceOver (Mac), သို့မဟုတ် TalkBack (Android) ကို အသုံးပြုပါ
- **Keyboard-only navigation**: Mouse ကို disconnect လုပ်ပြီး site အားလုံးကို navigation လုပ်ပါ
- **Zoom testing**: 200% နှင့် 400% zoom အဆင့်များတွင် functionality ကို စမ်းသပ်ပါ
- **Voice control testing**: ရနိုင်ပါက voice navigation tools ကို စမ်းသပ်ပါ

**📊 ရလဒ်များကို စနစ်တကျ စီစဉ်ပါ** - master spreadsheet တစ်ခုဖန်တီးပြီး:
- Issue description နှင့် location
- Severity level (Critical/High/Medium/Low)
- WCAG success criteria violated
- Issue ကို detect လုပ်သော tool
- Screenshots နှင့် သက်သေ

### အဆင့် ၃: Comprehensive findings documentation

Technical issues နှင့် human impact နှစ်ခုစလုံးကို နားလည်မှုကို ဖော်ပြသော professional accessibility audit report တစ်ခုကို ဖန်တီးပါ။

**📋 လိုအပ်သော report အပိုင်းများ:**

1. **Executive Summary** (၁ စာမျက်နှာ)
   - Website URL နှင့် အကျဉ်းချုပ်
   - Accessibility maturity အဆင့်
   - အရေးကြီးဆုံး အခက်အခဲ ၃ ခု
   - Disabilities ရှိသော users များအပေါ် estimated impact

2. **Methodology** (၁/၂ စာမျက်နှာ)
   - Testing approach နှင့် အသုံးပြုသော tools
   - စမ်းသပ်ထားသော pages နှင့် device/browser combinations
   - Standards (WCAG 2.1 AA) အတိုင်း စမ်းသပ်မှု

3. **Detailed Findings** (၂-၃ စာမျက်နှာ)
   - WCAG principle (Perceivable, Operable, Understandable, Robust) အလိုက် categorized လုပ်ထားသော issues
   - Screenshots နှင့် အထူးသက်သေများပါဝင်သည်
   - Positive accessibility features တွေ့ရှိမှု
   - Automated tool results နှင့် အချင်းချင်းဆက်စပ်မှု

4. **User Impact Assessment** (၁ စာမျက်နှာ)
   - အခက်အခဲများသည် disabilities များရှိသော users များကို ဘယ်လိုသက်ရောက်မှုရှိသည်ကို ဖော်ပြပါ
   - အမှန်တကယ် user experiences ကို ဖော်ပြသော scenarios
   - Business impact (legal risk, SEO, user base expansion)

**📸 Evidence collection:**
- Accessibility violations များ၏ screenshots
- Problematic user flows များ၏ screen recordings
- Tool reports (PDF အနေနှင့် save လုပ်ပါ)
- Issues များကို ဖော်ပြသော code examples

### အဆင့် ၄: Professional remediation plan

Accessibility issues များကို ဖြေရှင်းရန် strategic, prioritized plan တစ်ခုကို ဖန်တီးပါ။ ဒီအခန်းက web developer တစ်ဦးအနေနှင့် အမှန်တကယ် business constraints များကို ဖြေရှင်းနိုင်စွမ်းရှိကြောင်း ပြသသည်။

**🎯 Improvement recommendations များကို အသေးစိတ်ဖော်ပြပါ (အနည်းဆုံး ၁၀ ခု):**

**Issue တစ်ခုချင်းစီအတွက်:**

- **Issue Description**: အခက်အခဲက ဘာလို့ဖြစ်ပြီး ဘာကြောင့် အရေးကြီးသည်ကို ရှင်းလင်းဖော်ပြပါ
- **WCAG Reference**: Specific success criteria violated (ဥပမာ - "2.4.4 Link Purpose (In Context) - Level A")
- **User Impact**: အခက်အခဲက disabilities များရှိသောသူများကို ဘယ်လိုသက်ရောက်မှုရှိသည်
- **Solution**: Specific code changes, design modifications, သို့မဟုတ် process improvements
- **Priority Level**: Critical (basic usage ကို အတားအဆီးဖြစ်စေသည်) / High (အရေးကြီးသော barrier) / Medium (usability issue) / Low (enhancement)
- **Implementation Effort**: Time/complexity အကဲဖြတ်ချက် (Quick win / Moderate effort / Major refactor)
- **Testing Verification**: Fix အလုပ်လုပ်နေကြောင်း verify လုပ်ရန် နည်းလမ်း

**ဥပမာ improvement entry:**

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

- **Phase 1 (0-2 weeks)**: Basic functionality ကို အတားအဆီးဖြစ်စေသော critical issues
- **Phase 2 (1-2 months)**: User experience ကို ပိုမိုကောင်းမွန်စေသော high-priority improvements
- **Phase 3 (3-6 months)**: Medium-priority enhancements နှင့် process improvements
- **Phase 4 (Ongoing)**: Continuous monitoring နှင့် enhancement

## အကဲဖြတ်မှု Rubric

သင့်ရဲ့ accessibility audit ကို technical accuracy နှင့် professional presentation နှစ်ခုအပေါ် အခြေခံ၍ အကဲဖြတ်မည်:

| Criteria | Excellent (90-100%) | Good (80-89%) | Satisfactory (70-79%) | Needs Improvement (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Manual Testing Depth** | POUR principles အားလုံးကို စနစ်တကျ evaluation လုပ်ပြီး user scenarios များကို အသေးစိတ်ဖော်ပြထားသည် | Accessibility areas များအများစုကို ကောင်းစွာဖော်ပြထားပြီး findings များနှင့် user impact analysis ရှိသည် | Key areas များကို အခြေခံ evaluation လုပ်ပြီး observations များကို လုံလောက်စွာဖော်ပြထားသည် | Testing အနည်းငယ်သာလုပ်ပြီး observations များကို မလုံလောက်စွာဖော်ပြထားသည် |
| **Tool Utilization & Analysis** | Required tools အားလုံးကို ထိရောက်စွာအသုံးပြုပြီး findings များကို cross-reference လုပ်ထားသည်၊ သက်သေများရှင်းလင်းစွာဖော်ပြထားသည် | Tools အများစုကို ကောင်းစွာအသုံးပြုပြီး documentation ကောင်းမွန်သည် | Required tools ကို အခြေခံ documentation နှင့် evidence ဖြင့် အသုံးပြုထားသည် | Tool အသုံးပြုမှု အနည်းငယ်သာရှိပြီး documentation မကောင်းမွန်ပါ |
| **Issue Identification & Categorization** | WCAG principles အားလုံးအတိုင်း 15+ specific issues ကို ရှာဖွေပြီး severity အလိုက် categorize လုပ်ထားသည် | WCAG principles အများစုအတိုင်း 10-14 issues ကို ရှာဖွေပြီး categorize လုပ်ထားသည် | WCAG coverage အလုံလောက်ရှိသော 7-9 issues ကို ရှာဖွေထားသည် | Scope အနည်းငယ်သာရှိပြီး 7 issues ထက်နည်းသော အခက်အခဲများကို ရှာဖွေထားသည် |
| **Solution Quality & Feasibility** | 10+ detailed, actionable solutions ကို accurate WCAG references နှင့် realistic implementation timelines ဖြင့် ဖော်ပြထားသည် | 8-9 well-developed solutions ကို mostly accurate references နှင့် implementation details ဖြင့် ဖော်ပြထားသည် | 6-7 basic solutions ကို အချို့သော detail နှင့် generally realistic approaches ဖြင့် ဖော်ပြထားသည် | 6 solutions ထက်နည်းပြီး detail မလုံလောက်သော solutions |
| **Professional Communication** | Report ကို အလွန်ကောင်းမွန်စွာ စီစဉ်ထားပြီး ရှင်းလင်းစွာရေးသားထားသည်၊ executive summary ပါဝင်ပြီး technical language သင့်တော်စွာအသုံးပြုထားသည် | ကောင်းမွန်စွာ စီစဉ်ထားပြီး writing quality ကောင်းမွန်သည်၊ required sections အများစုပါဝင်သည် | လုံလောက်စွာ စီစဉ်ထားပြီး acceptable writing quality ရှိသည် | Organization မကောင်းမွန်ပါ၊ writing မရှင်းလင်းပါ၊ key sections မပါဝင်ပါ |
| **Real-World Application** | Business impact, legal considerations, user diversity, practical implementation challenges များကို နက်နက်ရှိုင်းရှိုင်းနားလည်မှုကို ဖော်ပြထားသည် | Practical applications ကို ကောင်းစွာနားလည်မှုကို ဖော်ပြထားပြီး အချို့သော business context ရှိသည် | Real-world applications ကို အခြေခံနားလည်မှု ရှိသည် | Practical applications နှင့် connection အနည်းငယ်သာရှိသည် |

## Advanced Challenge Options

**🚀 အပို challenge ရယူလိုသော ကျောင်းသားများအတွက်:**

- **Comparative Analysis**: Competing websites 2-3 ခုကို audit လုပ်ပြီး accessibility maturity ကို နှိုင်းယှဉ်ပါ
- **Mobile Accessibility Focus**: Android TalkBack သို့မဟုတ် iOS VoiceOver ကို အသုံးပြု၍ mobile-specific accessibility issues များကို အနက်ရှိုင်းစွာ လေ့လာပါ
- **International Perspective**: အခြားနိုင်ငံများ၏ accessibility standards (EN 301 549, Section 508, ADA) ကို လေ့လာပြီး အသုံးပြုပါ
- **Accessibility Statement Review**: Website ရှိသော accessibility statement (ရှိပါက) ကို သင့်ရဲ့ findings နှင့် နှိုင်းယှဉ်ပါ

## Deliverables

Professional-level analysis နှင့် practical implementation planning ကို ဖော်ပြသော comprehensive accessibility audit report တစ်ခုကို တင်ပြပါ:

**📄 Final Report Requirements:**

1. **Executive Summary** (၁ စာမျက်နှာ)
   - Website overview နှင့် accessibility maturity assessment
   - Key findings summary နှင့် business impact
   - Recommended priority actions

2. **Methodology and Scope** (၁ စာမျက်နှာ)
   - Testing approach, tools used, evaluation criteria
   - Pages/sections evaluated နှင့် အကန့်အသတ်များ
   - Standards compliance framework (WCAG 2.1 AA)

3. **Detailed Findings Report** (၃-၄ စာမျက်နှာ)
   - Manual testing observations နှင့် user scenarios
   - Automated tool results နှင့် cross-referencing
   - WCAG principles အလိုက် issues များကို evidence ဖြင့် စီစဉ်ထားသည်
   - Positive accessibility features တွေ့ရှိမှု

4. **Strategic Remediation Plan** (၃-၄ စာမျက်နှာ)
   - Prioritized improvement recommendations (အနည်းဆုံး ၁၀ ခု)
   - Implementation timeline နှင့် effort estimates
   - Success metrics နှင့် verification methods
   - Long-term accessibility maintenance strategy

5. **Supporting Evidence** (Appendices)
   - Accessibility violations နှင့် testing tools များ၏ screenshots
   - Issues နှင့် solutions ကို ဖော်ပြသော code examples
   - Tool reports နှင့် audit summaries
   - Screen reader testing notes သို့မဟုတ် recordings

**📊 Format Requirements:**
- **Document format**: PDF (professional presentation)
- **Word count**: 2,500-3,500 words (appendices နှင့် screenshots မပါဝင်ပါ)
- **Visual elements**: Screenshots, diagrams, examples များကို ထည့်သွင်းပါ
- **Citations**: WCAG guidelines နှင့် accessibility resources ကို သင့်တော်စွာရည်ညွှန်းပါ

**💡 Pro Tips for Excellence:**
- Headings နှင့် styling တူညီသော professional report formatting ကို အသုံးပြုပါ
- Navigation အတွက် table of contents ထည့်ပါ
- Technical accuracy နှင့် clear, business-appropriate language ကို balance လုပ်ပါ
- Technical implementation နှင့် user impact နှစ်ခုစလုံးကို နားလည်မှုကို ဖော်ပြပါ

## Learning Outcomes

Comprehensive accessibility audit ကို ပြီးမြောက်ပြီးနောက် သင်သည် အရေးကြီးသော professional skills များကို ဖွံ့ဖြိုးစေပါမည်:

**🎯 Technical Competencies:**
- **Accessibility Testing Mastery**: Industry-standard manual နှင့် automated testing methods ကို ကျွမ်းကျင်စွာ အသုံးပြုနိုင်မှု
- **WCAG Application**: Web Content Accessibility Guidelines ကို အမှန်တကယ် scenario များတွင် အသုံးပြုနိုင်မှု
- **Assistive Technology Understanding**: Screen readers နှင့် keyboard navigation ကို လက်တွေ့ကျွမ်းကျင်မှု
- **Problem-Solution Mapping**: Accessibility အခက်အခဲများကို ရှာဖွေပြီး specific, actionable remediation strategies ဖန်တီးနိုင်မှု

**💼 Professional Skills:**
- **Technical Communication**: Diverse stakeholders များအတွက် professional accessibility reports ရေးသားနိုင်မှု
- **Strategic Planning**: User impact နှင့် implementation feasibility အပေါ် အခြေခံ၍ accessibility improvements များကို prioritize လုပ်နိုင်မှု
- **Quality Assurance**: Development lifecycle အတွင်း accessibility testing ကို နားလည်မှု
- **

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။