<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-10-11T12:10:09+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ta"
}
-->
# விண்வெளி விளையாட்டு உருவாக்கம் பகுதி 3: இயக்கத்தைச் சேர்த்தல்

## முன்-வகுப்பு வினாடி வினா

[முன்-வகுப்பு வினாடி வினா](https://ff-quizzes.netlify.app/web/quiz/33)

விளையாட்டில் அந்நியர்கள் திரையில் சுற்றி வராமல் இருந்தால் அது மிகவும் சுவாரஸ்யமாக இருக்காது! இந்த விளையாட்டில், இரண்டு வகையான இயக்கங்களை நாம் பயன்படுத்துவோம்:

- **கீபோர்ட்/மவுஸ் இயக்கம்**: பயனர் கீபோர்ட் அல்லது மவுஸ் மூலம் திரையில் உள்ள பொருளை நகர்த்தும் போது.
- **விளையாட்டு மூலம் இயக்கம்**: விளையாட்டு ஒரு குறிப்பிட்ட நேர இடைவெளியில் பொருளை நகர்த்தும் போது.

திரையில் பொருள்களை எப்படி நகர்த்துவது? இது முழுவதும் கார்டீசியன் கோர்டினேட்டுகள் பற்றியது: பொருளின் இடத்தை (x,y) மாற்றி திரையை மீண்டும் வரைதல்.

திரையில் *இயக்கத்தை* அடைய நீங்கள் பொதுவாக பின்வரும் படிகளை தேவைப்படும்:

1. **புதிய இடத்தை அமைத்தல்**: பொருள் நகர்ந்தது போல தோன்ற இது தேவைப்படும்.
2. **திரையை அழித்தல்**: வரைதல்களுக்கு இடையில் திரையை அழிக்க வேண்டும். இதை பின்னணி நிறத்துடன் ஒரு செங்குத்து வரைதல் மூலம் செய்யலாம்.
3. **புதிய இடத்தில் பொருளை மீண்டும் வரைதல்**: இதைச் செய்வதன் மூலம், பொருளை ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு நகர்த்துவதை அடைகிறோம்.

இதோ, இது குறியீட்டில் எப்படி இருக்கும்:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ உங்கள் ஹீரோவை பல ஃப்ரேம்களில் மீண்டும் வரைதல் செய்வது செயல்திறனில் செலவுகளை ஏற்படுத்தும் காரணத்தை நீங்கள் யோசிக்க முடியுமா? [இந்த முறைமையின் மாற்றங்கள்](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas) பற்றி படிக்கவும்.

## கீபோர்ட் நிகழ்வுகளை கையாளுதல்

நிகழ்வுகளை நீங்கள் குறிப்பிட்ட நிகழ்வுகளை குறியீட்டுடன் இணைப்பதன் மூலம் கையாளலாம். கீபோர்ட் நிகழ்வுகள் முழு விண்டோவில் செயல்படுத்தப்படும், ஆனால் மவுஸ் நிகழ்வுகள், உதாரணமாக `click`, குறிப்பிட்ட ஒரு உருப்படியை கிளிக் செய்வதுடன் இணைக்கப்படும். இந்த திட்டத்தின் முழுவதும் நாம் கீபோர்ட் நிகழ்வுகளை பயன்படுத்துவோம்.

ஒரு நிகழ்வை கையாள நீங்கள் விண்டோவின் `addEventListener()` முறைமையை பயன்படுத்த வேண்டும் மற்றும் அதற்கு இரண்டு உள்ளீட்டு அளவுருக்களை வழங்க வேண்டும். முதல் அளவுரு நிகழ்வின் பெயர், உதாரணமாக `keyup`. இரண்டாவது அளவுரு நிகழ்வு நடைபெறும்போது அழைக்கப்பட வேண்டிய செயல்பாடு.

இதோ ஒரு உதாரணம்:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

கீ நிகழ்வுகளுக்கு, எந்த விசை அழுத்தப்பட்டது என்பதை பார்க்க நிகழ்வில் இரண்டு பண்புகள் உள்ளன:

- `key`: இது அழுத்தப்பட்ட விசையின் string வடிவம், உதாரணமாக `ArrowUp`.
- `keyCode`: இது ஒரு எண் வடிவம், உதாரணமாக `37`, இது `ArrowLeft`-க்கு இணையானது.

✅ கீ நிகழ்வு மானிப்புலேஷன் விளையாட்டு மேம்பாட்டுக்கு வெளியே பயனுள்ளதாக இருக்கிறது. இந்த தொழில்நுட்பத்திற்கான மற்ற பயன்பாடுகளை நீங்கள் யோசிக்க முடியுமா?

### சிறப்பு விசைகள்: ஒரு கவலை

சில *சிறப்பு* விசைகள் விண்டோவை பாதிக்கின்றன. அதாவது, நீங்கள் `keyup` நிகழ்வை கேட்கும்போது, இந்த சிறப்பு விசைகளை உங்கள் ஹீரோவை நகர்த்த பயன்படுத்தினால், இது ஹாரிசொன்டல் ஸ்க்ரோலிங்கையும் செய்யும். அதனால், உங்கள் விளையாட்டை உருவாக்கும் போது இந்த *உள்ளமைவு* உலாவி நடத்தை *நிறுத்த* விரும்பலாம். இதற்கு நீங்கள் இந்த மாதிரியான குறியீட்டை தேவைப்படும்:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

மேலே உள்ள குறியீடு, arrow-விசைகள் மற்றும் space விசைக்கு *default* நடத்தை நிறுத்தப்படும் என்பதை உறுதிப்படுத்தும். *நிறுத்தல்* முறைமை `e.preventDefault()` அழைக்கும்போது நிகழ்கிறது.

## விளையாட்டு மூலம் இயக்கம்

நாம் பொருள்களை தானாகவே நகர்த்த `setTimeout()` அல்லது `setInterval()` போன்ற டைமர்களை பயன்படுத்தலாம், இது ஒவ்வொரு டிக் அல்லது நேர இடைவெளியில் பொருளின் இடத்தை புதுப்பிக்கும். இதோ, இது எப்படி இருக்கும்:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## விளையாட்டு லூப்

விளையாட்டு லூப் என்பது ஒரு கருத்து, இது அடிப்படையாக ஒரு செயல்பாடு, இது ஒவ்வொரு நேர இடைவெளியிலும் அழைக்கப்படுகிறது. இது விளையாட்டு லூப் என்று அழைக்கப்படுகிறது, ஏனெனில் பயனருக்கு காட்சியளிக்க வேண்டிய அனைத்தும் லூப்பில் வரைதல் செய்யப்படுகிறது. விளையாட்டு லூப் விளையாட்டின் அனைத்து பொருள்களையும் பயன்படுத்துகிறது, அவற்றை வரைதல் செய்யும், சில காரணங்களுக்காக விளையாட்டின் ஒரு பகுதியாக இருக்க வேண்டாம் என்றால் தவிர. உதாரணமாக, ஒரு பொருள் ஒரு எதிரி, இது லேசர் மூலம் தாக்கப்பட்டு வெடிக்கிறது, அது தற்போதைய விளையாட்டு லூப்பின் ஒரு பகுதியாக இல்லை (இதற்கான மேலும் தகவலை நீங்கள் அடுத்த பாடங்களில் கற்றுக்கொள்வீர்கள்).

இதோ, ஒரு விளையாட்டு லூப் பொதுவாக எப்படி இருக்கும், குறியீட்டில்:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

மேலே உள்ள லூப் ஒவ்வொரு `200` மில்லி விநாடிகளிலும் கேன்வாஸ் மீண்டும் வரைதல் செய்ய அழைக்கப்படுகிறது. உங்கள் விளையாட்டுக்கு பொருத்தமான சிறந்த இடைவெளியை நீங்கள் தேர்வு செய்ய முடியும்.

## விண்வெளி விளையாட்டை தொடருதல்

நீங்கள் உள்ள குறியீட்டை எடுத்துக் கொண்டு அதை விரிவாக்குவீர்கள். பகுதி I-ல் நீங்கள் முடித்த குறியீட்டுடன் தொடங்கவும் அல்லது [பகுதி II- தொடக்க குறியீடு](../../../../6-space-game/3-moving-elements-around/your-work) பயன்படுத்தவும்.

- **ஹீரோவை நகர்த்துதல்**: நீங்கள் arrow விசைகளைப் பயன்படுத்தி ஹீரோவை நகர்த்துவதற்கான குறியீட்டைச் சேர்க்க வேண்டும்.
- **எதிரிகளை நகர்த்துதல்**: எதிரிகள் மேலிருந்து கீழே ஒரு குறிப்பிட்ட வேகத்தில் நகர வேண்டும் என்பதற்கான குறியீட்டையும் சேர்க்க வேண்டும்.

## பரிந்துரைக்கப்பட்ட படிகள்

`your-work` துணை கோப்பகத்தில் உங்களுக்கு உருவாக்கப்பட்ட கோப்புகளை கண்டறியவும். இது பின்வருவனவற்றை கொண்டிருக்க வேண்டும்:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

உங்கள் திட்டத்தை `your_work` கோப்பகத்தில் தொடங்க, கீழே உள்ளதை தட்டச்சு செய்யவும்:

```bash
cd your-work
npm start
```

மேலே உள்ளது `http://localhost:5000` என்ற முகவரியில் HTTP சர்வரை தொடங்கும். ஒரு உலாவியை திறந்து அந்த முகவரியை உள்ளிடவும், தற்போது அது ஹீரோ மற்றும் அனைத்து எதிரிகளையும் காட்சியளிக்க வேண்டும்; எதுவும் நகரவில்லை - இன்னும்!

### குறியீட்டைச் சேர்க்கவும்

1. **`hero`, `enemy` மற்றும் `game object` ஆகியவற்றுக்கு தனித்துவமான பொருள்களைச் சேர்க்கவும்**, அவற்றில் `x` மற்றும் `y` பண்புகள் இருக்க வேண்டும். ([Inheritance or composition](../README.md) பற்றிய பகுதியை நினைவில் கொள்ளவும்).

   *குறிப்பு*: `game object` என்பது `x` மற்றும் `y` மற்றும் கேன்வாஸ் மீது தன்னை வரைதல் செய்யும் திறன் கொண்டது.

   >குறிப்பு: கீழே உள்ள constructor-ஐப் பயன்படுத்தி புதிய GameObject வகுப்பை உருவாக்கி, அதை கேன்வாஸ் மீது வரைதல் செய்ய தொடங்கவும்:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    இப்போது, இந்த GameObject-ஐ Hero மற்றும் Enemy உருவாக்க விரிவாக்கவும்.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **கீ-நிகழ்வு கையாளிகளைச் சேர்க்கவும்**: ஹீரோவை மேலே/கீழே இடது/வலது நகர்த்த கீ வழிசெலுத்தலை கையாள.

   *நினைவில் கொள்ளவும்*: இது கார்டீசியன் அமைப்பு, மேல்-இடது `0,0`. *default behavior*-ஐ நிறுத்த குறியீட்டையும் சேர்க்க வேண்டும்.

   >குறிப்பு: உங்கள் onKeyDown செயல்பாட்டை உருவாக்கி அதை விண்டோவுடன் இணைக்கவும்:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   இந்த நேரத்தில் உங்கள் உலாவி கன்சோலைச் சரிபார்க்கவும், மற்றும் கீஸ்ட்ரோக்குகள் பதிவு செய்யப்படுவதை கவனிக்கவும்.

3. **[Pub sub pattern](../README.md) செயல்படுத்தவும்**, இது உங்கள் குறியீட்டை சுத்தமாக வைத்துக் கொள்ள உதவும், நீங்கள் மீதமுள்ள பகுதிகளை பின்பற்றும் போது.

   இந்த கடைசி பகுதியைச் செய்ய, நீங்கள்:

   1. **விண்டோவில் ஒரு நிகழ்வு கேட்பாளரைச் சேர்க்கவும்**:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **EventEmitter வகுப்பை உருவாக்கவும்**: செய்திகளை வெளியிட மற்றும் சந்தா செய்ய:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **மாறிகள் சேர்க்கவும்** மற்றும் EventEmitter அமைக்கவும்:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **விளையாட்டை தொடங்கவும்**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **விளையாட்டு லூப்பை அமைக்கவும்**

   window.onload செயல்பாட்டை refactor செய்து விளையாட்டை தொடங்கவும் மற்றும் ஒரு நல்ல இடைவெளியில் ஒரு விளையாட்டு லூப்பை அமைக்கவும். நீங்கள் லேசர் பீமையும் சேர்க்க வேண்டும்:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **எதிரிகளை ஒரு குறிப்பிட்ட இடைவெளியில் நகர்த்த குறியீட்டைச் சேர்க்கவும்**

    `createEnemies()` செயல்பாட்டை refactor செய்து எதிரிகளை உருவாக்கவும் மற்றும் அவற்றை புதிய gameObjects வகுப்பில் push செய்யவும்:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    மற்றும் ஹீரோவுக்கு இதே செயல்முறையை செய்ய `createHero()` செயல்பாட்டைச் சேர்க்கவும்.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    மற்றும் இறுதியாக, வரைதல் தொடங்க `drawGameObjects()` செயல்பாட்டைச் சேர்க்கவும்:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    உங்கள் எதிரிகள் உங்கள் ஹீரோ விண்வெளி கப்பலின் மீது முன்னேறத் தொடங்க வேண்டும்!

---

## 🚀 சவால்

நீங்கள் பார்க்கும் போதெல்லாம், உங்கள் குறியீடு செயல்பாடுகள், மாறிகள் மற்றும் வகுப்புகளைச் சேர்க்கும்போது 'ஸ்பகெட்டி குறியீடு' ஆக மாறும். உங்கள் குறியீடு மேலும் வாசிக்கக்கூடியதாக இருக்க, அதை எப்படி சிறப்பாக ஒழுங்கமைக்க முடியும்? உங்கள் குறியீட்டை ஒழுங்கமைக்க ஒரு அமைப்பை வரைதல் செய்யவும், அது இன்னும் ஒரு கோப்பில் இருந்தாலும்.

## வகுப்புக்குப் பின் வினாடி வினா

[வகுப்புக்குப் பின் வினாடி வினா](https://ff-quizzes.netlify.app/web/quiz/34)

## மதிப்பீடு & சுயபயிற்சி

நாம் frameworks இல்லாமல் நம் விளையாட்டை எழுதுகிறோம், ஆனால் விளையாட்டு மேம்பாட்டுக்கான பல JavaScript அடிப்படையிலான கேன்வாஸ் frameworks உள்ளன. [இவற்றைப் பற்றி](https://github.com/collections/javascript-game-engines) படிக்க சில நேரம் செலவிடவும்.

## பணிக்கட்டளை

[உங்கள் குறியீட்டை கருத்துரைக்கவும்](assignment.md)

---

**குறிப்பு**:  
இந்த ஆவணம் [Co-op Translator](https://github.com/Azure/co-op-translator) என்ற AI மொழிபெயர்ப்பு சேவையைப் பயன்படுத்தி மொழிபெயர்க்கப்பட்டுள்ளது. நாங்கள் துல்லியத்திற்காக முயற்சிக்கிறோம், ஆனால் தானியங்கி மொழிபெயர்ப்புகளில் பிழைகள் அல்லது தவறான தகவல்கள் இருக்கக்கூடும் என்பதை கவனத்தில் கொள்ளவும். அதன் தாய்மொழியில் உள்ள மூல ஆவணம் அதிகாரப்பூர்வ ஆதாரமாக கருதப்பட வேண்டும். முக்கியமான தகவல்களுக்கு, தொழில்முறை மனித மொழிபெயர்ப்பு பரிந்துரைக்கப்படுகிறது. இந்த மொழிபெயர்ப்பைப் பயன்படுத்துவதால் ஏற்படும் எந்த தவறான புரிதல்கள் அல்லது தவறான விளக்கங்களுக்கு நாங்கள் பொறுப்பல்ல.