<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ff47271e53637b2ba6ba72ad2b70f6d7",
  "translation_date": "2026-01-08T11:29:35+00:00",
  "source_file": "memory-game/README.md",
  "language_code": "kn"
}
-->
ಈದು [Next.js](https://nextjs.org) ಪ್ರಾಜೆಕ್ಟ್ ಆಗಿದ್ದು, [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) ಅನ್ನು ಬಳಸಿಕೊಂಡು ಸೃಷ್ಟಿಸಲಾಗಿದೆ.

## ಪ್ರಾರಂಭಿಸುವುದು

ಮೊದಲು, ಡೆವೆಲಪ್ಮೆಂಟ್ ಸರ್ವರ್ ಅನ್ನು ಚಾಲನೆ ಮಾಡಿ:

```bash
npm run dev
# ಅಥವಾ
yarn dev
# ಅಥವಾ
pnpm dev
# ಅಥವಾ
bun dev
```

ನೀವು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ [http://localhost:3000](http://localhost:3000) ತೆರೆಯಿರಿ ಫಲಿತಾಂಶವನ್ನು ನೋಡಲು.

ನೀವು ಪುಟವನ್ನು ಸಂಪಾದಿಸುವುದನ್ನು `app/page.js` ಫೈಲ್ ಅನ್ನು ಬದಲಾಯಿಸುವ ಮೂಲಕ ಪ್ರಾರಂಭಿಸಬಹುದು. ಫೈಲ್ ಅನ್ನು ಸಂಪಾದಿಸುವಂತೆ ಪುಟ ಸ್ವಯಂಚಾಲಿತವಾಗಿ تازهಗೊಳ್ಳುತ್ತದೆ.

ಈ ಪ್ರಾಜೆಕ್ಟ್ [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) ಅನ್ನು ಬಳಸಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ [Geist](https://vercel.com/font), Vercel ಗೆ ಹೊಸ ಫಾಂಟ್ ಕುಟುಂಬವನ್ನು ಅಕ串ಿಸುತ್ತದೆ ಮತ್ತು ಲೋಡ್ ಮಾಡುತ್ತದೆ.

## ಇನ್ನಷ್ಟು ಕಲಿಯಿರಿ

Next.js ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಲು, ಕೆಳಗಿನ ಸಂಪನ್ಮೂಲಗಳನ್ನು ನೋಡಿ:

- [Next.js ಪ್ರलेಖನ](https://nextjs.org/docs) - Next.js ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು API ಬಗ್ಗೆ ಕಲಿಯಿರಿ.
- [Next.js ಕಲಿಕೆ](https://nextjs.org/learn) - ಇಂಟರಾಕ್ಟಿವ್ Next.js ತರಬೇತಿ.

ನೀವು [Next.js GitHub ಸಂಗ್ರಹಾಲಯ](https://github.com/vercel/next.js) ಅನ್ನು ಪರಿಶೀಲಿಸಬಹುದು - ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗಳು ಮತ್ತು ಕೊಡುಗೆಗಳು ಸ್ವಾಗತ.

## Vercel ನಲ್ಲಿ ನಿಯೋಜಿಸು

ನಿಮ್ಮ Next.js ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು ನಿಯೋಜಿಸಲು ಸುಲಭ ಮಾರ್ಗವಾಗಿದೆ [Vercel ಪ್ಲಾಟ್‌ಫಾರ್ಮ್](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) ಅನ್ನು ಬಳಸುವುದು, ಅದು Next.js ರಚನಕಾರರಿಂದ ಬಂದಿದೆ.

ನಮ್ಮ [Next.js ನಿಯೋಜನೆ ದಸ್ತಾವೇಜು](https://nextjs.org/docs/app/building-your-application/deploying) ನೋಡಿ ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ನಿರಾಕರಣ**:
ಈ ದಾಖಲೆ ಅನ್ನು AI ಅನುವಾದ ಸೇವೆ [Co-op Translator](https://github.com/Azure/co-op-translator) ಬಳಸಿ ಅನುವಾದಿಸಲಾಗಿದೆ. ನಾವು ನಿಖರತೆಯನ್ನು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದರೂ, ಸ್ವಯಂಚಾಲಿತ ಅನುವಾದಗಳಲ್ಲಿ ತಪ್ಪುಗಳು ಅಥವಾ ಅಸತ್ಯತೆಗಳು ಇರಬಹುದು ಎಂಬುದನ್ನು ತಿಳಿದುಕೊಳ್ಳಿರಿ. ಮೂಲ ಭಾಷೆಯ ಡಾಕ್ಯುಮೆಂಟ್ ಅನ್ನು ಅಧಿಕೃತ ಮೂಲವಾಗಿ ಪರಿಗಣಿಸಬೇಕು. ಮಹತ್ವದ ಮಾಹಿತಿಗಾಗಿ ವೃತ್ತಿಪರ ಮಾನವ ಅನುವಾದವನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ. ಈ ಅನುವಾದ ಬಳಕೆಯಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ ತಪ್ಪು ಅರ್ಥಗರ್ಭಿತತೆಗಳಿಗೆ ನಾವು ಹೊಣೆಗಾರರಲ್ಲ.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->