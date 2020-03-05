# vue-harjtyo-front

## Demo ajossa

Front on ajossa täällä: https://....

HUOM. Herokun backendin heräämisessä menee hetki...

## Lyhyt kuvaus

- Vuen testaamista Avoimen AMK:n opintotarjontaa koulutusaloittain/opintojaksoittain näyttämisessä.
- Projektia varten on tehty väliaikainen yksinkertaistettu nodejs/rest-backend, jossa simuloidaan haettavaa dataa. Backend on ajossa Herokussa.
- Kolmetasoinen sivusto: Koulutusalat, opintojaksot, opintojakso

### Ominaisuuksista lyhyesti

- Vue SFC (vuecli)
- routerlinkeillä liikkuminen, alisivuilla omat url:t jakamista varten
  - datan välitys ensisijaisesti routerlinkillä, toissijaisena datan haku api:sta jos sivun avaa suoralla linkillä
- dynaamiset listat
- opintojaksojen haku, järjestäminen, piilottaminen
- transitiot
- aikamuotojen suomalaistaminen (mixin)
- tarkemmin wikissä...

# VueCLI:n generoimat...

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
