# crcx-assets

Caricax Information Technology -- Branding Assets Library.

Biblioteca Angular standalone de componentes de marca (logotipo e rodape) para o ecossistema Caricax.

---

## Instalacao

```bash
npm install @caricax/branding
```

## Uso

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

Para configuracao global:

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

## Testes

```bash
ng test --include='**/crcx-assets/**/*.spec.ts'
```

---

### Componentes

- **`<crcx-brand>`** -- Exibe o logotipo com fallback automatico em caso de erro de carregamento. Aceita os inputs `logoSrc`, `fallbackLogoSrc`, `alt` e `label`.

- **`<crcx-footer>`** -- Rodape institucional com informacoes legais (LGPD/GDPR), links de privacidade, copyright e localizacao. Aceita configuracao via `@Input` ou `InjectionToken`.

---

### Licenca

MIT -- software livre para uso comercial e modificacao. Consulte [LICENSE](./LICENSE).

---

### Atribuicao

- **Design:** avilatab
- **Desenvolvimento:** kernelpenguin
- **Organizacao:** Caricax Information Technology

---

## English

Standalone Angular library of branding components (logo and footer) for the Caricax ecosystem.

### Components

- **`<crcx-brand>`** -- Displays the logo with automatic fallback on load error.
- **`<crcx-footer>`** -- Institutional footer with legal information, privacy links, copyright, and location.

### License

MIT -- free software for commercial use and modification. See [LICENSE](./LICENSE).

### Credits

- **Design:** avilatab
- **Development:** kernelpenguin
- **Organization:** Caricax Information Technology

---

## Espanol

Libreria Angular standalone de componentes de marca (logotipo y pie de pagina) para el ecosistema Caricax.

### Componentes

- **`<crcx-brand>`** -- Muestra el logotipo con fallback automatico en caso de error de carga.
- **`<crcx-footer>`** -- Pie de pagina institucional con informacion legal, enlaces de privacidad, copyright y ubicacion.

### Licencia

MIT -- software libre para uso comercial y modificacion. Consulte [LICENSE](./LICENSE).

### Creditos

- **Diseno:** avilatab
- **Desarrollo:** kernelpenguin
- **Organizacion:** Caricax Information Technology
