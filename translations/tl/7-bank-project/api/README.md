# Bank API

> Bank API na ginawa gamit ang [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

Ang API ay nakahanda na para sa iyo at hindi bahagi ng aktibidad.

Gayunpaman, kung nais mong matutunan kung paano gumawa ng API na tulad nito, maaari mong sundan ang serye ng mga video na ito: https://aka.ms/NodeBeginner (ang mga video 17 hanggang 21 ay sumasaklaw sa eksaktong API na ito).

Maaari mo ring tingnan ang interactive na tutorial na ito: https://aka.ms/learn/express-api

## Pagpapatakbo ng server

Siguraduhing naka-install ang [Node.js](https://nodejs.org).

1. I-clone ang repo na ito [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Buksan ang iyong terminal at pumunta sa folder na `Web-Dev-For-Beginners/7-bank-project/api`.
3. Patakbuhin ang `npm install` at hintayin ang pag-install ng mga package (maaaring magtagal depende sa bilis ng iyong internet connection).
4. Kapag tapos na ang pag-install, patakbuhin ang `npm start` at handa ka na.

Ang server ay magsisimulang makinig sa port `5000`.
*Ang server na ito ay tatakbo kasabay ng pangunahing server ng bank app terminal (nakikinig sa port `3000`), huwag itong isara.*

> Tandaan: ang lahat ng mga entry ay nakaimbak sa memorya at hindi permanente, kaya kapag ang server ay tumigil, mawawala ang lahat ng data.

## Mga detalye ng API

Ruta                                         | Deskripsyon
---------------------------------------------|------------------------------------
GET    /api/                                 | Kunin ang impormasyon ng server
POST   /api/accounts/                        | Gumawa ng account, hal: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Kunin ang lahat ng data para sa tinukoy na account
DELETE /api/accounts/:user                   | Tanggalin ang tinukoy na account
POST   /api/accounts/:user/transactions      | Magdagdag ng transaksyon, hal: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Tanggalin ang tinukoy na transaksyon

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.