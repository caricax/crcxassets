[pt-BR](#portugues) &middot; [en-US](#english) &middot; [es-ES](#espanol)

---

<h1 id="portugues">crcx-assets</h1>

<p>Caricax Information Technology &mdash; Biblioteca de Assets de Marca.</p>

<p>Componentes Angular standalone de identidade visual corporativa: logotipo e rodap&eacute; institucional.</p>

---

### Instala&ccedil;&atilde;o

```bash
npm install @caricax/branding
```

### Uso

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <crcx-brand
      logoSrc="assets/logo.png"
      fallbackLogoSrc="assets/fallback.ico"
    />
    <crcx-footer />
  `
})
export class AppComponent {}
```

Para configura&ccedil;&atilde;o global via inje&ccedil;&atilde;o de depend&ecirc;ncia:

```typescript
import { ApplicationConfig } from '@angular/core';
import { CARICAX_BRANDING_CONF } from '@caricax/branding';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: CARICAX_BRANDING_CONF,
      useValue: {
        companyName: 'Caricax IT',
        logoSrc: 'assets/logo.png'
      }
    }
  ]
};
```

---

### Componentes

**`<crcx-brand>`** &mdash; Exibe o logotipo com fallback autom&aacute;tico em caso de falha de carregamento. Aceita os par&acirc;metros `logoSrc`, `fallbackLogoSrc`, `alt` e `label`.

**`<crcx-footer>`** &mdash; Rodap&eacute; institucional completo: informa&ccedil;&otilde;es legais (LGPD/GDPR), links de privacidade, direitos do titular, copyright e localiza&ccedil;&atilde;o. Aceita configura&ccedil;&atilde;o via `@Input` ou `InjectionToken`.

### Atribui&ccedil;&atilde;o

Design por **avilatab**. &copy; Caricax Information Technology.

### Licen&ccedil;a

MIT &mdash; software livre para uso comercial e modifica&ccedil;&atilde;o. Consulte [LICENSE](./LICENSE).

---

<h1 id="english">crcx-assets</h1>

<p>Caricax Information Technology &mdash; Branding Assets Library.</p>

<p>Standalone Angular components for corporate visual identity: logo and institutional footer.</p>

---

### Installation

```bash
npm install @caricax/branding
```

### Usage

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <crcx-brand
      logoSrc="assets/logo.png"
      fallbackLogoSrc="assets/fallback.ico"
    />
    <crcx-footer />
  `
})
export class AppComponent {}
```

Global configuration via dependency injection:

```typescript
import { ApplicationConfig } from '@angular/core';
import { CARICAX_BRANDING_CONF } from '@caricax/branding';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: CARICAX_BRANDING_CONF,
      useValue: {
        companyName: 'Caricax IT',
        logoSrc: 'assets/logo.png'
      }
    }
  ]
};
```

---

### Components

**`<crcx-brand>`** &mdash; Displays the logo with automatic fallback on load failure. Accepts `logoSrc`, `fallbackLogoSrc`, `alt` and `label`.

**`<crcx-footer>`** &mdash; Complete institutional footer: legal information (LGPD/GDPR), privacy links, data subject rights, copyright and location. Configurable via `@Input` or `InjectionToken`.

### Credit

Design by **avilatab**. &copy; Caricax Information Technology.

### License

MIT &mdash; free software for commercial use and modification. See [LICENSE](./LICENSE).

---

<h1 id="espanol">crcx-assets</h1>

<p>Caricax Information Technology &mdash; Librer&iacute;a de Assets de Marca.</p>

<p>Componentes Angular standalone para identidad visual corporativa: logotipo y pie de p&aacute;gina institucional.</p>

---

### Instalaci&oacute;n

```bash
npm install @caricax/branding
```

### Uso

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <crcx-brand
      logoSrc="assets/logo.png"
      fallbackLogoSrc="assets/fallback.ico"
    />
    <crcx-footer />
  `
})
export class AppComponent {}
```

Configuraci&oacute;n global mediante inyecci&oacute;n de dependencias:

```typescript
import { ApplicationConfig } from '@angular/core';
import { CARICAX_BRANDING_CONF } from '@caricax/branding';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: CARICAX_BRANDING_CONF,
      useValue: {
        companyName: 'Caricax IT',
        logoSrc: 'assets/logo.png'
      }
    }
  ]
};
```

---

### Componentes

**`<crcx-brand>`** &mdash; Muestra el logotipo con fallback autom&aacute;tico en caso de error de carga. Acepta `logoSrc`, `fallbackLogoSrc`, `alt` y `label`.

**`<crcx-footer>`** &mdash; Pie de p&aacute;gina institucional completo: informaci&oacute;n legal (LGPD/GDPR), enlaces de privacidad, derechos del titular, copyright y ubicaci&oacute;n. Configurable mediante `@Input` o `InjectionToken`.

### Cr&eacute;dito

Dise&ntilde;o por **avilatab**. &copy; Caricax Information Technology.

### Licencia

MIT &mdash; software libre para uso comercial y modificaci&oacute;n. Consulte [LICENSE](./LICENSE).
