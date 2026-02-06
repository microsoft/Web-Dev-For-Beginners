# Unda Mchezo: Tumia Mitindo ya Ubunifu

## Muhtasari wa Kazi

Tumia maarifa yako mapya kuhusu mitindo ya ubunifu kwa kuunda mfano wa mchezo rahisi! Kazi hii itakusaidia kufanya mazoezi ya mitindo ya usanifu (urithi au muundo) na mfumo wa mawasiliano wa pub/sub uliyojifunza katika somo.

## Maelekezo

Unda uwakilishi rahisi wa mchezo unaoonyesha mitindo ya ubunifu kutoka somo hili. Mchezo wako unapaswa kufanya kazi lakini hauhitaji michoro tata – zingatia usanifu wa msingi na mifumo ya mawasiliano.

### Mahitaji

**Chagua Mtindo wa Usanifu:**
- **Chaguo A**: Tumia urithi wa darasa (kama mfano wa `GameObject` → `Movable` → `Hero`)
- **Chaguo B**: Tumia muundo (kama mbinu ya kiwanda na tabia zilizochanganywa)

**Tekeleza Mawasiliano:**
- **Jumuisha** darasa la `EventEmitter` kwa ujumbe wa pub/sub
- **Sanidi** angalau aina 2-3 za ujumbe tofauti (kama `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Unganisha** pembejeo za mtumiaji (keyboard/mouse) na matukio ya mchezo kupitia mfumo wa matukio

**Vipengele vya Mchezo vya Kujumuisha:**
- Angalau mhusika mmoja anayedhibitiwa na mchezaji
- Angalau kipengele kingine cha mchezo (adui, kitu cha kukusanya, au kipengele cha mazingira)
- Mwingiliano wa msingi kati ya vitu (mgongano, ukusanyaji, au mawasiliano)

### Mawazo ya Mchezo Unaoweza Kufikiria

**Michezo Rahisi ya Kuzingatia:**
- **Mchezo wa Nyoka** – Vipande vya nyoka vinafuata kichwa, chakula kinazaliwa kwa nasibu
- **Toleo la Pong** – Paddle inaitikia pembejeo, mpira unaruka ukutani
- **Mchezo wa Kukusanya** – Mchezaji anazunguka akikusanya vitu huku akiepuka vikwazo
- **Msingi wa Ulinzi wa Mnara** – Minara inatambua na kupiga maadui wanaosonga

### Miongozo ya Muundo wa Msimbo

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Kupima Utekelezaji Wako

**Hakikisha msimbo wako unafanya kazi kwa:**
- **Kupima** kwamba vitu vinahama au kubadilika wakati matukio yanachochewa
- **Kuthibitisha** kwamba vitu vingi vinaweza kujibu tukio moja
- **Kuangalia** kwamba unaweza kuongeza tabia mpya bila kubadilisha msimbo uliopo
- **Kuhakikisha** pembejeo za keyboard/mouse zinachochea matukio ya mchezo ipasavyo

## Miongozo ya Uwasilishaji

**Uwasilishaji wako unapaswa kujumuisha:**
1. **Faili za JavaScript** zilizo na utekelezaji wa mchezo wako
2. **Faili ya HTML** ya kuendesha na kupima mchezo wako (inaweza kuwa rahisi)
3. **Maoni** yanayoelezea mtindo uliouchagua na sababu zake
4. **Nyaraka fupi** za aina za ujumbe na kazi zao

## Rubric

| Vigezo | Bora Zaidi (Alama 3) | Inafaa (Alama 2) | Inahitaji Kuboresha (Alama 1) |
|--------|---------------------|------------------|------------------------------|
| **Mtindo wa Usanifu** | Inatekeleza urithi AU muundo kwa usahihi na darasa/muundo wa vitu ulio wazi | Inatumia mtindo uliyochaguliwa na masuala madogo au kutokuwepo kwa uthabiti | Inajaribu kutumia mtindo lakini utekelezaji una matatizo makubwa |
| **Utekelezaji wa Pub/Sub** | EventEmitter inafanya kazi kwa usahihi na aina nyingi za ujumbe na mtiririko sahihi wa matukio | Mfumo wa pub/sub wa msingi unafanya kazi na baadhi ya utunzaji wa matukio | Mfumo wa matukio upo lakini hauwezi kufanya kazi kwa uhakika |
| **Ufanisi wa Mchezo** | Vipengele vitatu au zaidi vinavyoshirikiana kupitia matukio | Vipengele viwili vinavyoshirikiana kwa mawasiliano ya matukio ya msingi | Kipengele kimoja kinajibu matukio au mwingiliano wa msingi |
| **Ubora wa Msimbo** | Msimbo safi, wenye maoni mazuri na mpangilio wa kimantiki na JavaScript ya kisasa | Msimbo ulio na mpangilio mzuri kwa ujumla na maoni ya kutosha | Msimbo unafanya kazi lakini hauna mpangilio au maoni ya wazi |

**Alama za Ziada:**
- **Mitambo ya ubunifu ya mchezo** inayonyesha matumizi ya kuvutia ya mitindo
- **Mbinu nyingi za pembejeo** (matukio ya keyboard NA mouse)
- **Usanifu unaoweza kupanuka** ambao ungekuwa rahisi kuongeza vipengele vipya

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.