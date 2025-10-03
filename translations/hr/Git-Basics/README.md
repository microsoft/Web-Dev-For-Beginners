<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:59:45+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "hr"
}
-->
## Osnove GIT-a za početnike u web-razvoju👶

## Što je `Git`?
1. Git je distribuirani sustav za kontrolu verzija.
2. Cijela baza koda i povijest dostupni su na računalu svakog programera, što omogućuje jednostavno grananje i spajanje.
3. Koristi se kao sustav za kontrolu verzija (VCS) za praćenje promjena u datotekama na računalu.

* Distribuirana kontrola verzija
* Koordinira rad između više programera  
* Tko je napravio koje promjene i kada
* Povratak na prethodnu verziju u bilo kojem trenutku
* Lokalni i udaljeni repozitoriji

## KONCEPTI GIT-a
* Prati povijest koda
* Uzima "snimke" vaših datoteka
* Vi odlučujete kada ćete uzeti snimku tako što napravite "commit"
* Možete posjetiti bilo koju snimku u bilo kojem trenutku
* Možete pripremiti datoteke prije nego što ih commitate

### Razlika između Git-a i GitHub-a

| Git | GitHub |
| ------- | ----------- |
| Git je softver | GitHub je usluga u oblaku |
| Git je instaliran lokalno na sustavu | GitHub je hostiran na webu |
| To je alat naredbenog retka | To je grafičko sučelje |
| Git održava Linux | GitHub održava Microsoft |
| Fokusiran je na kontrolu verzija i dijeljenje koda | Fokusiran je na centralizirano hostanje izvornog koda |
| Git je licenciran kao open-source | GitHub uključuje besplatnu i plaćenu verziju |
| Git je objavljen 2005. | GitHub je objavljen 2008. |

## Instalacija GIT-a
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Preuzmi](http://git-scm.com/download/mac) za Mac
* [Preuzmi](http://git-scm.com/download/win) za Windows

### Koraci instalacije:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Zatim nastavite Dalje > Dalje > Dalje > <b>Instaliraj</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Nakon instalacije potrebno je konfigurirati Git pomoću git bash-a
1. `git config --global user.name 'VašeIme'`
2. `git config --global user.email 'VašEmail'`
___

## Git naredbe
___

### Dobivanje i kreiranje projekata

| Naredba | Opis |
| ------- | ----------- |
| `git init` | Inicijaliziraj lokalni Git repozitorij |
| `git clone ssh://git@github.com/[korisničko-ime]/[ime-repozitorija].git` | Kreiraj lokalnu kopiju udaljenog repozitorija |

### Osnovno snimanje

| Naredba | Opis |
| ------- | ----------- |
| `git status` | Provjeri status |
| `git add [ime-datoteke.txt]` | Dodaj datoteku u pripremnu zonu |
| `git add -A` | Dodaj sve nove i izmijenjene datoteke u pripremnu zonu |
| `git commit -m "[poruka commit-a]"` | Commitaj promjene |
| `git rm -r [ime-datoteke.txt]` | Ukloni datoteku (ili mapu) |
| `git push` | Pošalji na udaljeni repozitorij |
| `git pull` | Preuzmi najnovije promjene s udaljenog repozitorija |

### Grananje i spajanje

| Naredba | Opis |
| ------- | ----------- |
| `git branch` | Popis grana (zvjezdica označava trenutnu granu) |
| `git branch -a` | Popis svih grana (lokalnih i udaljenih) |
| `git branch [ime grane]` | Kreiraj novu granu |
| `git branch -D [ime grane]` | Obriši granu |
| `git push origin --delete [ime grane]` | Obriši udaljenu granu |
| `git checkout -b [ime grane]` | Kreiraj novu granu i prebaci se na nju |
| `git checkout -b [ime grane] origin/[ime grane]` | Kloniraj udaljenu granu i prebaci se na nju |
| `git branch -m [staro ime grane] [novo ime grane]` | Preimenuj lokalnu granu |
| `git checkout [ime grane]` | Prebaci se na granu |
| `git checkout -` | Prebaci se na zadnju korištenu granu |
| `git checkout -- [ime-datoteke.txt]` | Odbaci promjene u datoteci |
| `git merge [ime grane]` | Spoji granu s aktivnom granom |
| `git merge [izvorna grana] [ciljana grana]` | Spoji granu s ciljanom granom |
| `git stash` | Privremeno spremi promjene u radnom direktoriju |
| `git stash clear` | Ukloni sve privremeno spremljene unose |

### Dijeljenje i ažuriranje projekata

| Naredba | Opis |
| ------- | ----------- |
| `git push origin [ime grane]` | Pošalji granu na udaljeni repozitorij |
| `git push -u origin [ime grane]` | Pošalji promjene na udaljeni repozitorij (i zapamti granu) |
| `git push` | Pošalji promjene na udaljeni repozitorij (zapamćena grana) |
| `git push origin --delete [ime grane]` | Obriši udaljenu granu |
| `git pull` | Ažuriraj lokalni repozitorij na najnoviji commit |
| `git pull origin [ime grane]` | Preuzmi promjene s udaljenog repozitorija |
| `git remote add origin ssh://git@github.com/[korisničko-ime]/[ime-repozitorija].git` | Dodaj udaljeni repozitorij |
| `git remote set-url origin ssh://git@github.com/[korisničko-ime]/[ime-repozitorija].git` | Postavi URL za udaljeni repozitorij |

### Inspekcija i usporedba

| Naredba | Opis |
| ------- | ----------- |
| `git log` | Pregledaj promjene |
| `git log --summary` | Pregledaj promjene (detaljno) |
| `git log --oneline` | Pregledaj promjene (sažeto) |
| `git diff [izvorna grana] [ciljana grana]` | Pregledaj promjene prije spajanja |

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja mogu proizaći iz korištenja ovog prijevoda.