import { InjectionToken } from '@angular/core';
import { CaricaxBrandingConfig } from '../models/branding.models';

export const CARICAX_BRANDING_CONF = new InjectionToken<Readonly<CaricaxBrandingConfig>>(
    'CARICAX_BRANDING_CONF'
);

export const DEFAULT_CARICAX_BRANDING_CONF: Readonly<CaricaxBrandingConfig> = Object.freeze({
    companyName: 'CARICAX',
    years: buildYearRange(2024),
    locationLines: Object.freeze(['Carianos, Florianópolis, Santa Catarina,', 'Brasil.']),
    licenseLabel: 'Licença MIT',
    licenseHref: '/licenses/mit',
    legalTitle: 'PRIVACIDADE, LGPD E GDPR',
    legalLinks: Object.freeze([
        { label: 'Política de Privacidade', href: '/privacy-policy' },
        { label: 'Termos de Uso', href: '/terms-of-use' },
        { label: 'Política de Cookies', href: '/cookie-policy' },
        { label: 'LGPD / GDPR e Direitos do Titular', href: '/data-rights' },
        { label: 'Doc. Acessibilidade', href: '/accessibility' }
    ]),
    logoSrc: 'assets/logo/new-caricax-logo.png',
    logoFallbackSrc: 'assets/logo/new-caricax-logo.ico'
});

function buildYearRange(startYear: number, currentYear: number = new Date().getFullYear()): string {
    return currentYear <= startYear ? `${startYear}` : `${startYear}–${currentYear}`;
}