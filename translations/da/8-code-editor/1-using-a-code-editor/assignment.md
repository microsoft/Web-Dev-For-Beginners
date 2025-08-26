<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2fcb983b8dbadadb1bc2e97f8c12dac5",
  "translation_date": "2025-08-26T22:29:41+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "da"
}
-->
# Opret en CV-hjemmeside ved hjælp af vscode.dev

_Hvor sejt ville det ikke være, hvis en rekrutterer bad om dit CV, og du sendte dem et link?_ 😎

## Mål

Efter denne opgave vil du lære at:

- Oprette en hjemmeside til at fremvise dit CV

### Forudsætninger

1. En GitHub-konto. Gå til [GitHub](https://github.com/) og opret en konto, hvis du ikke allerede har en.

## Trin

**Trin 1:** Opret et nyt GitHub-repository og giv det navnet `my-resume`

**Trin 2** Opret en `index.html`-fil i dit repository. Vi tilføjer mindst én fil direkte på github.com, da du ikke kan åbne et tomt repository på vscode.dev.

Klik på linket `creating a new file`, skriv navnet `index.html`, og vælg knappen `Commit new file`.

![Opret en ny fil på github.com](../../../../translated_images/new-file-github.com.c886796d800e8056561829a181be1382c5303da9d902d8b2dd82b68a4806e21f.da.png)

**Trin 3:** Åbn [VSCode.dev](https://vscode.dev) og vælg knappen `Open Remote Repository`.

Kopier URL'en til det repository, du lige har oprettet til din CV-hjemmeside, og indsæt det i inputfeltet:

_Erstat `your-username` med dit GitHub-brugernavn_

```
https://github.com/your-username/my-resume
```

✅ Hvis det lykkes, vil du se dit projekt og index.html-filen åbne i teksteditoren i browseren.

![Opret en ny fil](../../../../translated_images/project-on-vscode.dev.e79815a9a95ee7feac72ebe5c941c91279716be37c575dbdbf2f43bea2c7d8b6.da.png)

**Trin 4:** Åbn `index.html`-filen, indsæt koden nedenfor i dit kodeområde, og gem.

<details>
    <summary><b>HTML-kode, der styrer indholdet på din CV-hjemmeside.</b></summary>
    
        <html>

            <head>
                <link href="style.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                <title>Dit navn her!</title>
            </head>
            <body>
                <header id="header">
                    <!-- CV-header med dit navn og titel -->
                    <h1>Dit navn her!</h1>
                    <hr>
                    Din rolle!
                    <hr>
                </header>
                <main>
                    <article id="mainLeft">
                        <section>
                            <h2>KONTAKT</h2>
                            <!-- Kontaktinfo inkl. sociale medier -->
                            <p>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:username@domain.top-level domain">Skriv din e-mail her</a>
                            </p>
                            <p>
                                <i class="fab fa-github" aria-hidden="true"></i>
                                <a href="github.com/yourGitHubUsername">Skriv dit brugernavn her!</a>
                            </p>
                            <p>
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                                <a href="linkedin.com/yourLinkedInUsername">Skriv dit brugernavn her!</a>
                            </p>
                        </section>
                        <section>
                            <h2>KOMPETENCER</h2>
                            <!-- Dine kompetencer -->
                            <ul>
                                <li>Kompetence 1!</li>
                                <li>Kompetence 2!</li>
                                <li>Kompetence 3!</li>
                                <li>Kompetence 4!</li>
                            </ul>
                        </section>
                        <section>
                            <h2>UDDANNELSE</h2>
                            <!-- Din uddannelse -->
                            <h3>Skriv din uddannelse her!</h3>
                            <p>
                                Skriv din institution her!
                            </p>
                            <p>
                                Start - Slutdato
                            </p>
                        </section>            
                    </article>
                    <article id="mainRight">
                        <section>
                            <h2>OM MIG</h2>
                            <!-- Om dig -->
                            <p>Skriv en kort tekst om dig selv!</p>
                        </section>
                        <section>
                            <h2>ERHVERVSERFARING</h2>
                            <!-- Din erhvervserfaring -->
                            <h3>Jobtitel</h3>
                            <p>
                                Organisationens navn her | Startmåned – Slutmåned
                            </p>
                            <ul>
                                    <li>Opgave 1 - Skriv, hvad du gjorde!</li>
                                    <li>Opgave 2 - Skriv, hvad du gjorde!</li>
                                    <li>Skriv resultaterne/effekten af dit bidrag</li>
                                    
                            </ul>
                            <h3>Jobtitel 2</h3>
                            <p>
                                Organisationens navn her | Startmåned – Slutmåned
                            </p>
                            <ul>
                                    <li>Opgave 1 - Skriv, hvad du gjorde!</li>
                                    <li>Opgave 2 - Skriv, hvad du gjorde!</li>
                                    <li>Skriv resultaterne/effekten af dit bidrag</li>
                                    
                            </ul>
                        </section>
                    </article>
                </main>
            </body>
        </html>
</details>

Tilføj dine CV-oplysninger for at erstatte _pladsholderteksten_ i HTML-koden.

**Trin 5:** Hold musen over My-Resume-mappen, klik på ikonet `New File ...`, og opret 2 nye filer i dit projekt: `style.css` og `codeswing.json`.

**Trin 6:** Åbn `style.css`-filen, indsæt koden nedenfor, og gem.

<details>
        <summary><b>CSS-kode til at formatere layoutet på siden.</b></summary>
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 16px;
                max-width: 960px;
                margin: auto;
            }
            h1 {
                font-size: 3em;
                letter-spacing: .6em;
                padding-top: 1em;
                padding-bottom: 1em;
            }

            h2 {
                font-size: 1.5em;
                padding-bottom: 1em;
            }

            h3 {
                font-size: 1em;
                padding-bottom: 1em;
            }
            main { 
                display: grid;
                grid-template-columns: 40% 60%;
                margin-top: 3em;
            }
            header {
                text-align: center;
                margin: auto 2em;
            }

            section {
                margin: auto 1em 4em 2em;
            }

            i {
                margin-right: .5em;
            }

            p {
                margin: .2em auto
            }

            hr {
                border: none;
                background-color: lightgray;
                height: 1px;
            }

            h1, h2, h3 {
                font-weight: 100;
                margin-bottom: 0;
            }
            #mainLeft {
                border-right: 1px solid lightgray;
            }
            
