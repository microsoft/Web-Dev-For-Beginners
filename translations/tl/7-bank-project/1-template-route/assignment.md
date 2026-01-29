# Pagbutihin ang Routing

## Mga Instruksyon

Ngayon na nakagawa ka na ng isang pangunahing sistema ng routing, oras na para pagandahin ito gamit ang mga propesyonal na tampok na nagpapabuti sa karanasan ng gumagamit at nagbibigay ng mas mahusay na mga tool para sa mga developer. Ang mga tunay na aplikasyon ay nangangailangan ng higit pa sa simpleng pagpapalit ng template – kailangan nila ng dynamic na mga pamagat ng pahina, lifecycle hooks, at extensible na arkitektura.

Sa gawaing ito, palalawakin mo ang iyong routing implementation gamit ang dalawang mahahalagang tampok na karaniwang makikita sa mga production web application. Ang mga pagpapahusay na ito ay magpapaganda sa iyong banking app at magbibigay ng pundasyon para sa mga susunod na functionality.

Ang deklarasyon ng mga ruta ay kasalukuyang naglalaman lamang ng template ID na gagamitin. Ngunit kapag nagpapakita ng bagong pahina, minsan ay kailangan ng kaunting dagdag. Pagandahin natin ang ating routing implementation gamit ang dalawang karagdagang tampok:

### Tampok 1: Dynamic na Pamagat ng Pahina
**Layunin:** Magbigay ng mga pamagat sa bawat template at i-update ang pamagat ng window gamit ang bagong pamagat na ito kapag nagbago ang template.

**Bakit ito mahalaga:**
- **Pinapabuti** ang karanasan ng gumagamit sa pamamagitan ng pagpapakita ng mga deskriptibong pamagat sa tab ng browser
- **Pinapalakas** ang accessibility para sa mga screen reader at assistive technologies  
- **Nagbibigay** ng mas mahusay na konteksto para sa bookmarking at kasaysayan ng browser
- **Sumusunod** sa mga pinakamahusay na kasanayan sa propesyonal na web development

**Pamamaraan ng Implementasyon:**
- **Palawakin** ang routes object upang isama ang impormasyon ng pamagat para sa bawat ruta
- **Baguhin** ang `updateRoute()` function upang i-update ang `document.title` nang dynamic
- **Subukan** na ang mga pamagat ay nagbabago nang tama kapag nagna-navigate sa pagitan ng mga screen

### Tampok 2: Route Lifecycle Hooks  
**Layunin:** Magdagdag ng opsyon upang magpatakbo ng ilang code pagkatapos magbago ang template. Gusto nating mag-print ng `'Dashboard is shown'` sa developer console tuwing ipinapakita ang dashboard page.

**Bakit ito mahalaga:**
- **Nagpapahintulot** ng custom na logic execution kapag naglo-load ang mga partikular na ruta
- **Nagbibigay** ng hooks para sa analytics, logging, o initialization code
- **Lumilikha** ng pundasyon para sa mas kumplikadong mga pag-uugali ng ruta
- **Nagpapakita** ng observer pattern sa web development

**Pamamaraan ng Implementasyon:**
- **Magdagdag** ng optional na callback function property sa mga configuration ng ruta
- **Ipatupad** ang callback function (kung mayroon) pagkatapos makumpleto ang template rendering
- **Siguraduhin** na gumagana ang tampok para sa anumang ruta na may nakatakdang callback
- **Subukan** na lumalabas ang mensahe sa console kapag binibisita ang dashboard

## Rubric

| Pamantayan | Napakahusay                                                                                                                          | Katanggap-tanggap                                                                                                                                                                                  | Kailangan ng Pagpapabuti                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|             | Ang dalawang tampok ay naipatupad at gumagana. Ang pamagat at pagdaragdag ng code ay gumagana rin para sa bagong ruta na idinagdag sa deklarasyon ng `routes`. | Ang dalawang tampok ay gumagana, ngunit ang pag-uugali ay hardcoded at hindi nako-configure sa pamamagitan ng deklarasyon ng `routes`. Ang pagdaragdag ng ikatlong ruta na may pamagat at pagdaragdag ng code ay hindi gumagana o gumagana nang bahagya. | Isa sa mga tampok ay nawawala o hindi gumagana nang maayos. |

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.