# Sovelluskehitys (Vue) harjtyö

Avoimen AMK:n opintojaksotarjonnan etsimispalvelu. 

Taustalla yksinkertaistettu REST-backend, joka simuloi oppilashallintajärjestelmästä haettavaa dataa. Backend Herokussa. Tämän harjoitustyön puitteissa data ei ole olennaista vaan Vuen käyttö.

Sivusto on kolmetasoinen: Koulutusalat, opintojaksot ja opintojakson tiedot

## Ominaisuuksista lyhyesti

- Vue Single File Components (vuecli)
- datan haku, suodatus, järjestäminen
- transitiot
- aikamuotojen suomalaistaminen (mixin)
- routerlinkit (=alisivuille generoituu omat url:t jakamista varten)
- responsiivisuus

### HUOM. Demosta puuttuvat ominaisuudet

Seuraavat ominaisuudet vaatisivat palvelinpään konfiguraatiomuutoksia, jotka menevät tämän kurssin aikataulun ulkopuolelle. **Eli seuraavat ominaisuudet toimivat vain jos Vue-projektin laittaa lokaaliin ajoon:**

 - Suoralla url:lla opintojakson tietojen avaaminen esim. (https://.../realizations/49/12154)
   - Mikäli dataa ei saada routerlinkin kautta, niin haetaan data api:sta

## Demo

https://tpt.kapsi.fi/vue

HUOM. Heroku-backendin heräämisessä saattaa mennä vajaa 10 sekuntia...