</details>

**Trin 6:** Åbn `codeswing.json`-filen, indsæt koden nedenfor, og gem.

    {
    "scripts": [],
    "styles": []
    }

**Trin 7:** Installer `Codeswing-udvidelsen` for at visualisere CV-hjemmesiden i kodeområdet.

Klik på _`Extensions`_-ikonet på aktivitetslinjen, og skriv Codeswing. Klik enten på den _blå installeringsknap_ på den udvidede aktivitetslinje for at installere eller brug installeringsknappen, der vises i kodeområdet, når du vælger udvidelsen for at indlæse yderligere oplysninger. Umiddelbart efter installationen af udvidelsen, observer ændringerne i dit projekt i kodeområdet 😃

![Installer udvidelser](../../../../8-code-editor/images/install-extension.gif)

Dette er, hvad du vil se på din skærm, efter du har installeret udvidelsen.

![Codeswing-udvidelse i aktion](../../../../translated_images/after-codeswing-extension-pb.0ebddddcf73b550994947a9084e35e2836c713ae13839d49628e3c764c1cfe83.da.png)

Hvis du er tilfreds med de ændringer, du har lavet, skal du holde musen over `Changes`-mappen og klikke på `+`-knappen for at stage ændringerne.

Skriv en commit-besked _(En beskrivelse af de ændringer, du har lavet i projektet)_, og commit dine ændringer ved at klikke på `check`. Når du er færdig med at arbejde på dit projekt, skal du vælge hamburger-menuikonet øverst til venstre for at vende tilbage til repository'et på GitHub.

Tillykke 🎉 Du har lige oprettet din CV-hjemmeside ved hjælp af vscode.dev i få trin.

## 🚀 Udfordring

Åbn et fjernrepository, som du har tilladelse til at foretage ændringer i, og opdater nogle filer. Prøv derefter at oprette en ny branch med dine ændringer og lave en Pull Request.

## Gennemgang & Selvstudie

Læs mere om [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) og nogle af dets andre funktioner.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.